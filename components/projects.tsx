import { motion } from "framer-motion";

const projects = [
  {
    title: "Neural Canvas",
    desc: "AI-generated generative art platform",
    tags: ["AI", "WebGL", "Creative"],
  },
  {
    title: "Depth Engine",
    desc: "3D spatial computing experience",
    tags: ["Three.js", "R3F", "Experimental"],
  },
  {
    title: "Prompt Forge",
    desc: "LLM-powered design tool",
    tags: ["LLM", "Next.js", "Full Stack"],
  },
  {
    title: "Sensor Web",
    desc: "Computer vision IoT dashboard",
    tags: ["CV", "Python", "Real-time"],
  },
];

export function Projects() {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center px-6 py-32 relative">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">03 — Portfolio</p>
          <h2 className="text-4xl font-light tracking-tight">Recent Work</h2>
        </motion.div>

        <div className="mt-16 space-y-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--fg)] transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-light group-hover:tracking-wider transition-all">
                    {project.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)] font-light">{project.desc}</p>
                </div>
                <span className="text-xs tracking-wider uppercase text-[var(--muted)]">
                  0{idx + 1}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] tracking-wider uppercase border border-[var(--border)] rounded-full text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="divider max-w-5xl mx-auto mt-0" />
    </section>
  );
}
