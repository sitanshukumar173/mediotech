import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Package, Package2, Heart, BookOpen, FileText, Video, GraduationCap, Shield, Wrench, Headphones, Building2, Users, Globe, Award, Target, Menu, X, Loader } from 'lucide-react';
import axiosInstance from '../../api/axios';
// Use a direct URL string for external images
const logo = "https://res.cloudinary.com/dlpluej6w/image/upload/v1766543013/Image_Mediotech_fv7zjv.svg";

interface Category {
  _id: string;
  name: string;
  parentCategory: string | { _id: string; name?: string } | null;
}

interface Product {
  _id: string;
  title: string;
  category: string | { _id: string; name?: string } | null;
}

interface TreeNode {
  id: string;
  type: 'category' | 'product';
  name: string;
  children?: TreeNode[];
  data?: Category | Product;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [productTree, setProductTree] = useState<TreeNode[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

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
  };

  useEffect(() => {
    const buildProductTree = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          axiosInstance.get('/admin/category'),
          axiosInstance.get('/admin/product'),
        ]);

        const categories: Category[] = Array.isArray(catRes.data) ? catRes.data : catRes.data?.categories || [];
        const products: Product[] = Array.isArray(prodRes.data) ? prodRes.data : prodRes.data?.products || [];

        const categoryMap = new Map<string, TreeNode>();
        categories.forEach((cat) => {
          categoryMap.set(cat._id, {
            id: cat._id,
            type: 'category',
            name: cat.name,
            children: [],
            data: cat,
          });
        });

        const roots: TreeNode[] = [];
        categories.forEach((cat) => {
          const node = categoryMap.get(cat._id)!;
          const parentId = typeof cat.parentCategory === 'object' ? cat.parentCategory?._id : cat.parentCategory;

          if (!parentId) {
            roots.push(node);
          } else {
            const parent = categoryMap.get(parentId);
            if (parent) {
              parent.children?.push(node);
            } else {
              roots.push(node);
            }
          }
        });

        products.forEach((product) => {
          const categoryId = typeof product.category === 'object' ? product.category?._id : product.category;
          const parent = categoryId ? categoryMap.get(categoryId) : undefined;
          const productNode: TreeNode = {
            id: product._id,
            type: 'product',
            name: product.title,
            data: product,
          };

          if (parent) {
            parent.children = parent.children || [];
            parent.children.push(productNode);
          } else {
            roots.push(productNode);
          }
        });

