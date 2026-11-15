export type ProjectCategory = "case" | "tech" | "docs"

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
  stat?: {
    value: string
    label: string
  }
}

export const projects: Project[] = [
  {
    slug: "ai-content-system",
    title: "An AI content system for a marketing team of two",
    category: "case",
    oneLiner:
      "Claude skills, a facts ledger, a native-language gate and a producer-and-reviewer agent loop that let a two-person team ship in English, Spanish and Portuguese.",
    role: "BNamericas",
    year: "2026",
    cover: "",
    stat: {
      value: "~70%",
      label: "less production time per piece (estimate)",
    },
  },
  {
    slug: "product-launches",
    title: "Product launches in three languages",
    category: "case",
    oneLiner:
      "Message architecture, objection handling, sales enablement, segmented email, in-app messaging and LinkedIn for the AI Assistant, the Forecast relaunch and the MCP Connector.",
    role: "BNamericas",
    year: "2026",
    cover: "",
    stat: {
      value: "3",
      label: "launches shipped in English, Spanish and Portuguese, with a fourth in progress",
    },
  },
  {
    slug: "pcs-kit",
    title: "PCS Kit: a B2B content method packaged for Claude",
    category: "case",
    oneLiner:
      "Brand onboarding, a voice skill built from your own best work, a facts ledger and a production loop with checkpoints, in a kit one person can set up alone.",
    role: "Own product",
    year: "2026",
    cover: "",
    stat: {
      value: "~2 h",
      label: "from opening the kit to the first brief",
    },
  },
  {
    slug: "distributed-vision-platform",
    title: "Life OS (formerly Personal Project Management App)",
    category: "tech",
    oneLiner: "A Neumorphic Personal Operating System for Cognitive & Financial Management",
    role: "Product Builder (Learning in Public)",
    year: "2025",
    cover: "/cover-life-os.webp",
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
    title: "Writing Samples",
    category: "tech",
    oneLiner: "SEO articles and a CIO guide written for B2B SaaS, FinTech and health tech",
    role: "Content Strategist & Writer",
    year: "2024",
    cover: "/cover-writing-samples.webp",
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
    highlights: [
      "Third part of an N-part series exploring football history by digging into the La Septima hunt by Real Madrid",
      "10+ hours of footage edited into 10-minute narrative",
      "Production facilitated by AI",
    ],
  },
]
