import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projects, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { TechContentView } from "@/components/tech-content-view"
import { VideoCarousel } from "@/components/video-carousel"
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
        <VideoCarousel />
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
        {/* Project Management App Content */}
        {project.slug === "distributed-vision-platform" && (
          <>
            {/* Short Description */}
            <section>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  An evolving personal operating system that integrates task tracking, multi-currency financial management, and cognitive capacity monitoring — built as a &ldquo;learning-by-building&rdquo; experiment.
                </p>
              </div>
            </section>

            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  What started as a standard task and time tracker evolved out of a personal need to understand — through data and interface design — what was actually happening across the different dimensions of my life. I wanted a single place to see the projects I was working on, the goals I was chasing in the short, mid, and long term, and how my daily actions actually lined up with those intentions. The core question was simple: <em>does what I&apos;m doing today match where I want to be tomorrow?</em>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  The financial module grew from the same impulse. Although it currently focuses on registering income and expenses, the goal was to bring the same visibility I was building for my time and tasks into my finances. Redesigned with a tactile, neumorphic aesthetic and fully localized in English and Spanish, the app now provides a seamless, stress-reduced experience for managing time, money, and mental energy.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Psychological Frameworks Applied:</h3>
                <div className="space-y-4">
                  <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30 border border-amber-200 dark:border-amber-800 p-5">
                    <h4 className="font-semibold text-foreground mb-1">Hierarchical Goal Theory <span className="text-sm font-normal text-muted-foreground">(Carver &amp; Scheier)</span></h4>
                    <p className="text-sm text-muted-foreground">The macro/meso/micro structure of the app (Areas → Projects → Tasks) mirrors the theory of vertical goal coherence, ensuring daily actions align with long-term life vision.</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/40 dark:to-teal-900/30 border border-teal-200 dark:border-teal-800 p-5">
                    <h4 className="font-semibold text-foreground mb-1">Transtheoretical Model <span className="text-sm font-normal text-muted-foreground">(Prochaska &amp; DiClemente)</span></h4>
                    <p className="text-sm text-muted-foreground">Project lifecycle states (Introduction, Growth, Stabilization, Pause) are adapted from the Stages of Change model, treating each project as a behavior-change cycle with distinct energy demands.</p>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950/40 dark:to-rose-900/30 border border-rose-200 dark:border-rose-800 p-5">
                    <h4 className="font-semibold text-foreground mb-1">Implementation Intentions <span className="text-sm font-normal text-muted-foreground">(Gollwitzer)</span></h4>
                    <p className="text-sm text-muted-foreground">The If-Then task system is a direct application of Gollwitzer&apos;s research showing that pre-committing to specific &ldquo;If [trigger], Then [action]&rdquo; plans dramatically increases follow-through rates.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Cognitive Capacity & Project Lifecycles */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Cognitive Capacity &amp; Project Lifecycles</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Psychological States:</strong> Projects are organized by lifecycle (Introduction, Growth, Stabilization, Pause) rather than just &ldquo;To-Do&rdquo; or &ldquo;Done&rdquo;</li>
                        <li>• <strong>Capacity Alerts:</strong> Built-in safeguards monitor active focus areas and warn against cognitive overload</li>
                        <li>• <strong>If-Then Intentions:</strong> Advanced habit-building module rooted in behavioral psychology to turn intentions into automated behaviors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Multi-Currency Income Tracking */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Multi-Currency Income Tracking</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Dual-Tracking Hub:</strong> Natively track income across different economies simultaneously (e.g., VES, USD BCV, USD Binance)</li>
                        <li>• <strong>Project-Linked Finances:</strong> Directly connect specific payments and income records to individual projects and clients</li>
                        <li>• <strong>Smart Allocations:</strong> Automatically distribute incoming payments across defined financial buckets using custom percentage splits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Holistic Time & Task Management */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Holistic Time &amp; Task Management</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Mobile-Native Interactions:</strong> Neumorphic interface incorporating haptic feedback and long-press context menus</li>
                        <li>• <strong>Deep Time Analytics:</strong> Visual breakdowns of time spent across projects via Recharts</li>
                        <li>• <strong>Unified Workspace:</strong> Centralized task hierarchies, inline notes, and drag-and-drop file attachments in an organized hub</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AI Assistant & i18n */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">AI Assistant &amp; i18n</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Context-Aware AI:</strong> Powered by Google Gemini to suggest tasks, manage workflows, and draft project structures via natural language</li>
                        <li>• <strong>Bilingual Architecture:</strong> Native integration of an English/Spanish toggle with seamless context switching</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Stack Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Frontend</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Next.js 14 App Router</li>
                    <li>• TypeScript &amp; Tailwind CSS v4</li>
                    <li>• Custom Neumorphic UI Design System</li>
                    <li>• Framer Motion (Micro-interactions)</li>
                    <li>• Recharts (Data Visualization)</li>
                  </ul>
                </div>

                {/* Backend & Database */}
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Backend &amp; Database</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Supabase (PostgreSQL, Auth with SSR, RLS)</li>
                    <li>• Vercel Blob Storage</li>
                    <li>• Real-time subscriptions</li>
                  </ul>
                </div>

                {/* AI & Analytics */}
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200 dark:border-purple-800 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">AI &amp; Analytics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Google Gemini AI</li>
                    <li>• Vercel Analytics &amp; Speed Insights</li>
                    <li>• Built-in i18n Context Management</li>
                    <li>• Modern PWA support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Development Journey */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Development Journey</h2>
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-8">
                <div className="space-y-6">
                  {project.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PWA Features */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Progressive Web App</h2>
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Built as a Progressive Web App (PWA) for a seamless native app-like experience across all devices.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Offline resilient</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Push notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Installable on any device (iOS/Android)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Tactile mobile-first gestures (e.g., long-press context menus)</span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Tech Writing Spec Rendering via TechContentView Client Component */}
        {project.slug === "tech-writing" && (
          <TechContentView />
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
