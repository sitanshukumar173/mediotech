import { useState, useEffect } from 'react';
import { ChevronDown, X, Eye, Tag, Loader, Package2 } from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';
import { useDemoRequest } from '../../context/DemoRequestContext';

interface Category {
  _id: string;
  name: string;
  parentCategory: string | { _id: string; name?: string } | null;
}

type ProductCategory = string | { _id: string; name?: string };

interface Product {
  _id: string;
  title: string;
  description: string;
  images: string[];
  tags: { name: string }[];
  category: ProductCategory;
  createdAt: string;
}

interface TreeNode {
  id: string;
  type: 'category' | 'product';
  name: string;
  data: Category | Product;
  children?: TreeNode[];
}

export default function Products() {
  const { openDemoRequest } = useDemoRequest();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [treeData, setTreeData] = useState<TreeNode[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Filters and sorting
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'name-asc' | 'name-desc'>('date-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Detail view
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Loading
  const [loading, setLoading] = useState(true);

  // Helper functions
  const getParentCategoryId = (category: Category): string | null => {
    if (!category.parentCategory) return null;
    return typeof category.parentCategory === 'object' ? category.parentCategory._id : category.parentCategory;
  };

  const getCategoryId = (category: ProductCategory): string => {
    return typeof category === 'object' ? category._id : category;
  };

  const getCategoryPath = (categoryId: string, categories: Category[]): string => {
    const paths: string[] = [];
    let currentId: string | null = categoryId;

    while (currentId) {
      const cat = categories.find((c) => c._id === currentId);
      if (!cat) break;
      paths.unshift(cat.name);
      currentId = getParentCategoryId(cat);
    }

    return paths.join(' > ');
  };

  const buildTree = async () => {
    try {
      setLoading(true);
      const [catRes, prodRes] = await Promise.all([
        axiosInstance.get('/admin/category'),
        axiosInstance.get('/admin/product'),
      ]);

      const categories: Category[] = Array.isArray(catRes.data) ? catRes.data : catRes.data?.categories || [];
      const products: Product[] = Array.isArray(prodRes.data) ? prodRes.data : prodRes.data?.products || [];

      setAllProducts(products);
      setAllCategories(categories);
      setExpandedIds(new Set(categories.map((c) => c._id)));

      // Build tree structure
      const categoryMap = new Map<string, TreeNode>();
      const productsByCategory = new Map<string, Product[]>();

      products.forEach((p) => {
        const catId = getCategoryId(p.category);
        if (!productsByCategory.has(catId)) {
          productsByCategory.set(catId, []);
        }
        productsByCategory.get(catId)!.push(p);
      });

      categories.forEach((cat) => {
        const node: TreeNode = {
          id: cat._id,
          type: 'category',
          name: cat.name,
          data: cat,
          children: [],
        };

        const categoryProducts = productsByCategory.get(cat._id) || [];
        node.children = categoryProducts.map((p) => ({
          id: p._id,
          type: 'product',
          name: p.title,
          data: p,
          children: [],
        }));

        categoryMap.set(cat._id, node);
      });

      const roots: TreeNode[] = [];
      categories.forEach((cat) => {
        const node = categoryMap.get(cat._id)!;
        const parentId = getParentCategoryId(cat);
        if (!parentId) {
          roots.push(node);
        } else {
          const parent = categoryMap.get(parentId);
          if (parent) {
            if (!parent.children) parent.children = [];
            parent.children.push(node);
          } else {
            roots.push(node);
          }
        }
      });

      setTreeData(roots);
    } catch (error) {
      toast.error('Failed to load products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buildTree();
  }, []);

  const uniqueTags = Array.from(
    new Set(
      allProducts.flatMap((product) =>
        product.tags && product.tags.length > 0 ? product.tags.map((t) => t.name) : []
      )
    )
  ).sort((a, b) => a.localeCompare(b));

  // Filter and sort products
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategoryId) {
      const productCatId = getCategoryId(product.category);
      if (productCatId !== selectedCategoryId) return false;
    }

    if (selectedTag) {
      const hasTag = product.tags?.some((t) => t.name === selectedTag);
      if (!hasTag) return false;
    }

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      const inTitle = product.title?.toLowerCase().includes(term) || false;
      const inDesc = product.description?.toLowerCase().includes(term) || false;
      const inTags = product.tags?.some((t) => t.name.toLowerCase().includes(term)) || false;
      if (!inTitle && !inDesc && !inTags) return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'date-desc') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (sortBy === 'date-asc') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
    if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
    return 0;
  });

  // Paginate
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const toggleCategory = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedIds(next);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(selectedCategoryId === categoryId ? null : categoryId);
    setSelectedTag(null);
    setCurrentPage(1);
  };

  const handleProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const scrollToProduct = (productId: string) => {
    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      productElement.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-50');
      setTimeout(() => {
        productElement.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-50');
      }, 2000);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderCategoryNode = (node: TreeNode, depth: number = 0) => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    if (node.type === 'product') {
      const product = node.data as Product;
      return (
        <button
          key={node.id}
          onClick={() => scrollToProduct(product._id)}
          className="w-full text-left px-3 py-2 rounded-lg text-[12px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200 truncate flex items-center gap-2"
          style={{ paddingLeft: `${depth * 12 + 10}px` }}
          title={product.title}
        >
          <Package2 size={14} className="flex-shrink-0" />
          {product.title}
        </button>
      );
    }

    return (
      <div key={node.id}>
        <button
          onClick={() => {
            toggleCategory(node.id);
            handleCategorySelect(node.id);
          }}
          className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all border ${
            selectedCategoryId === node.id
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'hover:bg-blue-50 text-gray-700 border-transparent'
          }`}
          style={{ paddingLeft: `${depth * 12 + 10}px` }}
        >
          <span className="font-semibold text-[13px] truncate">{node.name}</span>
          {hasChildren && (
            <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
          )}
        </button>

        {isExpanded && hasChildren && (
          <div className="space-y-1 mt-1">
            {node.children!.map((child) => renderCategoryNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-14 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-12 h-12 text-blue-600 animate-spin" />
          <p className="text-gray-600 font-semibold">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-14 md:pb-16 lg:pb-20 xl:pb-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 md:w-[500px] lg:w-[600px] h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 relative z-10">
        {/* Filter Bar */}
        <div className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[20px] md:rounded-[24px] p-4 md:p-5 lg:p-6 mb-6 md:mb-7 lg:mb-8 shadow-lg">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-2 text-[12px] md:text-[13px] text-gray-600">
                <span className="font-semibold text-gray-900">Category:</span>
                <span className="truncate">
                  {selectedCategoryId
                    ? getCategoryPath(selectedCategoryId, allCategories)
                    : 'All Categories'}
                </span>
              </div>
              {selectedCategoryId && (
                <button
                  onClick={() => {
                    setSelectedCategoryId(null);
                    setCurrentPage(1);
                  }}
                  className="text-[11px] md:text-[12px] font-semibold text-blue-600 hover:text-blue-700"
                >
                  Clear Category
                </button>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row md:items-center md:gap-2 flex-1">
                <input
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search products, tags, or description..."
                  className="px-3 md:px-4 py-2 md:py-2.5 bg-white border-2 border-gray-200 rounded-[10px] text-[12px] md:text-[13px] focus:outline-none focus:border-blue-500 transition-all w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[12px] md:text-[13px] text-gray-900">Sort:</span>
                <select
                  aria-label="Sort products"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as any);
                    setCurrentPage(1);
                  }}
                  className="px-3 md:px-4 py-2 md:py-2.5 bg-white border-2 border-gray-200 rounded-[10px] text-[12px] md:text-[13px] focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="date-desc">Latest (New to Old)</option>
                  <option value="date-asc">Oldest (Old to New)</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                </select>
              </div>

              <div className="text-[11px] md:text-[12px] text-gray-600">
                <span className="font-bold text-gray-900">{sortedProducts.length}</span> Products
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-[12px] text-gray-700">Tags:</span>
              <button
                onClick={() => {
                  setSelectedTag(null);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                  !selectedTag
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                }`}
              >
                All
              </button>
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] 2xl:grid-cols-[300px_1fr] gap-5 md:gap-6 lg:gap-7">
          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-xl border-2 border-white/80 rounded-[20px] md:rounded-[24px] p-4 md:p-5 lg:p-6 shadow-lg sticky top-24 md:top-28 lg:top-32">
              <div className="flex items-center justify-between mb-4 md:mb-5">
                <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">Categories</h3>
                {selectedCategoryId && (
                  <button
                    onClick={() => {
                      setSelectedCategoryId(null);
                      setCurrentPage(1);
                    }}
                    className="text-[11px] md:text-[12px] font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {treeData.map((node) => renderCategoryNode(node))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-blue-50 text-[11px] text-blue-700 font-semibold">
                Tip: Click any category to filter products.
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
                  <div
                    key={product._id}
                    id={`product-${product._id}`}
                    className="group bg-white/80 backdrop-blur-xl border-2 border-white/90 rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]"
                  >
                    {/* Product Image */}
                    <div className="w-full h-44 md:h-48 lg:h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                      {product.images && product.images.length > 0 ? (
                        <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      ) : (
                        <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                          <Tag className="w-8 md:w-10 h-8 md:h-10 text-blue-400" />
                        </div>
                      )}
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 text-[10px] font-semibold rounded-full text-gray-600 shadow">
                        {formatDate(product.createdAt)}
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-4 md:p-5 lg:p-6 space-y-3">
                      {/* Tags */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {product.tags && product.tags.length > 0 ? (
                          product.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-semibold border border-blue-100">
                              {tag.name}
                            </span>
                          ))
                        ) : (
                          <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-semibold">
                            No tags
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-gray-900 text-[15px] md:text-[16px] line-clamp-2">
                        {product.title}
                      </h4>

                      {/* Description Overview */}
                      <p className="text-[12px] md:text-[13px] text-gray-600 line-clamp-2 min-h-[2.4em]">
                        {product.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                        <button
                          onClick={() => openDemoRequest(product.title)}
                          className="flex-1 px-3 md:px-4 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-[10px] text-[12px] font-bold hover:bg-blue-50 hover:scale-[1.02] transition-all"
                        >
                          Request Demo
                        </button>
                        <button
                          onClick={() => handleProductDetail(product)}
                          className="flex-1 px-3 md:px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-[10px] text-[12px] font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3 md:w-4 h-3 md:h-4" />
                          Full View
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-12">
                  <p className="text-gray-500 font-semibold text-[14px] md:text-[15px]">No products found in this category</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-10 md:mt-12 overflow-x-auto pb-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-white border-2 border-gray-200 rounded-[8px] md:rounded-[10px] font-semibold text-[11px] md:text-[12px] text-gray-700 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) =>
                  ((() => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 md:w-9 h-8 md:h-9 rounded-[8px] md:rounded-[10px] font-bold text-[11px] md:text-[12px] transition-all flex items-center justify-center ${
                          currentPage === page
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })())
                )}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-white border-2 border-gray-200 rounded-[8px] md:rounded-[10px] font-semibold text-[11px] md:text-[12px] text-gray-700 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showDetailModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[20px] md:rounded-[28px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-gray-100 p-4 md:p-6 flex items-center justify-between rounded-t-[20px] md:rounded-t-[28px]">
              <h2 className="font-bold text-[18px] md:text-[22px] text-gray-900 truncate flex-1">{selectedProduct.title}</h2>
              <button
                onClick={() => {
                  setShowDetailModal(false);
                  setSelectedProduct(null);
                }}
                className="flex-shrink-0 p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-all ml-2"
              >
                <X className="w-5 md:w-6 h-5 md:h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 space-y-6">
              {/* Images Gallery */}
              {selectedProduct.images && selectedProduct.images.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900">Product Images</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProduct.images.map((image, idx) => (
                      <div key={idx} className="rounded-[12px] overflow-hidden bg-gray-100 aspect-square">
                        <img src={image} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900 mb-2">Description</h3>
                  <p className="text-[12px] md:text-[14px] text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                </div>

                {/* Tags */}
                {selectedProduct.tags && selectedProduct.tags.length > 0 && (
                  <div>
                    <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 text-blue-700 rounded-full text-[11px] md:text-[12px] font-semibold">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Date */}
                <div>
                  <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900 mb-2">Added On</h3>
                  <p className="text-[12px] md:text-[14px] text-gray-600">{formatDate(selectedProduct.createdAt)}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    openDemoRequest(selectedProduct.title);
                    setShowDetailModal(false);
                  }}
                  className="flex-1 px-4 md:px-6 py-2.5 md:py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-[10px] md:rounded-[12px] text-[12px] md:text-[14px] font-bold hover:bg-blue-50 hover:scale-[1.02] transition-all"
                >
                  Request Demo
                </button>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-[10px] md:rounded-[12px] text-[12px] md:text-[14px] font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
