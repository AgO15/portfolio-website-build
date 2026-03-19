import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { projects, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { TechContentView } from "@/components/tech-content-view"
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
        {/* Project Management App Content */}
        {project.slug === "distributed-vision-platform" && (
          <>
            {/* Overview Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  This project management application combines traditional task tracking with modern productivity features including AI assistance, habit tracking, and intelligent time management. Built with Next.js and Supabase, it provides a seamless experience across web and mobile platforms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Designed as a learning-by-building experiment, this app showcases the integration of cutting-edge technologies to create a comprehensive personal operating system for productivity.
                </p>
              </div>
            </section>

            {/* Key Features Section */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project & Task Management */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Project & Task Management</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Multi-project dashboard with customizable views</li>
                        <li>• Task hierarchies with subtasks and dependencies</li>
                        <li>• Drag-and-drop task organization</li>
                        <li>• Smart task prioritization based on deadlines</li>
                        <li>• Context menus with duplicate and delete actions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Time Tracking */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Time Tracking</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Automatic time tracking with start/stop timers</li>
                        <li>• Manual time entries for flexible logging</li>
                        <li>• Time reports with customizable date ranges</li>
                        <li>• Project-level time summaries</li>
                        <li>• Visual time analytics with charts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gamification & Habits */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Gamification & Habits</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 21-day habit tracker for task introduction</li>
                        <li>• Streak tracking (3, 7, 21, 90-day milestones)</li>
                        <li>• Gamified push notifications</li>
                        <li>• Weekly calendar for recurring tasks</li>
                        <li>• If-Then tracking for habit formation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AI Assistant */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">AI Chat Assistant</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Powered by Google Gemini AI</li>
                        <li>• Context-aware project discussions</li>
                        <li>• Task suggestions and insights</li>
                        <li>• Natural language task creation</li>
                        <li>• Time management advice</li>
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
                    <li>• Next.js 14 with App Router</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS v4</li>
                    <li>• shadcn/ui (Radix UI)</li>
                    <li>• Framer Motion</li>
                    <li>• React Hook Form + Zod</li>
                  </ul>
                </div>

                {/* Backend & Database */}
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200 dark:border-green-800 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Backend & Database</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Supabase (PostgreSQL)</li>
                    <li>• Supabase Auth with SSR</li>
                    <li>• Vercel Blob Storage</li>
                    <li>• Real-time subscriptions</li>
                    <li>• Row Level Security (RLS)</li>
                  </ul>
                </div>

                {/* AI & Analytics */}
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200 dark:border-purple-800 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">AI & Analytics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Google Gemini AI</li>
                    <li>• Vercel Analytics</li>
                    <li>• Speed Insights</li>
                    <li>• Recharts for data viz</li>
                    <li>• PWA support (next-pwa)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Development Highlights */}
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
                  Built as a Progressive Web App (PWA) for seamless offline functionality and native app-like experience across all devices.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Offline support</span>
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
                    <span className="text-sm text-muted-foreground">Installable on any device</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-muted-foreground">Native app experience</span>
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
