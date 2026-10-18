import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import Sticker from './Sticker';
import BrandIcon from './BrandIcons';
import { profile, contact } from '../data/profile';

export default function ConnectSection({ id = 'contact' }) {
  const [copied, setCopied] = useState(false);

  const waLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${profile.name}! I found your link on TikTok.`,
  )}`;

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // fallback untuk browser yang nggak support clipboard API
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#4da2ff', '#55db9c', '#e9ccff', '#fb4903', '#ffd731', '#5c4ade'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id={id} className="w-full bg-[#cccccc] py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden border-t border-black">
      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="flex flex-col items-start justify-between gap-8 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <Sticker color="mint-pop" rotate={-3} label="CONTACT PERSON" />
              <Sticker color="lavender" rotate={2} label="FAST REPLY" />
            </div>
            <h2 className="font-extrabold text-3xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] text-black m-0">
              LET'S CONNECT
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-800 font-medium max-w-xl">
              Questions, collabs, or just want to say hi — reach me directly on the channel below.
            </p>
          </div>
        </div>

        {/* WhatsApp Direct Card */}
        <div className="rounded-[24px] sm:rounded-[30px] border border-black bg-white p-5 sm:p-10 mb-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-[#55db9c] flex items-center justify-center text-black shrink-0">
              <BrandIcon name="whatsapp" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                WhatsApp — Contact Person
              </span>
              <span className="text-base sm:text-xl md:text-2xl font-extrabold text-black font-mono truncate block">
                +{contact.whatsappNumber}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>Chat Now</span>
            </a>
            <button
              onClick={() => handleCopy(`+${contact.whatsappNumber}`)}
              className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black bg-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Number'}</span>
            </button>
          </div>
        </div>

        {/* Email Direct Card */}
        <div className="rounded-[24px] sm:rounded-[30px] border border-black bg-white p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-[#ffd731] flex items-center justify-center text-black shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Direct Inquiry Mailbox
              </span>
              <span className="text-base sm:text-lg md:text-xl font-extrabold text-black font-mono truncate block">
                {contact.email}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleCopy(contact.email)}
            className="w-full md:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
