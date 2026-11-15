import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"

const alsoBuilt = [
  {
    title: "Campaign simulator",
    text: "An interactive tool that takes a brief through segments to every piece at real size, checked against format limits. Approvers see each piece as it will look before they sign off.",
  },
  {
    title: "Social media strategy",
    text: "An audit of LinkedIn and Instagram that became seven content series with written selection criteria, C-level reporting and lead attribution in the CRM.",
  },
]

export function CaseStudies() {
  const cases = projects.filter((p) => p.category === "case")
  if (cases.length === 0) return null

  return (
    <section id="work" className="section-padding scroll-mt-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
        <p className="text-lg text-muted-foreground">What I built, how it works and what changed.</p>
      </div>

      <div className="grid gap-8">
        {cases.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid md:grid-cols-[1fr_auto] gap-8 items-end rounded-[2rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/50 shadow-xl p-8 md:p-12 hover:border-zinc-500/50 transition-colors"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                {project.role}
                {project.year ? ` · ${project.year}` : ""}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
              <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">{project.oneLiner}</p>
              <span className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white">
                Read the case
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            {project.stat && (
              <div className="md:text-right">
                <p className="text-6xl md:text-7xl font-bold text-white">{project.stat.value}</p>
                <p className="text-sm text-zinc-400 mt-2 max-w-[14rem] md:ml-auto">{project.stat.label}</p>
              </div>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Also built at BNamericas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {alsoBuilt.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
