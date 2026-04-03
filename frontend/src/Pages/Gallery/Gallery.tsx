import { Image as ImageIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';

type GalleryImage = {
  _id: string;
  image: string;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const res = await axiosInstance.get('/gallery-images');
        const list: GalleryImage[] = Array.isArray(res.data)
          ? res.data
          : res.data?.images || [];
        setImages(list);
      } catch (error) {
        console.error('Failed to load gallery images:', error);
        setImages([]);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-28 md:pt-36 lg:pt-44 xl:pt-52 pb-24 md:pb-32 lg:pb-36 bg-gradient-to-br from-[#2563EB] to-[#183491] overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-8 lg:pb-10">
          <h2 className="text-[70px] md:text-[110px] lg:text-[140px] xl:text-[180px] font-black select-none leading-none tracking-tight whitespace-nowrap bg-gradient-to-t from-transparent to-white/35 bg-clip-text text-transparent text-center px-4">
            GALLERY
          </h2>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
      </div>

      <section className="py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        <div className="px-5 md:px-8 lg:px-8 xl:px-14 2xl:px-16 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="mb-8 md:mb-10 lg:mb-12 text-center">
            <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-bold text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-[#2563EB] via-[#3b82f6] to-[#2563EB] bg-clip-text text-transparent">Images</span>
            </h2>
          </div>

          {images.length === 0 ? (
            <div className="rounded-[24px] border-2 border-dashed border-blue-200 bg-white/70 py-20 px-6 text-center text-gray-600">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="text-sm md:text-base font-semibold">No gallery images available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
              {images.map((item) => (
                <button
                  key={item._id}
                  onClick={() => setActiveImage(item.image)}
                  className="group rounded-[22px] overflow-hidden border-2 border-gray-100 hover:border-blue-200 bg-white shadow-sm hover:shadow-lg transition-all"
                  aria-label="Open gallery image"
                  title="Open image"
                >
                  <img
                    src={item.image}
                    alt="Mediotech gallery"
                    className="w-full h-[210px] md:h-[230px] lg:h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

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
    </div>
  );
}
