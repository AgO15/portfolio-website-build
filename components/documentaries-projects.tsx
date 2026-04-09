import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function DocumentariesProjects() {
  const docProjects = projects.filter((p) => p.category === "docs")

  return (
    <section id="documentaries" className="section-padding scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Documentaries</h2>
        <p className="text-lg text-muted-foreground">
          Developing my storytelling skills through stories of the game
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {docProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col justify-between rounded-[2rem] bg-zinc-900 border border-zinc-700/50 shadow-xl h-[420px] p-8 overflow-hidden hover:border-zinc-500/50 transition-all duration-300"
          >
            {/* Background Image with Scale Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.cover || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            
            {/* Smooth Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-900/50 to-transparent pointer-events-none" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Top row: Category and Year tags */}
            <div className="relative z-10 flex items-start justify-between">
              <Badge className="bg-white/20 text-white border-transparent uppercase tracking-wider text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {project.category}
              </Badge>
              {project.year && (
                <span className="text-sm font-medium text-zinc-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                  {project.year}
                </span>
              )}
            </div>

            {/* Bottom Content Layer */}
            <div className="relative z-10 flex flex-col items-start mt-auto">
              {project.role && (
                <Badge className="bg-white/15 text-white border-transparent uppercase tracking-[0.06em] text-[10px] sm:text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-md mb-4">
                  {project.role}
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                {project.oneLiner}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white rounded-full bg-white/5 hover:bg-white/15 transition-all pl-4 pr-3 py-5"
              >
                <span className="font-semibold text-sm">Watch Now</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
