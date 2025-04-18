// AboutSection.tsx
// About section with animated text and Magic Card style
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-3xl mx-auto py-16 px-4 flex flex-col items-center">
      <div className="w-full p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Why VisuaLit?
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-center text-neutral-700 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          VisuaLit transforms the traditional reading experience by combining cutting-edge AI with immersive storytelling. Designed to enhance comprehension, imagination, and accessibility, our reader adapts to your learning style, whether you're a casual reader, a student, or someone with cognitive difficulties.
        </motion.p>
      </div>
    </section>
  );
}
