import { NavLink } from 'react-router-dom';
import { UserPlus, Package, Mail, MonitorPlay } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    {
      to: '/admin/dashboard/create-admin',
      icon: UserPlus,
      label: 'Create New Admin',
    },
    {
      to: '/admin/dashboard/products',
      icon: Package,
      label: 'Product Manage',
    },
    {
      to: '/admin/dashboard/contacts',
      icon: Mail,
      label: 'Contact Manage',
    },
    {
      to: '/admin/dashboard/demo-requests',
      icon: MonitorPlay,
      label: 'Demo Request Manage',
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm h-full">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
