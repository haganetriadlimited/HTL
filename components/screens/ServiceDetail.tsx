import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../../constants';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Find the service by ID
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="bg-[#122540] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-4">Service Not Found</h2>
          <Link to="/services" className="text-gold hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#122540] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-32">
        <Link
          to="/services"
          className="flex items-center gap-2 text-gold font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all pt-8"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-black uppercase tracking-widest">
              {service.icon} {service.tag}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              {service.details || service.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="glass p-6 rounded-2xl border border-gold/10">
                <ShieldCheck className="w-8 h-8 text-gold mb-4" />
                <h4 className="text-white font-black uppercase tracking-tight mb-2 text-lg">Guaranteed Quality</h4>
                <p className="text-slate-500 text-sm">Full compliance with international standards and refinery-direct sourcing.</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-gold/10">
                <Zap className="w-8 h-8 text-gold mb-4" />
                <h4 className="text-white font-black uppercase tracking-tight mb-2 text-lg">Fast Execution</h4>
                <p className="text-slate-500 text-sm">Efficient turnaround times via our established logistics corridors.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-12">
              <Link
                to={`/inquiry?type=service&item=${service.id}`}
                className="px-10 py-5 bg-gold text-slate-950 font-black rounded-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20 tracking-widest uppercase text-xs"
              >
                Inquire Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-gold/20 shadow-2xl relative">
              <img
                src={service.image}
                className="w-full h-full object-cover"
                alt={service.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-8 glass rounded-3xl border border-gold/30 backdrop-blur-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="w-6 h-6 text-gold" />
                    <span className="text-gold font-black uppercase tracking-widest text-[10px]">Active Operations</span>
                  </div>
                  <p className="text-white text-lg font-bold">Lagos, Nigeria | Dar es Salaam, TZ | Lubumbashi, DRC</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mt-32 pt-24 border-t border-gold/10">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12">Case Studies & Execution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-10 glass rounded-[2.5rem] border border-gold/10 group hover:border-gold/50 transition-all">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">Project Alpha-0{i}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Facilitated the delivery of 250,000 MT of industrial AGO to Katanga-based mining operations via Dar es Salaam port.
                </p>
                <div className="mt-8 pt-6 border-t border-gold/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Completed 2024</span>
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;