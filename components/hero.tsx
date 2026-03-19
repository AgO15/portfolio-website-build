import { Twitter, Github, Youtube, Linkedin } from "lucide-react"
import { Navbar } from "./navbar"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 shadow-2xl p-8 md:p-12">
      <Navbar />

      <div className="mt-16 md:mt-24 mb-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          I turn complex products into stories that convert.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Bilingual content strategist helping SaaS and B2B teams grow through SEO, CRO, and content systems.
        </p>
      </div>

      {/* Background visual - decorative image area */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-20 pointer-events-none">
        <img src="/Gemini_Generated_Image_qn5ruoqn5ruoqn5r.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Social links */}
      <div className="flex items-center gap-4 mt-12">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-4 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors gap-2 group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
