import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import axiosInstance from '../../../api/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type GalleryImage = {
  _id: string;
  image: string;
};

export default function MediotechFootprint() {
  const [footprints, setFootprints] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchFootprints = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get('/gallery-images');
        const list: GalleryImage[] = Array.isArray(res.data)
          ? res.data
          : res.data?.images || [];
        setFootprints(list);
      } catch (error) {
        console.error('Error fetching footprints:', error);
        setFootprints([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFootprints();
  }, []);

  return (
    <section className="w-full py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-white overflow-hidden">
      <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <div className="inline-block mb-3 md:mb-4 lg:mb-5">
            <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#2563EB] uppercase tracking-[0.15em]">Mediotech FootPrint</span>
            </div>
          </div>

          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[52px] font-bold text-gray-900 mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-tight">
            Mediotech <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">FootPrint</span>
          </h2>
          <p className="text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Highlights from our events, healthcare collaborations, and on-ground impact.
          </p>
        </div>

        <div className="w-full max-w-[980px] mx-auto relative group">
          <Swiper
            slidesPerView={1}
            spaceBetween={14}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 22 },
              1280: { slidesPerView: 3, spaceBetween: 22 },
              1536: { slidesPerView: 3, spaceBetween: 22 },
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.footprint-swiper-next',
              prevEl: '.footprint-swiper-prev',
            }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={footprints.length > 1}
            grabCursor
            watchOverflow={false}
            className="footprint-swiper w-full pb-16"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {loading ? (
              <SwiperSlide className="flex items-center justify-center text-gray-600 py-20">
                Loading Footprints...
              </SwiperSlide>
            ) : footprints.length === 0 ? (
              <SwiperSlide className="flex flex-col items-center justify-center text-gray-600 py-20">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <ImageIcon className="w-6 h-6" />
                </div>
                No gallery images available yet.
              </SwiperSlide>
            ) : (
              footprints.map((footprint, index) => (
                <SwiperSlide key={footprint._id} className="flex items-center justify-center">
                  <div
                    className="relative w-full aspect-square mx-auto overflow-hidden rounded-[18px] shadow-lg bg-gray-100 cursor-pointer"
                    onClick={() => setActiveImage(footprint.image)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveImage(footprint.image);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View footprint image ${index + 1}`}
                  >
                    <img
                      src={footprint.image}
                      alt={`Mediotech footprint ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>

          <button
            className="footprint-swiper-prev absolute top-1/2 -left-4 md:-left-8 lg:-left-10 xl:-left-12 -translate-y-1/2 z-30 opacity-100 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
            type="button"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="footprint-swiper-next absolute top-1/2 -right-4 md:-right-8 lg:-right-10 xl:-right-12 -translate-y-1/2 z-30 opacity-100 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-lg focus:outline-none"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
            type="button"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <style>{`
            .footprint-swiper .swiper-pagination {
              bottom: -2px !important;
              display: block !important;
            }
            .footprint-swiper .swiper-pagination-bullet {
              background: #94a3b8;
              opacity: 1;
              width: 8px;
              height: 8px;
            }
            .footprint-swiper .swiper-pagination-bullet-active {
              background: #2563eb;
              width: 18px;
              border-radius: 9999px;
            }
          `}</style>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/60 rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/80 transition"
              onClick={() => setActiveImage(null)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage}
              alt="Large preview"
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl border-4 border-white object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
