// TeamSection.tsx
// Team showcase using framer-motion and local styles for animated team member cards
import { motion } from "framer-motion";

const team = [
  { name: "Raqeeb Rameez", role: "Project Lead & Backend Engineer", bio: "Vision, architecture, and backend magic.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Member 2", role: "UI/UX Designer", bio: "Crafts beautiful, accessible interfaces.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Member 3", role: "AI Research & Prompt Engineer", bio: "Makes the AI smart and creative.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Member 4", role: "Frontend Developer", bio: "Brings the UI to life in code.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Member 5", role: "Community & Accessibility Lead", bio: "Ensures everyone can enjoy VisuaLit.", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Member 6", role: "QA & Integration Engineer", bio: "Keeps everything running smoothly.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Meet the Visionaries Behind VisuaLit
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover mb-2" />
            <span className="text-lg font-semibold mt-2">{member.name}</span>
            <span className="text-sm text-neutral-500 mb-2">{member.role}</span>
            <span className="text-xs text-neutral-700 dark:text-neutral-300 text-center">{member.bio}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
