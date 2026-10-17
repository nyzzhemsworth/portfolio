import React from 'react';
import { Rocket, Sparkles, Film, Code, Terminal, Layers, ArrowDown } from 'lucide-react';
import Ribbon3D from './Ribbon3D';
import Sticker from './Sticker';

export default function HeroSection({ activeMode, setActiveMode }) {
  return (
    <section id="hero" className="relative w-full bg-[#dceeff] pt-12 pb-24 px-4 sm:px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center">
      {/* 3D Blue Ribbon wrapping behind everything */}
      <Ribbon3D variant="hero" />

      <div className="max-w-[1440px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Floating Decorative Stickers (Sticker-Book Logic) */}
        <div className="w-full relative min-h-[40px] mb-2 pointer-events-auto">
          {/* Top Left Sticker: Rocket */}
          <div className="absolute left-[5%] top-[-10px] hidden sm:block">
            <Sticker
              color="ember"
              rotate={-12}
              icon={<Rocket className="w-4 h-4" />}
              label="CGI RENDER 4K"
            />
          </div>

          {/* Top Center-Right Sticker: Coin */}
          <div className="absolute right-[12%] top-[-20px] hidden sm:block">
            <Sticker
              color="sunburst"
              rotate={14}
              icon={<Sparkles className="w-4 h-4" />}
              label="CREATIVE CODE"
            />
          </div>
        </div>

        {/* Display Headline Block: Lateral 800 style, 140px-240px, crushed leading 0.76-0.80 */}
        <div className="relative my-4 select-none">
          {/* Middle Floating Stickers */}
          <div className="absolute -left-4 sm:left-[-60px] top-[30%] z-20">
            <Sticker
              color="mint-pop"
              rotate={-8}
              icon={<Film className="w-4 h-4" />}
              label="HOUDINI FX"
            />
          </div>

          <div className="absolute -right-4 sm:right-[-60px] top-[40%] z-20">
            <Sticker
              color="voltage-violet"
              rotate={10}
              icon={<Terminal className="w-4 h-4" />}
              label="THREE.JS / WEBGL"
            />
          </div>

          <h1 className="font-extrabold text-[80px] sm:text-[140px] md:text-[190px] lg:text-[230px] leading-[0.76] tracking-[-0.04em] text-black uppercase font-['Syne',sans-serif] m-0">
            ZIELL
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
            <span className="font-extrabold text-[44px] sm:text-[84px] md:text-[120px] leading-[0.80] tracking-[-0.03em] text-black uppercase font-['Syne',sans-serif]">
              {activeMode === 'vfx' ? 'VFX & 3D' : 'TECH & CODE'}
            </span>

            {/* Lavender Pill Badge */}
            <div className="inline-block transform rotate-[-4deg] mt-1">
              <span className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-black bg-[#e9ccff] text-black font-extrabold text-sm sm:text-xl uppercase tracking-wider">
                STUDIO
              </span>
            </div>
          </div>
        </div>

        {/* Tagline Subhead */}
        <p className="mt-8 max-w-[760px] text-base sm:text-xl md:text-2xl font-medium text-black leading-snug px-4 tracking-[-0.01em]">
          {activeMode === 'vfx'
            ? 'Hyper-real CGI simulations, cinematic compositing, and visual storytelling pushed to the absolute edge.'
            : 'Creative developer crafting real-time web experiences, procedural graphics, and cloud automation.'}
        </p>

        {/* Ghost Outlined Buttons & Quick Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#showcase"
            className="px-6 py-3 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Explore Works</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#breakdown"
            className="px-6 py-3 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center gap-2"
          >
            <span>VFX Breakdown Tool</span>
            <Layers className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Floating Stickers Cluster */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Sticker color="paper-white" rotate={-3} label="✦ Blender & Houdini" />
          <Sticker color="lavender" rotate={2} label="✦ React & Node.js" />
          <Sticker color="sunburst" rotate={-4} label="✦ After Effects & Nuke" />
          <Sticker color="mint-pop" rotate={3} label="✦ GLSL Shaders" />
        </div>
      </div>
    </section>
  );
}
