export interface ProductFeature {
  label: string;
  value?: string;
}

export interface Product {
  id: string;
  name: string;
  price: string; // Keeping as string to display range if needed
  description: string;
  features: string[];
  colors?: string[];
  imageUrl: string;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  products: Product[];
}