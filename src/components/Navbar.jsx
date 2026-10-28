import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

export default function Navbar({ onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pills = [
    { href: '/links', label: 'My Links' },
    { href: '/tools', label: 'Tools' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-8 py-2.5 sm:py-3 backdrop-blur-md bg-[#dceeff]/85 border-b border-black/10 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Logo Mark */}
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-base sm:text-xl text-black hover:rotate-12 transition-transform select-none">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-extrabold text-sm sm:text-base font-['Syne',sans-serif] uppercase tracking-wider text-black">
            {profile.name}
          </span>
        </a>

        {/* Center: Pill Nav Buttons (desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {pills.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="px-4 py-2 rounded-full border border-black bg-white text-black font-bold text-xs uppercase tracking-[0.032em] hover:bg-[#e9e9e9] transition-colors"
            >
              {p.label}
            </a>
          ))}
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
          <div className="grid grid-cols-3 gap-2 pt-1">
            {pills.map((p) => (
              <a
                key={p.href}
                href={p.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-center rounded-full border border-black bg-[#f2f2f2] text-xs font-bold uppercase"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
