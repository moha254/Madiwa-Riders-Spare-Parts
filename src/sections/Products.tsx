import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Ream',
      description: 'Precision-machined for durability and smooth engine performance.',
      imageUrl: '/img/ream.webp',
      price: 'KSh 3,500'
    },
    {
      id: 2,
      title: 'Cylinder Head',
      description: 'High-quality heads ensuring optimal combustion and power.',
      imageUrl: '/img/cylinder head.jpg',
      price: 'KSh 15,000'
    },
    {
      id: 3,
      title: 'Tyres',
      description: 'Strong grip, long-lasting, and suitable for various terrains.',
      imageUrl: '/img/tyre.webp',
      price: 'KSh 4,500'
    },
    {
      id: 4,
      title: 'Crankcase',
      description: 'Rigid and leak-proof to protect engine internals.',
      imageUrl: '/img/Crankcase.webp',
      price: 'KSh 8,000'
    },
    {
      id: 5,
      title: 'Crankshaft',
      description: 'Balanced and built to handle tough riding conditions.',
      imageUrl: '/img/Crankshaft.webp',
      price: 'KSh 12,000'
    },
    {
      id: 6,
      title: 'Brake Systems',
      description: 'Reliable braking components for optimal safety and performance.',
      imageUrl: '/img/brake.jpg',
      price: 'KSh 6,500'
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Spare Parts Built for Power & Performance" 
          subtitle="Every part is carefully selected and tested to ensure it meets the highest standards of performance and durability."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Need a specific part not listed here? Contact us and we'll help you find exactly what you need.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-5 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Ask About Other Parts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;