import React from 'react';
import { Link2, MessageCircle, MapPin } from 'lucide-react';
import Sticker from './Sticker';
import Reveal from './Reveal';
import BackgroundDecor from './BackgroundDecor';
import { profile } from '../data/profile';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full scroll-mt-24 bg-[#dceeff] pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden flex flex-col justify-center items-center">
      <BackgroundDecor />
      <div className="max-w-[1000px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Profile Avatar */}
        <Reveal delay={0}>
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[32px] border border-black bg-white flex items-center justify-center overflow-hidden select-none">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-extrabold text-5xl sm:text-7xl font-['Syne',sans-serif] text-black">
                {profile.initials}
              </span>
            )}
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={70}>
          <h1 className="font-extrabold text-[56px] sm:text-[90px] md:text-[120px] leading-[0.85] tracking-[-0.04em] text-black uppercase font-['Syne',sans-serif] m-0 mt-5">
            {profile.name}
          </h1>
        </Reveal>

        {/* Handle + Location pill */}
        <Reveal delay={140}>
          <span className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-black bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-wider">
            {profile.handle}
            <span className="text-neutral-400">•</span>
            <MapPin className="w-3.5 h-3.5" />
            {profile.location}
          </span>
        </Reveal>

        {/* Status badge */}
        <Reveal delay={210}>
          <div className="mt-3 animate-float-soft">
            <Sticker color="sunburst" rotate={-1} label={profile.status} />
          </div>
        </Reveal>

        {/* Intro */}
        <Reveal delay={280}>
          <p className="mt-4 sm:mt-5 max-w-[560px] text-sm sm:text-lg font-medium text-neutral-800 leading-relaxed px-2">
            {profile.intro}
          </p>
        </Reveal>

        {/* Roles as stickers */}
        <Reveal delay={350}>
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {profile.roles.map((role, i) => {
              const colors = ['electric-blue', 'mint-pop', 'ember', 'sunburst'];
              return (
                <Sticker key={i} color={colors[i % colors.length]} rotate={0} label={role} />
              );
            })}
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={420}>
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
            <a
              href="/links"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Link2 className="w-4 h-4" />
              <span>My Links</span>
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:bg-[#e9e9e9] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
