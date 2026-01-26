import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featuredProjects = [projects[0], projects[1]]

  return (
    <section id="projects" className="mt-16">
      {/* Project cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-xl h-[320px] hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.cover || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
            />

            <div className="relative h-full p-8 flex flex-col justify-between">
              <Badge className="self-start bg-white/10 text-white border-white/20">{project.category}</Badge>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 text-sm">{project.oneLiner}</p>

                <Button variant="ghost" size="sm" className="mt-4 text-white hover:text-white hover:bg-white/10">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
