import { Play } from "lucide-react"

export function StatementMedia() {
  return (
    <section id="about" className="mt-16">
      {/* Statement */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
          I believe in building with clarity, designing systems that scale, and telling stories that resonate. Every
          line of code and every frame matters.
        </p>
      </div>

      {/* Media Card with video preview */}
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 relative rounded-[2rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 shadow-xl overflow-hidden h-[400px] group cursor-pointer">
          <img
            src="/documentary-showreel-preview.jpg"
            alt="Documentary showreel"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110">
              <Play className="w-6 h-6 text-zinc-900 ml-1" />
            </button>
          </div>

          {/* Testimonial bubble */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs shadow-lg">
            <p className="text-sm text-zinc-900 italic">&ldquo;Can&apos;t imagine without [their] vision...&rdquo;</p>
          </div>
        </div>

        {/* Profile card */}
        <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Wordsmith</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Ryan Said</h3>
          <p className="text-muted-foreground mb-6">
            <span className="font-medium text-foreground">Software Engineer</span> building scalable systems
          </p>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Documentary Producer</span> crafting compelling narratives
          </p>

          <div className="mt-8 w-16 h-16 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600" />
        </div>
      </div>
    </section>
  )
}
