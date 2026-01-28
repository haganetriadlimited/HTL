import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Screen } from '../types';
import { Home, Briefcase, Package, MessageCircle, Send } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const items = [
    { id: 'DASHBOARD', label: 'Home', icon: <Home className="w-6 h-6" />, route: '/' },
    { id: 'SERVICES', label: 'Services', icon: <Briefcase className="w-6 h-6" />, route: '/services' },
    { id: 'CATALOG', label: 'Products', icon: <Package className="w-6 h-6" />, route: '/catalog' },
    { id: 'WHATSAPP', label: 'Chat', icon: <MessageCircle className="w-6 h-6" />, external: true, route: 'https://wa.me/2347064192851' },
    { id: 'INQUIRY', label: 'Inquiry', icon: <Send className="w-6 h-6" />, route: '/inquiry' },
  ];

  const isActive = (route: string) => {
    if (route === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(route);
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-[100] px-2 py-3 flex items-center justify-around border-t border-gold/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      style={{
        backgroundColor: '#0f2039',
        opacity: 1,
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))'
      }}
    >
      {items.map((item) => {
        const active = !item.external && isActive(item.route);

        if (item.external) {
          return (
            <a
              key={item.id}
              href={item.route}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 min-w-[64px] transition-all active:scale-90"
            >
              <div className="p-2 rounded-xl transition-all text-slate-400">
                {item.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                {item.label}
              </span>
            </a>
          );
        }

        return (
          <Link
            key={item.id}
            to={item.route}
            className="flex flex-col items-center gap-1.5 min-w-[64px] transition-all active:scale-90"
          >
            <div className={`p-2 rounded-xl transition-all ${active ? 'bg-gold text-slate-950 shadow-lg shadow-gold/20 scale-110' : 'text-slate-400'
              }`}>
              {item.icon}
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-gold' : 'text-slate-500'
              }`}>
              {item.label}
            </span>
            {active && (
              <motion.div
                layoutId="bottom-nav-indicator"
                className="w-1 h-1 bg-gold rounded-full"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;