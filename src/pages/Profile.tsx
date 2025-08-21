import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, Package, Star, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ProfileSettings from './profile/ProfileSettings';
import Orders from './profile/Orders';
import Reviews from './profile/Reviews';

const Profile = React.memo(() => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { path: '/profile', label: 'Profile', icon: Settings, exact: true },
    { path: '/profile/orders', label: 'Orders', icon: Package },
    { path: '/profile/reviews', label: 'Reviews', icon: Star },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.exact 
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path);
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Routes>
              <Route path="/" element={<ProfileSettings />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
});

Profile.displayName = 'Profile';

export default Profile;