// DummyAppScreen.tsx
// Minimalist dummy ebook reader app screen for the iPhone mockup
"use client";
import { motion } from "framer-motion";

export function DummyAppScreen() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-between p-6">
      <div className="w-full flex flex-col items-center">
        <motion.div
          className="rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 w-16 h-16 mb-4 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        />
        <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-1">Readly</h2>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">by Jane Doe</p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.p
          className="text-center text-base text-neutral-700 dark:text-neutral-200 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          "A world of stories in your pocket."
        </motion.p>
      </div>
      <motion.button
        className="mt-4 w-full py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow-md hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Started
      </motion.button>
    </div>
  );
}
