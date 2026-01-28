import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Building, Mail, Phone, MessageSquare, CheckCircle, Package, Briefcase } from 'lucide-react';
import { InquiryContext } from '../../App';

interface InquiryFormProps {
  context?: InquiryContext;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ context }) => {
  // Use a local variable to ensure correct type inference of InquiryContext and handle default values
  const formState: InquiryContext = context || { type: 'general' };
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  // Determine Formspree Endpoint based on the active form state
  const getEndpoint = () => {
    switch(formState.type) {
      case 'service': return 'https://formspree.io/f/mdagrqvd';
      case 'product': return 'https://formspree.io/f/xjgwqnnr';
      default: return 'https://formspree.io/f/maqogrrd';
    }
  };

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));
  
  // Handled by Formspree via standard form action, but we can simulate the UI state
  const handleLocalSubmit = (e: React.FormEvent) => {
    // Note: In a real app we might use fetch, but here we'll let the HTML form handle it
    // if it were a real submission. For simulation of UI:
    // setIsSubmitted(true);
  };

  // Extract name or title from the item if present in the context
  const getItemName = () => {
    // Fix: Properly access the 'item' property from the typed formState
    if (formState.item) {
      return 'name' in formState.item ? formState.item.name : formState.item.title;
    }
    return null;
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-slate-950 mb-10 shadow-2xl shadow-gold/20"
        >
          <CheckCircle className="w-12 h-12" />
        </motion.div>
        <h2 className="text-4xl font-black text-[#0f2039] mb-6 uppercase tracking-tight">Inquiry Received</h2>
        <p className="text-slate-500 mb-12 text-lg leading-relaxed">Our executive team will review your requirements and initiate contact within 24 business hours.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-10 py-4 border border-gold/40 text-gold font-black rounded-lg hover:bg-gold/5 transition-all text-xs uppercase tracking-widest"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black text-[#0f2039] mb-3 uppercase tracking-tight">
          {formState.type === 'product' ? 'Product Inquiry' : formState.type === 'service' ? 'Service Booking' : 'Global Inquiry'}
        </h2>
        {getItemName() && (
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-gold font-black uppercase text-[10px] tracking-widest">Regarding:</span>
            <span className="text-[#0f2039] font-bold uppercase text-[11px] tracking-tight border-b border-gold/30 pb-0.5">{getItemName()}</span>
          </div>
        )}
        <p className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em]">Institutional Procurement Portal</p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex-1 h-[2px] bg-slate-200 rounded-full mr-6 relative">
          <motion.div 
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          />
        </div>
        <span className="font-mono text-[10px] text-slate-400 font-black tracking-widest uppercase">
          Step {step} / {totalSteps}
        </span>
      </div>

      <form action={getEndpoint()} method="POST" className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 min-h-[480px] flex flex-col shadow-2xl">
        {/* Hidden Context Fields for Formspree */}
        <input type="hidden" name="_subject" value={`New HTL ${formState.type.toUpperCase()} Inquiry: ${getItemName() || 'General'}`} />
        <input type="hidden" name="inquiry_type" value={formState.type} />
        {getItemName() && <input type="hidden" name="target_item" value={getItemName() || ''} />}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="flex-1"
            >
              <h3 className="text-xl font-black text-[#0f2039] mb-10 flex items-center gap-4 uppercase tracking-tight">
                <div className="p-2 rounded bg-gold/10 border border-gold/20 text-gold"><User className="w-5 h-5" /></div>
                Entity Identification
              </h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Full Representative Name</label>
                  <input name="full_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Organization / Group</label>
                  <input name="organization" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="Global Mining Corp" />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="flex-1"
            >
              <h3 className="text-xl font-black text-[#0f2039] mb-10 flex items-center gap-4 uppercase tracking-tight">
                <div className="p-2 rounded bg-gold/10 border border-gold/20 text-gold"><Mail className="w-5 h-5" /></div>
                Communication Hub
              </h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Corporate Email Address</label>
                  <input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="john@company.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Direct Contact Line</label>
                  <input name="phone" required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="+234 ..." />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="flex-1"
            >
              <h3 className="text-xl font-black text-[#0f2039] mb-10 flex items-center gap-4 uppercase tracking-tight">
                <div className="p-2 rounded bg-gold/10 border border-gold/20 text-gold">
                  {formState.type === 'product' ? <Package className="w-5 h-5" /> : formState.type === 'service' ? <Briefcase className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                </div>
                Execution Brief
              </h3>
              <div className="space-y-8">
                {formState.type === 'general' && (
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">Commodity Classification</label>
                    <select name="commodity_class" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all text-sm appearance-none">
                      <option>AGO (Automotive Gas Oil)</option>
                      <option>PMS (Gasoline)</option>
                      <option>Crude Oil Grades</option>
                      <option>Copper / Base Metals</option>
                      <option>LNG / Gas Aggregation</option>
                    </select>
                  </div>
                )}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block ml-1">
                    {formState.type === 'product' ? 'Volume & Delivery Requirements' : formState.type === 'service' ? 'Specific Requirements / Timelines' : 'Message Details'}
                  </label>
                  <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-[#0f2039] focus:border-gold outline-none transition-all resize-none placeholder:text-slate-400 text-sm" placeholder={formState.type === 'product' ? "Specify MT/Volumes and preferred Incoterms..." : "Provide as much detail as possible to expedite processing..."}></textarea>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 mt-12 pt-8 border-t border-slate-100">
          {step > 1 && (
            <button 
              type="button"
              onClick={handleBack}
              className="flex-1 py-4 border border-slate-100 text-slate-400 font-black rounded-xl hover:text-[#0f2039] hover:bg-slate-50 transition-all text-xs uppercase tracking-widest"
            >
              Previous
            </button>
          )}
          {step < totalSteps ? (
            <button 
              type="button"
              onClick={handleNext}
              className="flex-1 py-4 bg-gold text-slate-950 font-black rounded-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all text-xs uppercase tracking-widest shadow-lg shadow-gold/10"
            >
              Continue
            </button>
          ) : (
            <button 
              type="submit"
              className="flex-1 py-4 bg-[#0f2039] text-white font-black rounded-xl hover:bg-gold hover:text-navy flex items-center justify-center gap-3 active:scale-95 transition-all text-xs uppercase tracking-widest"
            >
              Submit Brief <Send className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </form>
      
      <div className="mt-12 text-center">
        <p className="text-[9px] text-slate-400 font-black tracking-[0.4em] uppercase mb-6">Direct Institutional Lines</p>
        <div className="flex flex-wrap justify-center gap-8 text-slate-400 font-mono text-[11px] font-bold">
          <span className="hover:text-gold transition-colors">+234 706 419 2851</span>
          <span className="hover:text-gold transition-colors">+243 995 100 574</span>
          <span className="hover:text-gold transition-colors">+1 404 985 7025</span>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;