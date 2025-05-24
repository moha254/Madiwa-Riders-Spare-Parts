import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="mb-4 text-blue-800">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 italic mb-4 flex-grow">{quote}</p>
      <div>
        <p className="font-medium text-gray-800">{author}</p>
        {role && <p className="text-gray-500 text-sm">{role}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;