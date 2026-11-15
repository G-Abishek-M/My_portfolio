import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Database, Palette, Cpu, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/content.js';

export default function Skills() {
  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Frontend Development':
        return <Code className="w-5 h-5 text-[#693bca]" />;
      case 'Backend & Database':
        return <Database className="w-5 h-5 text-[#006684]" />;
      case 'UI/UX Design':
        return <Palette className="w-5 h-5 text-[#af1e42]" />;
      case 'Deployment & Development Tools':
        return <Cpu className="w-5 h-5 text-[#8257e5]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#693bca]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ebff] text-[#693bca] text-[11px] font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              <span>{skillsData.eyebrow}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#19172a] tracking-tight leading-[1.15]">
              {skillsData.heading}{' '}
              <span className="font-serif italic font-normal text-[#693bca]">
                {skillsData.headingAccent}
              </span>{' '}
              {skillsData.headingSuffix}
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#58536e] leading-relaxed text-left md:text-right">
            {skillsData.description}
          </p>
        </motion.div>

        {/* Categories Grid (4 Categories specified) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="rounded-[28px] p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-white/95 shadow-[0_8px_24px_-4px_rgba(27,25,44,0.03)] hover:shadow-[0_18px_38px_-6px_rgba(105,59,202,0.12)] hover:border-[#693bca]/30 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fcf8ff] border border-white flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#f0ebff] transition-all duration-300">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#19172a] tracking-tight group-hover:text-[#693bca] transition-colors">
                    {category.name}
                  </h3>
                </div>

                {/* Skill Pills with spring animations */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ scale: 1.07, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-full bg-[#f6f1ff] hover:bg-[#693bca] hover:text-white border border-white text-xs sm:text-sm font-mono font-medium text-[#19172a] transition-colors duration-200 shadow-xs cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always Learning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-white/90 via-[#f6f1ff]/90 to-white/90 border border-white/95 shadow-sm hover:shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-left transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-2xl bg-[#693bca]/10 text-[#693bca] flex items-center justify-center shrink-0"
            >
              <CheckCircle2 className="w-6 h-6" />
            </motion.div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#19172a] tracking-tight">
                {skillsData.alwaysLearning.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#58536e] mt-1 max-w-2xl leading-relaxed">
                {skillsData.alwaysLearning.description}
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-full bg-white text-[#693bca] border border-[#693bca]/20 font-mono text-xs font-semibold shadow-xs">
            Continuous Growth
          </span>
        </motion.div>

      </div>
    </section>
  );
}
