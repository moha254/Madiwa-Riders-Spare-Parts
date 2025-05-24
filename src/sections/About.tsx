import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="Who We Are" 
              subtitle="Your trusted partner for motorcycle excellence"
            />
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Madiwa Riders Spare Parts</strong> is a trusted supplier of high-performance 
                motorcycle components. We understand the demands of daily riding and the need for parts 
                that combine reliability, endurance, and affordability. Our team is dedicated to sourcing 
                and delivering only the best — ensuring every bike we serve stays on the road longer and 
                performs better.
              </p>
              
              <div className="p-4 bg-blue-800 text-white rounded-lg my-6">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="italic">
                  To be the leading supplier of affordable, high-quality motorcycle spare parts across 
                  the region, ensuring riders get maximum value and performance.
                </p>
              </div>
              
              <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Our Mission</h3>
                <p>
                  To provide reliable and long-lasting spare parts that meet the needs of both casual 
                  riders and professional mechanics, while delivering excellent customer service and 
                  consistent availability of stock.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4489746/pexels-photo-4489746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Motorcycle mechanic workshop" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-800 rounded-lg hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600 rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;