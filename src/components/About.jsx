import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Lightbulb, Compass, Sparkles } from 'lucide-react';
import { aboutData } from '../data/content.js';

export default function About() {
  const focusIcons = [
    <Code className="w-5 h-5 text-[#693bca]" />,
    <Database className="w-5 h-5 text-[#006684]" />,
    <Palette className="w-5 h-5 text-[#af1e42]" />,
    <Lightbulb className="w-5 h-5 text-[#8257e5]" />
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ebff] text-[#693bca] text-[11px] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{aboutData.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#19172a] tracking-tight leading-[1.15]">
            {aboutData.heading}{' '}
            <span className="font-serif italic font-normal text-[#693bca]">
              {aboutData.headingAccent}
            </span>{' '}
            {aboutData.headingSuffix}
          </h2>
        </motion.div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="lg:col-span-6 rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_10px_30px_-5px_rgba(27,25,44,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(105,59,202,0.1)] flex flex-col justify-between transition-all duration-300 group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#693bca]/15 to-[#80d8ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Compass className="w-6 h-6 text-[#693bca]" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#19172a] mb-5 tracking-tight">
                My Story & Approach
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[#58536e] leading-relaxed font-sans text-left">
                {aboutData.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What I Focus On (4 Pillars) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-left"
            >
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#19172a] tracking-tight">
                What I Focus On
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {aboutData.focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-[24px] p-6 bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_-4px_rgba(27,25,44,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(105,59,202,0.12)] hover:border-[#693bca]/30 hover:bg-white transition-all duration-300 flex flex-col justify-start text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fcf8ff] border border-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:bg-[#f0ebff] transition-all duration-300">
                    {focusIcons[index]}
                  </div>
                  <h4 className="font-display font-semibold text-base text-[#19172a] mb-2 tracking-tight group-hover:text-[#693bca] transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#58536e] leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
