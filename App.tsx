import React from 'react';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import WhyUs from './components/WhyUs';
import ContactFooter from './components/ContactFooter';
import { VELVET_COLLECTION, EUCALYPTUS_COLLECTION, CORE_PRODUCTS } from './constants';

const App: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Hero />
      
      {/* Research & Why Us Section - Prioritized First */}
      <WhyUs />
      
      <div id="collections">
        <CatalogSection 
          id="velvet"
          title="The Velvet Collection"
          description="Plush, textured, and slightly shiny finishes blending cotton and acrylic for winter luxury."
          products={VELVET_COLLECTION}
        />
        
        <CatalogSection 
          id="eucalyptus"
          title="Eucalyptus Lyocell Collection"
          description="Hotel-grade TENCEL™ fibers offering superior moisture management and cooling."
          products={EUCALYPTUS_COLLECTION}
        />
        
        <CatalogSection 
          id="core"
          title="Core Products"
          description="Essential bedding components designed for the rigor of hospitality use."
          products={CORE_PRODUCTS}
        />
      </div>

      <ContactFooter />
      
      {/* Floating Request Button */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <a 
          href="#contact"
          onClick={scrollToContact}
          className="cursor-pointer bg-gold-500 hover:bg-gold-400 text-stone-950 font-medium py-3 px-6 rounded-none shadow-lg shadow-stone-950/50 transition-colors duration-300 uppercase tracking-wider text-xs flex items-center gap-2"
        >
          <span>Request Samples</span>
        </a>
      </div>
    </div>
  );
};

export default App;