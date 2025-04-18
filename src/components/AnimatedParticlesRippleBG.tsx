// AnimatedParticlesRippleBG.tsx
// MagicUI Particles and Ripple pattern for animated background
import { motion } from "framer-motion";

export function AnimatedParticlesRippleBG() {
  return (
    <>
      <motion.div
        className="fixed inset-0 -z-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#cbd5e1] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#0f172a] opacity-90 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        style={{
          background: "radial-gradient(circle at 60% 40%, #a5b4fc33 0%, transparent 70%), radial-gradient(circle at 30% 70%, #f472b633 0%, transparent 80%)"
        }}
      />
    </>
  );
}
