import { ArrowLeft, Mail, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

// Source of truth: CV_EN.md (v2, 09-11-2026). Update the CV first, then this page.

export const metadata: Metadata = {
    title: "Resume — Agnys Orellana",
    description:
        "B2B content marketer with 6+ years writing and running content for technical audiences in English and Spanish, now building AI content systems.",
    alternates: { canonical: "/resume" },
    openGraph: {
        title: "Resume — Agnys Orellana",
        description:
            "B2B content marketer with 6+ years writing and running content for technical audiences in English and Spanish, now building AI content systems.",
        url: "/resume",
        siteName: "Agnys Orellana",
        locale: "en_US",
        type: "profile",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agnys Orellana — B2B content systems that run on AI and human judgment" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Resume — Agnys Orellana",
        images: ["/og-image.png"],
    },
}

const stats = [
    {
        value: "6+",
        label: "Years of Experience",
        text: "Writing and running B2B content for technical audiences in English and Spanish: IT services, SaaS, FinTech and market intelligence.",
    },
    {
        value: "289%",
        label: "New-Visitor Growth, Year over Year",
        text: "Rebuilt the content strategy of a health SaaS after a manual SEO audit, then scaled production with AI and programmatic tools: 70,000+ new visitors.",
    },
    {
        value: "500+",
        label: "Event Leads Generated",
        text: "Led content for a five-day online event with speakers from VTEX and Shopify.",
    },
]

const experience = [
    {
        title: "AI Marketing Communications Specialist",
        company: "BNamericas • Remote",
        dates: "Aug 2026 – Present",
        context:
            "B2B market intelligence on infrastructure, energy and mining projects across Latin America. Marketing team of two.",
        bullets: [
            "Built the team's AI content system: three Claude skills (trilingual brand voice, production method, LinkedIn topic selection) that anyone on the team runs in claude.ai without code, backed by a facts ledger that blocks unverified claims.",
            "Added a native-language gate after auditing Spanish output that read like translation: an \"adapt, don't translate\" mode, a native-Spanish style guide, a linter and a review step that fails copy scoring low on naturalness.",
            "Built producer and reviewer AI agents and a /deliver workflow: the producer drafts from the brief, the reviewer checks facts, language and rubric independently, and the loop runs up to three rounds.",
            "Ran product launches for the AI Assistant, the Forecast relaunch and the MCP Connector in English, Spanish and Portuguese: message architecture, objection handling, sales enablement for account managers, segmented email sequences, in-app messaging and LinkedIn.",
            "Wrote executive-signed campaigns for a regional transport forum and for annual survey results, with separate versions for customers and prospects.",
            "Designed the go-to-market for the MCP Connector with the COO: two customer segments, executive-signed email sequences and one marketing KPI (meetings booked).",
            "Audited LinkedIn and Instagram and wrote the social strategy: seven content series with written selection criteria, C-level reporting and lead attribution in the CRM.",
            "Turned a 40-item marketing roadmap into a capacity diagnosis against pipeline, and set up a single intake for requests from Sales, Renewals and Product.",
            "Built an interactive campaign simulator that takes a brief through segments to every piece at real size, checked against format limits.",
            "Own marketing technology: Salesforce, Marketing Cloud, Intercom, webinar platform and Outreach.",
        ],
    },
    {
        title: "Content Marketing Strategist / AI Content",
        company: "Freelance • Remote",
        dates: "Oct 2019 – Aug 2026",
        bullets: [
            "Conteo (B2B SaaS / FinTech): designed an SEO content strategy around Spain's VeriFactu e-invoicing rules and wrote 25+ technical articles in MDX with AI workflows, turning tax and legal detail into plain guidance for freelancers and SMEs.",
            "Health SaaS (growth): rebuilt the content strategy after a manual SEO audit, then scaled production with AI and programmatic tools; new visitors grew 289% year over year (70,000+ new visitors).",
            "Health SaaS (email and CRM): built and ran email programs for a database of 200,000+ contacts in GoHighLevel: automated onboarding and activation flows, newsletters and lead-capture sequences.",
            "Palm ERA (marketing agency): delivered multilingual B2B content (ES/EN/PT-BR) for enterprise clients in FinTech, AI staff augmentation and telecom: social calendars, ad creative, landing pages and email campaigns.",
            "Palm ERA (telecom client, Trinidad and Tobago): built a full digital campaign with captioned LinkedIn videos, ad creative, a landing page and cold and retargeting email sequences.",
            "Conteo (technical marketing): implemented Google Tag Manager and Consent Mode v2 for GDPR compliance, and worked in Next.js and React to improve landing-page structure and conversion.",
        ],
    },
    {
        title: "Content Creator",
        company: "GB Advisors • Remote (International Contractor)",
        dates: "Apr 2021 – Jan 2024",
        bullets: [
            "Wrote bilingual content on IT, ITSM, cloud and digital transformation: blogs, email campaigns, ads, e-books, newsletters, landing pages, webinars and video scripts.",
            "Planned and ran the quarterly content strategy against commercial goals.",
            "Led two content writers in Monday.com: schedules, assignments and quality review.",
        ],
    },
    {
        title: "Content Marketing Specialist",
        company: "Company Combo / Globalfy • Remote (International Contractor)",
        dates: "Aug 2021 – Mar 2022",
        bullets: [
            "Wrote bilingual B2B content for founders setting up US companies: blogs, newsletters, web, ads, email and e-books.",
            "Led content for a five-day online event with speakers from VTEX and Shopify that generated 500+ leads.",
        ],
    },
]

const skills = [
    {
        group: "AI and Content Systems",
        items: ["Claude (skills, projects, subagents, MCP connectors, Claude Code)", "OpenAI SDK", "Prompt libraries", "Review gates", "Facts ledgers", "Agent review loops"],
    },
    {
        group: "Marketing Technology",
        items: ["Salesforce", "Marketing Cloud", "HubSpot", "Intercom", "Outreach", "Zoho CRM", "Mailchimp", "GoHighLevel"],
    },
    {
        group: "Analytics and SEO",
        items: ["GA4", "Google Search Console", "Google Tag Manager", "Semrush", "SimilarWeb", "Search Atlas", "SEO/AEO"],
    },
    {
        group: "Web",
        items: ["Next.js (content integration)", "MDX/Markdown", "WordPress", "Figma"],
    },
    {
        group: "Methods",
        items: ["Jobs to Be Done", "Segmentation", "Message architecture", "Sales enablement"],
    },
]

const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Portuguese", level: "B2" },
]

