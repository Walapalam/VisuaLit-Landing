"use client";

// AnimatedBackground.tsx
// Subtle animated background using framer-motion and gradients
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#cbd5e1] dark:from-[#18181b] dark:via-[#23272f] dark:to-[#0f172a] opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Optional: Add animated shapes or gradients here for more effect */}
    </motion.div>
  );
}
