import React from 'react';

export default function Ribbon3D({ className = '', variant = 'hero' }) {
  if (variant === 'hero') {
    return (
      <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 1200 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-h-[460px] object-contain opacity-90"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Tube 3D gradient */}
            <linearGradient id="tubeShading1" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#1256ab" />
              <stop offset="25%" stopColor="#2b7de0" />
              <stop offset="50%" stopColor="#75b8ff" />
              <stop offset="68%" stopColor="#a3ceff" />
              <stop offset="82%" stopColor="#4da2ff" />
              <stop offset="100%" stopColor="#0d4794" />
            </linearGradient>

            <linearGradient id="tubeShading2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c3c7c" />
              <stop offset="35%" stopColor="#3589eb" />
              <stop offset="58%" stopColor="#8cc3ff" />
              <stop offset="78%" stopColor="#4da2ff" />
              <stop offset="100%" stopColor="#134f9b" />
            </linearGradient>

            <filter id="tubeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0d3f82" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Primary Ribbon Arch behind Title */}
          <g filter="url(#tubeGlow)">
            {/* Depth shadow stroke */}
            <path
              d="M 50,320 C 250,440 380,110 650,220 C 900,320 1020,90 1150,210"
              stroke="#0a2e63"
              strokeWidth="68"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
            />
            {/* Tube Body */}
            <path
              d="M 50,310 C 250,430 380,100 650,210 C 900,310 1020,80 1150,200"
              stroke="url(#tubeShading1)"
              strokeWidth="64"
              strokeLinecap="round"
              fill="none"
            />
            {/* Top Gloss Highlight */}
            <path
              d="M 50,304 C 250,424 380,94 650,204 C 900,304 1020,74 1150,194"
              stroke="#ffffff"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
          </g>

          {/* Secondary looping curl */}
          <g filter="url(#tubeGlow)">
            <path
              d="M 160,440 C 380,310 520,390 760,260 C 940,160 1060,340 1180,290"
              stroke="url(#tubeShading2)"
              strokeWidth="44"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 160,436 C 380,306 520,386 760,256 C 940,156 1060,336 1180,286"
              stroke="#e2f0ff"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Variant for secondary section (arc ribbon)
  return (
    <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 1200 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[300px] object-contain opacity-85"
      >
        <defs>
          <linearGradient id="arcShading" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#0d3f82" />
            <stop offset="20%" stopColor="#4da2ff" />
            <stop offset="50%" stopColor="#9fd0ff" />
            <stop offset="80%" stopColor="#4da2ff" />
            <stop offset="100%" stopColor="#1555a6" />
          </linearGradient>
        </defs>
        <path
          d="M 20,100 C 320,10 820,290 1180,110"
          stroke="url(#arcShading)"
          strokeWidth="56"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 20,95 C 320,5 820,285 1180,105"
          stroke="#ffffff"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
