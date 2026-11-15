import { TabExplorer, type ExplorerItem } from "@/components/tab-explorer"

// Source of truth: the PCS Kit README, QUICKSTART and pcs_master.md. Acme Billing is the kit's fictional demo brand.

const inside = [
  {
    title: "Guided brand onboarding",
    text: "Claude interviews you in stages and writes your brand files as it goes. You can pause at any stage and pick up where you left off.",
  },
  {
    title: "A voice skill built from your best work",
    text: "You bring three to five pieces that sound most like you. The kit turns them into a brand-voice skill.",
  },
  {
    title: "A facts ledger",
    text: "Verified claims with their approved phrasing. Anything you cannot confirm is filed as an open question, never guessed.",
  },
  {
    title: "A production loop with checkpoints",
    text: "You choose between three angles before any prose is written, and every piece passes the same checks.",
  },
]

const phases: ExplorerItem[] = [
  {
    id: "onboarding",
    name: "1 · Brand onboarding",
    status: "Phase 1",
    summary: "Everything the system needs to know about the brand, written down once.",
    points: ["Intake", "Audit and research", "Brand voice profile", "Facts ledger", "Ingestion and handoff"],
  },
  {
    id: "calibration",
    name: "2 · System calibration",
    status: "Phase 2",
    summary: "The system is tested against real pieces before it produces anything for publication.",
    points: [
      "Scope and reference pieces",
      "Brand context block",
      "Baseline",
      "Test runs",
      "Calibration",
      "Production playbook",
    ],
  },
  {
    id: "production",
    name: "3 · Production loop",
    status: "Phase 3",
    summary: "The repeatable cycle for every campaign and every piece.",
    points: [
      "Project setup",
      "Research and synthesis",
      "Pipeline for each deliverable",
      "Results management",
      "Recalibration",
    ],
  },
]

export function PcsKitCase() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">The problem</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Most B2B marketers who try AI for content get the same result: generic copy that sounds like nobody, and
            numbers nobody can trace to a source.
          </p>
          <p>
            The fix is not a better prompt. It is a method: teach the system the brand once, write down which facts
            are verified, and run every piece through the same steps. PCS Kit packages that method so one person
            can set it up alone.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">What is inside</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {inside.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-2">The method</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">Three phases. Select one to see its steps.</p>
        <TabExplorer items={phases} label="Phases of the method" />
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">How it is built</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The kit runs in Claude Code with nothing to install: the skills and commands load when you open the
            folder. The quickstart is written in English and Spanish, and it takes about two hours from opening the
            kit to the first brief.
          </p>
          <p>
            It ships with Acme Billing, a fictional brand taken through the whole onboarding, so a buyer can see
            the finished result before starting their own.
          </p>
        </div>
      </section>
    </>
  )
}
