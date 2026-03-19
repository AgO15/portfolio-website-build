import { Twitter, Github, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-16 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">Copyright {new Date().getFullYear()}. All Rights Reserved</p>

      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com"
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
