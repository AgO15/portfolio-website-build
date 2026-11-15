"use client"

import { useState } from "react"
import { Check, Ban, RotateCcw, Play } from "lucide-react"

// Demo data: Acme Billing is a fictional brand from PCS Kit. Nothing here comes from a real company.

type Status = "verified" | "blocked"

interface Claim {
  id: string
  text: string
  status: Status
  ledger: string
  reason: string
}

type Segment = string | Claim

const draft: Segment[] = [
  {
    id: "founded",
    text: "Founded in 2019",
    status: "verified",
    ledger: "Verified",
    reason: "Matches the approved phrasing in the ledger, sourced from the company's About page.",
  },
  " by two former architecture-firm operations managers, Acme Billing is ",
  {
    id: "leading",
    text: "the leading project billing platform",
    status: "blocked",
    ledger: "Claim limit",
    reason: "The brand has no market-share data, so \"leading\", \"#1\" and \"best\" are never allowed.",
  },
  " for ",
  {
    id: "firms",
    text: "more than 1,200 firms",
    status: "blocked",
    ledger: "Conflict",
    reason: "The homepage says \"1,200+ firms\" and the About page says \"over 1,000\". Until someone confirms the count, neither can be used.",
  },
  ". ",
  {
    id: "forty",
    text: "Firms cut billing prep time by 40%",
    status: "blocked",
    ledger: "Pending verification",
    reason: "The only source is a 2024 survey quoted in an internal document. Sample size and method are unknown.",
  },
  ", and it ",
  {
    id: "integrations",
    text: "integrates with QuickBooks, Xero and Contpaqi",
    status: "verified",
    ledger: "Verified",
    reason: "Matches the approved phrasing in the ledger, sourced from the product page.",
  },
  ".",
]

const fixedDraft =
  "Founded in 2019 by two former architecture-firm operations managers, Acme Billing is project billing software for architecture and engineering firms in the US and Latin America. It integrates with QuickBooks, Xero and Contpaqi."

const claims = draft.filter((segment): segment is Claim => typeof segment !== "string")

const statusStyles: Record<Status, { mark: string; chip: string; label: string }> = {
  verified: {
    mark: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
    chip: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
    label: "Verified",
  },
  blocked: {
    mark: "bg-rose-100 text-rose-900 line-through decoration-rose-500/70 dark:bg-rose-900/40 dark:text-rose-100",
    chip: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
    label: "Blocked",
  },
}

export function FactLedgerDemo() {
  const [checked, setChecked] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [showFixed, setShowFixed] = useState(false)

  const active = claims.find((claim) => claim.id === activeId) ?? null
  const blockedCount = claims.filter((claim) => claim.status === "blocked").length

  const run = () => {
    setChecked(true)
    setActiveId(claims.find((claim) => claim.status === "blocked")?.id ?? null)
  }

  const reset = () => {
    setChecked(false)
    setActiveId(null)
    setShowFixed(false)
  }

  return (
    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Draft from the producer agent</p>
          <p className="text-sm text-muted-foreground">
            Sample brand: Acme Billing, a fictional company.
          </p>
        </div>
        {checked ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-border hover:bg-accent transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start over
          </button>
        ) : (
          <button
            type="button"
            onClick={run}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            <Play className="w-4 h-4" />
            Run the fact check
          </button>
        )}
      </div>

      <p className="text-lg md:text-xl leading-relaxed text-foreground">
        {showFixed
          ? fixedDraft
          : draft.map((segment, index) => {
              if (typeof segment === "string") return <span key={index}>{segment}</span>
              if (!checked) return <span key={segment.id}>{segment.text}</span>
              const isActive = segment.id === activeId
              return (
                <button
                  key={segment.id}
                  type="button"
                  onClick={() => setActiveId(segment.id)}
                  aria-pressed={isActive}
                  className={`rounded px-1 text-left transition-shadow ${statusStyles[segment.status].mark} ${
                    isActive ? "ring-2 ring-foreground/60" : "hover:ring-2 hover:ring-foreground/30"
                  }`}
                >
                  {segment.text}
                </button>
              )
            })}
      </p>

      <div aria-live="polite">
        {!checked && (
          <p className="mt-6 text-sm text-muted-foreground">
            This draft has five claims. Run the check to see which ones the ledger lets through.
          </p>
        )}

        {checked && !showFixed && (
          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <div className="rounded-2xl border border-border p-5">
              {active ? (
                <>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[active.status].chip}`}
                    >
                      {active.status === "verified" ? <Check className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                      {statusStyles[active.status].label}
                    </span>
                    <span className="text-xs text-muted-foreground">Ledger: {active.ledger}</span>
                  </div>
                  <p className="font-medium text-foreground mb-1">&ldquo;{active.text}&rdquo;</p>
                  <p className="text-sm text-muted-foreground">{active.reason}</p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">Select a highlighted claim to see why.</p>
              )}
            </div>
            <div className="flex flex-col gap-2 md:w-56">
              <p className="text-sm text-muted-foreground">
                {blockedCount} of {claims.length} claims blocked. Select any highlight to see the ledger entry.
              </p>
              <button
                type="button"
                onClick={() => setShowFixed(true)}
                className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                See the corrected draft
              </button>
            </div>
          </div>
        )}

        {checked && showFixed && (
          <div className="mt-6 rounded-2xl border border-border p-5">
            <p className="text-sm text-muted-foreground">
              The reviewer sends the draft back, and the producer rewrites it using only verified claims. A number
              that cannot be verified is not rounded or softened: the sentence is rewritten without it.
            </p>
            <button
              type="button"
              onClick={() => setShowFixed(false)}
              className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-foreground text-muted-foreground"
            >
              Back to the checked draft
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
