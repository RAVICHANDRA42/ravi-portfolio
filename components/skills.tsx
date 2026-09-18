import { motion } from "framer-motion";

const categories = [
  {
    title: "AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "LLM Integration",
      "Neural Networks",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    title: "Web",
    items: [
      "React / Next.js",
      "TypeScript",
      "Three.js / WebGL",
      "Node.js / Python",
      "PostgreSQL / MongoDB",
      "AWS / Vercel",
    ],
  },
  {
    title: "Experiments",
    items: [
      "Creative Coding",
      "Generative Art",
      "3D Design",
      "Interactive Media",
      "Prototyping",
      "Open Source",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center px-6 py-32 relative">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">02 — Capabilities</p>
          <h2 className="text-4xl font-light tracking-tight">
            What I Build
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--fg)] transition-colors duration-500"
            >
              <p className="section-label mb-6">{cat.title}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-light text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="divider max-w-5xl mx-auto mt-0" />
    </section>
  );
}
