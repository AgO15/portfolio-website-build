import { Twitter, Github, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Agnys Orellana</p>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/agnysorellana"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}
