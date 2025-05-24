import React from 'react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Top-Quality Motorcycle Spare Parts You Can Trust
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Reliable parts. Affordable prices. Built for performance and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button primary onClick={scrollToProducts}>
              Browse Our Products
            </Button>
            <Button onClick={scrollToContact}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;