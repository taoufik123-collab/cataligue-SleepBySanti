import { Collection, Product } from './types';

export const BRAND_INTRO = `SANTI bridges the gap between boutique luxury and commercial durability. Born from extensive research into sleep thermoregulation and textile engineering, our collections are designed to elevate guest sleep scores while reducing long-term operational costs through superior fiber longevity.`;

// Updated with official SANTI CSV data (Images & Euro Pricing)
// Mapped to specific CSV rows for accuracy

export const VELVET_COLLECTION: Product[] = [
  {
    id: 'cyra',
    name: 'CYRA',
    price: '€244.89', // Matched to "Luxury Velvet Bedding Set" in CSV
    description: 'A dramatic blend of acrylic and pure cotton featuring artistic fringe details. The heavy drape adds immediate perceived value to any suite.',
    features: ['Artistic fringe details', 'High-impact emerald & jewel tones', 'Soft cotton-acrylic blend'],
    // Image: CYRA (White variant from CSV)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/WHITE_62bd27c4-d1fe-4891-b946-aa2bc3840537_800x.jpg?v=1764367931',
    colors: ['Emerald', 'Ruby', 'Sapphire']
  },
  {
    id: 'amorgos',
    name: 'Amorgos',
    price: '€288.63',
    description: 'Fine velvet with a soft finish and shiny appearance. Designed to catch ambient lighting, creating a warm, inviting atmosphere.',
    features: ['Premium craftsmanship', 'Subtle sheen', 'Rich texture'],
    // Image: Amorgos Soft Velvet Bedding (Creme)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/Amorgoscreme_500x.jpg',
    colors: ['Creme', 'Navy', 'Charcoal']
  },
  {
    id: 'velos',
    name: 'Velós',
    price: '€288.63',
    description: 'High luster, ultra-soft feel designed for winter warmth. The dense weave creates a barrier against drafts without compromising breathability.',
    features: ['High luster finish', 'Ultra-soft tactility', 'Ideal for cooler climates'],
    // Image: Velos Complete Bedding Set (Aegean)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/AEGEAN_500x.jpg',
    colors: ['Slate', 'Onyx', 'Silver']
  },
  {
    id: 'kefalonia',
    name: 'Kefalonia',
    price: '€271.13',
    description: 'Plush feel with a subtle sheen from cotton-acrylic yarn mix. Engineered for high-traffic use with resistance to pilling.',
    features: ['Plush texture', 'Commercial Durability', 'Elegant drape'],
    // Image: Kefalonia (Black variant from CSV)
    imageUrl: '/images/products/kefalonia.jpg',
    colors: ['Coffee', 'Ivory', 'Gray']
  },
  {
    id: 'terra',
    name: 'TÈRRA',
    price: '€288.63',
    description: 'Sophisticated reversible design for dual functionality, allowing housekeeping to alter the room aesthetic instantly.',
    features: ['Reversible design', 'Dual-tone aesthetic', 'Versatile styling'],
    // Image: TERRA Autumn Velvet Bedding Set (White/Dark Winter)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/White_Dark_Winter_500x.jpg',
    colors: ['Earth/Clay', 'Stone/Mist']
  }
];

export const EUCALYPTUS_COLLECTION: Product[] = [
  {
    id: 'flore',
    name: 'FLORÉ',
    price: '€288.63',
    description: 'Signature Eucalyptus Lyocell. Research indicates guests sleep 20% cooler compared to standard cotton, reducing HVAC load.',
    features: ['Naturally soft', 'Lustrous sheen', 'Temperature regulating'],
    // Image: FLORE (Noir variant from CSV)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/NOIR_37d18166-4f60-4450-b089-e38834ae324f_800x.jpg?v=1718224648',
    colors: ['White', 'Mist', 'Blush']
  },
  {
    id: 'dia',
    name: 'DÍA',
    price: '€288.63',
    description: 'Summer cooling focus. The weave structure maximizes airflow, making it the preferred choice for tropical or summer-season resorts.',
    features: ['Maximum breathability', 'Eco-friendly lyocell', 'Cool-to-touch'],
    // Image: DIA (Blue variant from CSV)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/blue_done_800x.jpg?v=1737121603',
    colors: ['Sky', 'Cloud', 'Lavender']
  },
  {
    id: 'brisa',
    name: 'BRISA',
    price: '€271.13',
    description: 'Superior moisture-wicking and wrinkle-resistant fabric. Reduces housekeeping ironing time by up to 15%.',
    features: ['Moisture-wicking', 'Wrinkle-resistant', 'Durable weave'],
    // Image: BRISA Over-Sized Eucalyptus Bedding Set (White)
    imageUrl: '/images/products/brisa.jpg',
    colors: ['Crisp White', 'Dove Grey']
  },
  {
    id: 'estiu',
    name: 'ÉSTIU',
    price: '€201.15',
    description: 'Premium cooling technology in a lightweight construction. The most cost-effective entry into luxury cooling fabrics.',
    features: ['Ultra-lightweight', 'Advanced cooling', 'Summer essential'],
    // Image: ESTIU Ultra-Cool Summer Comforter (Noir Pattern)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/3NOIR-pattern_500x.jpg',
    colors: ['Ice Blue', 'Pale Green']
  }
];

