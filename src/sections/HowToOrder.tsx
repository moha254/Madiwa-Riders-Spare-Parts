import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Search, Phone, ShoppingCart, Truck } from 'lucide-react';

const HowToOrder: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Fast & Easy Ordering Process" 
          subtitle="We're always ready to assist with the right fit for your motorcycle model"
          center
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mt-12">
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4">
              <Search size={28} />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-full w-16 border-t-2 border-dashed border-blue-300"></div>
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p className="text-gray-600 max-w-xs">Browse our product catalog</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4">
              <Phone size={28} />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-full w-16 border-t-2 border-dashed border-blue-300"></div>
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p className="text-gray-600 max-w-xs">Call or WhatsApp to confirm availability</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4">
              <ShoppingCart size={28} />
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-full w-16 border-t-2 border-dashed border-blue-300"></div>
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p className="text-gray-600 max-w-xs">Place your order and select delivery option</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4">
              <Truck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 4</h3>
              <p className="text-gray-600 max-w-xs">Receive your spare parts with a smile</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            Need help finding the right part for your motorcycle model?
          </p>
          <p className="mt-2 text-lg font-medium text-blue-800">
            Call us at <a href="tel:+254XXXXXXXX" className="underline">+254 XXX XXX XXX</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;