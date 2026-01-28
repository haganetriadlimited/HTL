import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Service, Commodity } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Dashboard from './components/screens/Dashboard';
import Services from './components/screens/Services';
import ServiceDetail from './components/screens/ServiceDetail';
import TriadPortal from './components/screens/TriadPortal';
import Catalog from './components/screens/Catalog';
import LeadershipVault from './components/screens/LeadershipVault';
import TrustCenter from './components/screens/TrustCenter';
import InquiryForm from './components/screens/InquiryForm';
import { LOGO_URL } from './constants';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const screenVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0f2039] flex flex-col items-center justify-center z-50 px-12">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            borderColor: ['#1a3356', '#b99130', '#1a3356']
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-56 h-56 border-2 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-gold/20 overflow-hidden bg-white/5"
        >
          <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain p-6" />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "240px" }}
          className="h-1.5 bg-gold mt-12 rounded-full shadow-[0_0_20px_rgba(185,145,48,0.5)]"
        />
        <p className="mt-8 text-slate-400 font-mono text-xs tracking-[0.4em] uppercase font-bold">Honour | Integrity | Resilience</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F5FF] flex flex-col selection:bg-gold selection:text-slate-950">
      <Header />

      <main className="flex-1 relative pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full"
          >
            <Routes location={location}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/portal" element={<TriadPortal />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/vault" element={<LeadershipVault />} />
              <Route path="/trust" element={<TrustCenter />} />
              <Route path="/inquiry" element={<InquiryForm />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav />
    </div>
  );
};

export default App;