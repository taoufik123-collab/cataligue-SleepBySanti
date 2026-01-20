import React from 'react';
import { BENEFITS } from '../constants';
import { ShieldCheck, Droplets, Leaf, TrendingUp } from 'lucide-react';

const icons = [TrendingUp, ShieldCheck, Leaf, Droplets];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-stone-900 to-stone-950 px-6 border-b border-stone-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Research-Backed Hospitality</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The SĀNTI Advantage</h2>
          <p className="text-stone-400 max-w-3xl mx-auto font-light mb-10 text-lg leading-relaxed">
            We don't just sell bedding; we engineer sleep environments. Based on market research and textile engineering, partnering with SĀNTI delivers measurable results for your property's bottom line and guest satisfaction scores.
          </p>
          <div className="w-24 h-px bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-8 border border-stone-800 bg-stone-950/50 hover:bg-stone-900 hover:border-gold-500/30 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-stone-900 rounded-none flex items-center justify-center border border-stone-800 group-hover:border-gold-500/50 transition-colors">
                    <Icon className="w-8 h-8 text-stone-500 group-hover:text-gold-500 transition-colors duration-300" strokeWidth={1} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-stone-100 mb-3 group-hover:text-gold-100 transition-colors">{benefit.title}</h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;