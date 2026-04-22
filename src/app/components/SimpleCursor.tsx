import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function SimpleCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if screen is smaller than 768px
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-clickable') ||
        target.closest('[data-clickable]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(!!isClickable);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', showCursor);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render custom cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Main cursor dot - reduced size and opacity */}
        <motion.div
          animate={{
            scale: isPointer ? 1.3 : 1,
            opacity: isVisible ? 0.4 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          
        </motion.div>
      </motion.div>

      {/* Outer ring - reduced size and opacity */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isVisible ? 0.12 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="w-6 h-6 rounded-full border border-white"
            style={{
              borderWidth: '0.5px',
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}