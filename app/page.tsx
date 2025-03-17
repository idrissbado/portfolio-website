import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Publications from "@/components/publications"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  )
}

