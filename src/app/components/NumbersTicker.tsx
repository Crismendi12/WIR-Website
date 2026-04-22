import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Clock, AlertCircle, TrendingUp, Zap } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 'WEEKS',
    label: 'Traditional Process',
    sublabel: 'Manual underwriting approval time',
    color: '#6b7280',
  },
  {
    icon: AlertCircle,
    value: '94%',
    label: 'Still Manual',
    sublabel: 'of insurance work done by hand',
    color: '#ee7d48',
  },
  {
    icon: Zap,
    value: '<1 MIN',
    label: 'WIR Automation',
    sublabel: 'End-to-end AI underwriting',
    color: '#a44f98',
  },
];

function AnimatedStat({ value, delay, isInView }: { value: string; delay: number; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and parse it
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      // No number to animate, just show the value
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numMatch[1], 10);
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring((numMatch.index || 0) + numMatch[1].length);

    const duration = 2000; // 2 seconds
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let currentFrame = 0;

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        // Easing function: easeOutExpo
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentNum = Math.floor(easedProgress * targetNum);
        
        setDisplayValue(`${prefix}${currentNum}${suffix}`);

        if (currentFrame >= totalFrames) {
          setDisplayValue(value); // Set final value to ensure accuracy
          clearInterval(interval);
        }
      }, 1000 / fps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(delayTimeout);
  }, [isInView, value, delay]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {displayValue}
    </motion.span>
  );
}

export function NumbersTicker() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
      
      {/* Subtle background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(28,23,255,0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(164,79,152,0.02),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-[11px] text-[#ee7d48] tracking-[0.35em] uppercase mb-4 block"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
          >
            The Problem We're Solving
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-black mb-4 leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
          >
            Insurance is{' '}
            <span className="bg-gradient-to-r from-[#6b7280] via-[#ee7d48] to-[#a44f98] bg-clip-text text-transparent">
              drowning in manual work
            </span>
            {' '}— we're here to change that
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group"
                style={{
                  borderColor: `${stat.color}20`,
                  boxShadow: `0 4px 20px ${stat.color}08`,
                }}
              >
                {/* Colored accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    border: `2px solid ${stat.color}30`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: stat.color }} />
                </motion.div>

                {/* Value */}
                <div
                  className="text-4xl md:text-5xl mb-3 tabular-nums leading-none"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 800,
                    color: stat.color,
                  }}
                >
                  <AnimatedStat value={stat.value} delay={index * 0.15 + 0.3} isInView={isInView} />
                </div>

                {/* Label */}
                <h3
                  className="text-sm text-black mb-2 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}
                >
                  {stat.label}
                </h3>

                {/* Sublabel */}
                <p
                  className="text-xs text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
                >
                  {stat.sublabel}
                </p>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.color}10, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-block bg-gradient-to-r from-[#1c17ff]/5 via-[#a44f98]/5 to-[#ee7d48]/5 rounded-2xl px-8 py-5 border-2"
            style={{ borderColor: 'rgba(28, 23, 255, 0.15)' }}
          >
            <p
              className="text-lg text-black mb-2"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
            >
              WIR automates the entire process journey and bringing a automatic workflow with AI intelligence layer
            </p>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
            >
              From weeks to minutes. From manual to intelligent. From chaos to control.
            </p>
          </div>
        </motion.div>

        {/* Source attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p
            className="text-[10px] text-gray-400 tracking-wide"
            style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400 }}
          >
            Sources: Industry benchmarks, CNseg, ANS, and internal market research (2024-2025)
          </p>
        </motion.div>
      </div>
    </section>
  );
}