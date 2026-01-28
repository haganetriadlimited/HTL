
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, Landmark, Globe } from 'lucide-react';

const TrustCenter: React.FC = () => {
  const credentials = [
    { label: 'ISO 9001', desc: 'Quality Management Systems', icon: <FileCheck /> },
    { label: 'ESG PRINCIPLES', desc: 'Sustainable Sourcing Commitments', icon: <Globe /> },
    { label: 'ESCROW SECURED', desc: 'Transaction Safeguarding Protocols', icon: <Lock /> },
    { label: 'ICC INCOTERMS', desc: 'Certified Global Trade Compliance', icon: <ShieldCheck /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-heading text-4xl font-black text-white mb-4">COMPLIANCE & TRUST</h2>
          <p className="text-slate-400 text-xl mb-12">Every transaction is structured to withstand legal, audit, and compliance scrutiny at the highest institutional levels.</p>
          
          <div className="space-y-6">
            {credentials.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 glass p-6 rounded-2xl border border-white/5 hover:border-gold/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-gold/20 flex items-center justify-center text-gold">
                  {React.cloneElement(c.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <div>
                  <h4 className="font-heading font-black text-xl text-white">{c.label}</h4>
                  <p className="text-slate-500 font-mono text-[11px] uppercase tracking-widest">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] glass rounded-3xl border border-gold/40 p-12 overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 p-8">
               <div className="w-20 h-20 border-2 border-gold/20 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="w-14 h-14 border-2 border-gold/40 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gold rounded-full" />
                 </div>
               </div>
             </div>
             
             <Landmark className="w-24 h-24 text-gold mb-8 opacity-20" />
             <h3 className="font-heading text-4xl font-black text-white mb-6 leading-tight">THE ESCROW <br /> FRAMEWORK</h3>
             <p className="text-slate-400 mb-8 leading-relaxed">
               Our take-or-pay frameworks and delivery-verified payment release mechanisms are designed for institutional buyers operating in LC-constrained environments.
             </p>
             <div className="p-6 bg-slate-950/50 rounded-xl border border-green-500/20">
               <div className="flex items-center gap-3 text-green-500 mb-2">
                 <ShieldCheck className="w-5 h-5" />
                 <span className="font-mono text-xs font-black tracking-widest">VERIFIED STRUCTURE</span>
               </div>
               <p className="text-slate-300 text-sm italic">
                 "Professional engagement, clear documentation, and a focus on execution rather than speculation."
               </p>
             </div>
          </div>
          
          {/* Badge overlays */}
          <div className="absolute -bottom-6 -left-6 glass px-8 py-4 border-2 border-green-500/50 rounded-xl">
             <span className="text-green-500 font-black text-2xl">AML/KYC</span>
             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">FULLY COMPLIANT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCenter;
