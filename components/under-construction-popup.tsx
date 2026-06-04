"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"

function CraneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="14" y="10" width="5" height="48" rx="1.5" fill="currentColor" opacity="0.85" />
      <rect x="14" y="10" width="38" height="4.5" rx="1.5" fill="currentColor" opacity="0.9" />
      <line x1="19" y1="14.5" x2="40" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <line x1="48" y1="14.5" x2="48" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6" />
      <path d="M44 36 Q44 42 48 42 Q52 42 52 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <rect x="43" y="42" width="10" height="10" rx="2" fill="currentColor" opacity="0.2" />
      <text x="48" y="50" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" opacity="0.9">!</text>
      <rect x="6" y="56" width="22" height="4" rx="2" fill="currentColor" opacity="0.7" />
      <line x1="14" y1="24" x2="19" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line x1="19" y1="24" x2="14" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line x1="14" y1="36" x2="19" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line x1="19" y1="36" x2="14" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

function BarrierIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="10" y="16" width="5" height="38" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="49" y="16" width="5" height="38" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="8" y="16" width="48" height="10" rx="3" fill="currentColor" opacity="0.25" />
      <line x1="14" y1="26" x2="22" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <line x1="24" y1="26" x2="32" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <line x1="34" y1="26" x2="42" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <line x1="44" y1="26" x2="52" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <rect x="6" y="52" width="13" height="3.5" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="45" y="52" width="13" height="3.5" rx="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function ConeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 8 L46 52 L18 52 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="24" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <line x1="27" y1="24" x2="37" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <rect x="12" y="52" width="40" height="5" rx="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="32" cy="8" r="2.5" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

const SHOW_DELAY_MS = 1000
const CLOSE_ANIMATION_MS = 350

export function UnderConstructionPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClose = useCallback(() => {
    setIsClosing(true)
    closeTimeoutRef.current = setTimeout(() => setIsVisible(false), CLOSE_ANIMATION_MS)
  }, [])

  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isVisible || isClosing) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isVisible, isClosing, handleClose])

  // Cleanup close timeout
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site under renovation"
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Card */}
      <div
        className={`relative w-full max-w-md transition-all duration-500 ease-out ${
          isClosing
            ? "translate-y-6 opacity-0 scale-95"
            : "translate-y-0 opacity-100 scale-100 motion-safe:animate-[slideUp_0.5s_ease-out]"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl shadow-amber-500/5 backdrop-blur-xl">

          {/* Ambient glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600/50 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
            aria-label="Close dialog"
          >
            ✕
          </button>

          {/* Content */}
          <div className="px-8 pt-8 pb-7">

            {/* Icon Row */}
            <div className="flex items-end justify-center gap-1 mb-6">
              <ConeIcon className="w-9 h-9 text-amber-400/70 -rotate-6" />
              <BarrierIcon className="w-14 h-14 text-amber-400" />
              <CraneIcon className="w-12 h-12 text-amber-300/80 rotate-2" />
            </div>

            {/* Status badge */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest">
                  In Progress
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white text-center mb-3 leading-snug">
              Under Renovation
            </h3>

            {/* Message */}
            <p className="text-sm text-zinc-400 text-center leading-relaxed max-w-xs mx-auto mb-6">
              Adding recent work. Stay tuned.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href="/projects/tech-writing"
                onClick={handleClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 hover:border-amber-500/50 text-amber-200 text-sm font-medium transition-all duration-200 group"
              >
                See Previous Work
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom bar accent */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}
