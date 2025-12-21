import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface CatalogSectionProps {
  title: string;
  description?: string;
  products: Product[];
  id: string;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ title, description, products, id }) => {
  return (
    <section id={id} className="py-20 px-6 border-b border-stone-900 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{title}</h2>
            {description && (
              <p className="text-stone-400 font-light text-lg">{description}</p>
            )}
          </div>
          <div className="hidden md:block h-px flex-grow bg-stone-800 ml-12 mb-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;