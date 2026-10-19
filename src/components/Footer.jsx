import React from 'react';
import { ArrowUp, Mail, Home, Link2, MessageCircle, Phone } from 'lucide-react';
import { profile, contact, socialLinks } from '../data/profile';
import BrandIcon from './BrandIcons';

// Diambil sekali di module scope (bukan saat render) biar lint bersih.
const YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const exploreLinks = [
    { label: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { label: 'My Links', href: '#links', icon: <Link2 className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  return (
    <footer className="w-full bg-[#ffffff] border-t-2 border-black select-none">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-12">
        {/* Top: brand + back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-full border border-black bg-white flex items-center justify-center font-extrabold text-lg text-black">
              {profile.initials}
            </span>
            <div className="leading-tight">
              <span className="block font-extrabold text-lg font-['Syne',sans-serif] uppercase tracking-wider text-black">
                {profile.name}
              </span>
              <span className="text-xs font-mono text-neutral-500">{profile.handle}</span>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black bg-black text-white font-bold text-xs uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-200">
          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={l.href === '#hero' ? scrollToTop : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black hover:underline decoration-black underline-offset-4 transition-colors"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Socials</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black hover:underline decoration-black underline-offset-4 transition-colors"
                  >
                    <BrandIcon name={s.brand} className="w-4 h-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black hover:underline decoration-black underline-offset-4 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +{contact.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-black hover:underline decoration-black underline-offset-4 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Based in</h4>
            <p className="text-sm font-semibold text-neutral-800 leading-relaxed">
              {profile.location}
              <span className="block text-xs font-medium text-neutral-500 mt-1">Working worldwide • Remote friendly</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-neutral-500">
          <span>© {YEAR} {profile.name} — {profile.handle}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
