import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle, Clock, Truck, HeartHandshake, BadgeDollarSign } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Sets Us Apart" 
          subtitle="We're committed to excellence in every aspect of our service"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          <div className="flex items-start">
            <div className="mr-4 text-blue-800">
              <CheckCircle size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Genuine & Tested Parts</h3>
              <p className="text-gray-600">
                Every component undergoes rigorous quality checks before reaching our shelves.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 text-blue-800">
              <BadgeDollarSign size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Quality doesn't have to break the bank. We offer fair prices for premium parts.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 text-blue-800">
              <HeartHandshake size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Customer Support</h3>
              <p className="text-gray-600">
                Our knowledgeable team is always ready to help you find the perfect part.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 text-blue-800">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">
                Available for local areas, so you can get back on the road quickly.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 text-blue-800">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Extended Warranty</h3>
              <p className="text-gray-600">
                We stand behind our products with generous warranty coverage.
              </p>
            </div>
          </div>
          
          <div className="flex items-start lg:col-span-1 md:col-span-2">
            <div className="mr-4 text-blue-800">
              <CheckCircle size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Mechanics & Riders</h3>
              <p className="text-gray-600">
                Our reputation for quality makes us the go-to choice for professionals and enthusiasts alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;