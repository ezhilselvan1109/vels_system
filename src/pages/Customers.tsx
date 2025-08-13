import React, { useMemo } from 'react';

const Customers = React.memo(() => {
  const customerImages = useMemo(() => [
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
  ], []);

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued Customers
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Trusted by thousands of businesses and individuals across Tamil Nadu
          </p>
        </div>
      </section>

      {/* Customer Images Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {customerImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <img 
                  src={image} 
                  alt={`Customer ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-lg font-medium text-gray-900">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">20,000+</div>
              <div className="text-lg font-medium text-gray-900">Happy Customers</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-medium text-gray-900">Corporate Partners</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-lg font-medium text-gray-900">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Customers.displayName = 'Customers';

export default Customers;