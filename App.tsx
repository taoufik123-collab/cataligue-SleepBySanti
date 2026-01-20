import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogSection from './components/CatalogSection';
import WhyUs from './components/WhyUs';
import ProductGuide from './components/ProductGuide';
import ContactFooter from './components/ContactFooter';
import { SHEETS_COLLECTION, COMFORTERS_COLLECTION, PILLOWS_COLLECTION, ACCESSORIES_COLLECTION } from './constants';
import { Mail } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      <Hero />

      {/* Research & Why Us Section */}
      <WhyUs />

      {/* Product Selection Guide with MOQ, Lead Time, Sizes */}
      <ProductGuide />

      <div id="collections">
        <CatalogSection
          id="sheets"
          title="Sheets Collection"
          description="Complete luxury sets including duvet cover, flat sheet, fitted sheet, and pillowcases."
          products={SHEETS_COLLECTION}
        />

        <CatalogSection
          id="comforters"
          title="Comforters"
          description="Premium fills engineered for commercial durability and guest comfort."
          products={COMFORTERS_COLLECTION}
        />

        <CatalogSection
          id="pillows"
          title="Pillows"
          description="Hotel-grade pillows designed to maintain loft through commercial wash cycles."
          products={PILLOWS_COLLECTION}
        />

        <CatalogSection
          id="accessories"
          title="Accessories"
          description="Luxury accents to complete the guest room experience."
          products={ACCESSORIES_COLLECTION}
        />
      </div>

      <ContactFooter />

      {/* Floating Request Sample Button */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <a
          href="mailto:stanley.hugh@sleepbysantihouse.com?subject=Sample%20Request%20-%20SANTI%20Wholesale"
          className="cursor-pointer bg-gold-500 hover:bg-gold-400 text-stone-950 font-medium py-3 px-6 rounded-none shadow-lg shadow-stone-950/50 transition-colors duration-300 uppercase tracking-wider text-xs flex items-center gap-2"
        >
          <Mail size={16} />
          <span>Request Sample</span>
        </a>
      </div>
    </div>
  );
};

export default App;
