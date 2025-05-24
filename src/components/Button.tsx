import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary = false,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
        primary
          ? 'bg-blue-800 text-white hover:bg-blue-900'
          : 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;