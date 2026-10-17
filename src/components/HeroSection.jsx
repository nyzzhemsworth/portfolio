import React from 'react';
import { Rocket, Sparkles, Film, Terminal, Layers, ArrowDown } from 'lucide-react';
import Ribbon3D from './Ribbon3D';
import Sticker from './Sticker';

export default function HeroSection({ activeMode, setActiveMode }) {
  return (
    <section id="hero" className="relative w-full bg-[#dceeff] pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden min-h-[85vh] flex flex-col justify-center items-center">
      {/* 3D Blue Ribbon wrapping cleanly behind the hero */}
      <Ribbon3D variant="hero" />

      <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Top Badges / Floating Stickers (Clean & not overlapping text) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 select-none">
          <Sticker
            color="ember"
            rotate={-4}
            icon={<Rocket className="w-3.5 h-3.5" />}
            label="4K CGI PRODUCTION"
          />
          <Sticker
            color="sunburst"
            rotate={3}
            icon={<Sparkles className="w-3.5 h-3.5" />}
            label="CREATIVE CODE"
          />
        </div>

        {/* Sculptural Headline Block */}
        <div className="relative my-2 sm:my-4 select-none max-w-full">
          {/* Desktop-only side stickers */}
          <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-20">
            <Sticker
              color="mint-pop"
              rotate={-10}
              icon={<Film className="w-4 h-4" />}
              label="HOUDINI FX"
            />
          </div>

          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 z-20">
            <Sticker
              color="voltage-violet"
              rotate={8}
              icon={<Terminal className="w-4 h-4" />}
              label="THREE.JS / WEBGL"
            />
          </div>

          <h1 className="font-extrabold text-[64px] sm:text-[110px] md:text-[160px] lg:text-[210px] leading-[0.85] tracking-[-0.04em] text-black uppercase font-['Syne',sans-serif] m-0">
            ZIELL
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
            <span className="font-extrabold text-2xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-black uppercase font-['Syne',sans-serif]">
              {activeMode === 'vfx' ? 'VFX & 3D ART' : 'TECH & CODE LAB'}
            </span>

            <span className="px-3.5 py-1 rounded-full border border-black bg-[#e9ccff] text-black font-extrabold text-xs sm:text-base uppercase tracking-wider -rotate-2">
              STUDIO
            </span>
          </div>
        </div>

        {/* Tagline Subhead */}
        <p className="mt-5 sm:mt-8 max-w-[680px] text-sm sm:text-lg md:text-xl font-medium text-neutral-800 leading-relaxed px-2">
          {activeMode === 'vfx'
            ? 'Hyper-real CGI simulations, cinematic compositing, and visual storytelling pushed to the absolute edge.'
            : 'Creative developer crafting real-time web experiences, procedural graphics, and cloud automation.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <a
            href="#showcase"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Works</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#breakdown"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>VFX Breakdown Tool</span>
            <Layers className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Arsenal Pills: Responsive 2-column grid on mobile, inline on desktop */}
        <div className="mt-8 sm:mt-12 w-full max-w-md sm:max-w-2xl">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5">
            <div className="flex justify-center">
              <Sticker color="paper-white" rotate={-1} label="Blender & Houdini" />
            </div>
            <div className="flex justify-center">
              <Sticker color="lavender" rotate={1} label="React & Node.js" />
            </div>
            <div className="flex justify-center">
              <Sticker color="sunburst" rotate={-1} label="After Effects & Nuke" />
            </div>
            <div className="flex justify-center">
              <Sticker color="mint-pop" rotate={2} label="GLSL Shaders" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
