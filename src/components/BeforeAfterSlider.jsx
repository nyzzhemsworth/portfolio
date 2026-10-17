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
    <section id="breakdown" className="w-full bg-[#ffffff] py-14 sm:py-20 px-4 sm:px-8 border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sticker color="mint-pop" rotate={-2} label="INTERACTIVE TOOL" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                // Pipeline Comparison
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] m-0">
              BEFORE / AFTER
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-neutral-700 max-w-xl font-medium">
              Drag the center slider to inspect multi-pass CGI geometry versus final ACES 4K compositing.
            </p>
          </div>

          {/* Quick preset selector buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setSliderPos(0)}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-black bg-white hover:bg-[#e9e9e9] text-[11px] sm:text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
            >
              Raw Only
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-black bg-[#ffd731] text-[11px] sm:text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
            >
              50/50 Split
            </button>
            <button
              onClick={() => setSliderPos(100)}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-black bg-white hover:bg-[#e9e9e9] text-[11px] sm:text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
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
          className="relative w-full aspect-[16/11] sm:aspect-[21/9] rounded-[24px] sm:rounded-[30px] border border-black overflow-hidden select-none cursor-ew-resize bg-black touch-none"
        >
          {/* AFTER: Final VFX */}
          <div className="absolute inset-0 w-full h-full bg-[#0a0f1d] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/35 via-purple-900/25 to-black"></div>
            
            <div className="relative z-10 text-center px-4 max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400 text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-wider border border-black mb-2 sm:mb-3">
                <Wand2 className="w-3 h-3" />
                <span>FINAL COMPOSITING & ACES 4K</span>
              </div>
              <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-['Syne',sans-serif]">
                NEO-SHINJUKU SIMULATION
              </h3>
              <p className="text-blue-200 text-[10px] sm:text-xs font-mono mt-1">
                [Houdini Pyro FX + Octane Render + Nuke Multi-Channel]
              </p>
            </div>

            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-black bg-white/90 backdrop-blur-md text-black text-[10px] sm:text-xs font-bold">
              Final: 4K 60FPS
            </div>
          </div>

          {/* BEFORE: Raw Clay Footage */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute inset-0 h-full bg-[#202022] border-r-2 border-white overflow-hidden transition-[width] duration-75 ease-out"
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#242426] min-w-[280px] sm:min-w-[600px]">
              <div className="relative z-10 text-center px-4 max-w-lg">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cccccc] text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-wider border border-black mb-2 sm:mb-3">
                  <Eye className="w-3 h-3" />
                  <span>RAW 3D CLAY & TOPOLOGY</span>
                </div>
                <h3 className="text-xl sm:text-4xl md:text-5xl font-black text-[#888888] tracking-tight uppercase font-['Syne',sans-serif]">
                  RAW GEOMETRY PASS
                </h3>
                <p className="text-neutral-400 text-[10px] sm:text-xs font-mono mt-1">
                  [14.8M Polys • Subdiv 4 • Normal Map]
                </p>
              </div>

              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              ></div>
            </div>

            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-6 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-black bg-[#cccccc] text-black text-[10px] sm:text-xs font-bold">
              Raw Clay Pass
            </div>
          </div>

          {/* Divider Handle */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 -ml-4 sm:-ml-5 w-8 sm:w-10 flex items-center justify-center pointer-events-none z-30"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-[#ffd731] flex items-center justify-center text-black font-extrabold">
              <Sliders className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-5 sm:mt-6">
          <div className="p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] border border-black bg-[#dceeff]">
            <span className="block font-extrabold text-lg sm:text-2xl font-['Syne',sans-serif]">01. 3D CAM</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-800">Precision Optical Tracking & Matchmove</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] border border-black bg-[#e9ccff]">
            <span className="block font-extrabold text-lg sm:text-2xl font-['Syne',sans-serif]">02. PYRO FX</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-800">Gas Dynamics & Particle Shockwaves</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] border border-black bg-[#ffd731]">
            <span className="block font-extrabold text-lg sm:text-2xl font-['Syne',sans-serif]">03. LIGHTING</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-800">ACEScg Color & Physically Based Shading</span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-[18px] sm:rounded-[20px] border border-black bg-[#55db9c]">
            <span className="block font-extrabold text-lg sm:text-2xl font-['Syne',sans-serif]">04. COMP</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-800">Deep Compositing & Lens Grain Matching</span>
          </div>
        </div>
      </div>
    </section>
  );
}
