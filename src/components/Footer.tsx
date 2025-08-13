import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const customerImages = [
  '/customer/customer-1.jpeg',
    '/customer/customer-2.png',
    '/customer/customer-3.jpeg',
    '/customer/customer-4.jpeg',
    '/customer/customer-5.jpeg',
    '/customer/customer-6.jpg',
    '/customer/customer-7.png',
    '/customer/customer-8.png',
    '/customer/customer-9.jpg',
    '/customer/customer-10.png',

    '/customer/customer-11.png',
    '/customer/customer-12.png',
    '/customer/customer-13.jpg',
    '/customer/customer-14.png',
    '/customer/customer-15.jpg',
    '/customer/customer-16.png',
    '/customer/customer-17.png',
    '/customer/customer-18.jpg',
    '/customer/customer-19.jpg',
    '/customer/customer-20.jpg',

    '/customer/customer-21.jpg',
    '/customer/customer-22.jpg',
    '/customer/customer-23.jpg',
    '/customer/customer-24.jpg',
    '/customer/customer-25.jpg',
    '/customer/customer-26.jpg',
    '/customer/customer-27.jpg',
    '/customer/customer-28.jpg',
    '/customer/customer-29.jpg',
    '/customer/customer-30.jpg',

    '/customer/customer-31.jpg',
    '/customer/customer-32.jpg',
    '/customer/customer-33.jpg',
    '/customer/customer-34.jpg',
    '/customer/customer-35.jpg',
    '/customer/customer-36.jpg',
    '/customer/customer-37.jpg',
    '/customer/customer-38.jpg',
    '/customer/customer-39.jpg',
    '/customer/customer-40.jpg',

    '/customer/customer-41.jpg',
    '/customer/customer-42.jpg',
    '/customer/customer-43.jpg',
    '/customer/customer-44.jpg',
    '/customer/customer-45.jpg',
    '/customer/customer-46.jpg',
    '/customer/customer-47.jpg',
    '/customer/customer-48.jpg',
    '/customer/customer-49.jpg',
    '/customer/customer-50.jpg',

    '/customer/customer-51.jpg',
    '/customer/customer-52.jpg',
    '/customer/customer-53.jpg',
    '/customer/customer-54.jpg',
    '/customer/customer-55.jpg',
    '/customer/customer-56.jpg',
    '/customer/customer-57.jpg',
    '/customer/customer-58.jpg',
    '/customer/customer-59.jpg',
    '/customer/customer-60.jpg',

    '/customer/customer-61.jpg',
    '/customer/customer-62.jpg',
    '/customer/customer-63.jpg',
    '/customer/customer-64.jpg',
    '/customer/customer-65.jpg',
    '/customer/customer-66.jpg',
    '/customer/customer-67.jpg',
    '/customer/customer-68.jpg',
];

const Footer = React.memo(() => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef(null);
  const transitioning = useRef(false);

  const slideWidth = 160; // w-40 = 160px
  const gapWidth = 24; // space-x-6 = 1.5rem = 24px

  // Adjust visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Create extended array with clones
  const extendedImages = [...customerImages, ...customerImages.slice(0, visibleCount)];

  const next = useCallback(() => {
    if (transitioning.current) return;
    transitioning.current = true;
    setIndex(prev => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  // Handle loop reset
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      transitioning.current = false;
      if (index >= customerImages.length) {
        track.style.transition = 'none';
        setIndex(0);
        requestAnimationFrame(() => {
          track.style.transition = 'transform 0.5s ease-in-out';
        });
      }
    };

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => track.removeEventListener('transitionend', handleTransitionEnd);
  }, [index]);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Customer Images Carousel */}
      <div className="container mx-auto px-4 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">Our Valued Customers</h3>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden mx-auto" style={{ width: `${(slideWidth + gapWidth) * visibleCount - gapWidth}px` }}>
            <div
              ref={trackRef}
              className="flex space-x-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (slideWidth + gapWidth)}px)`
              }}
            >
              {extendedImages.map((image, idx) => (
                <div
                  key={idx}
                  className="w-40 h-40 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Customer ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
            <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            <Link to="/coming-soon" className="hover:text-blue-400 transition-colors">My Account</Link>
            <Link to="/coming-soon" className="hover:text-blue-400 transition-colors">Checkout</Link>
            <Link to="/shop" className="hover:text-blue-400 transition-colors">Shop</Link>
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