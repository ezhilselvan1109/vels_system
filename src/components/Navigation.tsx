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
    { title: 'Desktop', href: '#desktop' },
    { title: 'Laptop', href: '#laptop' },
    { title: 'Printer', href: '#printer' },
    { title: 'Tablet', href: '#tablet' },
    { title: 'Software', href: '#software' },
    { title: 'Mobile Accessories', href: '#mobile-accessories' },
    { title: 'Server & Workstation', href: '#server' },
    { title: 'Network Hardware Solution', href: '#network' },
    { title: 'Online & Offline UPS', href: '#ups' },
    { title: 'Firewall', href: '#firewall' },
    { title: 'IT Peripherals', href: '#peripherals' },
    { title: 'WiFi Access Point', href: '#wifi' },
    { title: 'Photocopier', href: '#photocopier' },
    { title: 'Data Storage', href: '#storage' },
    { title: 'Data Recovery', href: '#recovery' },
    { title: 'Projector', href: '#projector' }
  ];

  const securitySolutions = [
    { title: 'CCTV Camera', href: '#cctv' },
    { title: 'Door Access Control', href: '#door-access' },
    { title: 'Biometric System', href: '#biometric' },
    { title: 'Intercom', href: '#intercom' },
    { title: 'Boom Barrier', href: '#boom-barrier' },
    { title: 'Metal Detector & Signal Jammer', href: '#metal-detector' },
    { title: 'Signal Booster', href: '#signal-booster' },
    { title: 'Video Door Phone', href: '#video-door-phone' },
    { title: 'Cash Counting Machine', href: '#cash-counter' },
    { title: 'Fire Alarms', href: '#fire-alarms' },
    { title: 'Safety Lockers', href: '#safety-lockers' },
    { title: 'GPS Vehicle Tracker', href: '#gps-tracker' },
    { title: 'Burglar Alarm System', href: '#burglar-alarm' }
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
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Power Solutions</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>IT Products & Solutions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {itProducts.map((product, index) => (
                    <a key={index} href={product.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                      {product.title}
                    </a>
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
                    <a key={index} href={solution.href} className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">
                      {solution.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <Link to="/services" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/services' ? 'text-blue-600 font-medium' : ''}`}>
              Our Services
            </Link>
            <Link to="/customers" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/customers' ? 'text-blue-600 font-medium' : ''}`}>
              Our Customers
            </Link>
            <Link to="/rental" className={`text-gray-700 hover:text-blue-600 transition-colors ${location.pathname === '/rental' ? 'text-blue-600 font-medium' : ''}`}>
              Rental
            </Link>
            <a href="#shop" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
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
                <button
                  onClick={() => handleDropdownToggle('power')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>Power Solutions</span>
                </button>
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
                      <a key={index} href={product.href} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {product.title}
                      </a>
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
                      <a key={index} href={solution.href} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        {solution.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
              <Link to="/services" className="block text-gray-700 hover:text-blue-600 transition-colors">Our Services</Link>
              <Link to="/customers" className="block text-gray-700 hover:text-blue-600 transition-colors">Our Customers</Link>
              <Link to="/rental" className="block text-gray-700 hover:text-blue-600 transition-colors">Rental</Link>
              <a href="#shop" className="block text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
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