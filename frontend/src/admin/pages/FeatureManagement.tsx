import { useCallback, useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';

interface FeatureItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeatureForm {
  title: string;
  description: string;
  link: string;
}

const initialForm: FeatureForm = {
  title: '',
  description: '',
  link: '',
};

export default function FeatureManagement() {
  const [features, setFeatures] = useState<FeatureItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingFeature, setEditingFeature] = useState<FeatureItem | null>(null);
  const [form, setForm] = useState<FeatureForm>(initialForm);
  const [imageFile, setImageFile] = useState<File | null>(null);

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

  const fetchFeatures = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/admin/feature');
      const list: FeatureItem[] = Array.isArray(res.data)
        ? res.data
        : res.data?.features || [];
      setFeatures(list);
    } catch (err: unknown) {
      toast.error(getErrorMessage(err, 'Failed to load features'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);

  const openCreateModal = () => {
    setEditingFeature(null);
    setForm(initialForm);
    setImageFile(null);
    setShowModal(true);
  };

  const openEditModal = (feature: FeatureItem) => {
    setEditingFeature(feature);
    setForm({
      title: feature.title,
      description: feature.description,
      link: feature.link,
    });
    setImageFile(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingFeature(null);
    setForm(initialForm);
    setImageFile(null);
  };

  const validateForm = () => {
    if (!form.title.trim()) {
      toast.error('Title is required');
      return false;
    }
    if (!form.description.trim()) {
      toast.error('Description is required');
      return false;
    }
    if (!form.link.trim()) {
      toast.error('Link is required');
      return false;
    }
    if (!editingFeature && !imageFile) {
      toast.error('Image is required');
      return false;
    }
    return true;
  };

  const saveFeature = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('link', form.link);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (editingFeature) {
        await axiosInstance.put(`/admin/feature/${editingFeature._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Feature updated');
      } else {
        await axiosInstance.post('/admin/feature', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Feature created');
      }

      closeModal();
      fetchFeatures();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err, 'Failed to save feature'));
    } finally {
      setLoading(false);
    }
  };

  const deleteFeature = async (feature: FeatureItem) => {
    if (!confirm(`Delete feature "${feature.title}"?`)) return;

    try {
      setLoading(true);
      await axiosInstance.delete(`/admin/feature/${feature._id}`);
      toast.success('Feature deleted');
      fetchFeatures();
    } catch (err: unknown) {
      toast.error(getErrorMessage(err, 'Failed to delete feature'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Feature Management</h1>
          <p className="text-gray-600">Manage hero section featured cards shown on the homepage.</p>
        </div>
        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Feature
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading && features.length === 0 ? (
          <div className="p-8 text-center text-gray-600">Loading features...</div>
        ) : features.length === 0 ? (
          <div className="p-8 text-center text-gray-600">No features added yet.</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {features.map((feature) => (
              <div key={feature._id} className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full md:w-36 h-24 object-cover rounded-lg border border-gray-200"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 truncate">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{feature.description}</p>
                  <p className="text-xs text-blue-600 mt-2 truncate">{feature.link}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEditModal(feature)}
                    className="p-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                    title="Edit feature"
                  >
                    <Edit2 className="w-4 h-4 text-blue-600" />
                  </button>
                  <button
                    onClick={() => deleteFeature(feature)}
                    className="p-2.5 rounded-lg hover:bg-red-50 transition-colors"
                    title="Delete feature"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {editingFeature ? 'Edit Feature' : 'Add Feature'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close feature modal"
                title="Close"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label htmlFor="feature-title" className="block text-sm font-semibold text-gray-700 mb-1.5">Title</label>
                <input
                  id="feature-title"
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Feature title"
                />
              </div>

              <div>
                <label htmlFor="feature-description" className="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
                <textarea
                  id="feature-description"
                  value={form.description}
                  onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Feature description"
                />
              </div>

              <div>
                <label htmlFor="feature-link" className="block text-sm font-semibold text-gray-700 mb-1.5">Link</label>
                <input
                  id="feature-link"
                  type="text"
                  value={form.link}
                  onChange={(e) => setForm((prev) => ({ ...prev, link: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com or /products"
                />
              </div>

              <div>
                <label htmlFor="feature-image" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Image {editingFeature ? '(optional for update)' : ''}
                </label>
                <input
                  id="feature-image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            <div className="p-5 border-t border-gray-200 flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveFeature}
                disabled={loading}
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {editingFeature ? 'Update Feature' : 'Create Feature'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
