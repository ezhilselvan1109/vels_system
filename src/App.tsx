import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import WhatsAppFAB from './components/WhatsAppFAB';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Desktop = lazy(() => import('./pages/Desktop'));
const Laptop = lazy(() => import('./pages/Laptop'));
const Printer = lazy(() => import('./pages/Printer'));
const Tablet = lazy(() => import('./pages/Tablet'));
const Software = lazy(() => import('./pages/Software'));
const MobileAccessories = lazy(() => import('./pages/MobileAccessories'));
const PowerSolutions = lazy(() => import('./pages/PowerSolutions'));
const Shop = lazy(() => import('./pages/Shop'));
const Rental = lazy(() => import('./pages/Rental'));
const Blog = lazy(() => import('./pages/Blog'));
const Services = lazy(() => import('./pages/Services'));
const Customers = lazy(() => import('./pages/Customers'));
const Contact = lazy(() => import('./pages/Contact'));
const Server = lazy(() => import('./pages/Server'));
const NetworkHardware = lazy(() => import('./pages/NetworkHardware'));
const UPS = lazy(() => import('./pages/UPS'));
const Firewall = lazy(() => import('./pages/Firewall'));
const ITPeripherals = lazy(() => import('./pages/ITPeripherals'));
const Projector = lazy(() => import('./pages/Projector'));
const DataRecovery = lazy(() => import('./pages/DataRecovery'));
const DataStorage = lazy(() => import('./pages/DataStorage'));
const Photocopier = lazy(() => import('./pages/Photocopier'));
const WiFiAccessPoint = lazy(() => import('./pages/WiFiAccessPoint'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Navigation />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/desktop" element={<Desktop />} />
              <Route path="/laptop" element={<Laptop />} />
              <Route path="/printer" element={<Printer />} />
              <Route path="/tablet" element={<Tablet />} />
              <Route path="/software" element={<Software />} />
              <Route path="/mobile-accessories" element={<MobileAccessories />} />
              <Route path="/power-solutions" element={<PowerSolutions />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/rental" element={<Rental />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/server" element={<Server />} />
              <Route path="/network-hardware" element={<NetworkHardware />} />
              <Route path="/ups" element={<UPS />} />
              <Route path="/firewall" element={<Firewall />} />
              <Route path="/it-peripherals" element={<ITPeripherals />} />
              <Route path="/projector" element={<Projector />} />
              <Route path="/data-recovery" element={<DataRecovery />} />
              <Route path="/data-storage" element={<DataStorage />} />
              <Route path="/photocopier" element={<Photocopier />} />
              <Route path="/wifi-access-point" element={<WiFiAccessPoint />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </Router>
  );
}

export default App;