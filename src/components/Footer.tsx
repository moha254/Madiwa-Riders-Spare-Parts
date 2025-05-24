import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Madiwa Riders Spare Parts</h3>
            <p className="mb-4">Your one-stop shop for genuine and durable motorcycle spare parts.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-300 transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Section 3, SunCity, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+254746474262</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@madiwariders.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>© 2025 Madiwa Riders Spare Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;