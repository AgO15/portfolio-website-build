import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="mt-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl p-12 md:p-16 text-center">
      <img
        src="/digital-creative-immersive-background.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-balance">
          Let&apos;s build something people can feel.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full bg-white text-zinc-900 hover:bg-zinc-100" asChild>
            <a href="https://www.linkedin.com/in/agnysorellana" target="_blank" rel="noopener noreferrer">
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            See projects
          </Button>
        </div>
      </div>
    </section>
  )
}
