import { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Interactive "Data Core" — adapted for light mode
 */
function DataCore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const size = Math.min(canvas.parentElement?.offsetWidth || 500, 500);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const RINGS = 4;
    const NODES_PER_RING = [8, 12, 16, 20];

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.012;

      const cx = w / 2 + (mouseRef.current.x - 0.5) * 20;
      const cy = h / 2 + (mouseRef.current.y - 0.5) * 20;
      const mouseDist = Math.sqrt(
        Math.pow(mouseRef.current.x - 0.5, 2) + Math.pow(mouseRef.current.y - 0.5, 2)
      );
      const pulseIntensity = 1 + mouseDist * 0.8;

      // Central glow - adjusted for light mode
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80 * pulseIntensity);
      coreGlow.addColorStop(0, `rgba(28, 23, 255, ${0.12 + Math.sin(time * 3) * 0.04})`);
      coreGlow.addColorStop(0.5, 'rgba(164, 79, 152, 0.04)');
      coreGlow.addColorStop(1, 'rgba(249, 179, 54, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 80 * pulseIntensity, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Central core dot
      const corePulse = 4 + Math.sin(time * 4) * 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, corePulse, 0, Math.PI * 2);
      ctx.fillStyle = '#f9b336';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#f9b336';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw orbital rings and nodes
      for (let r = 0; r < RINGS; r++) {
        const radius = 50 + r * 40 * pulseIntensity;
        const nodeCount = NODES_PER_RING[r];
        const rotationSpeed = (r % 2 === 0 ? 1 : -1) * (0.3 + r * 0.1);
        const ringOpacity = 0.1 + (Math.sin(time * 2 + r) * 0.03);

        // Ring path
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(28, 23, 255, ${ringOpacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Nodes on ring
        for (let n = 0; n < nodeCount; n++) {
          const angle = (n / nodeCount) * Math.PI * 2 + time * rotationSpeed;
          const nx = cx + Math.cos(angle) * radius;
          const ny = cy + Math.sin(angle) * radius;
          const nodeSize = 1.5 + Math.sin(time * 3 + n + r) * 0.5;
          const nodeOpacity = 0.3 + Math.sin(time * 2 + n * 0.5) * 0.15;

          ctx.beginPath();
          ctx.arc(nx, ny, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = r % 2 === 0
            ? `rgba(28, 23, 255, ${nodeOpacity})`
            : `rgba(249, 179, 54, ${nodeOpacity})`;
          ctx.fill();

          // Connect some nodes to center
          if (n % 3 === 0) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = `rgba(164, 79, 152, ${nodeOpacity * 0.2})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }

          // Connect to adjacent nodes
          if (n > 0) {
            const prevAngle = ((n - 1) / nodeCount) * Math.PI * 2 + time * rotationSpeed;
            const px = cx + Math.cos(prevAngle) * radius;
            const py = cy + Math.sin(prevAngle) * radius;
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(px, py);
            ctx.strokeStyle = `rgba(28, 23, 255, ${nodeOpacity * 0.12})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Outer energy burst lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + time * 0.2;
        const innerR = 50 + RINGS * 40 * pulseIntensity + 10;
        const outerR = innerR + 15 + Math.sin(time * 3 + i) * 8;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
        ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
        ctx.strokeStyle = `rgba(249, 179, 54, ${0.15 + Math.sin(time * 4 + i) * 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    />
  );
}

export function HeroSection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic button
  const buttonX = useMotionValue(0);
  const buttonY = useMotionValue(0);
  const springX = useSpring(buttonX, { stiffness: 200, damping: 20 });
  const springY = useSpring(buttonY, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      if (distance < 180) {
        const strength = (180 - distance) / 180;
        buttonX.set(distX * strength * 0.25);
        buttonY.set(distY * strength * 0.25);
      } else {
        buttonX.set(0);
        buttonY.set(0);
      }
    },
    [buttonX, buttonY]
  );

  const handleMouseLeave = useCallback(() => {
    buttonX.set(0);
    buttonY.set(0);
  }, [buttonX, buttonY]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden flex items-center justify-center">
      {/* Data Core - central 3D interactive element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <DataCore />
      </div>

      {/* Radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,white_90%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10"
        >
          <span
            className="inline-block text-[10px] text-[#f9b336] tracking-[0.4em] uppercase px-4 py-2 rounded-full bg-[#f9b336]/10"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            The Future of Insurance Market
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
        >
          Insurance decisions{' '}
          <span className="bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] bg-clip-text text-transparent">
            in seconds
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
        >
          AI layer that plugs into your existing systems.
          <br />
          No migration. Instant transformation.
        </motion.p>

        {/* Glow-Pulse CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.button
            ref={buttonRef}
            data-clickable
            style={{
              x: springX,
              y: springY,
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative px-8 py-3.5 text-sm tracking-wider uppercase overflow-hidden rounded-xl bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#f9b336] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            JOIN THE NEW ERA
          </motion.button>
        </motion.div>

        {/* Trust logos bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-16 pt-8 border-t border-gray-200/60"
        >
          <p className="text-[10px] text-gray-500 tracking-[0.4em] uppercase mb-6" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
            Built for Insurance Market
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'Insurers', desc: 'All Lines' },
              { name: 'Health Operators', desc: 'Plans & HMOs' },
              { name: 'Brokers', desc: 'Distribution networks' },
              { name: 'Reinsurers', desc: 'Global capacity' },
            ].map((segment, i) => (
              <motion.div
                key={segment.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
                className="p-4 bg-white border border-gray-200/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-sm text-black mb-1" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                  {segment.name}
                </div>
                <div className="text-xs text-gray-500" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {segment.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span
          className="text-[10px] text-gray-500 tracking-[0.3em] uppercase"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-6 bg-gradient-to-b from-[#1c17ff] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}