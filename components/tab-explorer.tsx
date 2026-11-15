"use client"

import { useId, useState } from "react"

export interface ExplorerItem {
  id: string
  name: string
  status: string
  summary: string
  points: string[]
}

export function TabExplorer({ items, label }: { items: ExplorerItem[]; label: string }) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(items[0].id)
  const active = items.find((item) => item.id === activeId) ?? items[0]
  const panelId = `${baseId}-panel`

  return (
    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-6 md:p-10">
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-2 mb-8">
        {items.map((item) => {
          const selected = item.id === activeId
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              onClick={() => setActiveId(item.id)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                selected
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {item.name}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" id={panelId} aria-labelledby={`${baseId}-tab-${active.id}`}>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{active.status}</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">{active.name}</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl">{active.summary}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {active.points.map((point) => (
            <li key={point} className="rounded-xl border border-border px-4 py-3 text-foreground">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
