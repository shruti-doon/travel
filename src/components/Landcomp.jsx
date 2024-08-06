import React from 'react';

const Landcomp = ({ children, bg }) => {
  return (
    <div
      className="p-6 rounded-xl shadow-lg flex items-top justify-center font-mono font-semibold text-4xl hover:border-4 border-white hover:shadow-inner"
      style={{
        width: '23%',
        height: '200px',
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Landcomp;
