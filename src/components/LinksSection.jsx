import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Sticker from './Sticker';
import BrandIcon from './BrandIcons';
import Reveal from './Reveal';
import BackgroundDecor from './BackgroundDecor';
import { profile, channelLinks, socialLinks } from '../data/profile';

// ============ Kartu untuk link channel utama (besar) ============
function ChannelCard({ link, rotate = -2 }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[24px] sm:rounded-[28px] border border-black bg-white p-6 sm:p-8 flex flex-col min-h-[200px] justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <Sticker color={link.color} rotate={rotate} icon={<BrandIcon name={link.brand} className="w-3.5 h-3.5" />} label={link.label} />
        <div className="w-10 h-10 rounded-full border border-black bg-white flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-extrabold text-2xl sm:text-3xl font-['Syne',sans-serif] leading-tight text-black mb-1.5">
          {link.label}
        </h3>
        <p className="text-neutral-700 text-sm sm:text-base font-medium">{link.sub}</p>
      </div>
    </a>
  );
}

// ============ Kartu untuk social media (kecil) ============
function SocialCard({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] border border-black bg-white text-black flex items-center justify-between hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#000] transition-all cursor-pointer"
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black bg-[#f0f0f0] flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
          <BrandIcon name={link.brand} className="w-4 h-4 sm:w-5 sm:h-5" />
        </span>
        <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">{link.label}</span>
      </div>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </a>
  );
}

export default function LinksSection() {
  return (
    <section id="links" className="relative w-full scroll-mt-24 bg-[#ffffff] py-14 sm:py-20 px-4 sm:px-8 border-t border-black overflow-hidden">
      <BackgroundDecor />
      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sticker color="mint-pop" rotate={2} label="LINK HUB" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                // {profile.handle}
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] m-0">
              FIND ME HERE
            </h2>
          </div>
        </Reveal>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {channelLinks.map((link, i) => (
            <Reveal key={link.id} delay={i * 90}>
              <ChannelCard link={link} rotate={[-3, 3, -1][i % 3]} />
            </Reveal>
          ))}
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-5">
          {socialLinks.map((link, i) => (
            <Reveal key={link.id} delay={i * 70}>
              <SocialCard link={link} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
