import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import WhatsAppFAB from './components/WhatsAppFAB';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SignalBooster from './pages/SignalBooster';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

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
const CCTV = lazy(() => import('./pages/CCTV'));
const DoorAccessControl = lazy(() => import('./pages/DoorAccessControl'));
const BiometricSystem = lazy(() => import('./pages/BiometricSystem'));
const Intercom = lazy(() => import('./pages/Intercom'));
const BoomBarrier = lazy(() => import('./pages/BoomBarrier'));
const MetalDetectorSignalJammer = lazy(() => import('./pages/MetalDetectorSignalJammer'));
const VideoDoorPhone = lazy(() => import('./pages/VideoDoorPhone'));
const CashCountingMachine = lazy(() => import('./pages/CashCountingMachine'));
const BurglarAlarmSystem = lazy(() => import('./pages/BurglarAlarmSystem'));
const GPSVehicleTracker = lazy(() => import('./pages/GPSVehicleTracker'));
const SafetyLockers = lazy(() => import('./pages/SafetyLockers'));
const FireAlarms = lazy(() => import('./pages/FireAlarms'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
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
                    <Route path="/cctv" element={<CCTV />} />
                    <Route path="/door-access-control" element={<DoorAccessControl />} />
                    <Route path="/biometric-system" element={<BiometricSystem />} />
                    <Route path="/intercom" element={<Intercom />} />
                    <Route path="/boom-barrier" element={<BoomBarrier />} />
                    <Route path="/metal-detector-signal-jammer" element={<MetalDetectorSignalJammer />} />
                    <Route path="/video-door-phone" element={<VideoDoorPhone />} />
                    <Route path="/cash-counting-machine" element={<CashCountingMachine />} />
                    <Route path="/burglar-alarm-system" element={<BurglarAlarmSystem />}/>
                    <Route path="/gps-vehicle-tracker" element={<GPSVehicleTracker />} />
                    <Route path="/safety-lockers" element={<SafetyLockers />} />
                    <Route path="/fire-alarms" element={<FireAlarms />} />
                    <Route path="/signal-booster" element={<SignalBooster />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/shop/:id" element={<ProductDetail />} />
                    <Route path="/profile/*" element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    } />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <WhatsAppFAB />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;