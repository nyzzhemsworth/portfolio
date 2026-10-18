import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin, Link2 } from 'lucide-react';
import Ribbon3D from './Ribbon3D';
import Sticker from './Sticker';
import { profile } from '../data/profile';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-[#dceeff] pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden min-h-[85vh] flex flex-col justify-center items-center">
      <Ribbon3D variant="hero" />

      <div className="max-w-[1000px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Profile Avatar */}
        <div className="relative mb-5 select-none">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[32px] border border-black bg-white flex items-center justify-center overflow-hidden shadow-none">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-extrabold text-5xl sm:text-7xl font-['Syne',sans-serif] text-black">
                {profile.initials}
              </span>
            )}
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
            <Sticker color="sunburst" rotate={-2} icon={<Sparkles className="w-3 h-3" />} label={profile.status} />
          </div>
        </div>

        {/* Name + Handle */}
        <h1 className="font-extrabold text-[56px] sm:text-[90px] md:text-[130px] leading-[0.85] tracking-[-0.04em] text-black uppercase font-['Syne',sans-serif] m-0 mt-4">
          {profile.name}
        </h1>
        <span className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-black bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider">
          {profile.handle}
          <MapPin className="w-3.5 h-3.5" />
          {profile.location}
        </span>

        {/* Headline + Intro */}
        <p className="mt-5 sm:mt-7 max-w-[620px] text-sm sm:text-lg md:text-xl font-medium text-neutral-800 leading-relaxed px-2">
          {profile.intro}
        </p>

        {/* Roles as stickers */}
        <div className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {profile.roles.map((role, i) => {
            const colors = ['electric-blue', 'mint-pop', 'lavender', 'sunburst'];
            const rotates = [-2, 2, -1, 1];
            return (
              <Sticker key={i} color={colors[i % colors.length]} rotate={rotates[i % rotates.length]} label={role} />
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <a
            href="#links"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Link2 className="w-4 h-4" />
            <span>My Links</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Me</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
