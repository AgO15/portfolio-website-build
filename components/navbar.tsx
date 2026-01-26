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



      <Button size="sm" className="rounded-full" asChild>
        <a href="https://www.linkedin.com/in/agnysorellana" target="_blank" rel="noopener noreferrer">Contact</a>
      </Button>
    </nav>
  )
}
