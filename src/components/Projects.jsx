import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Globe, Film } from 'lucide-react';
import { projectsData } from '../data/content.js';
import zorosDashboardImg from '../assets/zoros-dashboard.png';
import zorosWebsiteImg from '../assets/zoros-website.png';

// Mockup 1: Netflix Analysis Dashboard in Code (HTML/CSS/SVG) with SVG animated line draw
function NetflixMockup() {
  return (
    <div className="w-full bg-[#111116] rounded-2xl p-4 sm:p-5 border border-[#2b2528] text-left text-white shadow-2xl font-mono text-xs select-none">
      {/* Netflix Dashboard Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#252024]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-[#E50914] flex items-center justify-center font-bold text-white text-xs shadow-md">
            N
          </div>
          <span className="font-bold text-white text-xs sm:text-sm tracking-tight">
            Netflix Analytics & Catalog Trends
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#E50914]/15 text-[#E50914] text-[10px] font-semibold">
          <Film className="w-3 h-3" />
          <span>8,807 TITLES</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
        <div className="bg-[#1a171c] p-2.5 rounded-xl border border-[#2d262d]">
          <span className="text-[10px] text-[#8e858f] block uppercase">Movies</span>
          <span className="text-sm sm:text-base font-bold text-white">69.1%</span>
          <span className="text-[10px] text-[#E50914] block mt-0.5">6,131 Titles</span>
        </div>
        <div className="bg-[#1a171c] p-2.5 rounded-xl border border-[#2d262d]">
          <span className="text-[10px] text-[#8e858f] block uppercase">TV Shows</span>
          <span className="text-sm sm:text-base font-bold text-[#b9a5ff]">30.9%</span>
          <span className="text-[10px] text-[#b9a5ff] block mt-0.5">2,676 Titles</span>
        </div>
        <div className="bg-[#1a171c] p-2.5 rounded-xl border border-[#2d262d]">
          <span className="text-[10px] text-[#8e858f] block uppercase">Top Genre</span>
          <span className="text-sm sm:text-base font-bold text-[#80d8ff]">Dramas</span>
          <span className="text-[10px] text-[#8e858f] block mt-0.5">2,427 Titles</span>
        </div>
      </div>

      {/* Release Year Trend SVG Chart with Animated Line Drawing */}
      <div className="bg-[#161318] rounded-xl p-3 sm:p-4 border border-[#2a222a] mb-3">
        <div className="flex items-center justify-between text-[11px] text-[#8e858f] mb-2">
          <span className="text-white font-medium flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-[#E50914]" />
            Content Growth by Release Year
          </span>
          <span className="text-[10px] text-[#8e858f]">2010 – 2024</span>
        </div>

        <svg viewBox="0 0 380 90" className="w-full h-20 sm:h-24">
          <defs>
            <linearGradient id="netflixGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E50914" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E50914" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="20" x2="380" y2="20" stroke="#251f25" strokeDasharray="3 3" />
          <line x1="0" y1="50" x2="380" y2="50" stroke="#251f25" strokeDasharray="3 3" />
          <line x1="0" y1="80" x2="380" y2="80" stroke="#251f25" strokeDasharray="3 3" />

          {/* Area under curve */}
          <path
            d="M 10 82 Q 80 75, 140 60 T 240 30 T 320 15 T 370 20 L 370 90 L 10 90 Z"
            fill="url(#netflixGradient)"
          />

          {/* Animated Main Trend Line */}
          <motion.path
            d="M 10 82 Q 80 75, 140 60 T 240 30 T 320 15 T 370 20"
            fill="none"
            stroke="#E50914"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />

          {/* Highlight Points */}
          <circle cx="320" cy="15" r="4" fill="#ffffff" />
          <circle cx="320" cy="15" r="8" fill="#E50914" opacity="0.4" className="animate-ping" />
        </svg>
      </div>

      {/* Rating Distribution Meters */}
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div className="bg-[#1a171c] p-2 rounded-lg">
          <span className="text-[#8e858f] block">TV-MA (36%)</span>
          <div className="w-full bg-[#272129] h-1.5 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '36%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-[#E50914] h-full rounded-full"
            />
          </div>
        </div>
        <div className="bg-[#1a171c] p-2 rounded-lg">
          <span className="text-[#8e858f] block">TV-14 (24%)</span>
          <div className="w-full bg-[#272129] h-1.5 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '24%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-[#b9a5ff] h-full rounded-full"
            />
          </div>
        </div>
        <div className="bg-[#1a171c] p-2 rounded-lg">
          <span className="text-[#8e858f] block">R / PG-13 (18%)</span>
          <div className="w-full bg-[#272129] h-1.5 rounded-full mt-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '18%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-[#80d8ff] h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mockup 2: Zoros Dashboard (Real Image) with glass window bar
function ZorosDashboardMockup() {
  return (
    <div className="w-full bg-[#0a0d18] rounded-2xl overflow-hidden border border-[#1c2438] text-left text-white shadow-2xl select-none group">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1422] border-b border-[#1c2438]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-[11px] font-mono text-[#8ce8f2]/90 ml-2 tracking-tight">
            zoros-uniway.app/operations
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#27c93f]/10 text-[#27c93f] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
          <span>Operations Live</span>
        </div>
      </div>

      {/* Image container with subtle hover zoom */}
      <div className="relative overflow-hidden bg-[#0a0d18] aspect-[16/10] sm:aspect-[16/9.5] flex items-center justify-center">
        <img
          src={zorosDashboardImg}
          alt="Zoros Uniway Operations Dashboard"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d18]/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Mockup 3: Zoros Startup Website (Real Image) with browser bar
function ZorosWebsiteMockup() {
  return (
    <div className="w-full bg-[#0d0d14] rounded-2xl overflow-hidden border border-[#26263b] text-left text-white shadow-2xl select-none group">
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141422] border-b border-[#26263b]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-[11px] font-mono text-[#b9a5ff]/90 ml-2 tracking-tight">
            https://zoros.com
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#80d8ff]">
          <Globe className="w-3.5 h-3.5" />
          <span>Live Startup Site</span>
        </div>
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden bg-[#141422] aspect-[16/10] sm:aspect-[16/9.5] flex items-center justify-center">
        <img
          src={zorosWebsiteImg}
          alt="Zoros Startup Website"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/30 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default function Projects() {
  const renderMockup = (type) => {
    switch (type) {
      case 'netflix':
        return <NetflixMockup />;
      case 'zoros-dashboard':
        return <ZorosDashboardMockup />;
      case 'zoros-website':
        return <ZorosWebsiteMockup />;
      default:
        return <NetflixMockup />;
    }
  };

  return (
    <section id="works" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 sm:mb-20 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ebff] text-[#693bca] text-[11px] font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{projectsData.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#19172a] tracking-tight leading-[1.15]">
            {projectsData.heading}{' '}
            <span className="font-serif italic font-normal text-[#693bca]">
              {projectsData.headingAccent}
            </span>{' '}
            {projectsData.headingSuffix}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#58536e] leading-relaxed">
            {projectsData.description}
          </p>
        </motion.div>

        {/* Selected Works Stack */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 bg-white/80 backdrop-blur-2xl border border-white/95 shadow-[0_16px_40px_-8px_rgba(25,23,42,0.06),0_2px_10px_rgba(105,59,202,0.03)] hover:shadow-[0_24px_50px_-10px_rgba(105,59,202,0.12)] transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center`}>
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-5 flex flex-col justify-between text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Project Index & Category */}
                      <div className="flex items-center gap-3 text-xs font-mono text-[#7a7485] mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#f0ebff] text-[#693bca] font-semibold">
                          {project.number}
                        </span>
                        <span>·</span>
                        <span className="text-[#58536e] uppercase tracking-wider font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#19172a] mb-4 tracking-tight leading-snug group-hover:text-[#693bca] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#58536e] leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>

                      {/* Technologies Used */}
                      <div className="mb-6">
                        <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block mb-2 font-semibold">
                          Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05, y: -1 }}
                              className="px-3 py-1 rounded-full bg-[#f6f1ff] hover:bg-[#693bca] hover:text-white border border-white text-xs font-mono text-[#58536e] shadow-xs cursor-default transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mockup Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative">
                      {/* Soft ambient aura glow */}
                      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#693bca]/15 via-[#80d8ff]/15 to-[#ffb3cb]/15 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {renderMockup(project.mockupType)}
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
