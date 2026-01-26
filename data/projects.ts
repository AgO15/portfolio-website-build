export type ProjectCategory = "tech" | "docs"

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  oneLiner: string
  role: string
  year?: string
  cover: string
  links?: {
    label: string
    href: string
  }[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "distributed-vision-platform",
    title: "Project Management App (AI-Assisted Personal OS)",
    category: "tech",
    oneLiner: "An AI-first project tracker with native time tracking, notes, files, and weekly reports — built as a learning-by-building experiment.",
    role: "Content Marketer · Product Builder (Learning in Public)",
    year: "2025",
    cover: "/Gemini_Generated_Image_u8osxiu8osxiu8os.png",
    links: [
      { label: "Visit Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    highlights: [
      "Shipped v0.1.0 of a personal project manager with projects, tasks, notes, files, and weekly time reporting.",
      "Implemented secure auth + Row-Level Security (RLS) on a relational SQL schema (Supabase).",
      "Added an AI chat assistant (Gemini) to create tasks/projects with commands and reduce manual input.",
    ],
  },
  {
    slug: "origins-of-total-football-and-a-fallen-legend",
    title: "Origins of Total Football And A Fallen Legend",
    category: "docs",
    oneLiner: "A mini-doc uncovering the British blueprint behind Total Football",
    role: "Producer",
    year: "2025",
    cover: "https://img.youtube.com/vi/RjXJlzqDtoY/maxresdefault.jpg",
    links: [{ label: "Watch Trailer", href: "https://www.youtube.com/watch?v=RjXJlzqDtoY" }],
    highlights: [
      "Second part of an N-part series exploring football history by digging into the La Septima hunt by Real Madrid",
      "10+ hours of footage edited into 10-minute narrative",
      "Production facilitated by AI",
    ],
  },
  {
    slug: "tech-writing",
    title: "Tech Content I've Produced",
    category: "tech",
    oneLiner: "A sneak peak of what I've done.",
    role: "Content Strategist & Writer",
    year: "2024",
    cover: "/Gemini_Generated_Image_ubwxtdubwxtdubwx.png",
    links: [
      { label: "Download Guide", href: "/cio-guide-3-keys.pdf" },
    ],
    highlights: [
      "Strategic framework for accelerating digital transformation initiatives",
      "Actionable insights for transforming employee experience and boosting productivity",
      "Proven methods for building organizational resilience in volatile markets",
    ],
  },
  {
    slug: "hometown-heroes-series",
    title: "A clash against a rising German powerhouse",
    category: "docs",
    oneLiner: "Mini-doc exploring the 1975/1976 European Cup tie between Real Madrid v. Bayern Munich",
    role: "Producer",
    year: "2025",
    cover: "/bayern-munich-player.jpg",
    links: [{ label: "Watch Series", href: "#" }],
    highlights: [
      "Third part of an N-part series exploring football history by digging into the La Septima hunt by Real Madrid",
      "10+ hours of footage edited into 10-minute narrative",
      "Production facilitated by AI",
    ],
  },
]
