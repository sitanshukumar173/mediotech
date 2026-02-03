import { useEffect, useState } from 'react';
import { Mail, Phone, Building2, Calendar, MapPin, UserCircle2 } from 'lucide-react';
import { toast } from 'react-toastify';
import axiosInstance from '../../api/axios';

interface DemoRequest {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  state: string;
  productInterest?: string;
  message: string;
  createdAt: string;
}

export default function DemoRequestManagement() {
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<DemoRequest | null>(null);

  const fetchDemoRequests = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get('/admin/demo');
      const data = Array.isArray(res.data) ? res.data : res.data?.demoRequests || [];
      setDemoRequests(data);
    } catch {
      toast.error('Failed to load demo requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemoRequests();
  }, []);

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Demo Request Manage</h1>
          <p className="text-sm text-gray-500">All demo request submissions</p>
        </div>
        <button
          onClick={fetchDemoRequests}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Refresh
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-gray-600">Loading demo requests...</div>
        ) : demoRequests.length === 0 ? (
          <div className="p-6 text-center text-gray-600">No demo requests yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr className="text-xs uppercase text-gray-500">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Organization</th>
                  <th className="px-4 py-3">City/State</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {demoRequests.map((demo) => (
                  <tr
                    key={demo._id}
                    className="border-t border-gray-100 hover:bg-blue-50/40 cursor-pointer"
                    onClick={() => setSelected(demo)}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">{demo.fullName}</td>
                    <td className="px-4 py-3 text-gray-700">{demo.email}</td>
                    <td className="px-4 py-3 text-gray-700">{demo.phone}</td>
                    <td className="px-4 py-3 text-gray-700">{demo.organization}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {demo.city}, {demo.state}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {new Date(demo.createdAt).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selected.fullName}</h2>
                <p className="text-sm text-gray-500">Demo Request Details</p>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" />
                {selected.email}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" />
                {selected.phone}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Building2 className="w-4 h-4" />
                {selected.organization}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <UserCircle2 className="w-4 h-4" />
                {selected.designation}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                {selected.city}, {selected.state}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4" />
                {new Date(selected.createdAt).toLocaleString('en-IN')}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Product Interest</div>
              <div className="text-gray-800 font-semibold mb-4">
                {selected.productInterest || 'Not specified'}
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase mb-2">Message</div>
              <p className="text-gray-700 whitespace-pre-wrap">{selected.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
