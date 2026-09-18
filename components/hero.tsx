import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <p className="section-label mb-6">Digital Architecture</p>
        <h1 className="display">RAVICHANDRA</h1>
        <p className="eyebrow mt-6 text-[var(--muted)]">AIML / FULL STACK DEVELOPER</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 max-w-xl text-center"
      >
        <p className="text-lg font-light leading-relaxed text-[var(--muted)]">
          Building ideas into intelligent experiences.
        </p>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-16 inline-flex items-center gap-3 text-xs tracking-wider uppercase text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
      >
        <span>Explore my work</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
