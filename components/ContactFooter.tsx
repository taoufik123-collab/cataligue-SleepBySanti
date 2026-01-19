import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 py-20 px-6 border-t border-gold-600/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Request Wholesale Pricing & Samples</h2>
        <p className="text-stone-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the quality of SANTI firsthand. Contact our hospitality team to request a sample kit, 
          discuss custom requirements, or receive our full wholesale price list.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a
            href="mailto:stanley.hugh@sleepbysantihouse.com?subject=Sample%20Request%20-%20SANTI%20Wholesale"
            className="group flex items-center gap-4 px-8 py-4 bg-stone-800 border border-stone-700 hover:border-gold-500 hover:bg-stone-800/80 transition-all duration-300"
          >
            <Mail className="text-gold-500 group-hover:scale-110 transition-transform" />
            <span className="text-stone-200">stanley.hugh@sleepbysantihouse.com</span>
          </a>
          
          <div className="flex items-center gap-4 px-8 py-4 border border-transparent text-stone-500">
            <MapPin className="text-stone-600" />
            <span>Elk Grove Village, IL</span>
          </div>
        </div>

        <div className="text-stone-600 text-xs font-light">
          <p className="mb-2">Note: Prices shown in catalog are retail. Significant wholesale discounts available for bulk orders.</p>
          <p>© {new Date().getFullYear()} Sleep by Santi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;