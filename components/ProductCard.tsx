import React, { useState } from 'react';
import { Product } from '../types';
import { ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-stone-900 border border-stone-800 hover:border-gold-600/50 transition-colors duration-300 flex flex-col h-full break-inside-avoid">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-800">
        {!imageError ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-stone-600 p-4 bg-stone-900">
            <ImageOff className="w-12 h-12 mb-2 opacity-50" />
            <span className="text-xs uppercase tracking-widest text-center text-stone-500">Image Unavailable</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-start gap-4 mb-2">
            <h3 className="text-2xl font-serif text-stone-100 leading-none">{product.name}</h3>
          </div>
          <p className="text-gold-500 font-medium text-lg mb-3">{product.price}</p>
          <p className="text-stone-400 text-sm font-light leading-relaxed">{product.description}</p>
        </div>
        
        <div className="flex-grow space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-2">Key Features</h4>
            <ul className="text-stone-400 text-sm space-y-1">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-stone-600">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {product.colors && product.colors.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-500 mb-2">Colors</h4>
              <p className="text-stone-400 text-sm">{product.colors.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;