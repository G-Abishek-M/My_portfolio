import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/content.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#works' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'works', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#693bca] via-[#80d8ff] to-[#ffb3cb] origin-left z-[100]"
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram */}
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(27,25,44,0.06)] hover:shadow-[0_10px_28px_rgba(105,59,202,0.18)] hover:border-[#693bca]/30 transition-all duration-300"
            aria-label="Abishek Portfolio Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#693bca] via-[#8257e5] to-[#80d8ff] flex items-center justify-center text-white shadow-sm group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
              <span className="font-['Playfair_Display',Georgia,serif] italic font-bold text-[15px] tracking-[-0.04em] leading-none select-none">
                AK
              </span>
            </div>
            <div className="flex flex-col text-left pr-1">
              <span className="font-display font-bold text-sm text-[#19172a] tracking-tight group-hover:text-[#693bca] transition-colors duration-200">
                {personalInfo.shortName}
              </span>
              <span className="text-[10px] text-[#58536e] tracking-wider uppercase font-medium group-hover:text-[#8257e5] transition-colors duration-200">
                Portfolio
              </span>
            </div>
          </motion.a>

          {/* Desktop Floating Pill Navigation with Gliding Hover Pill & Brush Underline */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl border border-white/90 transition-all duration-300 ${
              scrolled
                ? 'bg-white/90 shadow-[0_14px_36px_-4px_rgba(25,23,42,0.12),0_2px_10px_rgba(130,87,229,0.08)]'
                : 'bg-white/75 shadow-[0_12px_32px_-4px_rgba(25,23,42,0.08),0_2px_8px_rgba(130,87,229,0.04)]'
            }`}
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredNav === item.label;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileHover={{ y: -1.5, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 26 }}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full group ${
                    isActive
                      ? 'text-white font-semibold'
                      : isHovered
                        ? 'text-[#693bca] font-semibold'
                        : 'text-[#58536e] hover:text-[#693bca]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillNav"
                      className="absolute inset-0 bg-[#19172a] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverPillNav"
                      className="absolute inset-0 bg-gradient-to-r from-[#693bca]/12 via-[#80d8ff]/20 to-[#ffb3cb]/18 rounded-full -z-10 border border-[#693bca]/15"
                      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {!isActive && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3.5 right-3.5 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-[#693bca] via-[#ff5c79] to-[#80d8ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Right CTA / Connect Button */}
          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative overflow-hidden hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#19172a] rounded-full shadow-[0_8px_20px_-4px_rgba(25,23,42,0.15)] hover:shadow-[0_12px_28px_-4px_rgba(105,59,202,0.4)] transition-shadow duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#693bca] via-[#8257e5] to-[#ff5c79] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Let's Talk</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.a>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.06, rotate: 4 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/85 backdrop-blur-xl border border-white/90 text-[#19172a] shadow-sm hover:bg-white hover:text-[#693bca] hover:border-[#693bca]/30 transition-all duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-3xl bg-white/95 backdrop-blur-3xl border border-white/90 shadow-[0_20px_48px_-8px_rgba(25,23,42,0.18)] pointer-events-auto"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-[#19172a] text-white font-semibold'
                        : 'text-[#494454] hover:bg-gradient-to-r hover:from-[#f0ebff] hover:to-[#ffeef4] hover:text-[#693bca]'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between">
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#693bca] to-[#8257e5] hover:from-[#8257e5] hover:to-[#ff5c79] text-white font-semibold text-xs tracking-wide shadow-sm transition-all duration-300"
                  >
                    Get in Touch
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
