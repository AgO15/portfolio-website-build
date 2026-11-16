"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white backdrop-blur-sm rounded-full border border-border shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <img src="/profile_pic.jpeg" alt="Agnys Orellana" className="w-8 h-8 rounded-full object-cover" />
        <span className="font-semibold text-foreground hidden sm:inline">Agnys</span>
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        <Link href="/#work" className="text-sm font-medium text-zinc-700 hover:text-foreground transition-colors px-2 sm:px-3 py-2">
          Work
        </Link>
        <Link href="/resume" className="text-sm font-medium text-zinc-700 hover:text-foreground transition-colors px-2 sm:px-3 py-2">
          Resume
        </Link>
      <Button size="sm" className="rounded-full" asChild>
        <a href="https://www.linkedin.com/in/agnysorellana" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </Button>
      </div>
    </nav>
  )
}
