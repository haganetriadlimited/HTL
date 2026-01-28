import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Service } from '../../types';
import { SERVICES_DATA, LOGO_URL } from '../../constants';
import {
  ChevronRight,
  Star,
  Quote,
  ArrowRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const testimonials = [
    {
      name: "Jean-Pierre Kabila",
      role: "Mining Operations Lead, Katanga",
      text: "HTL's execution certainty in the AGO market has been a game-changer for our remote mining operations. Their logistics reliability is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Mwangi",
      role: "Logistics Director, East Africa",
      text: "Sourcing through Hagane Triad gives us peace of mind. Their compliance with ISO standards and clear communication is world-class.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Industrial Procurement Officer",
      text: "The transition from Nigerian refineries to East African ports is seamless. Hagane is truly powering Africa's industrial future.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0f2039] pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-[2px] bg-gold" />
              <span className="text-gold text-[11px] font-black tracking-[0.4em] uppercase">Est. 2025 | Hagane Triad Limited</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.95] text-balance">
              Pioneering <br />
              <span className="text-gold">Excellence</span> <br />
              in Energy and <br /> Commodities.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-14 max-w-xl leading-relaxed font-light text-balance">
              Bridging the gap between global commodity markets and Africa's industrial needs through <span className="text-white font-semibold italic underline decoration-gold/40 underline-offset-4">Honour, Integrity, and Resilience.</span>
            </p>
            <div className="flex flex-wrap gap-6 w-full sm:w-auto">
              <button
                onClick={() => onNavigate(Screen.CATALOG)}
                className="px-12 py-6 bg-gold text-slate-950 font-black rounded-lg flex items-center justify-center gap-4 hover:translate-y-[-4px] active:translate-y-[1px] transition-all shadow-2xl shadow-gold/30 tracking-widest uppercase text-xs"
              >
                View Products <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate(Screen.SERVICES)}
                className="px-12 py-6 border-2 border-gold/40 text-gold font-black rounded-lg hover:bg-gold/10 transition-all tracking-widest uppercase text-xs"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 glass-dark shadow-2xl relative">
              <img
                src="https://i.ibb.co/rfzw3B4s/Hagane-Triad-1.jpg"
                className="w-full h-full object-cover"
                alt="Industrial Energy Hub"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area - Light Background */}
      <div className="bg-[#F2F5FF] text-[#0f2039] overflow-hidden">

        {/* About Summary Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-24 items-center mb-16 lg:mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-[11px] font-black tracking-[0.4em] uppercase">Strength & Resilience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f2039] uppercase tracking-tighter leading-[1.1]">
              Forged in <span className="text-gold">Strength</span>,<br /> Defined by Excellence.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Headquartered in Lagos, Hagane Triad Limited (HTL) is a dynamic multi-commodity trading and energy infrastructure company. Our name, 'Hagane', meaning 'steel' in Japanese, symbolizes strength, resilience, and unwavering commitment to excellence.
              </p>
              <p>
                As a multi-commodity firm, we specialize in fuels, metals, energy infrastructure, crude oil, and LNG. Established in 2025, HTL has emerged as a trusted partner in the African energy sector.
              </p>
            </div>
            <button
              onClick={() => onNavigate(Screen.VAULT)}
              className="group inline-flex items-center gap-4 text-gold font-black uppercase tracking-widest text-xs border-b-2 border-gold/10 pb-4 hover:border-gold transition-all"
            >
              Learn More About Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-3xl border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale opacity-80 group-hover:grayscale-0"
                alt="HTL Infrastructure"
              />
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-xl">
              <h2 className="text-5xl sm:text-6xl font-black text-[#0f2039] mb-8 uppercase tracking-tighter">Core <span className="text-gold">Capabilities</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed">Navigating global trade complexities with regional precision and execution certainty.</p>
            </div>
            <button
              onClick={() => onNavigate(Screen.SERVICES)}
              className="px-10 py-5 border-2 border-[#0f2039]/10 text-[#0f2039] font-black rounded-xl hover:bg-[#0f2039] hover:text-white transition-all text-xs uppercase tracking-widest"
            >
              View All Services
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES_DATA.slice(0, 3).map((s, i) => (
              <Link
                key={i}
                to={`/services/${s.id}`}
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  className="group relative h-[500px] rounded-[3.5rem] overflow-hidden cursor-pointer shadow-xl transition-all border-4 border-white"
                >
                  <img
                    src={s.image}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                    alt={s.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2039] via-[#0f2039]/30 to-transparent" />
                  <div className="absolute inset-0 p-16 flex flex-col justify-between items-start">
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-gold shadow-xl">
                      {s.icon}
                    </div>
                    <div>
                      <div className="inline-block px-5 py-2 rounded-full bg-gold/20 border border-gold/40 text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-6 shadow-lg">
                        {s.tag}
                      </div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none group-hover:text-gold transition-colors">{s.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 mb-20 lg:mb-32">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#0f2039] uppercase tracking-tighter mb-4">Client <span className="text-gold">Commitments</span></h2>
            <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
            <p className="text-slate-500 uppercase text-[11px] font-black tracking-[0.5em] mt-8">Reliable Execution Across the Continent</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-[#0f2039]/5 flex flex-col relative">
                <div className="absolute -top-6 -left-6 bg-gold p-5 rounded-full shadow-lg">
                  <Quote className="w-8 h-8 text-[#0f2039]" />
                </div>
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-slate-600 text-lg leading-relaxed italic font-light mb-12 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-full bg-[#0f2039]/10 flex items-center justify-center font-black text-[#0f2039]">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-[#0f2039] font-black uppercase text-sm tracking-tight">{t.name}</h4>
                    <p className="text-gold font-bold text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="pt-48 pb-20 bg-[#0f2039] rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <h2 className="text-7xl sm:text-9xl md:text-[12rem] lg:text-[16rem] font-black text-white/[0.04] uppercase select-none tracking-tighter leading-none mb-[-4rem] sm:mb-[-6rem]">
            HAGANE TRIAD
          </h2>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 border-2 border-gold/40 rounded-3xl flex items-center justify-center mb-12 rotate-45 group hover:rotate-90 transition-all duration-700 shadow-2xl bg-slate-950 overflow-hidden">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain p-3 -rotate-45 group-hover:-rotate-90 transition-all" />
            </div>
            <p className="text-gold font-black tracking-[0.8em] uppercase text-sm sm:text-lg mb-16">Honour | Integrity | Resilience</p>
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 text-slate-500 text-[11px] font-black uppercase tracking-[0.3em]">
              <span className="hover:text-slate-300 transition-colors cursor-pointer">© 2025 Hagane Triad Ltd</span>
              <div className="hidden sm:block w-2 h-2 rounded-full bg-gold/30" />
              <span className="hover:text-slate-300 transition-colors cursor-pointer">Energy Sourcing Excellence</span>
              <div className="hidden sm:block w-2 h-2 rounded-full bg-gold/30" />
              <span className="hover:text-slate-300 transition-colors cursor-pointer">Global Trading Hub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;