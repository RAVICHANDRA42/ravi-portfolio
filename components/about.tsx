import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-32 relative">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">01 — Identity</p>
            <h2 className="text-4xl font-light tracking-tight leading-tight">
              I craft digital experiences
              <span className="block text-[var(--muted)]">at the intersection of</span>
              <span className="block font-mono text-sm tracking-wider mt-4">
                AI · Web · Experiments
              </span>
            </h2>
            <p className="mt-8 font-light leading-relaxed text-[var(--muted)]">
              A developer obsessed with building intelligent systems and beautiful interfaces.
              Every project is an exploration of what code can become when paired with
              creative vision and technical precision.
            </p>
            <div className="mt-8 flex gap-8">
              {[
                { label: "Years", value: "6+" },
                { label: "Projects", value: "40+" },
                { label: "Clients", value: "25+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-light">{stat.value}</p>
                  <p className="text-xs tracking-wider uppercase text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square border border-[var(--border)] rounded-2xl grid-pattern relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--card)] flex items-center justify-center">
                <p className="text-[var(--muted)] text-sm font-mono">Profile Photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="divider max-w-5xl mx-auto mt-0" />
    </section>
  );
}
