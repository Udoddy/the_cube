import React from 'react';

interface LogoProps {
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ height = 50 }) => {
  return (
    <img 
      src="/logo.png" 
      alt="The Cube Restaurant & Café" 
      style={{ height: `${height}px` }}
      className="w-auto"
    />
  );
};

export default Logo;