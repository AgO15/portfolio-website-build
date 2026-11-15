import { TabExplorer, type ExplorerItem } from "@/components/tab-explorer"

// Result figures per launch are not published yet. When they are, add them to `points`.

const launches: ExplorerItem[] = [
  {
    id: "ai-assistant",
    name: "AI Assistant",
    status: "Shipped · Sep 2026",
    summary: "The first AI product on the platform, launched with a webinar.",
    points: [
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
    points: [
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
    points: [
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
    points: ["One email", "One in-app message", "English, Spanish and Portuguese"],
  },
]

export function LaunchExplorer() {
  return <TabExplorer items={launches} label="Launches" />
}
