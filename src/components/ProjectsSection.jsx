import React, { useState } from 'react';
import { ExternalLink, Play, Code2, Film, Sparkles, X, Layers, Cpu } from 'lucide-react';
import Sticker from './Sticker';

const PROJECTS = [
  {
    id: 1,
    title: 'CYBER-DISTRICT 2099',
    category: 'vfx',
    badgeColor: 'lavender',
    badgeLabel: '3D CGI & ENVIRONMENT',
    surfaceColor: 'bg-[#ffffff]',
    description: 'High-density procedural cyberpunk megacity created in Houdini and rendered with Octane. Multi-channel compositing in Nuke with custom neon volumetric atmosphere.',
    tags: ['Houdini', 'Octane Render', 'Nuke', 'ACEScg'],
    stats: '14.8M Polys • 4K 60FPS',
    aspect: 'md:col-span-2',
    highlight: true,
    visualBg: 'bg-gradient-to-br from-[#121629] to-[#080a14]',
    type: 'VFX Production',
  },
  {
    id: 2,
    title: 'AUDIO-REACTIVE SHADER ENGINE',
    category: 'tech',
    badgeColor: 'mint-pop',
    badgeLabel: 'THREE.JS & GLSL',
    surfaceColor: 'bg-[#ffffff]',
    description: 'Real-time WebGL interactive visualizer calculating procedural Perlin noise and audio frequency FFT buffers on GPU shaders with zero latency.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'Web Audio API'],
    stats: '60 FPS WebGL • 0ms Latency',
    aspect: 'md:col-span-1',
    highlight: false,
    visualBg: 'bg-[#0f1d18]',
    type: 'Creative Code',
  },
  {
    id: 3,
    title: 'PROCEDURAL DESTRUCTION SYSTEM',
    category: 'vfx',
    badgeColor: 'sunburst',
    badgeLabel: 'PHYSICS SIMULATION',
    surfaceColor: 'bg-[#ffffff]',
    description: 'Rigid body dynamics simulation with secondary particle debris and micro-smoke pyro solver. Integrated into commercial film sequence.',
    tags: ['RBD Bullet', 'Pyro Solver', 'Redshift', 'After Effects'],
    stats: '850K Debris Particles',
    aspect: 'md:col-span-1',
    highlight: false,
    visualBg: 'bg-[#1e1a0b]',
    type: 'VFX Simulation',
  },
  {
    id: 4,
    title: 'AUTOMATION BOT & CLOUD PIPELINE',
    category: 'tech',
    badgeColor: 'voltage-violet',
    badgeLabel: 'BACKEND & DEVOPS',
    surfaceColor: 'bg-[#ffffff]',
    description: 'Custom headless render farm dispatcher and multi-service bot built with Node.js, Docker, and Redis queue. Automated transcoding and webhook dispatch.',
    tags: ['Node.js', 'Docker', 'Redis', 'FFmpeg'],
    stats: '99.9% Uptime • Cloud Deployed',
    aspect: 'md:col-span-2',
    highlight: true,
    visualBg: 'bg-[#18112e]',
    type: 'Cloud Systems',
  },
  {
    id: 5,
    title: 'NEO-COLOR LUT & ASSET VAULT',
    category: 'vfx',
    badgeColor: 'ember',
    badgeLabel: 'COLOR & ASSETS',
    surfaceColor: 'bg-[#ffffff]',
    description: 'Curated 3D LUTs and displacement texture library calibrated for film-grade camera profiles (ARRI LogC, Sony S-Log3, RED Log3G10).',
    tags: ['DaVinci Resolve', 'Color Science', 'PBR 8K'],
    stats: '32 Film Emulation LUTs',
    aspect: 'md:col-span-1',
    highlight: false,
    visualBg: 'bg-[#21110c]',
    type: 'Digital Presets',
  },
  {
    id: 6,
    title: 'INTERACTIVE THREE.JS CANVAS SUITE',
    category: 'tech',
    badgeColor: 'electric-blue',
    badgeLabel: 'WEB 3D EXPERIMENT',
    surfaceColor: 'bg-[#ffffff]',
    description: 'Exploratory micro-interactions, physics-based dragging, spring physics, and sticker collage logic running smoothly on modern browsers.',
    tags: ['React', 'Tailwind', 'Canvas', 'Framer Logic'],
    stats: 'Zero Lag • Pure Math',
    aspect: 'md:col-span-2',
    highlight: false,
    visualBg: 'bg-[#0f1d2c]',
    type: 'Frontend Engineering',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="showcase" className="w-full bg-[#ffffff] py-14 sm:py-20 px-4 sm:px-8 border-t border-black">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sticker color="sunburst" rotate={3} label="SELECTED ARCHIVE" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500">
                // 2024 — 2026 WORKS
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-6xl md:text-8xl leading-[0.85] tracking-tight uppercase font-['Syne',sans-serif] m-0">
              FEATURED WORKS
            </h2>
          </div>

          {/* Filter Pills: 1600px radius, 1px black outline */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'vfx', label: 'VFX & 3D CGI' },
              { id: 'tech', label: 'Code & Tech Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black font-bold text-[11px] sm:text-xs uppercase tracking-[0.032em] transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-[#e9e9e9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${project.aspect} group rounded-[30px] border border-black p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1 cursor-pointer bg-white`}
            >
              <div>
                {/* Card Top: Badge & Arrow */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <Sticker
                    color={project.badgeColor}
                    rotate={-2}
                    label={project.badgeLabel}
                    className="group-hover:rotate-0 transition-transform"
                  />
                  <div className="w-9 h-9 rounded-full border border-black bg-white flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated Visual Preview Area */}
                <div
                  className={`w-full aspect-[16/9] rounded-[20px] border border-black mb-6 ${project.visualBg} relative overflow-hidden flex flex-col items-center justify-center p-6 text-center`}
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none"
                       style={{
                         backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                         backgroundSize: '24px 24px'
                       }}></div>

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                      {project.type}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif] tracking-tight">
                      {project.title}
                    </h4>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full border border-white/30 text-white/90 text-xs font-mono bg-black/40 backdrop-blur-sm">
                      {project.stats}
                    </span>
                  </div>
                </div>

                {/* Card Headline & Description */}
                <h3 className="font-extrabold text-2xl sm:text-3xl font-['Syne',sans-serif] leading-tight text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-medium mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Tags */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-black bg-[#f0f0f0] text-black text-[11px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="max-w-2xl w-full rounded-[30px] border-2 border-black bg-white p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <Sticker
                color={selectedProject.badgeColor}
                label={selectedProject.badgeLabel}
              />
            </div>

            <h3 className="font-extrabold text-3xl sm:text-4xl font-['Syne',sans-serif] text-black uppercase mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-[20px] border border-black bg-[#dceeff] mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-1">
                Technical Highlights
              </div>
              <div className="text-sm font-semibold text-black">
                {selectedProject.stats} — Built with industry standard pipelines for maximum visual fidelity and computing efficiency.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full border border-black bg-[#e9e9e9] text-xs font-bold uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full border border-black bg-white font-bold text-xs uppercase"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Project ${selectedProject.title} demo link ready!`);
                  setSelectedProject(null);
                }}
                className="px-6 py-2.5 rounded-full border border-black bg-black text-white font-bold text-xs uppercase hover:opacity-90"
              >
                Open Project Asset ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
