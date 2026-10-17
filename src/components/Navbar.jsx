import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Film, Code, Menu, X } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode, onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3 backdrop-blur-md bg-[#dceeff]/80 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
        {/* Left: Logo Mark */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="w-11 h-11 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-xl text-black hover:rotate-12 transition-transform select-none shadow-none"
          >
            Z
          </a>

          {/* Dual Domain Badge */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-black bg-white text-xs font-bold">
            <button
              onClick={() => setActiveMode('vfx')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 text-[11px] uppercase tracking-wider ${
                activeMode === 'vfx'
                  ? 'bg-[#4da2ff] text-black font-extrabold'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Film className="w-3 h-3" />
              ziellvfx.com
            </button>
            <button
              onClick={() => setActiveMode('tech')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1 text-[11px] uppercase tracking-wider ${
                activeMode === 'tech'
                  ? 'bg-[#55db9c] text-black font-extrabold'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              <Code className="w-3 h-3" />
              ziell.tech
            </button>
          </div>
        </div>

        {/* Center: Pill Nav Buttons (desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <a
            href="#showcase"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            Showcase
          </a>
          <a
            href="#breakdown"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            VFX Breakdown
          </a>
          <a
            href="#tech-lab"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            Tech Lab
          </a>
          <a
            href="#about"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            About
          </a>
        </nav>

        {/* Right: Filled CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-full border border-black bg-black text-white font-bold text-xs uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-black bg-white flex items-center justify-center text-black"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-[24px] border border-black bg-white space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => {
                setActiveMode('vfx');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-full border border-black text-xs font-bold uppercase ${
                activeMode === 'vfx' ? 'bg-[#4da2ff]' : 'bg-white'
              }`}
            >
              ziellvfx.com
            </button>
            <button
              onClick={() => {
                setActiveMode('tech');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-full border border-black text-xs font-bold uppercase ${
                activeMode === 'tech' ? 'bg-[#55db9c]' : 'bg-white'
              }`}
            >
              ziell.tech
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-center rounded-full border border-black bg-[#e9e9e9] text-xs font-bold uppercase"
            >
              Showcase
            </a>
            <a
              href="#breakdown"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-center rounded-full border border-black bg-[#e9e9e9] text-xs font-bold uppercase"
            >
              Breakdown
            </a>
            <a
              href="#tech-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-center rounded-full border border-black bg-[#e9e9e9] text-xs font-bold uppercase"
            >
              Tech Lab
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-center rounded-full border border-black bg-[#e9e9e9] text-xs font-bold uppercase"
            >
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
