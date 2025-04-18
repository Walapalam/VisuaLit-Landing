// PricingSection.tsx
// Pricing section using framer-motion and local styles for animated pricing cards
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const plans = [
  {
    title: "Freemium Plan",
    price: "Free",
    features: [
      "Access to standard eBook features",
      "Dictionary support",
      "Limited visualizations",
      "Up to 3 audiobooks/month",
      "Sync on 1 device",
    ],
  },
  {
    title: "Premium Plan",
    price: "$9.99/month",
    features: [
      "Unlimited AI visualizations",
      "Unlimited audiobooks",
      "Offline mode",
      "Highlight & notes export",
      "Priority support",
      "Sync on all devices",
    ],
  },
  {
    title: "Inclusive Plan",
    price: "Free for Cognitive Disability Users",
    features: [
      "All Premium features",
      "Special Accessibility UI",
      "Speech-to-text for input",
      "Early access to experimental features",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Choose Your Experience
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className="flex flex-col items-center p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 shadow-lg border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <span className="text-xl font-semibold mb-2">{plan.title}</span>
            <span className="text-2xl font-bold mb-4">{plan.price}</span>
            <ul className="mb-6 text-sm text-neutral-700 dark:text-neutral-300 text-center">
              {plan.features.map((feature) => (
                <li key={feature} className="mb-1">{feature}</li>
              ))}
            </ul>
            <Button className="w-full">Get Started</Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
