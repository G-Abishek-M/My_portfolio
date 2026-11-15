import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SPLASH_DROPLETS = [
  { x: -240, y: -110, r: 14, color: '#ff5c79', delay: 0.32 },
  { x: -185, y: 95, r: 11, color: '#80d8ff', delay: 0.35 },
  { x: 230, y: -95, r: 15, color: '#693bca', delay: 0.33 },
  { x: 210, y: 105, r: 12, color: '#ffb3cb', delay: 0.36 },
  { x: -120, y: -145, r: 9, color: '#8ce8f2', delay: 0.38 },
  { x: 135, y: -140, r: 10, color: '#8257e5', delay: 0.34 },
  { x: -280, y: 12, r: 8, color: '#b9a5ff', delay: 0.37 },
  { x: 285, y: -10, r: 9, color: '#ff5c79', delay: 0.35 },
  { x: -60, y: 130, r: 10, color: '#99f6e4', delay: 0.39 },
  { x: 75, y: 125, r: 8, color: '#693bca', delay: 0.36 },
  { x: -320, y: -60, r: 6, color: '#80d8ff', delay: 0.4 },
  { x: 325, y: 65, r: 7, color: '#ffb3cb', delay: 0.38 },
  { x: 0, y: -155, r: 11, color: '#ff5c79', delay: 0.34 },
  { x: 15, y: 145, r: 9, color: '#8257e5', delay: 0.37 },
];

const THROWN_STREAKS = [
  { startX: '-45vw', startY: '-40vh', color: '#693bca', rotate: 38, delay: 0 },
  { startX: '45vw', startY: '-35vh', color: '#ff5c79', rotate: -38, delay: 0.05 },
  { startX: '-42vw', startY: '38vh', color: '#80d8ff', rotate: -32, delay: 0.08 },
  { startX: '44vw', startY: '36vh', color: '#ffb3cb', rotate: 34, delay: 0.03 },
];

