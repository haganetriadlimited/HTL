
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Truck, Warehouse, CheckCircle2, MapPin } from 'lucide-react';

const TriadPortal: React.FC = () => {
  const steps = [
    { label: 'SOURCE', desc: 'Nigerian Refineries (Dangote)', icon: <Warehouse className="w-8 h-8" />, color: 'from-blue-500' },
    { label: 'LOGISTICS', desc: 'Trucking & Marine Freight', icon: <Truck className="w-8 h-8" />, color: 'from-gold' },
    { label: 'STORAGE', desc: 'Tanga & Dar es Salaam Ports', icon: <Anchor className="w-8 h-8" />, color: 'from-slate-500' },
    { label: 'DISTRIBUTION', desc: 'Katanga / DRC / Zambia', icon: <MapPin className="w-8 h-8" />, color: 'from-green-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="mb-12">
        <h2 className="font-heading text-4xl font-black text-white mb-4">THE TRIAD PORTAL</h2>
        <p className="text-slate-400 max-w-2xl">Visualizing our strategic supply chain from West Africa to the heart of the Katanga region.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-xl border border-white/10 hover:border-gold/50 transition-all group"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} to-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <div className="text-white">{step.icon}</div>
            </div>
            <h3 className="font-heading font-black text-xl text-white mb-2">{step.label}</h3>
            <p className="text-slate-400 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 glass rounded-2xl p-12 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-heading text-3xl font-black text-white mb-6">REGIONAL IMPACT</h3>
            <div className="space-y-6">
              {[
                { label: 'West Africa Hub', value: 'Lagos, Nigeria' },
                { label: 'East Africa Hub', value: 'Tanga, Tanzania' },
                { label: 'Central Africa Hub', value: 'Lubumbashi, DRC' },
              ].map((loc, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-gold/10 flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-black tracking-widest">{loc.label}</p>
                    <p className="text-lg text-white font-bold">{loc.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video bg-slate-950 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
             <img src="https://picsum.photos/seed/map/800/400" className="opacity-40 grayscale" alt="Map" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
             <div className="absolute p-8 bottom-0 left-0">
               <span className="text-gold font-mono font-bold">RADAR ACTIVE:</span>
               <p className="text-white font-heading font-black">600+ LOGISTICS UNITS TRACKED</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriadPortal;
