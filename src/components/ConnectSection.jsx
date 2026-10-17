import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import Ribbon3D from './Ribbon3D';
import Sticker from './Sticker';

export default function ConnectSection({ id = 'connect' }) {
  const [copied, setCopied] = useState(false);
  const email = 'hello@ziellvfx.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#4da2ff', '#55db9c', '#e9ccff', '#fb4903', '#ffd731', '#5c4ade'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="connect" className="w-full bg-[#cccccc] py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden border-t border-black">
      {/* 3D Arc Ribbon */}
      <Ribbon3D variant="arc" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Asymmetric Section Top */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <Sticker color="mint-pop" rotate={-3} label="OPEN FOR COMMISSIONS" />
              <Sticker color="lavender" rotate={2} label="GLOBAL COLLABS" />
            </div>

            <h2 className="font-extrabold text-3xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] text-black m-0">
              CONNECT & COLLAB
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-800 font-medium max-w-xl">
              Have an ambitious VFX project, 3D commercial, custom software tool, or interactive web experience in mind? Let's bring it to life.
            </p>
          </div>

          {/* Slush Signature Component: Authentic Split QR Download Card */}
          <div className="w-full sm:w-auto self-center lg:self-start">
            <div className="rounded-[20px] border border-black bg-[#5c4ade] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 text-white max-w-sm select-none mx-auto sm:mx-0">
              {/* White QR Code square panel with black outline */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-black p-2 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                  <path d="M0,0 h30 v30 h-30 z M5,5 h20 v20 h-20 z M10,10 h10 v10 h-10 z" />
                  <path d="M70,0 h30 v30 h-30 z M75,5 h20 v20 h-20 z M80,10 h10 v10 h-10 z" />
                  <path d="M0,70 h30 v30 h-30 z M5,75 h20 v20 h-20 z M10,80 h10 v10 h-10 z" />
                  <path d="M40,10 h20 v10 h-20 z M40,30 h10 v20 h-10 z M60,40 h20 v10 h-20 z M40,70 h10 v10 h-10 z M60,60 h10 v20 h-10 z M80,80 h10 v10 h-10 z M50,85 h20 v10 h-20 z M25,45 h10 v10 h-10 z" />
                </svg>
              </div>

              {/* Label Panel */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-purple-200 uppercase">
                  DIRECT CHANNEL
                </span>
                <span className="font-extrabold text-lg sm:text-2xl font-['Syne',sans-serif] tracking-wider uppercase mt-0.5">
                  SCAN & SAVE
                </span>
                <span className="text-[11px] sm:text-xs text-purple-200 mt-0.5">
                  Instant WhatsApp & Telegram
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Email Direct Action Card */}
        <div className="rounded-[24px] sm:rounded-[30px] border border-black bg-white p-5 sm:p-10 mb-8 sm:mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-[#ffd731] flex items-center justify-center text-black shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                Direct Inquiry Mailbox
              </span>
              <span className="text-base sm:text-xl md:text-2xl font-extrabold text-black font-mono truncate block">
                {email}
              </span>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-black bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-[0.032em] hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* Social Channel Pill Grid (1px outline, sticker palette colors) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] border border-black bg-[#fb4903] text-white flex items-center justify-between group hover:rotate-1 transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">YouTube</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://github.com/nyzzhemsworth"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] border border-black bg-white text-black flex items-center justify-between group hover:-rotate-1 transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">GitHub</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] border border-black bg-[#e9ccff] text-black flex items-center justify-between group hover:rotate-1 transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">Instagram</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] border border-black bg-[#55db9c] text-black flex items-center justify-between group hover:-rotate-1 transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-wider">Discord</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
