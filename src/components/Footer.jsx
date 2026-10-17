import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import Sticker from './Sticker';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ffffff] py-12 px-4 sm:px-8 border-t border-black select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Domains */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-9 h-9 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-sm text-black">
            Z
          </span>
          <span className="font-extrabold text-base font-['Syne',sans-serif] uppercase tracking-wider text-black">
            ZIELL STUDIO
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            <span className="px-3 py-1 rounded-full border border-black bg-[#dceeff] text-black text-[11px] font-bold">
              ziellvfx.com
            </span>
            <span className="px-3 py-1 rounded-full border border-black bg-[#55db9c] text-black text-[11px] font-bold">
              ziell.tech
            </span>
          </div>
        </div>

        {/* Center: System notice */}
        <div className="text-xs text-neutral-600 font-medium flex items-center gap-1.5">
          <span>Engineered with</span>
          <span className="font-bold text-black uppercase tracking-wider">Slush Design System</span>
          <span>• 2026</span>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-black hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
