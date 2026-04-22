import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 28 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-clickable]');
      setIsHovering(!!clickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-difference"
        style={{
          left: smoothX,
          top: smoothY,
          x: '-50%',
          y: '-50%',
        }}
      >
        {/* Main cursor dot */}
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{
              background: isHovering
                ? 'linear-gradient(135deg, #1c17ff, #f9b336)'
                : '#1c17ff',
              boxShadow: isHovering
                ? '0 0 20px rgba(28,23,255,0.4), 0 0 40px rgba(249,179,54,0.3)'
                : '0 0 15px rgba(28,23,255,0.3)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-50 border border-black/30"
        style={{
          left: smoothX,
          top: smoothY,
          x: '-50%',
          y: '-50%',
          width: 32,
          height: 32,
          borderRadius: '50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}