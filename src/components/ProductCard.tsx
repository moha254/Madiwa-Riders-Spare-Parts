import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, price }) => {
  const phoneNumber = '+254746474262'; // Replace with your actual phone number
  const whatsappMessage = `Hi, I'm interested in the ${title}.\n\nProduct Details:\n- Title: ${title}\n- Description: ${description}\n- Price: ${price}\n\nCan you provide more information about this product?`;
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && <p className="text-lg font-semibold text-blue-800 mb-4">{price}</p>}
        
        <div className="flex gap-3">
          <button
            onClick={handleCall}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            <Phone size={18} />
            <span>Call</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;