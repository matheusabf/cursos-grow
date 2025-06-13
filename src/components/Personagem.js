import React from 'react';

export default function Personagem({ imgSrc }) {
  return (
    <div className="w-1/2 overflow-hidden rounded-lg">
      <img
        src={imgSrc}
        alt="Personagem"
        className="w-full h-full object-cover transition-opacity duration-700"
      />
    </div>
  );
}
