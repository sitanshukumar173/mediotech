import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../api/axios';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Product = {
  _id: string;
  title: string;
  description: string;
  images?: string[];
};

export default function ProductPortfolio() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/admin/product');
        const fetched: Product[] = Array.isArray(response.data)
          ? response.data
          : response.data?.products || [];
        setProducts(fetched);
      } catch (error) {
        console.error('Failed to load product portfolio:', error);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.max(1, Math.ceil(products.length / 2));

  const currentProducts = useMemo(() => {
    const start = pageIndex * 2;
    return products.slice(start, start + 2);
  }, [products, pageIndex]);

  useEffect(() => {
    if (products.length <= 2) return;

    const intervalId = window.setInterval(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [products.length, totalPages]);

  const goNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const goPrevious = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openProductDetails = (title: string) => {
    navigate(`/products?q=${encodeURIComponent(title)}`);
  };

  return (
    <section id="products" className="py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
      <style>{`
        @keyframes portfolio-enter-left {
          from { opacity: 0; transform: translateX(-36px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes portfolio-enter-right {
          from { opacity: 0; transform: translateX(36px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .portfolio-enter-left {
          animation: portfolio-enter-left 560ms ease;
        }
        .portfolio-enter-right {
          animation: portfolio-enter-right 560ms ease;
        }
      `}</style>

      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-3 md:mb-4 lg:mb-7">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Our Products</span>
            </div>
          </div>

          <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 xl:mb-7 tracking-tight">
            Our critical care product <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">portfolio</span>
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-[17px] xl:text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive range of medical equipment designed for intensive care units
          </p>
        </div>
        <div key={pageIndex} className="space-y-10 md:space-y-12 lg:space-y-14">
          {currentProducts.map((product, index) => {
            const imageFirst = index % 2 === 0;
            const imageUrl = product.images?.[0] || 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

            return (
              <div
                key={product._id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center ${
                  imageFirst ? 'portfolio-enter-left' : 'portfolio-enter-right'
                }`}
              >
                <div className={imageFirst ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="group bg-white/70 backdrop-blur-xl border-2 border-white/80 rounded-[20px] md:rounded-[24px] lg:rounded-[28px] shadow-lg hover:border-blue-200 transition-colors duration-500">
                    <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] lg:rounded-[28px]">
                      <ImageWithFallback
                        src={imageUrl}
                        alt={product.title}
                        className="w-full h-[210px] md:h-[260px] lg:h-[290px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a2348]/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                <div className={imageFirst ? 'order-2' : 'order-2 lg:order-1'}>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-bold text-[#0a2348] leading-tight mb-2 md:mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] text-gray-600 max-w-lg leading-relaxed mb-4 md:mb-5 line-clamp-3">
                    {product.description}
                  </p>
                  <button
                    onClick={() => openProductDetails(product.title)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-5 py-2.5 rounded-[16px] md:rounded-[18px] font-semibold text-[12px] md:text-[13px] hover:shadow-lg transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {products.length > 2 && (
          <div className="flex justify-center items-center gap-3 mt-8 md:mt-10 lg:mt-12">
            <button
              onClick={goPrevious}
              aria-label="Previous products"
              className="w-10 h-10 rounded-full border-2 border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next products"
              className="w-10 h-10 rounded-full border-2 border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {products.length === 0 && (
          <div className="text-center text-gray-500 text-[14px] md:text-[15px] font-medium">No products available right now.</div>
        )}
      </div>
    </section>
  );
}