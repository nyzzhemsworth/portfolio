import React, { useState } from 'react';
import { ArrowUpRight, Film, Code, Menu, X } from 'lucide-react';

export default function Navbar({ activeMode, setActiveMode, onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-8 py-2.5 sm:py-3 backdrop-blur-md bg-[#dceeff]/85 border-b border-black/10 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Logo Mark */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#hero"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-base sm:text-xl text-black hover:rotate-12 transition-transform select-none shadow-none"
          >
            Z
          </a>

          {/* Dual Domain Badge (Desktop) */}
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
            href="#about"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            Arsenal & Tech
          </a>
          <a
            href="#connect"
            className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Filled CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onContactClick}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black bg-black text-white font-bold text-[11px] sm:text-xs uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black bg-white flex items-center justify-center text-black active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 sm:p-4 rounded-[20px] border border-black bg-white space-y-2.5 shadow-none animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex gap-1.5">
            <button
              onClick={() => {
                setActiveMode('vfx');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-full border border-black text-[11px] font-bold uppercase ${
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
              className={`flex-1 py-2 rounded-full border border-black text-[11px] font-bold uppercase ${
                activeMode === 'tech' ? 'bg-[#55db9c]' : 'bg-white'
              }`}
            >
              ziell.tech
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-full border border-black bg-[#f2f2f2] text-xs font-bold uppercase"
            >
              Showcase
            </a>
            <a
              href="#breakdown"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-full border border-black bg-[#f2f2f2] text-xs font-bold uppercase"
            >
              Breakdown
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-full border border-black bg-[#f2f2f2] text-xs font-bold uppercase"
            >
              Arsenal
            </a>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-center rounded-full border border-black bg-[#f2f2f2] text-xs font-bold uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