export default function PaintLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 2350;
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => {
      setVisible(false);
    }, 2550);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(exitTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }}
    >
      {visible && (
        <motion.div
          key="paint-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#fcf8ff] overflow-hidden select-none"
          aria-label="Loading portfolio"
          role="status"
        >

          {/* Paint thrown from outer corners into the center */}
          {THROWN_STREAKS.map((streak, i) => (
            <motion.div
              key={i}
              initial={{
                x: streak.startX,
                y: streak.startY,
                scale: 1.4,
                opacity: 0.95,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: [1.4, 1.1, 0],
                opacity: [0.95, 1, 0],
              }}
              transition={{
                duration: 0.42,
                delay: streak.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundColor: streak.color,
                rotate: streak.rotate,
              }}
              className="absolute w-14 h-7 rounded-full blur-[1px] shadow-lg pointer-events-none"
            />
          ))}

          {/* Radial Thrown Paint Droplets */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {SPLASH_DROPLETS.map((drop, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                  x: drop.x,
                  y: drop.y,
                  scale: [0, 1.35, 1],
                  opacity: [0, 0.92, 0.75],
                }}
                transition={{
                  duration: 0.75,
                  delay: drop.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  width: drop.r * 2,
                  height: drop.r * 2,
                  backgroundColor: drop.color,
                }}
                className="absolute rounded-full shadow-sm"
              />
            ))}
          </div>

          {/* Centerpiece: ABISHEK Name Filled with Multicolor Flowing Paint */}
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 flex flex-col items-center px-4"
          >
            <svg
              viewBox="0 0 820 190"
              className="w-[90vw] max-w-[780px] h-auto overflow-visible"
              role="img"
              aria-label="ABISHEK"
            >
              <defs>
                {/* ClipPath shaped exactly as ABISHEK */}
                <clipPath id="abishekTextClip">
                  <text
                    x="410"
                    y="138"
                    textAnchor="middle"
                    fontFamily="'Syne', 'Unbounded', sans-serif"
                    fontWeight="800"
                    fontSize="126"
                    letterSpacing="8"
                  >
                    ABISHEK
                  </text>
                </clipPath>

                {/* Swirling Multicolor Paint Gradients */}
                <linearGradient id="paintFillMain" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#693bca" />
                  <stop offset="25%" stopColor="#ff5c79" />
                  <stop offset="50%" stopColor="#8257e5" />
                  <stop offset="75%" stopColor="#80d8ff" />
                  <stop offset="100%" stopColor="#ffb3cb" />
                </linearGradient>

                <linearGradient id="paintWaveHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#80d8ff" stopOpacity="0.85" />
                  <stop offset="35%" stopColor="#ffb3cb" stopOpacity="0.9" />
                  <stop offset="68%" stopColor="#99f6e4" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#693bca" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Base crisp letter outline */}
              <text
                x="410"
                y="138"
                textAnchor="middle"
                fontFamily="'Syne', 'Unbounded', sans-serif"
                fontWeight="800"
                fontSize="126"
                letterSpacing="8"
                fill="rgba(105, 59, 202, 0.06)"
                stroke="#1b192c"
                strokeOpacity="0.18"
                strokeWidth="2.5"
              >
                ABISHEK
              </text>

              {/* Liquid Multicolor Paint Rising & Swirling Inside ABISHEK */}
              <g clipPath="url(#abishekTextClip)">
                <motion.g
                  initial={{ y: 175 }}
                  animate={{ y: -25 }}
                  transition={{
                    duration: 1.75,
                    delay: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Undulating liquid wave layer 1 */}
                  <motion.path
                    d="M -200 22 Q -100 0 0 22 T 200 22 T 400 22 T 600 22 T 800 22 T 1000 22 L 1000 260 L -200 260 Z"
                    fill="url(#paintFillMain)"
                    animate={{ x: [0, -200] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: 'linear',
                    }}
                  />

                  {/* Secondary vibrant paint swirl layer */}
                  <motion.path
                    d="M -200 32 Q -100 54 0 32 T 200 32 T 400 32 T 600 32 T 800 32 T 1000 32 L 1000 260 L -200 260 Z"
                    fill="url(#paintWaveHighlight)"
                    opacity="0.65"
                    animate={{ x: [-200, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.1,
                      ease: 'linear',
                    }}
                  />

                  {/* Colorful paint blotches swirling inside the letters */}
                  <motion.circle
                    cx="180"
                    cy="115"
                    r="72"
                    fill="#ff5c79"
                    opacity="0.55"
                    animate={{ cx: [160, 260, 160], cy: [120, 85, 120] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="450"
                    cy="105"
                    r="82"
                    fill="#80d8ff"
                    opacity="0.55"
                    animate={{ cx: [420, 520, 420], cy: [95, 130, 95] }}
                    transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="670"
                    cy="115"
                    r="75"
                    fill="#693bca"
                    opacity="0.55"
                    animate={{ cx: [690, 590, 690], cy: [125, 90, 125] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  />
                </motion.g>
              </g>

              {/* Outer crisp sheen stroke on top */}
              <motion.text
                x="410"
                y="138"
                textAnchor="middle"
                fontFamily="'Syne', 'Unbounded', sans-serif"
                fontWeight="800"
                fontSize="126"
                letterSpacing="8"
                fill="none"
                stroke="#693bca"
                strokeWidth="1.5"
                initial={{ strokeOpacity: 0 }}
                animate={{ strokeOpacity: [0, 0.55, 0.25] }}
                transition={{ duration: 1.4, delay: 0.45 }}
              >
                ABISHEK
              </motion.text>
            </svg>

            {/* Subtle Brush-Stroke Progress Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-4 flex flex-col items-center gap-2.5"
            >
              <div className="w-52 sm:w-64 h-2 rounded-full bg-[#eae5ff] overflow-hidden p-[2px] border border-white shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#693bca,#ff5c79,#80d8ff,#ffb3cb)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#58536e]">
                <span>Mixing Atelier</span>
                <span className="text-[#693bca] font-semibold">{progress}%</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
