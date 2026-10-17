import React from 'react';

const COLOR_MAP = {
  'electric-blue': 'bg-[#4da2ff] text-black',
  'mint-pop': 'bg-[#55db9c] text-black',
  'lavender': 'bg-[#e9ccff] text-black',
  'ember': 'bg-[#fb4903] text-white',
  'sunburst': 'bg-[#ffd731] text-black',
  'voltage-violet': 'bg-[#5c4ade] text-white',
  'paper-white': 'bg-[#ffffff] text-black',
  'carbon': 'bg-[#000000] text-white',
};

export default function Sticker({
  children,
  color = 'electric-blue',
  rotate = 0,
  className = '',
  icon = null,
  label = '',
  radius = 'rounded-[20px]',
  onClick = null,
}) {
  const colorClass = COLOR_MAP[color] || 'bg-[#ffd731] text-black';

  return (
    <div
      onClick={onClick}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-2 px-3.5 py-2 select-none border border-black ${radius} ${colorClass} font-bold text-xs uppercase tracking-[0.032em] cursor-pointer sticker-hover ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {label && <span>{label}</span>}
      {children}
    </div>
  );
}
