"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center px-6 py-32 relative">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">04 — Let&apos;s Connect</p>
          <h2 className="text-4xl font-light tracking-tight mb-4">Start a project</h2>
          <p className="font-light text-[var(--muted)] leading-relaxed">
            Ready to collaborate on something extraordinary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:hello@ravichandra.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--fg)] border border-[var(--border)] rounded-full text-sm tracking-wider uppercase hover:bg-[var(--card)] hover:border-[var(--fg)] transition-all duration-300"
          >
            <Mail size={16} />
            <span>hello@ravichandra.dev</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll to top</span>
        <ArrowUp size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
