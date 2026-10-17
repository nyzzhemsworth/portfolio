import React from 'react';
import { Cpu, Terminal, Video, Palette, ShieldCheck, Zap } from 'lucide-react';
import Sticker from './Sticker';

const SKILLS = [
  { name: 'Houdini FX', category: '3D & Simulation', level: '95%', color: 'bg-[#fb4903]' },
  { name: 'Nuke Compositing', category: 'Deep Comp & Matchmove', level: '90%', color: 'bg-[#ffd731]' },
  { name: 'Three.js / WebGL', category: 'Creative Web 3D', level: '88%', color: 'bg-[#55db9c]' },
  { name: 'Blender & Octane', category: 'Lighting & LookDev', level: '92%', color: 'bg-[#4da2ff]' },
  { name: 'React & Node.js', category: 'Fullstack Systems', level: '90%', color: 'bg-[#e9ccff]' },
  { name: 'Python & VEX', category: 'VFX Scripting & Math', level: '86%', color: 'bg-[#5c4ade]' },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#dceeff] py-20 px-4 sm:px-8 border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Sticker color="electric-blue" rotate={-2} label="BEHIND THE CRAFT" />
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              // Creative Technologist
            </span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] m-0 text-black">
            MEET ZIELL
          </h2>
          <p className="mt-4 text-base sm:text-xl text-neutral-800 font-medium leading-relaxed">
            I sit at the rare intersection of <span className="font-bold underline decoration-black">visual artistry</span> and <span className="font-bold underline decoration-black">systematic engineering</span>. Whether calculating turbulent fluid simulations or deploying high-performance web experiences, the goal is always impact.
          </p>
        </div>

        {/* Dual Domain Strategy Showcase Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Box 1: ziellvfx.com */}
          <div className="rounded-[30px] border border-black bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1.5 rounded-full border border-black bg-[#4da2ff] text-black font-extrabold text-xs uppercase tracking-wider">
                  VISUAL REALM
                </span>
                <span className="text-xs font-mono font-bold text-neutral-500">
                  ziellvfx.com
                </span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl font-['Syne',sans-serif] text-black mb-3">
                CGI, COMPOSITING & MOTION
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
                Tailored for film directors, commercial agencies, and game studios looking for photorealistic simulations, procedural destruction, and cinematic grade VFX.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-bold uppercase">
              <Video className="w-4 h-4 text-blue-600" />
              <span>Full ACES Color Managed Workflow</span>
            </div>
          </div>

          {/* Box 2: ziell.tech */}
          <div className="rounded-[30px] border border-black bg-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-1.5 rounded-full border border-black bg-[#55db9c] text-black font-extrabold text-xs uppercase tracking-wider">
                  TECH LAB
                </span>
                <span className="text-xs font-mono font-bold text-neutral-500">
                  ziell.tech
                </span>
              </div>
              <h3 className="font-extrabold text-2xl sm:text-3xl font-['Syne',sans-serif] text-black mb-3">
                WEB EXPERIMENTS & TOOLS
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium">
                Tailored for startups, interactive web experiences, micro-SaaS, GPU shader programming, and automated render cloud infrastructure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-bold uppercase">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Modern Cloud Infrastructure & APIs</span>
            </div>
          </div>
        </div>

        {/* Skill Badges & Software Arsenal */}
        <div className="rounded-[30px] border border-black bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-extrabold text-xl font-['Syne',sans-serif] uppercase text-black">
              Production Arsenal
            </h4>
            <span className="text-xs font-mono font-bold text-neutral-500">
              Verified Stack
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[20px] border border-black bg-[#f7f7f7] flex items-center justify-between hover:bg-[#e9e9e9] transition-colors"
              >
                <div>
                  <span className="font-bold text-sm text-black block">{skill.name}</span>
                  <span className="text-[11px] text-neutral-500 font-medium">{skill.category}</span>
                </div>
                <span className="text-xs font-mono font-extrabold px-2 py-1 rounded-md border border-black bg-white">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
