import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  }, [formData]);

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for all your technology needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* VEL SYSTEMS Corporate */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                VEL SYSTEMS CORPORATE ADDRESS
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <MapPin className="text-blue-600 mb-2" size={24} />
                  <p className="text-gray-700 text-center">
                    NO.7, Varadhanar STREET,<br />
                    VedHACHALA Nagar,<br />
                    Chengalpattu, Tamil Nadu 603001
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="text-blue-600 mb-2" size={24} />
                  <a href="mailto:sales@velsystems.in" className="text-blue-600 hover:text-blue-800 transition-colors">
                    sales@velsystems.in
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="text-blue-600 mb-2" size={24} />
                  <a href="tel:+919865199933" className="text-blue-600 hover:text-blue-800 transition-colors">
                    (+91) 98651 99933
                  </a>
                </div>
              </div>
            </div>

            {/* DELL Showroom */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                DELL SHOWROOM ADDRESS
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <MapPin className="text-blue-600 mb-2" size={24} />
                  <p className="text-gray-700 text-center">
                    No. 25, Devadoss St,<br />
                    Vedachalam Nagar, Chengalpattu,<br />
                    Gokulapuram, Tamil Nadu 603002
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="text-blue-600 mb-2" size={24} />
                  <a href="mailto:dellstorechengalpattu@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    dellstorechengalpattu@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="text-blue-600 mb-2" size={24} />
                  <a href="tel:+919865190109" className="text-blue-600 hover:text-blue-800 transition-colors">
                    (+91) 9865190109
                  </a>
                </div>
              </div>
            </div>

            {/* Acer Store */}
            <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Acer Store Address
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <MapPin className="text-blue-600 mb-2" size={24} />
                  <p className="text-gray-700 text-center">
                    NO.7, Varadhanar STREET,<br />
                    VedHACHALA Nagar,<br />
                    Chengalpattu, Tamil Nadu 603001
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="text-blue-600 mb-2" size={24} />
                  <a href="mailto:acerstorechengalpattu@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    acerstorechengalpattu@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="text-blue-600 mb-2" size={24} />
                  <a href="tel:+919894509664" className="text-blue-600 hover:text-blue-800 transition-colors">
                    (+91) 9894509664
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Office
              </h3>
              <p className="text-lg text-gray-600">
                Send us a message and we'll get back to you soon
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                Interactive Map Location - Chengalpattu, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;