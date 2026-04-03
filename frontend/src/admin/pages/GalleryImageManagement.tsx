import { Image as ImageIcon, Plus, Trash2, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';

type GalleryImage = {
  _id: string;
  image: string;
};

export default function GalleryImageManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const getErrorMessage = (error: unknown, fallback: string) => {
    if (
      typeof error === 'object' &&
      error !== null &&
      'response' in error &&
      typeof (error as { response?: unknown }).response === 'object' &&
      (error as { response?: unknown }).response !== null
    ) {
      const response = (error as { response: { data?: unknown } }).response;
      if (
        response.data &&
        typeof response.data === 'object' &&
        'message' in response.data &&
        typeof (response.data as { message?: unknown }).message === 'string'
      ) {
        return (response.data as { message: string }).message;
      }
    }
    return fallback;
  };

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/admin/gallery-images');
      const list: GalleryImage[] = Array.isArray(res.data)
        ? res.data
        : res.data?.images || [];
      setImages(list);
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, 'Failed to load gallery images'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const uploadImage = async () => {
    if (!imageFile) {
      toast.error('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      setLoading(true);
      await axiosInstance.post('/admin/gallery-images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Gallery image uploaded');
      setImageFile(null);
      fetchImages();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, 'Failed to upload image'));
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (image: GalleryImage) => {
    if (!confirm('Delete this gallery image?')) return;

    try {
      setLoading(true);
      await axiosInstance.delete(`/admin/gallery-images/${image._id}`);
      toast.success('Gallery image deleted');
      fetchImages();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error, 'Failed to delete image'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Gallery Images Manage</h1>
          <p className="text-gray-600">Upload and manage images for homepage footprint and gallery page.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="flex-1 px-3 py-2.5 rounded-lg border border-gray-300"
            aria-label="Select gallery image"
            title="Select image"
          />
          <button
            onClick={uploadImage}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Plus className="w-4 h-4" />
            Upload Image
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {loading && images.length === 0 ? (
          <div className="p-8 text-center text-gray-600">Loading gallery images...</div>
        ) : images.length === 0 ? (
          <div className="p-10 text-center text-gray-600">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-3">
              <ImageIcon className="w-6 h-6" />
            </div>
            <p className="font-semibold">No gallery images uploaded yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-5">
            {images.map((item) => (
              <div
                key={item._id}
                className="rounded-[18px] overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setActiveImage(item.image)}
                  className="w-full"
                  aria-label="Open full image"
                  title="View large"
                >
                  <img
                    src={item.image}
                    alt="Gallery upload"
                    className="w-full h-[210px] object-cover"
                    loading="lazy"
                  />
                </button>
                <div className="p-3">
                  <button
                    onClick={() => deleteImage(item)}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                    title="Delete image"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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
    </div>
  );
}
