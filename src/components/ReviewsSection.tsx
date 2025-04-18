// ReviewsSection.tsx
// Horizontally scrolling user reviews/testimonials using MagicUI Marquee
import { motion } from "framer-motion";
import { Marquee } from "./magicui/marquee";

const reviews = [
  { name: "Alice Johnson", text: "VisuaLit has made reading so much more immersive!", avatar: "https://randomuser.me/api/portraits/women/7.jpg" },
  { name: "Bob Brown", text: "The AI visualizations are stunning.", avatar: "https://randomuser.me/api/portraits/men/8.jpg" },
  { name: "Charlie Davis", text: "Audiobook mode is a game changer.", avatar: "https://randomuser.me/api/portraits/men/9.jpg" },
  { name: "Diana Evans", text: "Perfect for my dyslexic son!", avatar: "https://randomuser.me/api/portraits/women/10.jpg" },
  { name: "Ethan Ford", text: "Syncing across devices is seamless.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Fiona Grant", text: "The best eBook reader for accessibility.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-12 bg-transparent">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        What Our Users Say
      </motion.h2>
      <div className="flex flex-col gap-1">
        <Marquee className="w-full max-w-full" pauseOnHover repeat={3}>
          {reviews.map((review) => (
            <div
              key={review.name + '-1'}
              className="flex items-center gap-4 bg-white/80 dark:bg-neutral-900/80 rounded-xl px-6 py-4 shadow-md border border-neutral-200 dark:border-neutral-800 min-w-[320px] mx-1"
            >
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-base mb-1">{review.name}</div>
                <div className="text-sm text-neutral-700 dark:text-neutral-300">{review.text}</div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee className="w-full max-w-full" pauseOnHover repeat={3} reverse>
          {reviews.map((review) => (
            <div
              key={review.name + '-2'}
              className="flex items-center gap-4 bg-white/80 dark:bg-neutral-900/80 rounded-xl px-6 py-4 shadow-md border border-neutral-200 dark:border-neutral-800 min-w-[320px] mx-1"
            >
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-base mb-1">{review.name}</div>
                <div className="text-sm text-neutral-700 dark:text-neutral-300">{review.text}</div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee className="w-full max-w-full" pauseOnHover repeat={3}>
          {reviews.map((review) => (
            <div
              key={review.name + '-3'}
              className="flex items-center gap-4 bg-white/80 dark:bg-neutral-900/80 rounded-xl px-6 py-4 shadow-md border border-neutral-200 dark:border-neutral-800 min-w-[320px] mx-1"
            >
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-base mb-1">{review.name}</div>
                <div className="text-sm text-neutral-700 dark:text-neutral-300">{review.text}</div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
