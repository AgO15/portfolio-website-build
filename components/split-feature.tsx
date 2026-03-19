import { Badge } from "@/components/ui/badge"

export function SplitFeature() {
  return (
    <section className="section-gap grid lg:grid-cols-2 gap-8 lg:gap-12 bg-card border border-border rounded-[2rem] p-8 md:p-12 lg:divide-x lg:divide-border/50">
      {/* Left column */}
      <div className="flex flex-col justify-center lg:pr-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
          I specialize in transforming complex technical concepts into high-performing narratives that drive real business results.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Combining creative storytelling with analytical rigor, I leverage SEO, CRO, and bilingual strategies to capture organic traffic, strengthen brand positioning, and generate qualified leads for international technology companies.
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
            <p className="text-sm text-muted-foreground">Content Strategy & Bilingual Copywriting</p>
          </div>

          {/* Key Skills */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Core Expertise</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Content Strategy</Badge>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">Marketing Analytics</Badge>
              <Badge variant="secondary">Team Leadership</Badge>
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
              Led digital event campaign generating 500+ leads with industry experts from VTEX and Shopify
            </p>
          </div>
        </div>

        {/* See More CTA */}
        <div className="flex justify-end mt-4">
          <a
            href="/resume"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
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
          </a>
        </div>
      </div>
    </section>
  )
}
