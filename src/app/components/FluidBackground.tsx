import { motion } from "motion/react";

export const FluidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-white">
      {/* Kinetic gradient orbs - ultra subtle for enterprise feel */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1c17ff] blur-[160px] mix-blend-multiply opacity-[0.04]"
      />
      
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#a44f98] blur-[150px] mix-blend-multiply opacity-[0.03]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute bottom-[-10%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-[#ee7d48] blur-[140px] mix-blend-multiply opacity-[0.03]"
      />
    </div>
  );
};