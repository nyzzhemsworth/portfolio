import React from 'react';

export default function Ribbon3D({ className = '', variant = 'hero' }) {
  if (variant === 'hero') {
    return (
      <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-95"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Grainy texture filter for inflatable feel */}
            <filter id="ribbonNoise" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" />
              <feComposite in2="SourceGraphic" in="gl" operator="in" />
            </filter>

            {/* Inflatable tube 3D linear gradient */}
            <linearGradient id="tubeShading1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a61b8" />
              <stop offset="25%" stopColor="#3083e8" />
              <stop offset="50%" stopColor="#6eb4ff" />
              <stop offset="65%" stopColor="#99caff" />
              <stop offset="80%" stopColor="#4da2ff" />
              <stop offset="100%" stopColor="#104d9c" />
            </linearGradient>

            <linearGradient id="tubeShading2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d3f82" />
              <stop offset="30%" stopColor="#3b8ef0" />
              <stop offset="55%" stopColor="#8cc1ff" />
              <stop offset="75%" stopColor="#4da2ff" />
              <stop offset="100%" stopColor="#1555a6" />
            </linearGradient>

            <filter id="tubeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1a559e" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Background Loop of the Ribbon */}
          <g filter="url(#tubeGlow)">
            {/* Dark shadow stroke underneath */}
            <path
              d="M-50,380 C 250,520 400,120 720,280 C 1040,440 1200,80 1520,240"
              stroke="#0b3169"
              strokeWidth="78"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            {/* Main Inflatable Body */}
            <path
              d="M-50,370 C 250,510 400,110 720,270 C 1040,430 1200,70 1520,230"
              stroke="url(#tubeShading1)"
              strokeWidth="74"
              strokeLinecap="round"
              fill="none"
            />
            {/* Top Gloss Highlight */}
            <path
              d="M-50,363 C 250,503 400,103 720,263 C 1040,423 1200,63 1520,223"
              stroke="#ffffff"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              opacity="0.65"
            />
          </g>

          {/* Secondary Ribbon Loop weaving across bottom */}
          <g filter="url(#tubeGlow)">
            <path
              d="M180,580 C 450,420 620,530 890,370 C 1120,230 1350,480 1490,420"
              stroke="url(#tubeShading2)"
              strokeWidth="56"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M180,576 C 450,416 620,526 890,366 C 1120,226 1350,476 1490,416"
              stroke="#e2f0ff"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Variant for secondary section (arc ribbon)
  return (
    <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-90"
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
          d="M-40,120 C 350,20 950,340 1480,140"
          stroke="url(#arcShading)"
          strokeWidth="68"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-40,114 C 350,14 950,334 1480,134"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
