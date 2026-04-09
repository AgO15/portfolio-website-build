import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="section-gap py-12 md:py-16 text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://www.linkedin.com/in/agnysorellana" target="_blank" rel="noopener noreferrer">
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full"
        >
          See projects
        </Button>
      </div>
    </section>
  )
}
