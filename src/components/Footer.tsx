import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const customerImages = [
  'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/7688390/pexels-photo-7688390.jpeg?auto=compress&cs=tinysrgb&w=300'
];

const Footer = React.memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImages = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 3) % customerImages.length);
  }, []);

  const prevImages = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 3 + customerImages.length) % customerImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImages, 3000);
    return () => clearInterval(timer);
  }, [nextImages]);

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentImageIndex + i) % customerImages.length;
      images.push(customerImages[index]);
    }
    return images;
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Customer Images Carousel */}
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Valued Customers</h3>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={prevImages}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-6 overflow-hidden">
              {getVisibleImages().map((image, index) => (
                <div key={index} className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`Customer ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={nextImages}
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            <a href="#account" className="hover:text-blue-400 transition-colors">My Account</a>
            <a href="#checkout" className="hover:text-blue-400 transition-colors">Checkout</a>
            <a href="#shop" className="hover:text-blue-400 transition-colors">Shop</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © 2024 VEL SYSTEMS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;