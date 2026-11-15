import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, MapPin } from 'lucide-react';
import { personalInfo, heroData, contactData } from '../data/content.js';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Interactive 3D Card Tilt Physics
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleAnchorScroll = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Soft Multi-color Mesh Atmospheric Blobs with continuous float animations */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-left: soft pink / peach */}
        <div className="absolute -top-20 -left-16 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] rounded-full bg-[#FBC8DC] opacity-70 blur-3xl animate-blob-1" />
        
        {/* Top-right: lavender / light purple */}
        <div className="absolute -top-16 -right-16 w-[440px] sm:w-[600px] h-[440px] sm:h-[600px] rounded-full bg-[#D9C8FA] opacity-70 blur-3xl animate-blob-2" />
        
        {/* Center and center-left: light sky blue / aqua-cyan glow */}
        <div className="absolute top-[28%] left-[10%] sm:left-[20%] w-[400px] sm:w-[560px] h-[400px] sm:h-[560px] rounded-full bg-[#BDEBFA] opacity-65 blur-3xl animate-pulse-subtle" />
        
        {/* Lower-left: warm pink / peach */}
        <div className="absolute bottom-[4%] -left-10 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full bg-[#FDD3E0] opacity-60 blur-3xl animate-blob-2" />

        {/* Lower-right: warm pink / peach */}
        <div className="absolute -bottom-8 right-[5%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-[#F9D6E6] opacity-60 blur-3xl animate-blob-1" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-40" />
        
        {/* Seamless bottom fade overlay to About section background (#fcf8ff) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fcf8ff] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Staggered Entrance Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#19172a] mb-6"
            >
              {heroData.headline.prefix}{' '}
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="inline-block font-serif italic font-normal text-[#693bca] tracking-normal transition-transform"
              >
                {heroData.headline.accent1}
              </motion.span>{' '}
              {heroData.headline.middle}{' '}
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="inline-block font-serif italic font-normal text-[#693bca] tracking-normal transition-transform"
              >
                {heroData.headline.accent2}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-[#58536e] leading-relaxed max-w-xl mb-8"
            >
              {heroData.subtext}
            </motion.p>

            {/* Action Buttons with spring hover feedback */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={heroData.ctaPrimary.href}
                onClick={(e) => handleAnchorScroll(e, heroData.ctaPrimary.href)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#19172a] text-white font-medium text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(25,23,42,0.2)] hover:bg-[#693bca] hover:shadow-[0_12px_28px_-4px_rgba(105,59,202,0.4)] transition-all duration-300 group"
              >
                <span>{heroData.ctaPrimary.text}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={heroData.ctaSecondary.href}
                onClick={(e) => handleAnchorScroll(e, heroData.ctaSecondary.href)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/75 backdrop-blur-xl border border-white/90 text-[#19172a] font-medium text-sm tracking-wide shadow-sm hover:bg-white hover:border-[#693bca]/30 hover:shadow-md transition-all duration-300 group"
              >
                <span>{heroData.ctaSecondary.text}</span>
                <ArrowUpRight className="w-4 h-4 text-[#693bca] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Connect Links: GitHub | LinkedIn | Email */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono text-[#7a7485] uppercase tracking-wider mr-1">
                Connect:
              </span>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href={contactData.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#58536e] hover:text-[#19172a] hover:bg-white shadow-sm transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href={contactData.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#58536e] hover:text-[#006684] hover:bg-white shadow-sm transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Contact"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-center text-[#58536e] hover:text-[#693bca] hover:bg-white shadow-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Tilt Card & Bobbing Floating Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[360px] sm:max-w-[400px] perspective-1000"
            >
              
              {/* Floating Chip 1: Top-Right "Building ✦" with smooth bobbing */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1.5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.08 }}
                className="absolute -top-5 -right-3 sm:-right-6 z-20 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_12px_28px_-6px_rgba(25,23,42,0.12),0_4px_12px_rgba(105,59,202,0.06)] flex items-center gap-2 select-none cursor-default"
              >
                <Sparkles className="w-4 h-4 text-[#693bca] animate-spin-slow" />
                <span className="font-mono text-xs font-semibold text-[#19172a] tracking-tight">
                  Building ✦
                </span>
              </motion.div>

              {/* Main Tilted Photo Container with Interactive 3D Tilt Spring */}
              <motion.div
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: 'preserve-3d'
                }}
                className="relative rounded-[32px] sm:rounded-[38px] p-2 sm:p-2.5 bg-white/85 backdrop-blur-2xl border border-white/95 shadow-[0_24px_50px_-12px_rgba(105,59,202,0.18),0_8px_20px_rgba(27,25,44,0.04)] -rotate-2 hover:rotate-0 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-[390px] sm:h-[470px] overflow-hidden rounded-[26px] sm:rounded-[32px] bg-gradient-to-b from-[#f0ebff] to-[#eae5ff]">
                  
                  {/* Portrait Image with Fallback */}
                  {!imageError ? (
                    <img
                      src={profileImg}
                      alt="Abishek portrait"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-all duration-700 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      } group-hover:scale-[1.03]`}
                    />
                  ) : (
                    /* Elegant Gradient Monogram Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#693bca] via-[#8257e5] to-[#80d8ff] text-white">
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-display text-5xl font-bold mb-3 shadow-lg">
                        A
                      </div>
                      <span className="font-display font-semibold text-lg tracking-tight">
                        {personalInfo.name}
                      </span>
                      <span className="text-xs text-white/80 font-mono tracking-wider">
                        {personalInfo.role}
                      </span>
                    </div>
                  )}

                  {/* Soft Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19172a]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Profile Card Label */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/95 shadow-sm flex items-center justify-between transition-transform"
                  >
                    <div className="flex flex-col text-left">
                      <span className="font-display font-bold text-sm text-[#19172a] tracking-tight">
                        {heroData.profile.name}
                      </span>
                      <span className="text-xs text-[#693bca] font-medium">
                        {heroData.profile.role}
                      </span>
                      <span className="text-[11px] text-[#58536e] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#7a7485]" />
                        {heroData.profile.location}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Chip 2: Bottom-Left Code Snippet with gentle floating physics */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -1.5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.2,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-6 -left-3 sm:-left-8 z-20 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-[0_16px_36px_-6px_rgba(25,23,42,0.12),0_4px_12px_rgba(105,59,202,0.06)] flex items-center gap-2.5 select-none cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-[#19172a] text-[#8ce8f2] flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <code className="font-mono text-xs text-[#19172a] tracking-tight">
                  <span className="text-[#693bca] font-semibold">currently</span>
                  <span className="text-[#58536e]">.passion = </span>
                  <span className="text-[#006684] font-medium">'crafting'</span>;
                </code>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
