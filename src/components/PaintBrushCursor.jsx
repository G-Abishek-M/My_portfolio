import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const PAINT_PALETTE = [
  '#693bca', // primary violet
  '#8257e5', // luminous purple
  '#ff5c79', // aurora coral
  '#ffb3cb', // aurora pink
  '#80d8ff', // sky cyan
  '#8ce8f2', // ice mint
  '#b9a5ff', // soft lavender
];

export default function PaintBrushCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [activeColor, setActiveColor] = useState(PAINT_PALETTE[0]);

  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const splashesRef = useRef([]);
  const lastPosRef = useRef({ x: 0, y: 0, hasPos: false });
  const colorIndexRef = useRef(0);
  const distAccRef = useRef(0);

  // Raw & spring-smoothed cursor coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const brushRotate = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 900, damping: 45, mass: 0.25 });
  const springY = useSpring(cursorY, { stiffness: 900, damping: 45, mass: 0.25 });
  const springRotate = useSpring(brushRotate, { stiffness: 320, damping: 24 });

  // Step 1: Detect fine pointer capability (mouse/trackpad) safely
  useEffect(() => {
    const hasFinePointer =
      window.matchMedia('(any-pointer: fine)').matches ||
      window.matchMedia('(pointer: fine)').matches;

    if (hasFinePointer) {
      setEnabled(true);
      return;
    }

    // Fallback: enable if a non-touch pointer or mouse moves
    const enableOnMouse = (e) => {
      if (e.pointerType && e.pointerType === 'touch') return;
      setEnabled(true);
    };
    window.addEventListener('pointermove', enableOnMouse, { passive: true, once: true });
    window.addEventListener('mousemove', enableOnMouse, { passive: true, once: true });
    return () => {
      window.removeEventListener('pointermove', enableOnMouse);
      window.removeEventListener('mousemove', enableOnMouse);
    };
  }, []);

  // Step 2: Only hide native OS cursor when the brush cursor is actively visible
  useEffect(() => {
    if (enabled && isVisible) {
      document.documentElement.classList.add('custom-brush-cursor-active');
    } else {
      document.documentElement.classList.remove('custom-brush-cursor-active');
    }
    return () => {
      document.documentElement.classList.remove('custom-brush-cursor-active');
    };
  }, [enabled, isVisible]);

  // Step 3: Attach canvas trail & pointer tracking once enabled and canvas is mounted
  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const isInteractiveTarget = (target) => {
      if (!target || !(target instanceof Element)) return false;
      return Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]'
        )
      );
    };

    const handlePointerMove = (e) => {
      if (e.pointerType === 'touch') return;
      const { clientX: x, clientY: y } = e;

      if (!lastPosRef.current.hasPos) {
        // Snap immediately on first entrance so brush appears right at pointer
        cursorX.jump(x);
        cursorY.jump(y);
        lastPosRef.current = { x, y, hasPos: true };
        setIsVisible(true);
        setIsHovering(isInteractiveTarget(e.target));
        return;
      }

      setIsVisible(true);
      cursorX.set(x);
      cursorY.set(y);
      setIsHovering(isInteractiveTarget(e.target));

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 1.5) {
        const tilt = Math.max(-22, Math.min(22, dx * 0.65));
        brushRotate.set(tilt);

        distAccRef.current += dist;
        if (distAccRef.current > 75) {
          distAccRef.current = 0;
          colorIndexRef.current = (colorIndexRef.current + 1) % PAINT_PALETTE.length;
          setActiveColor(PAINT_PALETTE[colorIndexRef.current]);
        }

        const color = PAINT_PALETTE[colorIndexRef.current];
        const speed = Math.min(dist, 40);
        const width = Math.max(4, Math.min(13, 12 - speed * 0.14));

        pointsRef.current.push({
          x,
          y,
          px: lastPosRef.current.x,
          py: lastPosRef.current.y,
          color,
          width,
          life: 1,
        });

        if (pointsRef.current.length > 90) {
          pointsRef.current.shift();
        }
      }

      lastPosRef.current = { x, y, hasPos: true };
    };

    const handlePointerDown = (e) => {
      if (e.pointerType === 'touch') return;
      setIsPressed(true);
      setIsVisible(true);
      brushRotate.set(-14);
      const { clientX: x, clientY: y } = e;
      cursorX.set(x);
      cursorY.set(y);

      colorIndexRef.current = (colorIndexRef.current + 1) % PAINT_PALETTE.length;
      const splashColor = PAINT_PALETTE[colorIndexRef.current];
      setActiveColor(splashColor);

      for (let i = 0; i < 9; i++) {
        const angle = (Math.PI * 2 * i) / 9 + (Math.random() - 0.5) * 0.5;
        const speed = 1.4 + Math.random() * 3.2;
        splashesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2 + Math.random() * 3.8,
          color: PAINT_PALETTE[(colorIndexRef.current + i) % PAINT_PALETTE.length],
          life: 1,
        });
      }
    };

    const handlePointerUp = () => {
      setIsPressed(false);
      brushRotate.set(0);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      lastPosRef.current.hasPos = false;
    };

    const moveEvent = 'PointerEvent' in window ? 'pointermove' : 'mousemove';
    const downEvent = 'PointerEvent' in window ? 'pointerdown' : 'mousedown';
    const upEvent = 'PointerEvent' in window ? 'pointerup' : 'mouseup';

    window.addEventListener(moveEvent, handlePointerMove, { passive: true });
    window.addEventListener(downEvent, handlePointerDown);
    window.addEventListener(upEvent, handlePointerUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    let rafId;
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = pointsRef.current.length - 1; i >= 0; i--) {
        const pt = pointsRef.current[i];
        pt.life -= 0.024;
        if (pt.life <= 0) {
          pointsRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = pt.life * 0.58;
        ctx.strokeStyle = pt.color;
        ctx.lineWidth = pt.width * pt.life;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 8 * pt.life;

        ctx.beginPath();
        ctx.moveTo(pt.px, pt.py);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
        ctx.restore();
      }

      for (let i = splashesRef.current.length - 1; i >= 0; i--) {
        const sp = splashesRef.current[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.92;
        sp.vy *= 0.92;
        sp.life -= 0.032;

        if (sp.life <= 0) {
          splashesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = sp.life * 0.85;
        ctx.fillStyle = sp.color;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius * sp.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener(moveEvent, handlePointerMove);
      window.removeEventListener(downEvent, handlePointerDown);
      window.removeEventListener(upEvent, handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, brushRotate, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Live Watercolor Brush Trail Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Custom SVG Paint Brush Cursor (Tip aligned exactly to 0,0 hotspot) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: springX,
          y: springY,
          rotate: springRotate,
          opacity: isVisible ? 1 : 0,
          transformOrigin: '0px 0px',
        }}
        animate={{
          scale: isPressed ? 0.86 : isHovering ? 1.18 : 1,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 24 }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      >
        {/* Soft paint aura at the bristle tip when hovering interactive elements */}
        <motion.div
          animate={{
            scale: isHovering ? [1, 1.35, 1] : 0.6,
            opacity: isHovering ? 0.55 : 0,
          }}
          transition={{ repeat: isHovering ? Infinity : 0, duration: 1.4 }}
          style={{ backgroundColor: activeColor }}
          className="absolute -left-2.5 -top-2.5 w-5 h-5 rounded-full blur-md"
        />

        <svg
          width="40"
          height="40"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_6px_14px_rgba(25,23,42,0.28)]"
        >
          {/* Paint drop / bristle tip anchored at (1, 1) */}
          <path
            d="M1 1C3.2 0.8 7.6 1.6 10.6 4.4C12.8 6.4 13.4 9.5 11.4 11.5C9.4 13.5 6.3 12.9 4.3 10.7C1.6 7.7 0.8 3.2 1 1Z"
            fill={activeColor}
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.9"
          />
          {/* Glossy highlight on wet paint tip */}
          <path
            d="M3.2 3.2C4.8 3.1 7.1 3.9 8.7 5.5"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Bristle base */}
          <path
            d="M9.6 7.4L13.5 11.3L11.2 13.6L7.3 9.7L9.6 7.4Z"
            fill="#2d2640"
          />
          {/* Metallic ferrule */}
          <path
            d="M11.6 9.4L16.2 14L13.9 16.3L9.3 11.7L11.6 9.4Z"
            fill="url(#brushFerrule)"
          />
          {/* Sculpted wooden/lacquer brush handle */}
          <path
            d="M14.8 12.6L34.8 30.8C36.1 32 36.1 34 34.9 35.1C33.8 36.2 31.8 36.2 30.6 34.9L12.5 14.9L14.8 12.6Z"
            fill="url(#brushHandle)"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.7"
          />
          {/* Subtle specular line along handle */}
          <path
            d="M15.4 14.4L32.8 31.4"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="brushFerrule"
              x1="10"
              y1="10"
              x2="16"
              y2="16"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#e5e0f5" />
              <stop offset="50%" stopColor="#b9a5ff" />
              <stop offset="100%" stopColor="#7a7485" />
            </linearGradient>
            <linearGradient
              id="brushHandle"
              x1="13"
              y1="13"
              x2="35"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#1b192c" />
              <stop offset="65%" stopColor="#45278a" />
              <stop offset="100%" stopColor="#693bca" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
