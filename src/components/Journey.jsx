import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { journeyData } from '../data/content.js';

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
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
            <span>{journeyData.eyebrow}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#19172a] tracking-tight leading-[1.15]">
            {journeyData.heading}{' '}
            <span className="font-serif italic font-normal text-[#693bca]">
              {journeyData.headingAccent}
            </span>{' '}
            {journeyData.headingSuffix}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#58536e] leading-relaxed">
            {journeyData.description}
          </p>
        </motion.div>

        {/* 4 Stages Timeline Stack */}
        <div className="relative border-l-2 border-[#e4dffa] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 mb-16">
          {journeyData.stages.map((stageItem, index) => (
            <motion.div
              key={stageItem.stage}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="relative group text-left transition-transform duration-300"
            >
              {/* Timeline Indicator Node with animated pulse */}
              <motion.div
                whileHover={{ scale: 1.25, rotate: 10 }}
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-[#693bca] flex items-center justify-center shadow-xs transition-colors duration-200 group-hover:border-[#80d8ff]"
              >
                <span className="text-[10px] font-bold text-[#693bca]">{index + 1}</span>
              </motion.div>

              {/* Timeline Card */}
              <div className="rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 bg-white/80 backdrop-blur-xl border border-white/95 shadow-[0_8px_24px_-4px_rgba(27,25,44,0.04)] hover:shadow-[0_16px_36px_-6px_rgba(105,59,202,0.12)] hover:border-[#693bca]/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#f0ebff] text-[#693bca] font-mono text-xs font-semibold">
                    {stageItem.stage}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#19172a] mb-2 tracking-tight group-hover:text-[#693bca] transition-colors">
                  {stageItem.title}
                </h3>

                <p className="text-sm text-[#58536e] leading-relaxed mb-5 font-sans">
                  {stageItem.description}
                </p>

                <div>
                  <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block mb-2 font-semibold">
                    {stageItem.stage === 'Stage 04' ? 'Projects:' : stageItem.stage === 'Stage 03' ? "What I'm exploring:" : 'What I learned:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stageItem.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full bg-[#f6f1ff] hover:bg-[#f0ebff] text-xs font-mono text-[#58536e] border border-white flex items-center gap-1.5 transition-colors cursor-default"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#693bca]" />
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="rounded-[28px] p-8 sm:p-10 bg-white/85 backdrop-blur-xl border border-white/95 shadow-[0_10px_30px_-5px_rgba(27,25,44,0.04)] hover:shadow-[0_18px_38px_-6px_rgba(105,59,202,0.12)] text-left transition-all duration-300 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f0ebff] text-[#693bca] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#7a7485] uppercase tracking-wider block font-semibold">
                EDUCATION
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#19172a] tracking-tight group-hover:text-[#693bca] transition-colors">
                {journeyData.education.degree}
              </h3>
            </div>
          </div>

          <div className="space-y-2 pl-2 sm:pl-4 border-l-2 border-[#693bca]/30">
            <p className="font-display font-semibold text-base sm:text-lg text-[#19172a]">
              {journeyData.education.major}
            </p>
            <p className="text-sm text-[#58536e]">
              {journeyData.education.college}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
