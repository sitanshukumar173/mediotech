import { useState } from 'react';
import { ChevronDown, SlidersHorizontal, Grid3x3, X, Eye } from 'lucide-react';

// Dummy product data structure
const categories = {
  'ICU Equipment': {
    'Ventilation Systems': {
      'ICU Ventilators': ['Model V-100', 'Model V-200 Pro', 'Model V-300 Elite'],
      'CPAP/BiPAP': ['CPAP Basic', 'BiPAP Advanced', 'BiPAP Pro Plus'],
      'Oxygen Therapy': ['O2 Concentrator 5L', 'O2 Concentrator 10L', 'Portable O2 Unit'],
    },
    'Monitoring Equipment': {
      'Patient Monitors': ['Monitor PM-12', 'Monitor PM-15 Touch', 'Monitor PM-17 Advanced'],
      'ECG Machines': ['ECG-3 Channel', 'ECG-6 Channel', 'ECG-12 Channel'],
      'Vital Signs Monitors': ['VS Basic', 'VS Pro', 'VS Elite Multi-parameter'],
    },
    'Infusion Systems': {
      'Infusion Pumps': ['IP-Single Channel', 'IP-Dual Channel', 'IP-Smart Series'],
      'Syringe Pumps': ['SP-10ml', 'SP-50ml', 'SP-Multi Syringe'],
      'IV Accessories': ['IV Stand Basic', 'IV Stand Advanced', 'IV Pole Mobile'],
    },
  },
  'Anesthesia Equipment': {
    'Anesthesia Machines': {
      'Basic Systems': ['Anesthesia A-100', 'Anesthesia A-200'],
      'Advanced Systems': ['Anesthesia A-300 Pro', 'Anesthesia A-400 Elite'],
      'Portable Units': ['Portable Anesthesia AP-1', 'Portable Anesthesia AP-2'],
    },
    'Vaporizers': {
      'Sevoflurane': ['Sevo Vaporizer V1', 'Sevo Vaporizer V2'],
      'Isoflurane': ['Iso Vaporizer I1', 'Iso Vaporizer I2'],
      'Desflurane': ['Des Vaporizer D1', 'Des Vaporizer D2'],
    },
  },
  'Patient Monitoring': {
    'Cardiac Monitoring': {
      'ECG Monitors': ['ECG Monitor C-5', 'ECG Monitor C-8', 'ECG Monitor C-12'],
      'Holter Monitors': ['Holter 24hr', 'Holter 48hr', 'Holter 7-day'],
      'Defibrillators': ['Defi Manual M1', 'Defi AED A1', 'Defi Biphasic B1'],
    },
    'Multi-parameter Monitors': {
      'Bedside Monitors': ['Bedside BM-12', 'Bedside BM-15', 'Bedside BM-17'],
      'Portable Monitors': ['Portable PM-8', 'Portable PM-10', 'Portable PM-12'],
      'Central Monitoring': ['Central CMS-10', 'Central CMS-20', 'Central CMS-50'],
    },
  },
  'Diagnostic Equipment': {
    'Ultrasound Systems': {
      'Portable Ultrasound': ['US Portable P1', 'US Portable P2 Color', 'US Portable P3 4D'],
      'Cart-based Ultrasound': ['US Cart C1', 'US Cart C2 Advanced', 'US Cart C3 Premium'],
      'Specialty Ultrasound': ['US Cardiac', 'US Vascular', 'US OB/GYN'],
    },
    'X-Ray Systems': {
      'Mobile X-Ray': ['X-Ray Mobile M1', 'X-Ray Mobile M2 Digital'],
      'Fixed X-Ray': ['X-Ray Fixed F1', 'X-Ray Fixed F2 DR'],
      'C-Arm Systems': ['C-Arm Basic', 'C-Arm Advanced', 'C-Arm Premium'],
    },
  },
  'Support Equipment': {
    'Patient Care': {
      'Hospital Beds': ['ICU Bed Electric 3F', 'ICU Bed Electric 5F', 'ICU Bed Premium'],
      'Stretchers': ['Emergency Stretcher', 'Hydraulic Stretcher', 'Motorized Stretcher'],
      'Wheelchairs': ['Manual Wheelchair', 'Motorized Wheelchair', 'Reclining Wheelchair'],
    },
    'Sterilization': {
      'Autoclaves': ['Autoclave 20L', 'Autoclave 50L', 'Autoclave 100L'],
      'UV Sterilizers': ['UV Cabinet Small', 'UV Cabinet Large', 'UV Room Sterilizer'],
      'Disinfection': ['Disinfection Fogger', 'UV-C Lamp', 'Ozone Generator'],
    },
  },
};

// Generate dummy products
const generateProducts = () => {
  const products: Array<{
    id: number;
    name: string;
    category: string;
    subCategory: string;
    subSubCategory: string;
    description: string;
    price: number;
    availability: string;
    image: null;
  }> = [];
  let id = 1;
  
  const descriptions = [
    'High-performance medical device with advanced features',
    'State-of-the-art equipment for critical care',
    'Reliable and efficient medical solution',
    'Professional-grade equipment with precision controls',
    'Latest technology for superior patient care',
    'Innovative design with user-friendly interface',
    'Durable construction for long-term reliability',
    'Advanced monitoring capabilities for accurate diagnostics'
  ];
  
  Object.entries(categories).forEach(([mainCat, subCats]) => {
    Object.entries(subCats as Record<string, Record<string, string[]>>).forEach(([subCat, subSubCats]) => {
      Object.entries(subSubCats).forEach(([subSubCat, models]) => {
        (models as string[]).forEach((model: string) => {
          products.push({
            id: id++,
            name: model,
            category: mainCat,
            subCategory: subCat,
            subSubCategory: subSubCat,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            price: Math.floor(Math.random() * 100000) + 10000,
            availability: Math.random() > 0.3 ? 'In Stock' : 'Out of Stock',
            image: null, // Will use placeholder
          });
        });
      });
    });
  });
  
  return products;
};

