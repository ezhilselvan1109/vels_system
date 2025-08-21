import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, ChevronDown, Package, Star, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const UserMenu = React.memo(() => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
        <span className="hidden md:block font-medium">{user.firstName}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border z-50">
          {/* User Info */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              to="/profile/orders"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Package size={18} />
              <span>Orders</span>
            </Link>
            <Link
              to="/profile/reviews"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Star size={18} />
              <span>Reviews</span>
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Settings size={18} />
              <span>Profile</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="border-t py-2">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

UserMenu.displayName = 'UserMenu';

export default UserMenu;