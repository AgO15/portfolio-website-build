"use client"

import { useState } from "react"

interface Launch {
  id: string
  name: string
  status: string
  summary: string
  shipped: string[]
}

const launches: Launch[] = [
  {
    id: "ai-assistant",
    name: "AI Assistant",
    status: "Shipped · Sep 2026",
    summary: "The first AI product on the platform, launched with a webinar.",
    shipped: [
      "Competitive analysis",
      "Message architecture",
      "20 pieces across email, in-app and LinkedIn",
      "A webinar in two languages",
    ],
  },
  {
    id: "forecast",
    name: "Forecast relaunch",
    status: "Shipped · Oct 2026",
    summary: "An existing product, repositioned for customers who already knew it.",
    shipped: [
      "Material for account managers",
      "Email sequences by segment",
      "In-app messaging",
      "LinkedIn in English, Spanish and Portuguese",
    ],
  },
  {
    id: "mcp",
    name: "MCP Connector",
    status: "Shipped · Oct 2026",
    summary: "A technical product that needed plain language and a clear next step.",
    shipped: [
      "Messages and objection handling",
      "A 13-piece campaign over four weeks",
      "Two customer segments with executive-signed sequences",
      "One marketing KPI: meetings booked",
    ],
  },
  {
    id: "content-pages",
    name: "AI Assistant on content pages",
    status: "In progress",
    summary: "A smaller release, scoped down on purpose.",
    shipped: ["One email", "One in-app message", "English, Spanish and Portuguese"],
  },
]

export function LaunchExplorer() {
  const [activeId, setActiveId] = useState(launches[0].id)
  const active = launches.find((launch) => launch.id === activeId) ?? launches[0]

  return (
    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-6 md:p-10">
      <div role="tablist" aria-label="Launches" className="flex flex-wrap gap-2 mb-8">
        {launches.map((launch) => {
          const selected = launch.id === activeId
          return (
            <button
              key={launch.id}
              type="button"
              role="tab"
              id={`tab-${launch.id}`}
              aria-selected={selected}
              aria-controls="launch-panel"
              onClick={() => setActiveId(launch.id)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                selected
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {launch.name}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" id="launch-panel" aria-labelledby={`tab-${active.id}`}>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{active.status}</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">{active.name}</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl">{active.summary}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {active.shipped.map((item) => (
            <li key={item} className="rounded-xl border border-border px-4 py-3 text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
