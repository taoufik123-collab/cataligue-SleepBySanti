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
    // Image: CYRA Luxury Velvet Bedding Set
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/earth_500x.jpg',
    colors: ['Emerald', 'Ruby', 'Sapphire']
  },
  {
    id: 'amorgos',
    name: 'Amorgos',
    price: '€288.63',
    description: 'Fine velvet with a soft finish and shiny appearance. Designed to catch ambient lighting, creating a warm, inviting atmosphere.',
    features: ['Premium craftsmanship', 'Subtle sheen', 'Rich texture'],
    // Image: Amorgos Soft Velvet Bedding (Creme) - using JPG for better reliability
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
    // Image: Kefalonia Luxe Velvet Bedding (Coffee) - using JPG for better reliability
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/COFFEE_500x.jpg',
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
    // Image: FLORE Eucalyptus Summer Comforter (Blanc)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/Blanc_500x.jpg',
    colors: ['White', 'Mist', 'Blush']
  },
  {
    id: 'dia',
    name: 'DÍA',
    price: '€288.63',
    description: 'Summer cooling focus. The weave structure maximizes airflow, making it the preferred choice for tropical or summer-season resorts.',
    features: ['Maximum breathability', 'Eco-friendly lyocell', 'Cool-to-touch'],
    // Image: DIA Over-Sized Eucalyptus Comforter Set (Blue)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/SLEEP-Blue_500x.jpg',
    colors: ['Sky', 'Cloud', 'Lavender']
  },
  {
    id: 'brisa',
    name: 'BRISA',
    price: '€271.13',
    description: 'Superior moisture-wicking and wrinkle-resistant fabric. Reduces housekeeping ironing time by up to 15%.',
    features: ['Moisture-wicking', 'Wrinkle-resistant', 'Durable weave'],
    // Image: BRISA Over-Sized Eucalyptus Bedding Set (Noir)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/NOIR-NOIR_500x.jpg',
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
    imageUrl: 'https://sleepbysanti.co/cdn/shop/products/BeddingComforter_500x.jpg'
  },
  {
    id: 'sheet-set',
    name: 'Essential Sheet Set',
    price: '€166.16',
    description: 'The foundation of the guest experience. Available in premium Eucalyptus or Cotton options.',
    features: ['Deep pockets (18")', 'Precision stitching', 'Includes 1 fitted, 1 flat'],
    // Image: Flat Fitted Sheet By SANTI (Fog)
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/Fog_500x.jpg'
  },
  {
    id: 'pillowcases',
    name: 'Pillowcase Set',
    price: '€61.19',
    description: 'Premium construction for skin and hair health. Reduces friction by 40% compared to standard percale.',
    features: ['Envelope closure', 'Smooth texture', 'Set of 2'],
    // Image: Pillowcase Set By SANTI
    imageUrl: 'https://sleepbysanti.co/cdn/shop/products/pillowcase_500x.jpg'
  },
  {
    id: 'wulf-blanket',
    name: 'WÛLF Blanket',
    price: '€244.89',
    description: 'Luxury throw available in couch and bed sizes. Adds texture and warmth to the foot of the bed.',
    features: ['Heirloom quality', 'Dense weave', 'Accent piece'],
    // Image: WULF Blanket By SANTI
    imageUrl: 'https://sleepbysanti.co/cdn/shop/files/Post-Photoshop1_500x.png'
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