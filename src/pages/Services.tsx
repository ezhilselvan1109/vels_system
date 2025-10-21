import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Services = React.memo(() => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive technology support and maintenance solutions
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {/* AMC */}
            <div className="bg-white rounded-2xl shadow-xl border-l-8 border-blue-700 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ANNUAL MAINTENANCE CONTRACT – COMPREHENSIVE (AMC)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By analyzing the entire specification/configuration, the amount will be fixed accordingly. Valid for one year, covering system responsibilities including spare parts. Preventive maintenance at least once a month, plus on-demand service.
              </p>
            </div>

            {/* ASC */}
            <div className="bg-white rounded-2xl shadow-xl border-l-8 border-green-500 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ANNUAL SERVICE CONTRACT – NON COMPREHENSIVE (ASC)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our engineers provide all model services at a reasonable fixed charge. Valid for one year, excluding spare parts. Covers preventive and on-demand maintenance services with a fixed amount.
              </p>
            </div>

            {/* On Call Services */}
            <div className="bg-white rounded-2xl shadow-xl border-l-8 border-purple-600 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ON CALL SERVICES
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experienced service engineers provide optimal service within working hours in response to customer requests.
              </p>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
                Reach out to us anytime. We’re here to provide the support and assistance you need.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Phone */}
                <div className="relative bg-gradient-to-tr from-blue-500 to-blue-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                    <Phone className="text-blue-500" size={36} />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mt-8 mb-4">Call Us</h4>
                  <a href="tel:+919865180104" className="text-lg text-white font-medium hover:underline">
                    +91 9865180104
                  </a>
                </div>

                {/* Email */}
                <div className="relative bg-gradient-to-tr from-green-400 to-green-300 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                    <Mail className="text-green-400" size={36} />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mt-8 mb-4">Email Us</h4>
                  <a href="mailto:murali@velsystems.in" className="text-lg text-white font-medium hover:underline">
                    murali@velsystems.in
                  </a>
                </div>

                {/* Address */}
                <div className="relative bg-gradient-to-tr from-purple-500 to-purple-400 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                    <MapPin className="text-purple-500" size={36} />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mt-8 mb-4">Visit Us</h4>
                  <p className="text-white text-lg leading-snug">
                    NO.7, Varadanar Street,<br />
                    Vedhachala Nagar,<br />
                    Chengalpattu-603 001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;