const allProducts = generateProducts();

export default function Products() {
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['ICU Equipment']);
  const [expandedSubCategories, setExpandedSubCategories] = useState<string[]>([]);
  
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [availability, setAvailability] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    if (selectedMainCategory && product.category !== selectedMainCategory) return false;
    if (selectedSubCategory && product.subCategory !== selectedSubCategory) return false;
    if (selectedSubSubCategory && product.subSubCategory !== selectedSubSubCategory) return false;
    if (availability !== 'all' && product.availability !== availability) return false;
    if (priceRange !== 'all') {
      const price = product.price;
      if (priceRange === 'low' && price > 25000) return false;
      if (priceRange === 'medium' && (price < 25000 || price > 50000)) return false;
      if (priceRange === 'high' && price < 50000) return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Paginate
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleSubCategory = (subCategory: string) => {
    setExpandedSubCategories(prev =>
      prev.includes(subCategory) ? prev.filter(c => c !== subCategory) : [...prev, subCategory]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/60 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Filter Bar */}
        <div className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[32px] p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="font-bold text-gray-900">Filters:</span>
            </div>

            <div className="flex items-center gap-4 flex-1">
              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-500 transition-all"
              >
                <option value="featured">Featured</option>
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              {/* Price Range */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-500 transition-all"
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹25,000</option>
                <option value="medium">₹25,000 - ₹50,000</option>
                <option value="high">Above ₹50,000</option>
              </select>

              {/* Availability */}
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-500 transition-all"
              >
                <option value="all">All Products</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            <div className="text-[14px] text-gray-600">
              <span className="font-bold text-gray-900">{sortedProducts.length}</span> Products
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[32px] p-6 shadow-lg sticky top-32">
              <h3 className="text-[18px] font-bold text-gray-900 mb-6">Categories</h3>
              
              <div className="space-y-2">
                {Object.entries(categories).map(([mainCat, subCats]) => (
                  <div key={mainCat}>
                    <button
                      onClick={() => {
                        toggleCategory(mainCat);
                        setSelectedMainCategory(mainCat);
                        setSelectedSubCategory(null);
                        setSelectedSubSubCategory(null);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        selectedMainCategory === mainCat
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-blue-50 text-gray-700'
                      }`}
                    >
                      <span className="font-semibold text-[14px]">{mainCat}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedCategories.includes(mainCat) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedCategories.includes(mainCat) && (
                      <div className="ml-4 mt-2 space-y-2">
                        {Object.entries(subCats).map(([subCat, subSubCats]) => (
                          <div key={subCat}>
                            <button
                              onClick={() => {
                                toggleSubCategory(subCat);
                                setSelectedSubCategory(subCat);
                                setSelectedSubSubCategory(null);
                              }}
                              className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all text-[13px] ${
                                selectedSubCategory === subCat
                                  ? 'bg-blue-100 text-blue-700 font-semibold'
                                  : 'hover:bg-gray-100 text-gray-600'
                              }`}
                            >
                              <span>{subCat}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform ${
                                  expandedSubCategories.includes(subCat) ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {expandedSubCategories.includes(subCat) && (
                              <div className="ml-4 mt-1 space-y-1">
                                {Object.entries(subSubCats).map(([subSubCat]) => (
                                  <button
                                    key={subSubCat}
                                    onClick={() => setSelectedSubSubCategory(subSubCat)}
                                    className={`w-full text-left p-2 rounded-lg transition-all text-[12px] ${
                                      selectedSubSubCategory === subSubCat
                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                        : 'hover:bg-gray-50 text-gray-600'
                                    }`}
                                  >
                                    {subSubCat}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {(selectedMainCategory || selectedSubCategory || selectedSubSubCategory) && (
                <button
                  onClick={() => {
                    setSelectedMainCategory(null);
                    setSelectedSubCategory(null);
                    setSelectedSubSubCategory(null);
                  }}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all text-[13px] font-semibold text-gray-700"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div className="grid grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[28px] p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[20px] mb-5 flex items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center">
                      <Grid3x3 className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 text-[16px] line-clamp-2">
                      {product.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-[13px] text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <p className="text-[11px] text-gray-500 font-semibold">
                      {product.subSubCategory}
                    </p>

                    {/* Price and Availability */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                      <div>
                        <div className="text-[20px] font-bold text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </div>
                        <div className={`text-[11px] font-semibold ${
                          product.availability === 'In Stock' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {product.availability}
                        </div>
                      </div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex items-center gap-2 pt-2">
                      <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-[13px] font-bold hover:shadow-lg hover:scale-[1.02] transition-all">
                        Add to Cart
                      </button>
                      <button className="px-4 py-2.5 bg-white border-2 border-blue-600 text-blue-600 rounded-xl text-[13px] font-bold hover:bg-blue-50 hover:scale-[1.02] transition-all flex items-center gap-1.5">
                        <Eye className="w-4 h-4" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl font-bold transition-all ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {totalPages > 5 && (
                  <>
                    <span className="text-gray-400">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className={`w-10 h-10 rounded-xl font-bold transition-all ${
                        currentPage === totalPages
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                      }`}
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}