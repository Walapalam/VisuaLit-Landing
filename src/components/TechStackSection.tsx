// TechStackSection.tsx
import { motion } from "framer-motion";

const tech = [
  { name: "Flutter", icon: "/flutter-icon.svg" },
  { name: "FastAPI", icon: "/fastapi-icon.svg" },
];

export function TechStackSection() {
  return (
    <section id="tech" className="w-full py-16 flex flex-col items-center">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Powered by Modern Tech
      </motion.h2>
      <div className="flex gap-12 justify-center items-center flex-wrap">
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <img src={t.icon} alt={t.name} className="w-16 h-16 mb-2" />
            <span className="font-medium text-lg text-neutral-700 dark:text-neutral-200">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
