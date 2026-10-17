import React, { useState } from 'react';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function App() {
  const [activeMode, setActiveMode] = useState('vfx'); // 'vfx' or 'tech'

  const handleContactClick = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#dceeff] text-black font-sans selection:bg-[#ffd731] selection:text-black">
      {/* Top Slush Marquee Banner */}
      <Marquee />

      {/* Sticky Pill Navbar */}
      <Navbar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onContactClick={handleContactClick}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section (#dceeff) */}
        <HeroSection
          activeMode={activeMode}
          setActiveMode={setActiveMode}
        />

        {/* Before/After Breakdown Tool (#ffffff) */}
        <BeforeAfterSlider />

        {/* Bento Grid Showcase (#ffffff) */}
        <ProjectsSection />

        {/* Behind the Craft & Stack (#dceeff) */}
        <AboutSection />

        {/* Connect & Collab (#cccccc) */}
        <ConnectSection />
      </main>

      {/* Minimal Sticker Footer */}
      <Footer />
    </div>
  );
}
