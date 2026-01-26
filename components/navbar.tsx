"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-border shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <img src="/profile_pic.jpeg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
        <span className="font-semibold text-foreground">Agnys</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors outline-none">
            Projects
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/#tech" className="cursor-pointer">
                Tech
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/#documentaries" className="cursor-pointer">
                Documentaries
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/#about" className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors">
          About
        </Link>
      </div>

      <Button size="sm" className="rounded-full" asChild>
        <a href="https://www.linkedin.com/in/agnysorellana" target="_blank" rel="noopener noreferrer">Contact</a>
      </Button>
    </nav>
  )
}
