import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BRAND_INTRO } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury Hotel Bedroom Suite"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center py-20">
        <h1 className="text-5xl md:text-8xl font-serif text-white tracking-wide mb-6 drop-shadow-2xl">
          SĀNTI
        </h1>
        <p className="text-xl md:text-2xl font-light text-stone-200 mb-8 tracking-[0.3em] uppercase border-y border-stone-600/50 py-4 inline-block backdrop-blur-sm">
          Wholesale Collection
        </p>
        <div className="max-w-3xl mx-auto">
           <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-10 drop-shadow-md">
            {BRAND_INTRO}
          </p>
        </div>
       
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center no-print relative z-20">
          <a 
            href="#why-us" 
            onClick={(e) => scrollToSection(e, 'why-us')}
            className="cursor-pointer px-8 py-3 border border-stone-500 text-stone-300 hover:border-gold-500 hover:text-gold-400 transition-all duration-300 uppercase tracking-widest text-sm font-medium min-w-[200px]"
          >
            Why SANTI?
          </a>
          <a 
            href="#collections" 
            onClick={(e) => scrollToSection(e, 'collections')}
            className="cursor-pointer px-10 py-3 bg-gold-600/90 border border-gold-600 text-white hover:bg-gold-500 hover:text-stone-950 transition-all duration-300 uppercase tracking-widest text-sm font-medium min-w-[200px]"
          >
            View Catalog
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-500 hidden md:block no-print pointer-events-none z-10">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;