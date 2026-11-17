import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { footerData, personalInfo } from '../data/content.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-[#e4dffa]/60 bg-gradient-to-b from-transparent to-[#f0ebff]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#e4dffa]/60">
          
          {/* Brand lockup */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer text-left group"
            aria-label="Scroll to top"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-10 h-10 rounded-full overflow-hidden bg-[#151828] ring-1 ring-[#693bca]/20 flex items-center justify-center shadow-sm transition-transform"
            >
              <img
                src="/assets/aistudio/Celestial_AK_Brushstroke_Logo_1bf8fa1d.png"
                alt="Abishek AK logo"
                className="w-full h-full object-cover object-center scale-[1.38] select-none"
              />
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-lg text-[#19172a] tracking-tight group-hover:text-[#693bca] transition-colors">
                {footerData.brandName}
              </span>
              <span className="text-xs text-[#58536e] font-mono">
                {footerData.brandTitle}
              </span>
            </div>
          </button>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-5" aria-label="Footer Navigation">
            {footerData.navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#58536e] hover:text-[#693bca] hover:bg-[#f0ebff]/80 transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2.5 right-2.5 bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#693bca] via-[#ff5c79] to-[#80d8ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                />
              </motion.a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 text-xs font-mono font-semibold text-[#19172a] shadow-sm hover:shadow-md hover:bg-[#693bca] hover:text-white hover:border-[#693bca] transition-all duration-300 group"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7a7485]">
          <p className="text-center sm:text-left">
            © {footerData.year} {personalInfo.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="inline-flex items-center"
            >
              <Heart className="w-3.5 h-3.5 text-[#af1e42] fill-[#af1e42]" />
            </motion.span>
            <span>& precision code</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
