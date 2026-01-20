import { Collection, Product } from './types';

export const BRAND_INTRO = `SĀNTI bridges the gap between boutique luxury and commercial durability. Our collections are built from premium materials: Long-Staple Cotton Sateen, Eucalyptus Lyocell, and plush Velvet. Constructed to meet the demands of commercial laundry cycles while delivering the guest experience of a five-star property.`;

// B2B Wholesale Catalog - Organized by Category
// All images use local paths from public/images/products/

export const SHEETS_COLLECTION: Product[] = [
  {
    id: 'yris',
    name: 'YRIS Luxury Sateen (120S)',
    price: '$299.00',
    description: 'The pinnacle of textile engineering. 120S high-thread-count sateen offers a silk-like touch with the durability of cotton. Presidential suite grade.',
    features: ['120S Thread Count', 'Includes: Duvet Cover, Flat & Fitted Sheet, Pillowcases'],
    imageUrl: '/images/products/yris.jpg',
    colors: ['White']
  },
  {
    id: 'ayre',
    name: 'AYRE Sateen (80S)',
    price: '$119.00',
    description: 'A crisp, balanced 80S sateen weave. Provides the classic crisp finish with upgraded softness and longevity.',
    features: ['80S Thread Count', 'Includes: Duvet Cover, Flat & Fitted Sheet, Pillowcases', 'Wrinkle Resistant'],
    imageUrl: '/images/products/ayre.jpg',
    colors: ['White']
  },
  {
    id: 'brisa',
    name: 'BRISA Eucalyptus',
    price: '$109.00',
    description: '100% Eucalyptus Lyocell. Naturally cooling and moisture-wicking, ideal for warm climates and guests who sleep hot.',
    features: ['100% Eucalyptus Lyocell', 'Includes: Duvet Cover, Flat & Fitted Sheet, Pillowcases', 'Temperature Regulating'],
    imageUrl: '/images/products/brisa.jpg',
    colors: ['White', 'Black']
  },
  {
    id: 'kefalonia',
    name: 'Kefalonia Velvet',
    price: '$119.00',
    description: 'A plush velvet finish set for texture-forward room designs. Adds immediate visual warmth and tactile luxury.',
    features: ['Premium Velvet Finish', 'Includes: Duvet Cover, Flat & Fitted Sheet, Pillowcases', 'Commercial Durability'],
    imageUrl: '/images/products/kefalonia.jpg',
    colors: ['Dark Gray', 'White', 'Black']
  }
];

export const COMFORTERS_COLLECTION: Product[] = [
  {
    id: 'ultra-poof',
    name: 'Ultra-Poof Comforter',
    price: '$119.00',
    description: '100% cotton exterior with alternative down filling. Mimics the loft of Hungarian goose down without the allergens.',
    features: ['Hypoallergenic Fill', 'All-Season Weight', 'Cloud-Like Loft'],
    imageUrl: '/images/products/ultra-poof.png'
  },
  {
    id: 'goose-down-comforter',
    name: 'Goose Down Comforter',
    price: '$299.00',
    description: 'Premium Hungarian goose-down filling with a luxurious 100% cotton sateen shell. The ultimate in natural warmth and breathability.',
    features: ['Hungarian Goose-Down', '100% Cotton Sateen Shell', 'Superior Warmth-to-Weight Ratio'],
    imageUrl: '/images/products/goose-down-comforter.png'
  }
];

export const PILLOWS_COLLECTION: Product[] = [
  {
    id: 'kos-pillow',
    name: 'Kos Pillow (Pair)',
    price: '$49.00',
    description: 'Premium pillows designed for hotel-grade comfort. Maintains loft through commercial wash cycles.',
    features: ['Sold as Pair', 'Commercial Wash Tested', 'Medium Support'],
    imageUrl: '/images/products/pillowcase-set.jpg'
  }
];

export const ACCESSORIES_COLLECTION: Product[] = [
  {
    id: 'wulf-blanket',
    name: 'WÛLF Throw Blanket',
    price: '$139.00',
    description: 'Luxury throw available in couch and bed sizes. Adds texture and warmth to the foot of the bed.',
    features: ['Heirloom Quality', 'Dense Weave', 'Accent Piece'],
    imageUrl: '/images/products/wulf-blanket.jpg'
  }
];

export const BENEFITS = [
  {
    title: 'Commercial ROI & Durability',
    description: 'Our Cotton Sateen, Eucalyptus Lyocell, and Velvet fabrics are selected for their performance under industrial laundering. Expect a lower inventory replacement frequency and reduced annual cost-per-room-night compared to standard hotel textiles.'
  },
  {
    title: 'The Sleep Score Advantage',
    description: 'Uncomfortable bedding is consistently cited as a top guest complaint. Our temperature-regulating Eucalyptus and breathable Sateen options help guests sleep better, directly supporting higher satisfaction scores and repeat bookings.'
  },
  {
    title: 'Sustainability & ESG Goals',
    description: 'Eucalyptus Lyocell (TENCEL™) is produced in a closed-loop process that recovers over 95% of water and solvent used. Choosing SĀNTI Eucalyptus products supports your property\'s water conservation and sustainability reporting.'
  },
  {
    title: 'Hypoallergenic Assurance',
    description: 'Lyocell fibers offer excellent moisture management, creating an environment less hospitable to dust mites. Combined with their smooth surface, our Eucalyptus products are a strong choice for allergy-conscious properties.'
  }
];

// Keep old exports for backwards compatibility during transition
export const VELVET_COLLECTION = SHEETS_COLLECTION.filter(p => p.id === 'kefalonia');
export const EUCALYPTUS_COLLECTION = SHEETS_COLLECTION.filter(p => p.id === 'brisa');
export const CORE_PRODUCTS = [...COMFORTERS_COLLECTION, ...PILLOWS_COLLECTION, ...ACCESSORIES_COLLECTION];
