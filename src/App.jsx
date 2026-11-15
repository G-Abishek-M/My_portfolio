import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import PaintLoader from './components/PaintLoader.jsx';
import PaintBrushCursor from './components/PaintBrushCursor.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fcf8ff] text-[#1b192c] selection:bg-[#693bca]/15 selection:text-[#693bca] overflow-x-hidden font-sans">
      {/* Center Paint Splash Preloader with Multicolor ABISHEK Fill */}
      <PaintLoader />

      {/* Interactive Paint Brush Cursor & Live Watercolor Trail */}
      <PaintBrushCursor />

      {/* Top Floating Glass Pill Navbar */}
      <Navbar />

      {/* Main Content Sections (Strictly user-specified) */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Toolkit & Expertise Section */}
        <Skills />

        {/* 4. Selected Works Section */}
        <Projects />

        {/* 5. Career Journey & Education Section */}
        <Journey />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
