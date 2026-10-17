import React from 'react';

export default function Marquee() {
  const items = [
    '✦ ZIELL CREATIVE & TECH STUDIO',
    '✦ VFX & CGI SIMULATIONS',
    '✦ CREATIVE CODE & FULLSTACK TOOLS',
    '✦ AVAILABLE FOR GLOBAL COMMISSIONS',
    '✦ ZIELLVFX.COM / ZIELL.TECH',
    '✦ BUILT WITH SLUSH DESIGN SYSTEM',
    '✦ PROCEDURAL 3D • HOUDINI • THREE.JS',
  ];

  return (
    <div className="w-full bg-[#000000] border-y border-[#000000] overflow-hidden py-2 select-none z-50 relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((text, idx) => (
          <span
            key={idx}
            className="text-white text-[12px] sm:text-[13px] font-bold tracking-[0.032em] uppercase mx-4 inline-block font-sans"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
