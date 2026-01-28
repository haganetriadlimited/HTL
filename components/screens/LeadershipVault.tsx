import React from 'react';
import { motion } from 'framer-motion';
import { EXECUTIVES, LOGO_URL } from '../../constants';
import { Executive } from '../../types';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Handshake, 
  ScrollText, 
  Globe, 
  CheckCircle2,
  Linkedin,
  Briefcase
} from 'lucide-react';

const LeadershipVault: React.FC = () => {
  const coreValues = [
    { title: 'Integrity', desc: 'Every transaction is structured to withstand legal, audit, and compliance scrutiny.', icon: <ShieldCheck /> },
    { title: 'Reliability', desc: 'We focus on deliverability and execution certainty, not speculation.', icon: <Zap /> },
    { title: 'Partnership', desc: 'We build long-term relationships with clients, suppliers, and institutions — not one-off trades.', icon: <Handshake /> },
    { title: 'Discipline', desc: 'We operate with clear processes, defined risk allocation, and documented execution paths.', icon: <ScrollText /> },
  ];

  return (
    <div className="bg-[#F2F5FF] min-h-screen pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-40">
        
        {/* About Us / Introduction */}
        <section className="grid lg:grid-cols-2 gap-24 items-start pt-12">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gold" />
              <span className="text-gold text-[11px] font-black tracking-[0.4em] uppercase">Forged in Steel</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#0f2039] uppercase tracking-tighter leading-none">
              About <span className="text-gold">HTL</span>.
            </h2>
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-light">
              <p>
                Hagane Triad Limited (HTL) is a dynamic multi-commodity trading and energy infrastructure company headquartered in Lagos, Nigeria. Established in 2025, HTL has rapidly emerged as a trusted partner in the African energy and commodities sector, delivering high-quality products and innovative solutions to clients across the continent.
              </p>
              <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-gold italic text-[#0f2039] font-medium leading-relaxed">
                "Our name, 'Hagane,' meaning 'steel' in Japanese, symbolizes strength, resilience, and unwavering commitment to excellence."
              </div>
              <p>
                As a multi-commodity firm, we specialize in fuels (Automotive Gas Oil - AGO, Premium Motor Spirit - PMS, Jet Fuel, Liquefied Petroleum Gas, LPG), metals, energy infrastructure development, crude oil, and Liquefied Natural Gas (LNG), serving a diverse clientele including mining companies, governments, and industrial firms.
              </p>
              <p>
                With a strategic focus on West and Central Africa, particularly Ghana, Guinea, Burkina Faso, the Democratic Republic of Congo (DRC), Zambia and Tanzania, HTL leverages a robust supply chain from Nigerian refineries (including Dangote) to East African ports like Tanga and Dar es Salaam.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 grayscale opacity-80 group-hover:grayscale-0"
                alt="HTL Operations"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#0f2039] p-12 rounded-[3rem] shadow-2xl">
               <p className="text-gold font-black tracking-[0.6em] uppercase text-[10px] mb-2">Operational Mantra</p>
               <p className="text-white text-2xl font-black uppercase tracking-tight">Honour • Integrity • Resilience</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-[#0f2039]/5 space-y-8 hover:translate-y-[-10px] transition-all">
            <div className="w-20 h-20 rounded-3xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-black text-[#0f2039] uppercase tracking-tighter">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Our mission is to provide reliable, cost-effective, and sustainable commodity solutions that power Africa's growth. We aim to bridge supply gaps in fuels, metals, and energy infrastructure, ensuring seamless delivery from source to end-user while prioritizing safety, environmental responsibility, and client satisfaction.
            </p>
          </div>
          <div className="bg-[#0f2039] p-16 rounded-[4rem] shadow-2xl space-y-8 hover:translate-y-[-10px] transition-all text-white">
            <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-gold">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              HTL envisions becoming Africa's leading multi-commodity trader and energy infrastructure provider by 2030. We see a future where we dominate the Katanga AGO market, expand into crude oil and LNG exports, and develop world-class storage and distribution facilities across key regions like Tanga, Lubumbashi, and Kolwezi.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#0f2039] uppercase tracking-tighter mb-4">Core <span className="text-gold">Values</span></h2>
            <div className="w-24 h-[1px] bg-gold/30 mx-auto mt-8" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#0f2039] transition-all duration-500">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-navy transition-all">
                  {React.cloneElement(v.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h4 className="text-2xl font-black text-[#0f2039] group-hover:text-white uppercase tracking-tight mb-6">{v.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-400 text-base leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Owners and Leadership Gallery */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-[#0f2039] mb-8 uppercase tracking-tighter">Owners & <span className="text-gold">Leadership</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed italic font-light">
                HTL is owned by a team of visionary entrepreneurs with diverse backgrounds, bringing together expertise from Nigeria and the Democratic Republic of Congo (DRC).
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {EXECUTIVES.map((exec, i) => (
              <div key={i} className="bg-white rounded-[4rem] p-4 shadow-2xl border border-[#0f2039]/5 flex flex-col h-full group transition-all duration-700 hover:border-gold">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden mb-10 relative">
                  <img src={exec.photo} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={exec.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                </div>
                <div className="px-8 pb-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-[#0f2039] uppercase tracking-tight mb-2 leading-none">{exec.name}</h3>
                  <p className="text-gold font-black text-[11px] uppercase tracking-[0.4em] mb-8">{exec.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-auto">{exec.bio}</p>
                  <div className="pt-8 flex flex-wrap gap-2 mt-8 border-t border-slate-100">
                    {exec.qualifications.map((q, j) => (
                      <span key={j} className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-[#0f2039] border border-slate-100">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 text-sm font-light text-center">
            Our owners are qualified professionals with collective experience in international trade, logistics, and energy projects, holding degrees from reputable institutions and certifications in global commerce.
          </p>
        </section>

        {/* Managing Director & CEO Statement */}
        <section className="bg-[#0f2039] rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-3xl text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -z-10" />
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="flex items-center gap-6">
              <div className="w-20 h-[2px] bg-gold" />
              <span className="text-gold text-[12px] font-black tracking-[0.5em] uppercase">Managing Director & CEO Statement</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Execution Defined by <span className="text-gold">Discipline.</span>
            </h2>
            <div className="space-y-10 text-slate-300 text-xl leading-relaxed font-light italic">
              <p>
                "At Hagane Triad Limited (HTL), we were founded with a clear purpose: to structure and deliver energy and commodity solutions that are credible, executable, and sustainable across Africa and international markets."
              </p>
              <p>
                "In sectors where complexity, volatility, and regulatory scrutiny are the norm, we believe that success is defined not by ambition alone, but by discipline — discipline in how transactions are structured, how risk is allocated, and how commitments are honoured. Our focus is therefore not speculative trading, but dependable execution backed by transparent processes and strong counterparties."
              </p>
              <p>
                "Our operating philosophy is simple: integrity must be demonstrable, reliability must be earned, and partnerships must be built to last. I remain personally committed to ensuring that every HTL transaction is structured to withstand legal, audit, and commercial scrutiny, and that our clients and partners can engage with us in confidence."
              </p>
            </div>
            <div className="pt-16 flex flex-col md:flex-row items-center gap-10 border-t border-white/10">
               <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-gold shadow-2xl">
                 <img src={EXECUTIVES[1].photo} className="w-full h-full object-cover" alt="Onyiluka Ikechukwu Peter" />
               </div>
               <div className="text-center md:text-left">
                 <p className="text-3xl font-black text-white uppercase tracking-tight">Onyiluka Ikechukwu Peter</p>
                 <p className="text-gold font-black tracking-[0.4em] uppercase text-[11px] mt-2">Managing Director & Chief Executive Officer</p>
               </div>
            </div>
          </div>
        </section>

        {/* Experience and Qualifications */}
        <section className="grid lg:grid-cols-2 gap-24 py-20 border-t border-[#0f2039]/5">
          <div className="space-y-12">
            <h3 className="text-4xl font-black text-[#0f2039] uppercase tracking-tighter">Experience & <span className="text-gold">Qualifications</span></h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              HTL's team has over 50 years of combined experience in commodity trading and energy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 'Certified ICC Incoterms® Compliance',
                 'Energy Infrastructure Planning',
                 'Tank Farm & Pipeline Logistics',
                 'Multi-Commodity Sourcing (Dangote)',
                 'ISO 9001 Quality Standards',
                 'ESG Principle Commitment'
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 bg-white shadow-lg rounded-2xl border border-[#0f2039]/5 text-[13px] font-bold text-[#0f2039]">
                   <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" /> {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="text-4xl font-black text-[#0f2039] uppercase tracking-tighter">Experience & <span className="text-gold">Market Coverage</span></h3>
            <div className="bg-[#0f2039] p-12 rounded-[4rem] text-white space-y-10 relative overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 opacity-10 group-hover:scale-125 transition-all duration-1000">
                <Globe className="w-64 h-64 text-gold animate-spin-slow" />
              </div>
              <div className="space-y-8 relative z-10">
                 {[
                   'Nigerian Crude Oil & LNG Frameworks',
                   'West African Refined Product Trading',
                   'Central & Southern Mining Energy Supply',
                   'Escrow-based & Delivery-verified structures',
                   'LC, SBLC, Bank Guarantee Instruments',
                   'Terminal & Storage Operator Engagement'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-5">
                     <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold font-black text-xs">{i+1}</div>
                     <p className="font-bold text-slate-200">{item}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Dark Footer Branding Block */}
        <section className="pt-48 pb-20 bg-[#0f2039] rounded-[5rem] -mx-6 lg:-mx-12">
          <div className="flex flex-col items-center text-center px-12">
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
        </section>
      </div>
    </div>
  );
};

export default LeadershipVault;