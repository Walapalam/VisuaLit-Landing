// DemoSignupSection.tsx
// Animated demo signup form using framer-motion and local styles
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function DemoSignupSection() {
  return (
    <section id="demo" className="w-full max-w-xl mx-auto py-16 px-4 flex flex-col items-center">
      <motion.div
        className="w-full p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-neutral-200 dark:border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Want Early Access?</h2>
        <form className="flex flex-col gap-4 mt-4">
          <input required type="text" placeholder="Name" className="rounded-lg border px-4 py-2 bg-white/90 dark:bg-neutral-800/90" />
          <input required type="email" placeholder="Email" className="rounded-lg border px-4 py-2 bg-white/90 dark:bg-neutral-800/90" />
          <select className="rounded-lg border px-4 py-2 bg-white/90 dark:bg-neutral-800/90">
            <option>Reader</option>
            <option>Author</option>
            <option>Publisher</option>
            <option>Educator</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Your Interest" className="rounded-lg border px-4 py-2 bg-white/90 dark:bg-neutral-800/90" />
          <Button className="w-full" type="submit">Request Demo</Button>
        </form>
      </motion.div>
    </section>
  );
}
