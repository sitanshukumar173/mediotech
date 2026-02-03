import { useNavigate } from 'react-router-dom';
import { Package, UserPlus, TrendingUp, ShoppingBag } from 'lucide-react';

export default function DashboardHome() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Product Management',
      description: 'Create, edit, and manage your product catalog',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/admin/dashboard/products'),
    },
    {
      title: 'Create Admin',
      description: 'Add new administrators to the system',
      icon: UserPlus,
      color: 'from-blue-500 to-blue-600',
      onClick: () => navigate('/admin/dashboard/create-admin'),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin panel. Manage your system from here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={card.onClick}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all group"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl border border-blue-200 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate('/admin/dashboard/products')}
            className="bg-white px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-left border border-gray-200"
          >
            <ShoppingBag className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium text-gray-800">View Products</p>
            <p className="text-sm text-gray-600">Browse all products</p>
          </button>
          <button
            onClick={() => navigate('/admin/dashboard/create-admin')}
            className="bg-white px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-left border border-gray-200"
          >
            <UserPlus className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium text-gray-800">New Admin</p>
            <p className="text-sm text-gray-600">Add administrator</p>
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-white px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-left border border-gray-200"
          >
            <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
            <p className="font-medium text-gray-800">View Website</p>
            <p className="text-sm text-gray-600">See public site</p>
          </button>
        </div>
      </div>
    </div>
  );
}
