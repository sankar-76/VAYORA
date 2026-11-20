import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import TravelPlannerPage from './pages/TravelPlannerPage';
import MyTripsPage from './pages/MyTripsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between selection:bg-gold-500 selection:text-forest-950">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onShowToast={showToast} />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/experiences/:slug" element={<ExperienceDetailPage />} />
            <Route path="/planner" element={<TravelPlannerPage onShowToast={showToast} />} />
            <Route path="/my-trips" element={<MyTripsPage onShowToast={showToast} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage onShowToast={showToast} />} />
          </Routes>
        </main>

        <Footer onShowToast={showToast} />

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
