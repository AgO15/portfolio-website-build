import { LaunchExplorer } from "@/components/launch-explorer"

// Source of truth for every claim on this page: CV_EN.md (v2). No internal company figures. The company name is a pseudonym.

const method = [
  { title: "Message architecture", text: "One core message per launch, broken down by audience before any piece is written." },
  { title: "Objection handling", text: "The questions customers and prospects will ask, with the answer the whole company gives." },
  { title: "Sales enablement", text: "Material account managers present themselves, in the format they already use." },
  { title: "Segmented email sequences", text: "Separate versions for customers and prospects, signed by the person who owns the relationship." },
  { title: "In-app messaging", text: "The same message inside the product, at the moment the feature is in front of the user." },
  { title: "LinkedIn", text: "Posts in English and Spanish that carry the launch to the wider market." },
]

export function ProductLaunchesCase() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">The problem</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Cartavia (the company is real; the name is changed) added AI to its market-intelligence platform in 2026, and each new product needed its own
            launch: an AI Assistant, a relaunched Forecast and an MCP Connector, with a fourth launch in progress.
          </p>
          <p>
            Every launch had to reach customers and prospects, give account managers something to present and land
            in English, Spanish and Portuguese, with a marketing team of two.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">The method</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Every launch follows the same order, so the message is settled before anyone writes a piece.
        </p>
        <ol className="grid md:grid-cols-2 gap-6">
          {method.map((item, index) => (
            <li key={item.title} className="rounded-2xl bg-card border border-border p-6 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-2">The launches</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">Select a launch to see what shipped.</p>
        <LaunchExplorer />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Go-to-market with the COO</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            For the MCP Connector I designed the go-to-market with the COO: two customer segments, email sequences
            signed by an executive and one marketing KPI, meetings booked.
          </p>
          <p>
            Choosing one KPI kept the campaign honest. Every piece had a single job: get the right customer into a
            conversation with their account manager.
          </p>
        </div>
      </section>
    </>
  )
}
