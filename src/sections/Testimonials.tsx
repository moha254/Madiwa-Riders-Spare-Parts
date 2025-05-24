import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Madiwa Riders never disappoint. Their parts are durable and the service is top-notch.",
      author: "Brian O.",
      role: "Mechanic"
    },
    {
      id: 2,
      quote: "Best tyre quality I've used so far. Will definitely return.",
      author: "Joseph M.",
      role: "Rider"
    },
    {
      id: 3,
      quote: "Their cylinder heads are excellent quality. My bikes have never run better since I switched to Madiwa parts.",
      author: "Sarah K.",
      role: "Motorcycle Club Owner"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Our Customers Say" 
          subtitle="Don't just take our word for it. Here's what our satisfied customers have to say."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Join our growing list of satisfied customers.
          </p>
          <a 
            href="#products" 
            className="inline-block mt-4 px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;