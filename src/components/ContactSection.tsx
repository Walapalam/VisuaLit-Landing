// ContactSection.tsx
// Contact info with animated text
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-xl mx-auto py-16 px-4 flex flex-col items-center">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Let’s Talk
      </motion.h2>
      <div className="flex flex-col gap-2 text-center text-base md:text-lg text-neutral-700 dark:text-neutral-300">
        <div>
          <span className="font-semibold">Email:</span> visualitapp@gmail.com
        </div>
        <div>
          <span className="font-semibold">LinkedIn:</span> LinkedIn Placeholder
        </div>
        <div>
          <span className="font-semibold">Contact Number:</span> [Phone Placeholder]
        </div>
      </div>
    </section>
  );
}
