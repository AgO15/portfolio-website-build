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
    title: "Life OS (formerly Personal Project Management App)",
    category: "tech",
    oneLiner: "A Neumorphic Personal Operating System for Cognitive & Financial Management",
    role: "Product Builder (Learning in Public)",
    year: "2025",
    cover: "/life_os_carousel_cover.png",
    links: [
      { label: "Visit Site", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    highlights: [
      "Foundations: Shipped v0.1.0 of an AI-assisted personal project manager focusing on tasks, notes, files, and weekly time reporting.",
      "Infrastructure: Implemented secure, server-side authentication and Row Level Security on a relational Supabase schema.",
      "AI Integration: Added a Gemini-powered chat assistant for command-based task creation and workflow drafting.",
      "The Pivot: Expanded the scope from standard \"project tracking\" to a \"Life OS\" by introducing cognitive capacity limits and a multi-currency income tracker.",
      "Design Overhaul: Completely reimagined the user interface, migrating from a generic dark mode to a premium, tactile Neumorphic design system with bilingual (i18n) support.",
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
    title: "Previous Work",
    category: "tech",
    oneLiner: "Pre-AI and AI-Assisted content",
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
