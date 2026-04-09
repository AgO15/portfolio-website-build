import { Badge } from "@/components/ui/badge"

export function SplitFeature() {
  return (
    <section className="section-gap grid lg:grid-cols-2 gap-8 lg:gap-12 bg-card border border-border rounded-[2rem] p-8 md:p-12 lg:divide-x lg:divide-border/50">
      {/* Left column */}
      <div className="flex flex-col justify-center lg:pr-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
          I specialize in designing and managing end-to-end content operations powered by AI — from ideation and creation to execution, evaluation, and iteration.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          By integrating AI into every stage of the content lifecycle, I help technology companies scale their marketing operations without sacrificing quality or strategic depth.
        </p>
      </div>

      {/* Right column - Resume Preview */}
      <div className="relative flex flex-col lg:pl-12 h-[500px]">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Resume Highlights</p>

        <div className="flex-1 space-y-6">
          {/* Experience */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Experience</h4>
            <p className="text-2xl font-bold text-foreground">5+ Years</p>
            <p className="text-sm text-muted-foreground">Content Operations & AI-Assisted Workflows</p>
          </div>

          {/* Key Skills */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Core Expertise</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">AI Content Ops</Badge>
              <Badge variant="secondary">Workflow Design</Badge>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">Marketing Execution</Badge>
              <Badge variant="secondary">Bilingual (EN/ES)</Badge>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Languages</h4>
            <p className="text-sm text-muted-foreground">
              Spanish (Native) • English (C1) • Portuguese (B2)
            </p>
          </div>

          {/* Achievement */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Recent Achievement</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed AI-integrated content pipelines for SaaS products, reducing production cycles while maintaining editorial quality at scale
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <a href="/resume">
            <button
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all shadow-md group"
            >
              See more
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
