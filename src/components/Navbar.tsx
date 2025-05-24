import React, { useState, useEffect } from 'react';
import { Menu, X, Recycle as Motorcycle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Motorcycle className="text-blue-800 mr-2" size={32} />
          <span className="text-xl font-bold text-blue-900">Madiwa Riders Spare Parts</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-gray-800 hover:text-blue-700 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-800 hover:text-blue-700 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="text-gray-800 hover:text-blue-700 transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-800 hover:text-blue-700 transition-colors"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-2 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-800 hover:text-blue-700 py-2 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-800 hover:text-blue-700 py-2 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-gray-800 hover:text-blue-700 py-2 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-800 hover:text-blue-700 py-2 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;