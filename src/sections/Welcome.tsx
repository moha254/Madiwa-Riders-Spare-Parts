import React from 'react';
import { Wrench, Settings, Truck, ShieldCheck } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Madiwa Riders Spare Parts
          </h2>
          <p className="text-lg text-gray-700">
            Your one-stop shop for genuine and durable motorcycle spare parts. Whether you're a mechanic, 
            rider, or dealer, we've got the right components to keep your ride running smoothly — from 
            reams to crankshafts and everything in between.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Wrench className="text-blue-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
            <p className="text-gray-600">Genuine components that meet the highest industry standards</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Settings className="text-blue-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600">Technical guidance to help you choose the right parts</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Truck className="text-blue-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick shipping options to get you back on the road</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <ShieldCheck className="text-blue-800" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Warranty</h3>
            <p className="text-gray-600">Peace of mind with our parts warranty policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;