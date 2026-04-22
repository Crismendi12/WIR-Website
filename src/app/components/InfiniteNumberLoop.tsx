import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function InfiniteNumberLoop() {
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 1000); // Cambia cada segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentNumber}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="text-8xl bg-gradient-to-r from-[#1c17ff] via-[#a44f98] to-[#ee7d48] bg-clip-text text-transparent"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
        >
          {currentNumber}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
