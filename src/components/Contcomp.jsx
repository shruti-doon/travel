import React, { useState } from 'react';

const Contcomp = ({ bg, name, countries }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="p-6 rounded-3xl my-4"
      style={{
        width: '23%',
        height: '200px',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid transparent',
        boxShadow: '0 0 10px 5px',
        transform: isHovered ? 'scale(0.9)' : 'scale(1)',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="font-bold font-serif mb-3 text-lg">{name}</p>
      <p className="my-3 font-semibold text-gray-400 text-sm">{countries}</p>
    </div>
  );
};

export default Contcomp;
