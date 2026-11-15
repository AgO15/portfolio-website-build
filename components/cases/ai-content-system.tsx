// Source of truth for every claim on this page: CV_EN.md (v2). No internal company figures. The company name is a pseudonym.

const built = [
  {
    title: "Three Claude skills",
    text: "Trilingual brand voice, a production method and LinkedIn topic selection. Anyone on the team runs them in claude.ai without code.",
  },
  {
    title: "A facts ledger",
    text: "One list of verified claims with their approved phrasing. Anything outside it is blocked before it reaches a draft.",
  },
  {
    title: "A native-language gate",
    text: "An \"adapt, don't translate\" mode, a native-Spanish style guide, a linter and a review step that fails copy scoring low on naturalness.",
  },
  {
    title: "Producer and reviewer agents",
    text: "The producer drafts from the brief. The reviewer checks facts, language and rubric independently. The loop runs up to three rounds.",
  },
]

const steps = [
  { who: "Me", title: "Brief and angle", text: "I choose the topic, the audience and the angle." },
  { who: "System", title: "Draft", text: "The producer agent writes the piece in English, Spanish and Portuguese using the skills." },
  { who: "System", title: "Review", text: "The reviewer agent checks facts against the ledger, language against the gate and the piece against the rubric, for up to three rounds." },
  { who: "Me", title: "Edit and QA", text: "I edit, verify and decide what ships." },
  { who: "Team", title: "Approval", text: "The piece lands in a live dashboard at real size, with the review trail and open items." },
]

const results = [
  { value: "~70%", label: "less production time per piece (estimate)" },
  { value: "3", label: "languages from one brief" },
  { value: "3", label: "review rounds at most before a person reads it" },
]

export function AiContentSystemCase() {
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">The problem</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Cartavia (the company is real; the name is changed) sells B2B market intelligence on infrastructure, energy and mining projects across Latin
            America. Marketing is a team of two that serves Sales, Renewals and Product, and everything ships in
            English, Spanish and Portuguese.
          </p>
          <p>
            The workload did not fit the team. A roadmap of 40 items and product launches back to back, each one
            needing message architecture, sales material, segmented emails, in-app messages and LinkedIn posts,
            multiplied by three languages. Written by hand, that volume forces a choice between speed and quality.
          </p>
          <p>
            The goal was a system where people spend their time on what needs judgment (the angle, the edit, the
            final check) and everything else is produced to the same standard every time: one brand voice, only
            verified figures, and each language written to read as native.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">What I built</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {built.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">How a piece moves</h2>
        <ol className="rounded-2xl bg-card border border-border p-6 md:p-8 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">
                  {step.title}{" "}
                  <span className="ml-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {step.who}
                  </span>
                </p>
                <p className="text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Result</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {results.map((result) => (
            <div key={result.label} className="rounded-2xl bg-card border border-border p-6">
              <p className="text-5xl font-bold text-foreground">{result.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{result.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-3xl">
          How the 70% is estimated: my time now goes to ideation, editing, verification and QA. Drafting and
          adapting into three languages, which used to take most of the time per piece, is done by the system. It
          is my own estimate against writing by hand, not a measured figure yet.
        </p>
      </section>
    </>
  )
}
