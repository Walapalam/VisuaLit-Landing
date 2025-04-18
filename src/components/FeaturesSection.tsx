import { cn } from "../lib/utils";
import { Button } from "../ui/button";

const features = [
  {
    title: "Character & Scene Visualizations",
    description:
      "Bring your books to life with AI-generated illustrations that visually depict story moments, characters, and settings.",
    icon: "🖼️",
  },
  {
    title: "Integrated Smart Dictionary",
    description:
      "Tap on any word to get definitions, contextual examples, and pronunciation without leaving the page.",
    icon: "📖",
  },
  {
    title: "Audiobook Companion",
    description:
      "Convert any book into high-quality, natural-sounding audio with voice control support.",
    icon: "🔊",
  },
  {
    title: "Accessibility Mode",
    description:
      "Tailored for individuals with dyslexia, ADHD, and visual impairments — includes special fonts, narration speeds, and layout adaptations.",
    icon: "♿",
  },
  {
    title: "Reading Progress & Personal Highlights",
    description:
      "Track your chapters, revisit favorite quotes, and sync across multiple devices.",
    icon: "⭐",
  },
  {
    title: "Offline Mode + Cross-Device Sync",
    description:
      "Take your reading anywhere, with automatic cloud sync and offline access support.",
    icon: "🌐",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full max-w-5xl mx-auto py-16 px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={cn(
              "rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-md p-6 flex flex-col items-center text-center border border-neutral-200 dark:border-neutral-800 transition hover:shadow-lg hover:-translate-y-1"
            )}
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
