import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { COMMODITIES } from '../../constants';
import { Commodity } from '../../types';
import { Info, X, Zap, Droplet, Package, ChevronRight } from 'lucide-react';

const Catalog: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Commodity | null>(null);

  // Disable body scroll when a product is selected
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Fuel': return <Droplet className="w-5 h-5" />;
      case 'Metal': return <Package className="w-5 h-5" />;
      case 'Crude': return <Zap className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#122540] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pt-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Inventory & Specs</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Commodity <span className="text-gold">Catalog</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed text-balance">Standardized sourcing, global specifications, and execution certainty across Africa's corridors.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['ALL', 'FUELS', 'METALS', 'CRUDE', 'GAS'].map(f => (
              <button key={f} className="px-5 py-2 rounded-lg border border-white/10 text-[10px] font-black tracking-widest text-slate-400 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all uppercase">
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {COMMODITIES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(c)}
              className="group bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all shadow-2xl cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-gold shadow-xl">
                    {getIcon(c.category)}
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black tracking-[0.2em] text-gold uppercase">{c.category} Class</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ID: HTL-{c.id}00</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-gold transition-colors">{c.name}</h3>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium line-clamp-2">{c.description}</p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em]">Standardization</span>
                    <span className="text-[11px] text-white font-bold">{c.spec}</span>
                  </div>
                  <button className="text-gold text-[10px] font-black tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                    Spec Detail <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[150] bg-slate-950/95 backdrop-blur-3xl overflow-y-auto pt-24 pb-32">
              {/* Persistent Fixed Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="fixed top-8 right-8 lg:top-12 lg:right-12 z-[200] text-white/70 hover:text-white transition-all p-4 bg-white/5 hover:bg-gold/20 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-center group"
                aria-label="Close detail"
              >
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
              </button>

              <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-full">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.95 }}
                  className="w-full max-w-5xl bg-[#0f2039] rounded-[4rem] border border-gold/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row relative"
                >
                  {/* Detail Left: High-Impact Visual */}
                  <div className="w-full md:w-[45%] aspect-square md:aspect-auto relative bg-slate-900 overflow-hidden">
                    <img
                      src={selectedItem.image}
                      className="w-full h-full object-cover"
                      alt={selectedItem.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent md:bg-gradient-to-r" />

                    {/* Badge Overlay */}
                    <div className="absolute bottom-10 left-10 hidden md:block">
                      <div className="px-6 py-2 bg-gold text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        HTL Certified Asset
                      </div>
                    </div>
                  </div>

                  {/* Detail Right: Content & Specs */}
                  <div className="w-full md:w-[55%] p-10 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 text-gold shadow-xl">
                        {getIcon(selectedItem.category)}
                      </div>
                      <div>
                        <span className="text-gold font-black tracking-[0.4em] text-[10px] uppercase block mb-1">{selectedItem.category} CLASSIFICATION</span>
                        <span className="text-slate-400 font-bold tracking-widest text-[9px] uppercase">Grade: {selectedItem.grade}</span>
                      </div>
                    </div>

                    <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">{selectedItem.name}</h3>

                    <div className="space-y-6 mb-12">
                      <p className="text-xl text-slate-300 leading-relaxed font-light italic">
                        "{selectedItem.description}"
                      </p>
                      <p className="text-base text-slate-500 leading-relaxed">
                        Hagane Triad Limited ensures execution certainty for {selectedItem.name} through direct refinery verification and secure supply corridors. We provide end-to-end logistics tracking for all {selectedItem.category} deliveries.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                      <div className="p-8 bg-slate-950/40 rounded-3xl border border-white/5 group hover:border-gold/20 transition-all">
                        <p className="text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase mb-3">Refinery Standard</p>
                        <p className="text-lg lg:text-xl text-white font-black uppercase tracking-tight">{selectedItem.grade}</p>
                      </div>
                      <div className="p-8 bg-slate-950/40 rounded-3xl border border-white/5 group hover:border-gold/20 transition-all">
                        <p className="text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase mb-3">Compliance Spec</p>
                        <p className="text-lg lg:text-xl text-white font-black uppercase tracking-tight">{selectedItem.spec}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                      <button
                        onClick={() => {
                          setSelectedItem(null);
                          onProductInquiry(selectedItem);
                        }}
                        className="flex-1 py-6 bg-gold text-slate-950 font-black rounded-2xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-[11px] shadow-2xl shadow-gold/20 flex items-center justify-center gap-3"
                      >
                        Procurement Inquiry <ChevronRight className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="px-10 py-6 border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-[11px]"
                      >
                        Return to Catalog
                      </button>
                    </div>

                    <p className="mt-12 text-slate-600 text-[9px] font-bold uppercase tracking-[0.4em] text-center md:text-left">
                      Terms: FOB / CIF / CIP / DAP • SGS Verified
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Catalog;