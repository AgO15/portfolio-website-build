import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { TechProjects } from "@/components/tech-projects"
import { DocumentariesProjects } from "@/components/documentaries-projects"
import { StatementMedia } from "@/components/statement-media"


import { SplitFeature } from "@/components/split-feature"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-8 py-8 max-w-screen-2xl mx-auto">
      <Hero />
      <FeaturedProjects />
      <TechProjects />
      <DocumentariesProjects />


      <SplitFeature />
      <FinalCTA />
      <Footer />
    </main>
  )
}
