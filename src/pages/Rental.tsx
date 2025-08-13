import React, { useMemo } from 'react';
import ProductCard from '../components/ProductCard';

const Rental = React.memo(() => {
  const rentalProducts = useMemo(() => [
    {
      id: 'laptop-rental',
      title: 'Laptop Rental',
      description: 'Rent laptops for short-term or long-term use. ⇒Latest Touch screen Laptops with dedicated Graphic capabilities. ⇒Laptops enabled with TRM and M.2 SSD Hard Disks & FHD displays. ⇒Extremely competitive laptop hire pricing and value for money. ⇒Hassel free hire, delivery and setup. ⇒Fast and reliable hire support cover.',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'desktop-rental',
      title: 'Desktop Rental',
      description: 'A modern desktop computer with a black tower, widescreen monitor, wireless keyboard, and mouse on a wooden desk. ⇒Unbeatable prices for Desktop Computer hire. ⇒Desktops ranging from Core i3 to Core i9. ⇒Efficient delivery and service within hours & excellence in technical support. ⇒Wide range and top brands desktop computer.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'monitor-rental',
      title: 'Monitor Rental',
      description: '⇒Monitors typically range from 21 inches to 32 inches or larger, catering to various workspace needs. ⇒Ensure compatibility with various devices through ports such as HDMI, DisplayPort, USB-C, VGA, or DVI ⇒ Choose from IPS, TN, and VA for varying color and viewing capabilities. ⇒Hassel free hire, delivery and setup. ⇒Fast and reliable hire support cover.',
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'tv-rental',
      title: 'TV Rental',
      description: '⇒Rent TVs in various sizes (32″ to 65″) to perfectly match your event\'s needs. ⇒Flexible rental period whether you need it for a day, a week or longer. ⇒Cost-Effective to Save money with affordable TV rental options that fit your budget. ⇒Hassel free hire, delivery and setup. ⇒Get reliable tech support throughout your rental.',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'tv-stand-rental',
      title: 'TV Stand Rental',
      description: '⇒Customize the stand height for the best viewing angle. ⇒Strong build to safely hold TVs of various sizes. ⇒Wide compatibility to fits TVs from 32″ to 65″ and major brands. ⇒Easily portable for different event locations. ⇒Fast & reliable hire support cover. ⇒Equipped with wheels for easy movement and positioning.',
      image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'speaker-rental',
      title: 'Speaker With Mic',
      description: '⇒Flexible Rental Periods to rent from one week to one month to fit your event needs. ⇒Options range from portable speakers to professional sound systems for different venues. ⇒ Available for 1 unit to 100 units to accommodate any event size. ⇒Hassel free hire, delivery and setup. ⇒ Each rental includes high-quality microphones for enhanced audio clarity.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'projector-rental',
      title: 'Projector Rental',
      description: '⇒High-Quality Projection to deliver crisp, clear images for presentations and events. ⇒flexible Rent for a day, week, or month based on your requirements. ⇒ Quick and simple installation process for hassle-free use. ⇒Compatible with laptops, smartphones, and other media devices. ⇒ Optimize your budget by choosing to rent equipment rather than purchasing it outright.',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'projector-screen-rental',
      title: 'Projector Screen Rental',
      description: '⇒Options typically range from 80″ to 200″ diagonal. ⇒High-quality matte white, high gain, or tensioned surfaces. ⇒Lightweight and foldable designs for easy transport and setup. ⇒Perfect for indoor and outdoor use, including presentations, movie nights, and events. ⇒Hassel free hire, delivery and setup. ⇒Compatibility with all standard projectors.',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'laser-printer-rental',
      title: 'Laser Printer Rental',
      description: '⇒High-speed printing for large tasks, 20-50 pages per minute ⇒Available for short-term (weekly) or long-term (monthly) rentals. ⇒Rent from 1 unit to 100 units to meet your specific needs. ⇒Cost-effective printing with lower cost per page compared to inkjet printers. ⇒Options include single-function and all-in-one laser printers. ⇒Hassel free hire, delivery and setup.',
      image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ], []);

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Are Here To Rent Your Favourite Products Today !
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Vel Systems is widely to offers affordable rentals for laptops, desktops, monitors, TVs, projectors, and printers. Our flexible rental terms ensure access to high-quality equipment for events, projects, or personal use without the burden of ownership. We prioritize seamless experiences with reliable customer support and maintenance services. Enjoy hassle-free rental solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Rental Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                id={product.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

Rental.displayName = 'Rental';

export default Rental;