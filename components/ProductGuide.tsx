import React from 'react';
import { Package, Clock, Ruler, ChevronRight } from 'lucide-react';

const ProductGuide: React.FC = () => {
  const products = [
    {
      id: 'yris',
      name: 'YRIS',
      feel: 'Crisp',
      warmth: 'All-season',
      breathability: 'High',
      climate: 'All-season',
      durability: 'High',
      recommendedFor: '5-star luxury hotels & resorts, High-end wellness resorts, Flagship suites / presidential suites, Heritage luxury properties'
    },
    {
      id: 'ayre',
      name: 'AYRE',
      feel: 'Smooth',
      warmth: 'All-season',
      breathability: 'Medium',
      climate: 'All-season',
      durability: 'High',
      recommendedFor: 'Upscale boutique hotels, 4-star lifestyle hotels, Luxury business hotels, Urban design hotels'
    },
    {
      id: 'kefalonia',
      name: 'KEFALONIA',
      feel: 'Plush',
      warmth: 'Warm',
      breathability: 'Low',
      climate: 'Cold',
      durability: 'Moderate',
      recommendedFor: 'Cold-climate hotels, Mountain lodges & alpine resorts, Winter destinations, Romantic boutique hotels'
    },
    {
      id: 'brisa',
      name: 'BRISA',
      feel: 'Cool',
      warmth: 'Light',
      breathability: 'High',
      climate: 'Hot',
      durability: 'Moderate',
      recommendedFor: 'Wellness hotels & retreats, Eco-luxury resorts, Beach hotels, Tropical destinations'
    }
  ];

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(`product-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="guide" className="py-20 bg-stone-950 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Quick Reference</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Product Selection Guide</h2>
          <p className="text-stone-400 max-w-2xl mx-auto font-light">
            Compare collections at a glance. Click any row to view product details.
          </p>
        </div>

        {/* Product Specs Comparison Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Collection</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Feel / Hand Feel</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Warmth Level</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Breathability</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Climate Suitability</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium whitespace-nowrap">Commercial Laundry Durability</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => scrollToProduct(product.id)}
                  className="border-b border-stone-800/50 hover:bg-stone-900/50 transition-colors cursor-pointer group"
                >
                  <td className="py-5 px-4">
                    <span className="text-white font-semibold text-base group-hover:text-gold-400 transition-colors">{product.name}</span>
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm">{product.feel}</td>
                  <td className="py-5 px-4 text-stone-300 text-sm">{product.warmth}</td>
                  <td className="py-5 px-4 text-stone-300 text-sm">{product.breathability}</td>
                  <td className="py-5 px-4 text-stone-300 text-sm">{product.climate}</td>
                  <td className="py-5 px-4 text-stone-300 text-sm">{product.durability}</td>
                  <td className="py-5 px-2">
                    <ChevronRight className="w-5 h-5 text-stone-600 group-hover:text-gold-500 transition-colors" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended For Section */}
        <div className="mb-16">
          <h3 className="text-xl font-serif text-white mb-6 text-center">Recommended For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => scrollToProduct(product.id)}
                className="bg-stone-900/50 border border-stone-800 p-5 hover:border-gold-500/30 transition-colors cursor-pointer group"
              >
                <h4 className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3 group-hover:text-gold-400">{product.name}</h4>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  {product.recommendedFor}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MOQ */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 text-center hover:border-gold-500/30 transition-colors">
            <Package className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-serif text-lg mb-2">Minimum Order</h3>
            <p className="text-gold-400 text-2xl font-light mb-1">50 Units</p>
            <p className="text-stone-500 text-xs">Per product line</p>
          </div>

          {/* Lead Time */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 text-center hover:border-gold-500/30 transition-colors">
            <Clock className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-serif text-lg mb-2">Lead Time</h3>
            <p className="text-gold-400 text-2xl font-light mb-1">5-6 Weeks</p>
            <p className="text-stone-500 text-xs">From order confirmation</p>
          </div>

          {/* Sizes */}
          <div className="bg-stone-900/50 border border-stone-800 p-6 text-center hover:border-gold-500/30 transition-colors">
            <Ruler className="w-8 h-8 text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-white font-serif text-lg mb-2">Available Sizes</h3>
            <p className="text-gold-400 text-lg font-light mb-1">Queen, King, Cal King</p>
            <p className="text-stone-500 text-xs">Cal King: bulk orders only</p>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-stone-500 text-sm mt-8 font-light">
          Cal King samples not currently available, but can be custom created for bulk orders.
        </p>
      </div>
    </section>
  );
};

export default ProductGuide;
