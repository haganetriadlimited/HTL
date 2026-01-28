import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Screen } from '../types';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [100, 80]);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Map Screen enum to routes
  const getRouteForScreen = (screen: Screen): string => {
    const routeMap: Record<Screen, string> = {
      [Screen.DASHBOARD]: '/',
      [Screen.SERVICES]: '/services',
      [Screen.SERVICE_DETAIL]: '/services',
      [Screen.PORTAL]: '/portal',
      [Screen.CATALOG]: '/catalog',
      [Screen.VAULT]: '/vault',
      [Screen.TRUST]: '/trust',
      [Screen.INQUIRY]: '/inquiry',
    };
    return routeMap[screen] || '/';
  };

  // Check if current route matches screen
  const isActiveScreen = (screen: Screen): boolean => {
    const route = getRouteForScreen(screen);
    if (route === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(route);
  };

  return (
    <>
      <motion.header
        style={{ height }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center cursor-pointer group h-full py-2"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={LOGO_URL}
              alt="Hagane Triad Limited"
              className="h-full w-auto object-contain rounded-md shadow-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const route = getRouteForScreen(item.id as Screen);
              const isActive = isActiveScreen(item.id as Screen);

              return (
                <Link
                  key={item.id}
                  to={route}
                  className={`text-[12px] font-black tracking-widest uppercase transition-all hover:text-gold relative group ${isActive ? 'text-gold' : 'text-slate-300'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/inquiry"
              className="hidden md:block px-8 py-3 bg-gold text-slate-950 font-black text-xs rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-gold/20 uppercase tracking-widest"
            >
              Inquiry
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors flex items-center gap-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#0f2039] flex flex-col pt-32 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const route = getRouteForScreen(item.id as Screen);
                const isActive = isActiveScreen(item.id as Screen);

                return (
                  <Link
                    key={item.id}
                    to={route}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-6 border-b border-white/5 text-xl font-black uppercase tracking-tight ${isActive ? 'text-gold' : 'text-white'
                      }`}
                  >
                    {item.label}
                    <ChevronRight className={`w-6 h-6 ${isActive ? 'text-gold' : 'text-slate-800'}`} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;