import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section 
      className="section-gap relative overflow-hidden rounded-[2rem] border border-zinc-800 shadow-2xl p-12 md:p-16 py-20 md:py-24 text-center bg-zinc-950"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(9,9,11,1) 100%)' }}
    >
      <img
        src="/modern-distributed-computing-visualization.jpg"
        alt="Abstract background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
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
