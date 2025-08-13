import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}

const ProductCard = React.memo(({ title, description, image, id }: ProductCardProps) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
          Learn More →
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;