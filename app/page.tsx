"use client";

import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { SceneWrapper } from "../components/scene-wrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SceneWrapper />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
