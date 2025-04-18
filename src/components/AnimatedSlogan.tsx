"use client";

// AnimatedSlogan.tsx
// Minimalist animated slogan using framer-motion
import { motion } from "framer-motion";

export function AnimatedSlogan() {
  return (
    <motion.h1
      className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neutral-900 to-neutral-400 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Bring stories to life
    </motion.h1>
  );
}
