import React from 'react';
import { Package, Clock, Ruler } from 'lucide-react';

const ProductGuide: React.FC = () => {
  const recommendations = [
    {
      product: 'YRIS (120S Sateen)',
      bestFor: '5-star luxury hotels, wellness resorts, presidential suites, heritage properties',
      highlight: 'Premium'
    },
    {
      product: 'AYRE (80S Sateen)',
      bestFor: 'Upscale boutique hotels, 4-star lifestyle hotels, luxury business hotels, urban design hotels',
      highlight: 'Versatile'
    },
    {
      product: 'BRISA (Eucalyptus)',
      bestFor: 'Wellness hotels, eco-luxury resorts, beach hotels, tropical destinations',
      highlight: 'Cooling'
    },
    {
      product: 'Kefalonia (Velvet)',
      bestFor: 'Cold-climate hotels, mountain lodges, alpine resorts, romantic boutique hotels',
      highlight: 'Warmth'
    }
  ];

  return (
    <section className="py-20 bg-stone-950 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Quick Reference</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Product Selection Guide</h2>
          <p className="text-stone-400 max-w-2xl mx-auto font-light">
            Choose the right collection for your property type and guest expectations.
          </p>
        </div>

        {/* Product Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Collection</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Type</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Recommended For</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec, index) => (
                <tr
                  key={index}
                  className="border-b border-stone-800/50 hover:bg-stone-900/50 transition-colors"
                >
                  <td className="py-5 px-4">
                    <span className="text-white font-serif text-lg">{rec.product}</span>
                  </td>
                  <td className="py-5 px-4">
                    <span className="text-gold-500 text-xs uppercase tracking-wider bg-gold-500/10 px-3 py-1 border border-gold-500/20">
                      {rec.highlight}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-stone-400 text-sm font-light">
                    {rec.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
