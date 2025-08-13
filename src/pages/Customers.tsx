import React, { useMemo } from 'react';

const Customers = React.memo(() => {
  const customerImages = useMemo(() => [
    'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/7688390/pexels-photo-7688390.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/7688468/pexels-photo-7688468.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=300'
  ], []);

  return (
    <div className="py-16">
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