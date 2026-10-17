import React, { useState, useRef } from 'react';
import { Sliders, Eye, Wand2 } from 'lucide-react';
import Sticker from './Sticker';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <section id="breakdown" className="w-full bg-[#ffffff] py-20 px-4 sm:px-8 border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sticker color="mint-pop" rotate={-2} label="INTERACTIVE TOOL" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                // Pipeline Comparison
              </span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[0.82] tracking-tight uppercase font-['Syne',sans-serif] m-0">
              BEFORE / AFTER
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-700 max-w-xl font-medium">
              Drag the center slider to inspect the multi-pass CGI composite, lighting simulation, and final color grading.
            </p>
          </div>

          {/* Quick preset selector buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSliderPos(0)}
              className="px-4 py-2 rounded-full border border-black bg-white hover:bg-[#e9e9e9] text-xs font-bold uppercase tracking-wider"
            >
              Raw Only
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className="px-4 py-2 rounded-full border border-black bg-[#ffd731] text-xs font-bold uppercase tracking-wider"
            >
              50 / 50 Split
            </button>
            <button
              onClick={() => setSliderPos(100)}
              className="px-4 py-2 rounded-full border border-black bg-white hover:bg-[#e9e9e9] text-xs font-bold uppercase tracking-wider"
            >
              Final Comp
            </button>
          </div>
        </div>

        {/* The Interactive Comparison Stage */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[30px] border border-black overflow-hidden select-none cursor-ew-resize bg-black"
        >
          {/* AFTER: Final VFX (Background Image / Canvas) */}
          <div className="absolute inset-0 w-full h-full bg-[#0a0f1d] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/40 via-purple-900/30 to-black"></div>
            
            {/* Visual simulation graphics for After */}
            <div className="relative z-10 text-center px-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400 text-black font-extrabold text-xs uppercase tracking-widest border border-black mb-3">
                <Wand2 className="w-3.5 h-3.5" />
                <span>FINAL COMPOSITING & GRADING (ACES 4K)</span>
              </div>
              <h3 className="text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase font-['Syne',sans-serif] drop-shadow-[0_4px_24px_rgba(77,162,255,0.8)]">
                NEO-SHINJUKU SIMULATION
              </h3>
              <p className="text-blue-200 text-xs sm:text-sm font-mono mt-2">
                [Houdini Pyro FX + Octane Render + Nuke Multi-Channel Cryptomatte]
              </p>
            </div>

            {/* Glowing neon elements */}
            <div className="absolute bottom-6 right-8 p-3 rounded-2xl border border-black bg-white/90 backdrop-blur-md text-black text-xs font-bold">
              Final Render: 4K 60FPS
            </div>
          </div>

          {/* BEFORE: Raw Clay / Log Footage (Clipped by slider position) */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute inset-0 h-full bg-[#202022] border-r-2 border-white overflow-hidden transition-[width] duration-75 ease-out"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#2b2b2b] min-w-[320px] sm:min-w-[800px]">
              {/* Wireframe / Clay visual simulation */}
              <div className="relative z-10 text-center px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cccccc] text-black font-extrabold text-xs uppercase tracking-widest border border-black mb-3">
                  <Eye className="w-3.5 h-3.5" />
                  <span>RAW 3D CLAY & WIREFRAME</span>
                </div>
                <h3 className="text-3xl sm:text-6xl font-black text-[#888888] tracking-tighter uppercase font-['Syne',sans-serif]">
                  RAW GEOMETRY PASS
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-2">
                  [Polygons: 14.8M • Subdivisions: 4 • Untextured Normal Map]
                </p>
              </div>

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              ></div>
            </div>

            <div className="absolute bottom-6 left-8 p-3 rounded-2xl border border-black bg-[#cccccc] text-black text-xs font-bold">
              Raw Topology Pass
            </div>
          </div>

          {/* Divider Handle Knob */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 -ml-5 w-10 flex items-center justify-center pointer-events-none z-30"
          >
            <div className="w-10 h-10 rounded-full border-2 border-black bg-[#ffd731] flex items-center justify-center text-black font-extrabold shadow-none">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid beneath comparison */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-[20px] border border-black bg-[#dceeff]">
            <span className="block font-extrabold text-2xl font-['Syne',sans-serif]">01. 3D CAM</span>
            <span className="text-xs font-medium text-neutral-800">Precision Optical Tracking & Lens Distortion</span>
          </div>
          <div className="p-4 rounded-[20px] border border-black bg-[#e9ccff]">
            <span className="block font-extrabold text-2xl font-['Syne',sans-serif]">02. PYRO FX</span>
            <span className="text-xs font-medium text-neutral-800">Gas Dynamics, Smoke & Particle Shockwaves</span>
          </div>
          <div className="p-4 rounded-[20px] border border-black bg-[#ffd731]">
            <span className="block font-extrabold text-2xl font-['Syne',sans-serif]">03. LIGHTING</span>
            <span className="text-xs font-medium text-neutral-800">ACES CG Color Space & Physically Based Shading</span>
          </div>
          <div className="p-4 rounded-[20px] border border-black bg-[#55db9c]">
            <span className="block font-extrabold text-2xl font-['Syne',sans-serif]">04. COMPOSITING</span>
            <span className="text-xs font-medium text-neutral-800">Multi-layer Deep Compositing & Grain Matching</span>
          </div>
        </div>
      </div>
    </section>
  );
}
