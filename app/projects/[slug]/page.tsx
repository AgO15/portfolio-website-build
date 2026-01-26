import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projects, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug)
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} — Agnys`,
    description: project.oneLiner,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen px-4 md:px-8 py-8 max-w-5xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      {/* Hero */}
      <div className="mb-12">
        {project.slug === "tech-writing" ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Tech Content I've Produced</h1>
            <p className="text-xl text-muted-foreground mb-6">A sneak peak of what I've done.</p>
          </>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <Badge>{project.category}</Badge>
              {project.year && <span className="text-sm text-muted-foreground">{project.year}</span>}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.oneLiner}</p>
          </>
        )}

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Role: <span className="font-medium text-foreground">{project.role}</span>
          </span>
        </div>
      </div>

      {/* Video/Cover */}
      {project.slug === "distributed-vision-platform" ? (
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-[2rem] overflow-hidden border border-border shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TSz5jLH9tEY"
                title="Project Management App Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-border shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/If2cHTHEdw0"
                title="Project Management App Demo 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : project.category === "docs" && project.links && project.links[0]?.href.includes("youtube.com") ? (
        <div className="rounded-[2rem] overflow-hidden mb-12 border border-border shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${new URL(project.links[0].href).searchParams.get("v")}`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <div className="rounded-[2rem] overflow-hidden mb-12 border border-border shadow-lg">
          <img src={project.cover || "/placeholder.svg"} alt={project.title} className="w-full h-[500px] object-cover" />
        </div>
      )}

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Download Resource Card - Only for CIO Guide */}
        {project.slug === "tech-writing" && (
          <>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">E-Book</h2>
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[3/4] bg-slate-100">
                    <img
                      src="/Captura de pantalla 2025-12-18 210907.png"
                      alt="CIO Guide Cover"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Practical Guide: 3 Keys to Overcoming the Main Challenges Faced by CIOs
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        A strategic roadmap for IT leaders navigating economic uncertainty. This guide details how to drive organizational growth by accelerating digital initiatives, transforming the employee experience to boost productivity, and building a resilient culture capable of withstanding market volatility.
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold">
                          A
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Agnys</p>
                          <p className="text-xs text-muted-foreground">Content Strategist & Writer</p>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a
                      href="/cio-guide-3-keys.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg w-fit"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF Guide
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* EAM Article Card - Same page */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Article</h2>
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr] gap-6 p-8">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[3/4] bg-slate-100">
                    <img
                      src="/67d2f2aec11554d951962758_Gestion-de-activos-empresariales.jpeg"
                      alt="EAM Article Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        EAM: 3 Keys to Understanding Enterprise Asset Management
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        An essential overview of Enterprise Asset Management (EAM) software and its strategic value. This article explores how EAM centralizes the entire asset lifecycle—from planning to maintenance—to optimize operational efficiency, reduce costs, and ensure regulatory compliance. It also illustrates practical applications in the manufacturing and healthcare sectors, demonstrating how digital asset management safeguards business continuity.
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold">
                          A
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Agnys</p>
                          <p className="text-xs text-muted-foreground">Content Strategist & Writer</p>
                        </div>
                      </div>
                    </div>

                    {/* Read Article Button */}
                    <a
                      href="https://www.gb-advisors.com/blog/eam-3-keys-to-understanding-enterprise-asset-management"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg w-fit"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}



      </div>

      {/* Back to home CTA */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all projects
        </Link>
      </div>
    </main>
  )
}