export const CORE_PRODUCTS: Product[] = [
  {
    id: 'ultra-poof',
    name: 'Ultra-Poof Comforter',
    price: '€209.90',
    description: '100% cotton exterior with alternative down filling (~7 lbs). Mimics the loft of Hungarian goose down without the allergens.',
    features: ['Hypoallergenic fill', 'All-season weight', 'Cloud-like loft'],
    // Image: Ultra-Poof Comforter By SANTI
    imageUrl: '/images/products/ultra-poof.png'
  },
  {
    id: 'sheet-set',
    name: 'Essential Sheet Set',
    price: '€166.16',
    description: 'The foundation of the guest experience. Available in premium Eucalyptus or Cotton options.',
    features: ['Deep pockets (18")', 'Precision stitching', 'Includes 1 fitted, 1 flat'],
    // Image: Essential Sheet Set (Blanc variant from CSV)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/Blanc_598aacb2-cadf-4587-b92b-9e845956133d_800x.jpg?v=1725827255'
  },
  {
    id: 'pillowcases',
    name: 'Pillowcase Set',
    price: '€61.19',
    description: 'Premium construction for skin and hair health. Reduces friction by 40% compared to standard percale.',
    features: ['Envelope closure', 'Smooth texture', 'Set of 2'],
    // Image: Pillowcase Set from CSV
    imageUrl: '/images/products/pillowcase-set.jpg'
  },
  {
    id: 'wulf-blanket',
    name: 'WÛLF Blanket',
    price: '€244.89',
    description: 'Luxury throw available in couch and bed sizes. Adds texture and warmth to the foot of the bed.',
    features: ['Heirloom quality', 'Dense weave', 'Accent piece'],
    // Image: WULF Blanket By SANTI
    imageUrl: '/images/products/wulf-blanket.jpg'
  },
  {
    id: 'goose-down-comforter',
    name: 'Goose-Down Comforter',
    price: '€349.00',
    description: 'Premium Hungarian goose-down filling with a luxurious 100% cotton sateen shell. The ultimate in natural warmth and breathability.',
    features: ['Hungarian goose-down', '100% cotton sateen shell', 'Superior warmth-to-weight ratio'],
    imageUrl: '/images/products/goose-down-comforter.png'
  },
  {
    id: 'yris',
    name: 'YRIS',
    price: '€275.00',
    description: 'Elegant bedding set with refined craftsmanship. Designed for discerning hospitality properties seeking timeless sophistication.',
    features: ['Premium materials', 'Refined design', 'Commercial durability'],
    imageUrl: '/images/products/yris.jpg'
  },
  {
    id: 'ayre',
    name: 'AYRE',
    price: '€265.00',
    description: 'Light and airy bedding collection perfect for year-round comfort. Combines breathability with elegant aesthetics.',
    features: ['Breathable construction', 'Year-round comfort', 'Elegant finish'],
    imageUrl: '/images/products/ayre.jpg'
  }
];

export const BENEFITS = [
  {
    title: 'Commercial ROI & Durability',
    description: 'Research shows our TENCEL™ fibers are 2x stronger than cotton when wet. SANTI linens survive 30% more industrial wash cycles, drastically lowering your replacement cost-per-room-night.'
  },
  {
    title: 'The Sleep Score Advantage',
    description: '68% of hotel guests cite "uncomfortable bed" as their top complaint. Our cooling eucalyptus regulates temperature, directly correlating to higher guest satisfaction and TripAdvisor ratings.'
  },
  {
    title: 'Sustainability & ESG Goals',
    description: 'SANTI production uses 95% less water than cotton. Switching to our Eucalyptus line allows your property to claim significant water conservation credits towards Green Key or LEED certification.'
  },
  {
    title: 'Hypoallergenic Assurance',
    description: 'Our fabrics are naturally resistant to dust mites and bacterial growth. This creates a safer environment for guests with sensitivities, reducing liability and housekeeping deep-clean requirements.'
  }
];