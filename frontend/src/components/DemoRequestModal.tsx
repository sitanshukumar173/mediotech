import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { X, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../api/axios';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetProduct?: string;
}

export default function DemoRequestModal({ isOpen, onClose, presetProduct = '' }: DemoRequestModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    city: '',
    state: '',
    productInterest: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, productInterest: presetProduct || prev.productInterest }));
    }
  }, [isOpen, presetProduct]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosInstance.post('/demo', form);
      toast.success('Demo request submitted successfully.');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        designation: '',
        city: '',
        state: '',
        productInterest: '',
        message: '',
      });
      onClose();
    } catch {
      toast.error('Failed to submit demo request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[18px] md:rounded-[22px] w-full max-w-2xl shadow-2xl">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-gray-200">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900">Request a Demo</h3>
            <p className="text-[12px] md:text-[13px] text-gray-500">Share your details and we’ll reach out.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Organization</label>
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Hospital / Institution"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Designation</label>
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Role / Title"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Product Interest</label>
              <input
                name="productInterest"
                value={form.productInterest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Ventilator / Monitor / Other"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">City</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">State</label>
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="State"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Tell us about your requirement"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-70"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
