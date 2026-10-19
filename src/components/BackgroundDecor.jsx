import React from 'react';

// Dekorasi background: blob blur berwarna + garis "swoosh" halus.
// Semua di belakang konten (z-0) & pointer-events-none, jadi nggak nutupin teks.
export default function BackgroundDecor({ className = '' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden z-0 ${className}`}
    >
      {/* Blur blobs (warna brand) */}
      <div className="absolute -top-28 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#4da2ff]/30 blur-3xl" />
      <div className="absolute top-6 -right-24 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#dceeff]/70 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#55db9c]/25 blur-3xl" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#ffd731]/25 blur-3xl" />

      {/* Garis "swoosh" 3D subtle di bawah */}
      <svg
        className="absolute bottom-[-10px] left-0 w-full h-[220px] opacity-[0.16]"
        viewBox="0 0 1200 220"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,190 C220,30 470,250 760,110 C980,5 1110,160 1200,100"
          stroke="#1555a6"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <path
          d="M0,186 C220,26 470,246 760,106 C980,1 1110,156 1200,96"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
