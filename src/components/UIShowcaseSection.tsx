// UIShowcaseSection.tsx
// Magic Cards with placeholder images/captions for UI showcase
import { motion } from "framer-motion";

const showcase = [
  { img: "/ui-visuals-1.png", caption: "Dynamic Character Visuals in Action" },
  { img: "/ui-visuals-2.png", caption: "Audio Mode with Smart Narration" },
  { img: "/ui-visuals-3.png", caption: "In-app Dictionary Example" },
];

export function UIShowcaseSection() {
  return (
    <section id="showcase" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        UI Showcase
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcase.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <img src={item.img} alt={item.caption} className="w-full h-48 object-cover rounded-xl mb-4" />
            <span className="text-base text-center">{item.caption}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
