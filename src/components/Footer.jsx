import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ffffff] py-12 px-4 sm:px-8 border-t border-black select-none">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="w-9 h-9 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-sm text-black">
            {profile.initials}
          </span>
          <span className="font-extrabold text-base font-['Syne',sans-serif] uppercase tracking-wider text-black">
            {profile.name} — {profile.handle}
          </span>
        </div>

        <div className="text-xs text-neutral-600 font-medium flex items-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-[#fb4903] text-[#fb4903]" />
          <span>{profile.headline}</span>
          <span>• 2026</span>
        </div>

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
