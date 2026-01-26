import { ArrowLeft, Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resume — Agnys Orellana",
    description: "Content Specialist with 5+ years of experience in content strategy, bilingual copywriting, and marketing analytics.",
}

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
                <p className="text-2xl text-muted-foreground mb-6">Content Specialist</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Caracas, Venezuela</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+584242721452</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:agnysorellana@gmail.com" className="hover:text-foreground transition-colors">
                            agnysorellana@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8 md:p-12 mb-12">
                <div className="grid gap-8">
                    {/* Stat 1 */}
                    <div className="flex flex-col md:flex-row items-start justify-between border-b border-border pb-8 gap-4">
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">
                                Led bilingual content strategy and delivery for B2B audiences across multiple industries, including SaaS, health insurance, education, and IT services.
                            </p>
                        </div>
                        <div className="text-right md:ml-8">
                            <p className="text-5xl md:text-6xl font-bold text-foreground">5+</p>
                            <p className="text-sm text-muted-foreground mt-1">Years of Experience</p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col md:flex-row items-start justify-between border-b border-border pb-8 gap-4">
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">
                                Authored and delivered high-quality content pieces including blog posts, email campaigns, e-books, landing pages, and video scripts optimized for SEO.
                            </p>
                        </div>
                        <div className="text-right md:ml-8">
                            <p className="text-5xl md:text-6xl font-bold text-foreground">50+</p>
                            <p className="text-sm text-muted-foreground mt-1">Content Pieces Created</p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground">
                                Managed content teams and led digital event campaigns, including one that generated over 500 leads with industry experts from VTEX, Shopify, and more.
                            </p>
                        </div>
                        <div className="text-right md:ml-8">
                            <p className="text-5xl md:text-6xl font-bold text-foreground">500+</p>
                            <p className="text-sm text-muted-foreground mt-1">Event Leads Generated</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Areas of Expertise */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Areas of Expertise</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Core Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Content Strategy</Badge>
                                <Badge variant="secondary">Content Management</Badge>
                                <Badge variant="secondary">Research & Analysis</Badge>
                                <Badge variant="secondary">Marketing Analytics</Badge>
                                <Badge variant="secondary">SEO</Badge>
                                <Badge variant="secondary">Email Marketing</Badge>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Spanish</span>
                                    <Badge>Native</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">English</span>
                                    <Badge>C1</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Portuguese</span>
                                    <Badge>B2</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Professional Experience</h2>
                <div className="space-y-6">
                    {/* Freelancer - Content Specialist */}
                    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Content Specialist</h3>
                                <p className="text-muted-foreground">Freelancer • Remote, Venezuela</p>
                            </div>
                            <Badge>Jan 2023 - Present</Badge>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Led content strategy creation and delivery for web content, social media, blog, email marketing and internal communications for a SaaS company in the health insurance industry in Florida</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Create articles delivered on LinkedIn for a SaaS solution in the educational industry</span>
                            </li>
                        </ul>
                    </div>

                    {/* GB Advisors */}
                    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Content Creator</h3>
                                <p className="text-muted-foreground">GB Advisors • Remote (International Contractor)</p>
                            </div>
                            <Badge>Apr 2021 - Jan 2024</Badge>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Led bilingual (Spanish/English) copywriting initiatives for blogs, email campaigns, ads, e-books, newsletters, landing pages, webinars and video scripts about IT, ITSM, Cloud, digital transformation, and related areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Planned, developed and implemented GB Advisors' quarterly content strategy, aligned with the corporate vision and commercial goals</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Led a team of 2 content creators, managing content delivery schedules, task assignments and deliverables ensuring timely execution and quality compliance</span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Combo/Globalfy */}
                    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Marketing Content Specialist</h3>
                                <p className="text-muted-foreground">Company Combo/Globalfy • Remote (International Contractor)</p>
                            </div>
                            <Badge>Aug 2021 - Mar 2022</Badge>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Contributed in bilingual (Spanish/English) content marketing initiatives (blog, newsletter, website, ads, email marketing, e-books) for international B2B audiences focused on legally establishing businesses in the US</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Led content creation for promoting an online event, reaching +500 leads. This event gathered experts from companies like VTEX, Shopify and others, talking about cross border commerce and related subjects in different events for 5 days</span>
                            </li>
                        </ul>
                    </div>

                    {/* Freelancer - Copywriter */}
                    <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Copywriter</h3>
                                <p className="text-muted-foreground">Freelancer • Remote, Venezuela</p>
                            </div>
                            <Badge>Oct 2019 - Apr 2021</Badge>
                        </div>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>Authored over 50 ghostwritten blog posts in Spanish and English on topics such as cybersecurity, technology, tourism, sports betting and lifestyle, adhering to SEO guidelines to maximize reach</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Additional Skills */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Additional Skills</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Data Analysis & Reporting</Badge>
                        <Badge variant="secondary">Communication</Badge>
                        <Badge variant="secondary">Small Teams Management</Badge>
                        <Badge variant="secondary">Digital Event Management</Badge>
                        <Badge variant="secondary">Google Analytics 4</Badge>
                        <Badge variant="secondary">Google Search Console</Badge>
                        <Badge variant="secondary">GoHighLevel</Badge>
                        <Badge variant="secondary">Zoho CRM</Badge>
                        <Badge variant="secondary">HubSpot</Badge>
                        <Badge variant="secondary">MailChimp</Badge>
                        <Badge variant="secondary">Marketing Automation</Badge>
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">WordPress</Badge>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
                <div className="rounded-[2rem] bg-card border border-border shadow-sm p-8">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground">Modern Languages</h3>
                        <p className="text-muted-foreground mt-1">Instituto Universitario Tecnológico Américo Vespucio</p>
                        <p className="text-sm text-muted-foreground mt-2">Spanish, English, French</p>
                    </div>
                </div>
            </section>

            {/* Back to home CTA */}
            <div className="mt-16 pt-8 border-t border-border">
                <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to home
                </Link>
            </div>
        </main>
    )
}
