import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-[#122540] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-32 pb-40">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-gold" />
            <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.95] text-balance">
            Our <span className="text-gold">Operational</span> <br /> Excellence.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light text-balance max-w-2xl">
            Providing vertically integrated solutions for global commodity and energy markets, ensuring transparency and ironclad reliability at every milestone.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {SERVICES_DATA.map((service, i) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center cursor-pointer group`}
              >
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative">
                  <img
                    src={service.image}
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
                <div className="w-full lg:w-1/2 space-y-8 py-4">
                  <div className="p-5 rounded-2xl bg-slate-900 border border-gold/10 inline-flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500 shadow-lg">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight group-hover:text-gold transition-colors leading-none">{service.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed text-balance">{service.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">{service.tag}</span>
                    </div>
                    <button className="text-gold text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Case Study <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;