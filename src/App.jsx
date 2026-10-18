import React from 'react';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LinksSection from './components/LinksSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function App() {
  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#dceeff] text-black font-sans selection:bg-[#ffd731] selection:text-black">
      {/* Top Marquee Banner */}
      <Marquee />

      {/* Sticky Pill Navbar */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Intro / Hero */}
        <HeroSection />

        {/* Link Hub */}
        <LinksSection />

        {/* Contact Person */}
        <ConnectSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
