import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function DocumentariesProjects() {
  const docProjects = projects.filter((p) => p.category === "docs")

  return (
    <section id="documentaries" className="py-24 scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentaries</h2>
        <p className="text-lg text-muted-foreground">
          Capturing compelling sport stories through storytelling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {docProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-xl h-[380px] hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={project.cover || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <Badge className="bg-white/10 text-white border-white/20">{project.role}</Badge>
                {project.year && <span className="text-sm text-zinc-400">{project.year}</span>}
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-300 leading-relaxed mb-4">{project.oneLiner}</p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-white hover:bg-white/10 rounded-full"
                >
                  <span>Watch Now</span>
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
