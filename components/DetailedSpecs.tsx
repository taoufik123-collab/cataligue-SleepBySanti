import React from 'react';

const DetailedSpecs: React.FC = () => {
  const specs = [
    {
      collection: 'YRIS (120S Sateen)',
      feel: 'Ultra-silky, cool',
      warmth: 'Light',
      breathability: 'Excellent',
      climate: 'Warm / Year-round',
      durability: 'High'
    },
    {
      collection: 'AYRE (80S Sateen)',
      feel: 'Smooth, balanced',
      warmth: 'Medium',
      breathability: 'Very Good',
      climate: 'Year-round',
      durability: 'Very High'
    },
    {
      collection: 'BRISA (Eucalyptus)',
      feel: 'Cool, crisp',
      warmth: 'Light',
      breathability: 'Superior',
      climate: 'Hot / Humid',
      durability: 'High'
    },
    {
      collection: 'Kefalonia (Velvet)',
      feel: 'Plush, cozy',
      warmth: 'High',
      breathability: 'Moderate',
      climate: 'Cold / Winter',
      durability: 'High'
    }
  ];

  return (
    <section id="specs" className="py-20 bg-stone-900 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Technical Details</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Detailed Specifications</h2>
          <p className="text-stone-400 max-w-2xl mx-auto font-light">
            Compare the technical characteristics of each collection to find the perfect match for your property.
          </p>
        </div>

        {/* Detailed Specs Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Collection</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Feel</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Warmth</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Breathability</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Climate</th>
                <th className="text-left py-4 px-4 text-stone-400 text-xs uppercase tracking-widest font-medium">Durability</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className="border-b border-stone-800/50 hover:bg-stone-800/30 transition-colors"
                >
                  <td className="py-5 px-4">
                    <span className="text-white font-serif text-lg">{spec.collection}</span>
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm font-light">
                    {spec.feel}
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm font-light">
                    {spec.warmth}
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm font-light">
                    {spec.breathability}
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm font-light">
                    {spec.climate}
                  </td>
                  <td className="py-5 px-4 text-stone-300 text-sm font-light">
                    {spec.durability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DetailedSpecs;
