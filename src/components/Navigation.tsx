import React, { useState, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleDropdownToggle = useCallback((menu: string) => {
    setActiveDropdown(prev => prev === menu ? null : menu);
  }, []);

  const itProducts = [
    { title: 'Desktop', href: '/coming-soon' },
    { title: 'Laptop', href: '/laptop' },
    { title: 'Printer', href: '/printer' },
    { title: 'Tablet', href: '/coming-soon' },
    { title: 'Software', href: '/coming-soon' },
    { title: 'Mobile Accessories', href: '/coming-soon' },
    { title: 'Server & Workstation', href: '/coming-soon' },
    { title: 'Network Hardware Solution', href: '/coming-soon' },
    { title: 'Online & Offline UPS', href: '/coming-soon' },
    { title: 'Firewall', href: '/coming-soon' },
    { title: 'IT Peripherals', href: '/coming-soon' },
    { title: 'WiFi Access Point', href: '/coming-soon' },
    { title: 'Photocopier', href: '/coming-soon' },
    { title: 'Data Storage', href: '/coming-soon' },
    { title: 'Data Recovery', href: '/coming-soon' },
    { title: 'Projector', href: '/coming-soon' }
  ];

  const securitySolutions = [
    { title: 'CCTV Camera', href: '/coming-soon' },
    { title: 'Door Access Control', href: '/coming-soon' },
    { title: 'Biometric System', href: '/coming-soon' },
    { title: 'Intercom', href: '/coming-soon' },
    { title: 'Boom Barrier', href: '/coming-soon' },
    { title: 'Metal Detector & Signal Jammer', href: '/coming-soon' },
    { title: 'Signal Booster', href: '/coming-soon' },
    { title: 'Video Door Phone', href: '/coming-soon' },
    { title: 'Cash Counting Machine', href: '/coming-soon' },
    { title: 'Fire Alarms', href: '/coming-soon' },
    { title: 'Safety Lockers', href: '/coming-soon' },
    { title: 'GPS Vehicle Tracker', href: '/coming-soon' },
    { title: 'Burglar Alarm System', href: '/coming-soon' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="py-4">
          {/* Logo */}
          <div className="flex justify-between items-center space-x-4">
            <div className="text-2xl font-bold text-blue-900">
              <Link to="/" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-medium' : ''}`}>
                <img
                  src="/vels-logo.png"
                  alt="logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="hidden md:flex gap-4">
              <img
                src="/25_years_of_excellence_vel_systems-removebg-preview.png"
                alt="25 Years Excellence"
                className="h-7 w-auto object-contain"
              />
              <img
                src="/gem-logo-1-1-300x143.png"
                alt="GEM Logo"
                className="h-7 w-auto object-contain"
              />
              <img
                src="/iso2015-1024x395-1.png"
                alt="ISO 2015"
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between space-x-2">
            <div className="relative group">
              <Link to="/coming-soon" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Power Solutions</span>
              </Link>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>IT Products & Solutions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {itProducts.map((product, index) => (
                    <Link key={index} to={product.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Security Solutions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {securitySolutions.map((solution, index) => (
                    <Link key={index} to={solution.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/about' ? 'text-blue-600 font-medium' : ''}`}>
              About Us
            </Link>
            <Link to="/services" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/services' ? 'text-blue-600 font-medium' : ''}`}>
              Our Services
            </Link>
            <Link to="/customers" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/customers' ? 'text-blue-600 font-medium' : ''}`}>
              Our Customers
            </Link>
            <Link to="/rental" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/rental' ? 'text-blue-600 font-medium' : ''}`}>
              Rental
            </Link>
            <Link to="/shop" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/shop' ? 'text-blue-600 font-medium' : ''}`}>
              Shop
            </Link>
            <Link to="/blog" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/blog' ? 'text-blue-600 font-medium' : ''}`}>
              Blog
            </Link>
            <Link to="/contact" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/contact' ? 'text-blue-600 font-medium' : ''}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <Link to="/coming-soon" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  <span>Power Solutions</span>
                </Link>
              </div>
              <div>
                <button
                  onClick={() => handleDropdownToggle('it')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>IT Products & Solutions</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'it' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {itProducts.map((product, index) => (
                      <Link key={index} to={product.href} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => handleDropdownToggle('security')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Security Solutions</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === 'security' && (
                  <div className="ml-4 mt-2 space-y-2">
                    {securitySolutions.map((solution, index) => (
                      <Link key={index} to={solution.href} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/services" className="block text-gray-700 hover:text-blue-600 transition-colors">Our Services</Link>
              <Link to="/customers" className="block text-gray-700 hover:text-blue-600 transition-colors">Our Customers</Link>
              <Link to="/rental" className="block text-gray-700 hover:text-blue-600 transition-colors">Rental</Link>
              <Link to="/shop" className="block text-gray-700 hover:text-blue-600 transition-colors">Shop</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;