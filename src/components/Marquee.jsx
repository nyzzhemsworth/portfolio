import React from 'react';
import { profile } from '../data/profile';

export default function Marquee() {
  const items = [
    `✦ ${profile.name} — ${profile.handle}`,
    '✦ VIDEO EDITING',
    '✦ WEB DEV',
    '✦ BOT & AUTOMATION',
    '✦ GRAPHIC DESIGN',
    '✦ OPEN FOR COLLAB',
  ];

  return (
    <div className="w-full max-w-full bg-[#000000] border-y border-[#000000] overflow-hidden py-2 select-none z-50 relative">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).concat(items).map((text, idx) => (
          <span
            key={idx}
            className="text-white text-[11px] sm:text-[13px] font-bold tracking-[0.032em] uppercase mx-3 sm:mx-4 inline-block font-sans"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