        setProductTree(roots);
      } catch (error) {
        console.error('Failed to load products:', error);
        setProductTree([]);
      } finally {
        setLoadingProducts(false);
      }
    };

    buildProductTree();
  }, []);

  const renderProductTree = (node: TreeNode, depth: number = 0) => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    if (node.type === 'product') {
      return (
        <Link
          key={node.id}
          to="/products"
          className="w-full text-left px-3 py-2 rounded-lg text-[12px] font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200 truncate flex items-center gap-2"
          style={{ paddingLeft: `${depth * 12 + 10}px` }}
          title={node.name}
        >
          <Package2 size={14} className="flex-shrink-0" />
          {node.name}
        </Link>
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
            {node.children!.map((child) => renderProductTree(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const resourcesMenu = {
    'Documentation': [
      { icon: BookOpen, label: 'Product Manuals', desc: 'Complete user guides' },
      { icon: FileText, label: 'Technical Specs', desc: 'Detailed specifications' },
      { icon: Shield, label: 'Compliance Docs', desc: 'Regulatory certificates' },
    ],
    'Training': [
      { icon: Video, label: 'Video Tutorials', desc: 'Step-by-step training' },
      { icon: GraduationCap, label: 'Training Programs', desc: 'Professional certification' },
      { icon: BookOpen, label: 'Knowledge Base', desc: 'Comprehensive guides' },
    ],
    'Support': [
      { icon: Headphones, label: '24/7 Support', desc: 'Round-the-clock assistance' },
      { icon: Wrench, label: 'Maintenance Services', desc: 'Preventive maintenance' },
      { icon: Globe, label: 'Service Network', desc: 'Pan-India coverage' },
    ],
  };

  const aboutMenu = {
    'Company': [
      { icon: Building2, label: 'About Mediotech', desc: 'Our story and mission', link: '/about' },
      { icon: Target, label: 'Mission & Vision', desc: 'Our purpose and goals', link: '/about#mission' },
      { icon: Heart, label: 'Our Values', desc: 'What we stand for', link: '/about#values' },
    ],
    'People': [
      { icon: Users, label: 'Leadership Team', desc: 'Meet our leaders', link: '/about#leaders' },
      { icon: Users, label: 'Our Team', desc: 'Dedicated professionals', link: '/about#team' },
      { icon: Award, label: 'Certifications', desc: 'ISO & quality standards', link: '/about#certifications' },
    ],
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/10' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity z-50">
            <div className={`overflow-hidden shadow-md transition-all duration-300 ${
              isScrolled ? 'w-8 h-8 md:w-9 md:h-9 rounded-lg' : 'w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl'
            }`}>
              <img src={logo} alt="Mediotech" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className={`font-bold text-gray-900 block leading-none transition-all duration-300 ${
                isScrolled ? 'text-[16px] md:text-[18px]' : 'text-[18px] md:text-[21px] mb-0 md:mb-0.5'
              }`}>
                Mediotech
              </span>
              {!isScrolled && (
                <span className="hidden md:block text-[10px] text-gray-500 font-semibold uppercase tracking-[0.1em]">
                  Medical Solutions
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {/* Home Link */}
            <Link to="/" className={`font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
              isScrolled ? 'text-[13px]' : 'text-[15px]'
            }`}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
                isScrolled ? 'text-[13px]' : 'text-[15px]'
              }`}>
                Products
                <ChevronDown className={`transition-transform duration-300 ${
                  activeDropdown === 'products' ? 'rotate-180' : ''
                } ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
              </button>

              {/* Mega Menu */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                  <div className="w-[520px] bg-white rounded-[24px] shadow-2xl border-2 border-gray-100 p-4">
                    <div className="flex items-center justify-between px-2 pb-3">
                      <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                        Product Categories
                      </h3>
                      <Link
                        to="/products"
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-700 transition"
                      >
                        Browse All
                      </Link>
                    </div>

                    <div className="max-h-[420px] overflow-y-auto pr-2 space-y-1">
                      {loadingProducts ? (
                        <div className="flex items-center justify-center py-8">
                          <Loader className="w-5 h-5 text-blue-600 animate-spin" />
                        </div>
                      ) : productTree.length > 0 ? (
                        productTree.map((node) => renderProductTree(node))
                      ) : (
                        <p className="text-gray-600 text-sm px-2">No products available</p>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        to="/products"
                        className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        <Package className="w-4 h-4" />
                        View All Products
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
                isScrolled ? 'text-[13px]' : 'text-[14px]'
              }`}>
                Resources
                <ChevronDown className={`transition-transform duration-300 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                } ${isScrolled ? 'w-4 h-4' : 'w-4 h-4'}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                  <div className="w-[800px] bg-white rounded-[28px] shadow-2xl border-2 border-gray-100 p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(resourcesMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                            {category}
                          </h3>
                          <div className="space-y-1">
                            {items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <a
                                  key={item.label}
                                  href="#"
                                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all group"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[14px] font-bold text-gray-900 mb-0.5">
                                      {item.label}
                                    </div>
                                    <div className="text-[12px] text-gray-600">
                                      {item.desc}
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
                isScrolled ? 'text-[13px]' : 'text-[15px]'
              }`}>
                About
                <ChevronDown className={`transition-transform duration-300 ${
                  activeDropdown === 'about' ? 'rotate-180' : ''
                } ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                  <div className="w-[550px] bg-white rounded-[28px] shadow-2xl border-2 border-gray-100 p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {Object.entries(aboutMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">
                            {category}
                          </h3>
                          <div className="space-y-1">
                            {items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.label}
                                  to={item.link}
                                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-all group"
                                >
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[14px] font-bold text-gray-900 mb-0.5">
                                      {item.label}
                                    </div>
                                    <div className="text-[12px] text-gray-600">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              to="/contact"
              className={`flex items-center gap-2 font-semibold text-gray-700 hover:text-[#2563EB] transition-all ${
                isScrolled ? 'text-[13px]' : 'text-[15px]'
              }`}
            >
              <Phone className={isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
              <span className="hidden 2xl:inline">Contact</span>
            </Link>
            <div className="w-px h-5 bg-gray-300"></div>
            <button className={`bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white font-semibold shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5 transition-all whitespace-nowrap ${
              isScrolled ? 'px-4 2xl:px-5 py-2 text-[11px] 2xl:text-[12px] rounded-full' : 'px-5 2xl:px-7 py-2.5 2xl:py-3 text-[12px] 2xl:text-[14px] rounded-xl 2xl:rounded-2xl'
            }`}>
              Mediotech Rentals
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="fixed top-[64px] md:top-[72px] left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="px-5 md:px-8 py-6 space-y-1">
              {/* Home */}
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 text-[15px] font-semibold text-gray-900 hover:bg-blue-50 rounded-xl transition-colors"
              >
                Home
              </Link>

              {/* Products */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('products')}
                  className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-gray-900 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  Products
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'products' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {loadingProducts ? (
                      <div className="flex items-center gap-2 py-2">
                        <Loader className="w-4 h-4 text-blue-600 animate-spin" />
                        <span className="text-sm text-gray-600">Loading...</span>
                      </div>
                    ) : productTree.length > 0 ? (
                      <div className="space-y-2">
                        {productTree.map((node) => renderProductTree(node))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600">No products available</p>
                    )}
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-gray-900 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'resources' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {Object.entries(resourcesMenu).map(([category, items]) => (
                      <div key={category} className="space-y-1">
                        <div className="px-4 py-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {category}
                        </div>
                        {items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href="#"
                              onClick={toggleMobileMenu}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-[13px] font-semibold text-gray-900">{item.label}</div>
                                <div className="text-[11px] text-gray-600">{item.desc}</div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold text-gray-900 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  About
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === 'about' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {Object.entries(aboutMenu).map(([category, items]) => (
                      <div key={category} className="space-y-1">
                        <div className="px-4 py-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {category}
                        </div>
                        {items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              to={item.link}
                              onClick={toggleMobileMenu}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-[13px] font-semibold text-gray-900">{item.label}</div>
                                <div className="text-[11px] text-gray-600">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="flex items-center gap-2 px-4 py-3 text-[15px] font-semibold text-gray-900 hover:bg-blue-50 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact
              </Link>

              {/* Rentals Button */}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Mediotech Rentals
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}