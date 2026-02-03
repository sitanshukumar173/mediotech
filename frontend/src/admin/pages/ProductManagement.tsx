import { useEffect, useState } from 'react';
import {
  Folder,
  FolderOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  Plus,
  Trash2,
  Edit2,
} from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';

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
}

interface TreeNode {
  id: string;
  type: 'category' | 'product';
  name: string;
  data: Category | Product;
  children?: TreeNode[];
}

export default function ProductManagement() {
  const [treeData, setTreeData] = useState<TreeNode[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  // Modals
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Forms
  const [categoryName, setCategoryName] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState<string | null>(null);
  const [productCategoryId, setProductCategoryId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState({
    title: '',
    description: '',
    tags: [] as string[],
  });
  const [tagInput, setTagInput] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  // Fetch and build tree
  const buildTree = async () => {
    try {
      setLoading(true);
      const [catRes, prodRes] = await Promise.all([
        axiosInstance.get('/admin/category'),
        axiosInstance.get('/admin/product'),
      ]);

      const categories: Category[] = Array.isArray(catRes.data)
        ? catRes.data
        : catRes.data?.categories || [];

      const products: Product[] = Array.isArray(prodRes.data)
        ? prodRes.data
        : prodRes.data?.products || [];

      setAllCategories(categories);
      setExpandedIds(new Set(categories.map((c) => c._id)));

      const categoryMap = new Map<string, TreeNode>();
      const productsByCategory = new Map<string, Product[]>();

      products.forEach((p) => {
        const catId = typeof p.category === 'object' ? p.category._id : p.category;
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
      toast.error('Failed to load data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buildTree();
  }, []);

  // Toggle expand/collapse
  const toggleNode = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedIds(next);
  };

  const openCategoryModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setCategoryName(category.name);
      setParentCategoryId(getParentCategoryId(category));
    } else {
      setEditingCategory(null);
      setCategoryName('');
      setParentCategoryId(null);
    }
    setShowCategoryModal(true);
  };

  // Category operations
  const saveCategory = async () => {
    if (!categoryName.trim()) {
      toast.error('Category name required');
      return;
    }

    setLoading(true);
    try {
      if (editingCategory) {
        await axiosInstance.put(`/admin/category/${editingCategory._id}`, {
          name: categoryName,
          parentCategory: parentCategoryId,
        });
        toast.success('Category updated');
      } else {
        await axiosInstance.post('/admin/category', {
          name: categoryName,
          parentCategory: parentCategoryId,
        });
        toast.success('Category created');
      }

      setShowCategoryModal(false);
      setCategoryName('');
      setEditingCategory(null);
      setParentCategoryId(null);
      buildTree();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: string, name: string) => {
    if (!confirm(`Delete category "${name}"?`)) return;

    try {
      await axiosInstance.delete(`/admin/category/${id}`);
      toast.success('Category deleted');
      buildTree();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Delete failed');
    }
  };

  // Product operations
  const saveProduct = async (categoryId: string) => {
    if (!productForm.title.trim()) {
      toast.error('Product title required');
      return;
    }

    setLoading(true);
    setUploadProgress(0);
    try {
      const formData = new FormData();
      formData.append('title', productForm.title);
      formData.append('description', productForm.description);
      formData.append('category', categoryId);
      formData.append('tags', JSON.stringify(productForm.tags.map((t) => ({ name: t }))));

      imageFiles.forEach((file) => formData.append('images', file));

      const requestConfig = {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: { loaded: number; total?: number }) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total || 1)
          );
          setUploadProgress(percentCompleted);
        },
      };

      if (editingProduct) {
        await axiosInstance.put(`/admin/product/${editingProduct._id}`, formData, requestConfig);
        toast.success('Product updated');
      } else {
        await axiosInstance.post('/admin/product', formData, requestConfig);
        toast.success('Product created');
      }

      setShowProductModal(false);
      setProductForm({ title: '', description: '', tags: [] });
      setImageFiles([]);
      setTagInput('');
      setEditingProduct(null);
      setProductCategoryId(null);
      setUploadProgress(null);
      buildTree();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed');
      setUploadProgress(null);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string, title: string) => {
    if (!confirm(`Delete product "${title}"?`)) return;

    try {
      await axiosInstance.delete(`/admin/product/${id}`);
      toast.success('Product deleted');
      if (selectedProduct?._id === id) setSelectedProduct(null);
      buildTree();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Delete failed');
    }
  };

  const getIndentClass = (depth: number) => {
    if (depth <= 0) return 'pl-0';
    if (depth === 1) return 'pl-4';
    if (depth === 2) return 'pl-8';
    if (depth === 3) return 'pl-12';
    return 'pl-16';
  };

  const getCategoryId = (category: ProductCategory) =>
    typeof category === 'object' ? category._id : category;

  const getParentCategoryId = (category: Category) => {
    if (!category.parentCategory) return null;
    return typeof category.parentCategory === 'object'
      ? category.parentCategory._id
      : category.parentCategory;
  };

  const getCategoryPath = (categoryId: string) => {
    const categoryMap = new Map(allCategories.map((c) => [c._id, c]));
    const path: string[] = [];
    let currentId: string | null = categoryId;
    while (currentId) {
      const cat = categoryMap.get(currentId);
      if (!cat) break;
      path.unshift(cat.name);
      currentId = getParentCategoryId(cat);
    }
    return path;
  };

  const getCategoryDepth = (categoryId: string) => getCategoryPath(categoryId).length - 1;

  const getSelectedPath = () => {
    if (selectedProduct) {
      const categoryId = getCategoryId(selectedProduct.category);
      return [...getCategoryPath(categoryId), selectedProduct.title].join(' > ');
    }
    if (selectedCategoryId) {
      return getCategoryPath(selectedCategoryId).join(' > ');
    }
    return '';
  };

  // Render tree recursively
  const renderNode = (node: TreeNode, depth = 0) => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    if (node.type === 'category') {
      const cat = node.data as Category;
      return (
        <div key={node.id}>
          <div
            className={`flex items-center h-8 hover:bg-gray-100 group ${getIndentClass(depth)}`}
            onClick={() => {
              setSelectedCategoryId(cat._id);
              setSelectedProduct(null);
            }}
          >
            <div className="flex items-center flex-1 min-w-0 px-1">
              {hasChildren && (
                <button
                  onClick={() => toggleNode(node.id)}
                  className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              )}
              {!hasChildren && <div className="w-5" />}

              {isExpanded ? (
                <FolderOpen className="w-4 h-4 text-blue-500 flex-shrink-0 mx-1" />
              ) : (
                <Folder className="w-4 h-4 text-blue-500 flex-shrink-0 mx-1" />
              )}
              <span className="text-sm text-gray-800 truncate">{node.name}</span>
            </div>

            <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
              <button
                onClick={() => openCategoryModal(cat)}
                className="p-1 hover:bg-blue-100 rounded"
                title="Edit"
              >
                <Edit2 className="w-3.5 h-3.5 text-blue-600" />
              </button>
              <button
                onClick={() => deleteCategory(cat._id, cat.name)}
                className="p-1 hover:bg-red-100 rounded"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-600" />
              </button>
              <button
                onClick={() => {
                  setEditingCategory(null);
                  setCategoryName('');
                  setParentCategoryId(cat._id);
                  setShowCategoryModal(true);
                }}
                className="p-1 hover:bg-blue-100 rounded"
                title="Add subcategory"
              >
                <Folder className="w-3.5 h-3.5 text-blue-600" />
              </button>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setProductForm({ title: '', description: '', tags: [] });
                  setImageFiles([]);
                  setTagInput('');
                  setProductCategoryId(cat._id);
                  setShowProductModal(true);
                }}
                className="p-1 hover:bg-blue-100 rounded"
                title="Add product"
              >
                <Plus className="w-3.5 h-3.5 text-blue-600" />
              </button>
            </div>
          </div>

          {isExpanded && node.children && (
            <>
              {node.children.map((child) =>
                child.type === 'category'
                  ? renderNode(child, depth + 1)
                  : renderProduct(child as TreeNode & { data: Product }, depth + 1)
              )}
            </>
          )}
        </div>
      );
    }

    return null;
  };

  const renderProduct = (node: TreeNode, depth = 0) => {
    const prod = node.data as Product;
    return (
      <div
        key={node.id}
        onClick={() => {
          setSelectedProduct(prod);
          setSelectedCategoryId(null);
        }}
        className={`flex items-center h-7 hover:bg-blue-50 cursor-pointer group ${
          selectedProduct?._id === node.id ? 'bg-blue-100' : ''
        } ${getIndentClass(depth)}`}
      >
        <div className="flex items-center flex-1 min-w-0">
          <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mx-1" />
          <span className="text-sm text-gray-700 truncate">{node.name}</span>
        </div>

        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditingProduct(prod);
              setProductCategoryId(
                typeof prod.category === 'object' ? prod.category._id : prod.category
              );
              setProductForm({
                title: prod.title,
                description: prod.description,
                tags: prod.tags.map((t) => t.name),
              });
              setImageFiles([]);
              setShowProductModal(true);
            }}
            className="p-1 hover:bg-blue-100 rounded"
            title="Edit"
          >
            <Edit2 className="w-3.5 h-3.5 text-blue-600" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteProduct(prod._id, prod.title);
            }}
            className="p-1 hover:bg-red-100 rounded"
            title="Delete"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-600" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-80px)] flex gap-px bg-gray-200">
      {/* Explorer */}
      <div className="w-80 bg-white flex flex-col overflow-hidden">
        <div className="h-10 border-b border-gray-200 flex items-center px-3 gap-2 flex-shrink-0">
          <span className="text-xs font-semibold text-gray-600 uppercase">Explorer</span>
          <button
            onClick={() => openCategoryModal()}
            className="ml-auto p-1 hover:bg-gray-100 rounded text-blue-600"
            title="Add category"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-1 py-1">
          {treeData.length === 0 ? (
            <div className="text-xs text-gray-500 p-4">No categories</div>
          ) : (
            treeData.map((node) => renderNode(node, 0))
          )}
        </div>
      </div>

      {/* Details Panel */}
      <div className="flex-1 bg-white overflow-y-auto">
        <div
          className="border-b border-gray-200 px-4 py-2 text-xs text-gray-500"
          data-testid="breadcrumb"
        >
          {getSelectedPath() || 'Select a category or product'}
        </div>
        {selectedProduct ? (
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{selectedProduct.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingProduct(selectedProduct);
                    setProductCategoryId(
                      typeof selectedProduct.category === 'object'
                        ? selectedProduct.category._id
                        : selectedProduct.category
                    );
                    setProductForm({
                      title: selectedProduct.title,
                      description: selectedProduct.description,
                      tags: selectedProduct.tags.map((t) => t.name),
                    });
                    setImageFiles([]);
                    setShowProductModal(true);
                  }}
                  className="px-3 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(selectedProduct._id, selectedProduct.title)}
                  className="px-3 py-1.5 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>

            {selectedProduct.images?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Images</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProduct.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProduct.title} ${idx + 1}`}
                      className="w-full h-40 object-cover rounded border border-gray-200"
                    />
                  ))}
                </div>
              </div>
            )}

            {selectedProduct.tags?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            Select a product to view details
          </div>
        )}
      </div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h3 className="text-lg font-semibold mb-4">
              {editingCategory ? 'Rename Category' : 'New Category'}
            </h3>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && saveCategory()}
              placeholder="Category name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <div className="mt-3">
              <label htmlFor="parentCategory" className="block text-sm font-medium text-gray-700 mb-2">
                Parent Category (Optional)
              </label>
              <select
                id="parentCategory"
                value={parentCategoryId || ''}
                onChange={(e) => setParentCategoryId(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">None (Root Category)</option>
                {allCategories
                  .filter((cat) => cat._id !== editingCategory?._id)
                  .map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setCategoryName('');
                  setEditingCategory(null);
                  setParentCategoryId(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={saveCategory}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl my-8">
            <h3 className="text-lg font-semibold mb-4">
              {editingProduct ? 'Edit Product' : 'New Product'}
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  id="productCategory"
                  value={productCategoryId || ''}
                  onChange={(e) => setProductCategoryId(e.target.value || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  {allCategories
                    .slice()
                    .sort((a, b) =>
                      getCategoryPath(a._id).join(' > ').localeCompare(getCategoryPath(b._id).join(' > '))
                    )
                    .map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {'— '.repeat(getCategoryDepth(cat._id))}{cat.name}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="productTitle" className="block text-sm font-medium mb-1">Title</label>
                <input
                  id="productTitle"
                  type="text"
                  value={productForm.title}
                  onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                  placeholder="Product title"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="productDescription" className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  id="productDescription"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  rows={3}
                  placeholder="Product description"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="productTags" className="block text-sm font-medium mb-1">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input
                    id="productTags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (tagInput.trim() && !productForm.tags.includes(tagInput.trim())) {
                          setProductForm({
                            ...productForm,
                            tags: [...productForm.tags, tagInput.trim()],
                          });
                          setTagInput('');
                        }
                      }
                    }}
                    placeholder="Type tag and press Enter"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => {
                      if (tagInput.trim() && !productForm.tags.includes(tagInput.trim())) {
                        setProductForm({
                          ...productForm,
                          tags: [...productForm.tags, tagInput.trim()],
                        });
                        setTagInput('');
                      }
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
                {productForm.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {productForm.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full flex items-center gap-1"
                      >
                        {tag}
                        <button
                          onClick={() =>
                            setProductForm({
                              ...productForm,
                              tags: productForm.tags.filter((t) => t !== tag),
                            })
                          }
                          aria-label={`Remove tag ${tag}`}
                          title={`Remove tag ${tag}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="productImages" className="block text-sm font-medium mb-1">Images</label>
                <input
                  id="productImages"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setImageFiles(files);
                  }}
                  title="Product images"
                  className="w-full text-sm"
                />
                {imageFiles.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {imageFiles.map((file, idx) => (
                      <div key={idx} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${idx}`}
                          className="w-20 h-20 object-cover rounded border"
                        />
                        <button
                          onClick={() => setImageFiles(imageFiles.filter((_, i) => i !== idx))}
                          aria-label={`Remove image ${idx + 1}`}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {uploadProgress !== null && (
              <div className="mt-4">
                <div className="text-xs text-gray-600 mb-1">
                  Uploading... {uploadProgress}%
                </div>
                <progress
                  value={uploadProgress}
                  max={100}
                  className="w-full h-2"
                />
              </div>
            )}

            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  setShowProductModal(false);
                  setProductForm({ title: '', description: '', tags: [] });
                  setImageFiles([]);
                  setEditingProduct(null);
                  setTagInput('');
                  setProductCategoryId(null);
                  setUploadProgress(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!productCategoryId) {
                    toast.error('Please select a category first');
                    return;
                  }

                  saveProduct(productCategoryId);
                }}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