export default function ResumePage() {
    return (
        <main className="min-h-screen px-4 md:px-8 py-8 max-w-6xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to home
            </Link>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Agnys Orellana</h1>
                <p className="text-2xl text-muted-foreground mb-6">
                    B2B Content & Marketing Operations | AI Content Systems
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Caracas, Venezuela (remote)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:agnysorellana@gmail.com" className="hover:text-foreground transition-colors">
                            agnysorellana@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        <a
                            href="https://www.linkedin.com/in/agnysorellana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-4xl">
                    B2B content marketer with 6+ years writing and running content for technical audiences in English
                    and Spanish, now building the AI systems that let a small team ship in three languages. At
                    BNamericas I own product launches, commercial campaigns and marketing technology, and I built the
                    Claude-based content system the team uses for every piece: shared brand voice, a production method
                    with review gates, a facts ledger that keeps unverified numbers out of print, and a
                    producer-and-reviewer agent loop that drafts, critiques and iterates before anything reaches a
                    person.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8 md:p-12 mb-12">
                <div className="grid gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col md:flex-row items-start justify-between gap-4 ${
                                i < stats.length - 1 ? "border-b border-border pb-8" : ""
                            }`}
                        >
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground">{stat.text}</p>
                            </div>
                            <div className="md:text-right md:ml-8">
                                <p className="text-5xl md:text-6xl font-bold text-foreground">{stat.value}</p>
                                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Professional Experience */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Professional Experience</h2>
                <div className="space-y-6">
                    {experience.map((job) => (
                        <div key={job.company} className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                                    <p className="text-muted-foreground">{job.company}</p>
                                </div>
                                <Badge className="shrink-0">{job.dates}</Badge>
                            </div>
                            {job.context && <p className="text-sm text-muted-foreground mb-4">{job.context}</p>}
                            <ul className="space-y-2 text-muted-foreground">
                                {job.bullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-foreground">PCS Kit</h3>
                    <p className="text-muted-foreground mt-2">
                        A B2B content method packaged for Claude: brand onboarding, a voice skill built from the
                        user's own best work, a facts ledger and a production loop with checkpoints.
                    </p>
                </div>
            </section>

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Skills</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8 space-y-6">
                    {skills.map((skill) => (
                        <div key={skill.group}>
                            <h3 className="text-lg font-semibold text-foreground mb-3">{skill.group}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <Badge key={item} variant="secondary" className="max-w-full whitespace-normal text-left">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Languages */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Languages</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <div className="space-y-2 max-w-md">
                        {languages.map((language) => (
                            <div key={language.name} className="flex items-center justify-between">
                                <span className="text-muted-foreground">{language.name}</span>
                                <Badge>{language.level}</Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-foreground">Modern Languages</h3>
                    <p className="text-muted-foreground mt-1">Instituto Universitario Tecnológico Américo Vespucio</p>
                    <p className="text-sm text-muted-foreground mt-2">Spanish, English, French</p>
                </div>
            </section>

            {/* Back to home CTA */}
            <div className="text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to home
                </Link>
            </div>
        </main>
    )
}
