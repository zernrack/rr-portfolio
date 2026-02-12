import { ArrowUpRight, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getBlogPosts, getHomeContent } from "@/lib/content"

export default async function Home() {
  const [homeContent, blogPosts] = await Promise.all([
    getHomeContent(),
    getBlogPosts(),
  ])

  const { about, contact, experiences, footer, hero, metrics, navLinks, profileName, projects, skills, writing } = homeContent

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <a
        href="#home"
        className="fixed left-4 top-4 z-40 rounded-full border bg-background/80 px-3 py-1 text-sm font-medium backdrop-blur"
      >
        {profileName}
      </a>

      <nav
        aria-label="Section navigation"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-xl border bg-background/80 p-2 backdrop-blur lg:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-1 border-t pt-1">
          <ThemeToggle />
        </div>
      </nav>

      <nav
        aria-label="Tablet section navigation"
        className="fixed inset-x-4 bottom-4 z-40 hidden items-center gap-2 rounded-2xl border bg-background/90 p-1.5 shadow-sm backdrop-blur md:flex lg:hidden"
      >
        <div className="h-9 w-9 shrink-0" />
        <div className="mx-auto grid w-full max-w-2xl min-w-0 grid-cols-6 gap-1 px-0.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="truncate rounded-full px-2.5 py-1 text-center text-[11px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.mobileLabel}
            </a>
          ))}
        </div>
        <div className="h-9 w-9 shrink-0">
          <ThemeToggle />
        </div>
      </nav>

      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <ThemeToggle />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="bg-dot-pattern absolute inset-0 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <main id="home" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-4 py-20 pb-28 sm:px-6 lg:px-8 lg:pb-20">
        <section className="section-reveal section-reveal-1 relative space-y-6 pt-10">
          <div className="pointer-events-none absolute -top-8 right-0 h-36 w-36 rounded-full bg-chart-2/10 blur-3xl animate-soft-pulse" />
          <Badge className="bg-chart-2/20 text-chart-2 hover:bg-chart-2/30 animate-float">{hero.badge}</Badge>
          <h1 className="max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {hero.headingPrefix}{" "}
            <span className="text-chart-2">{hero.headingHighlight}</span>{" "}
            {hero.headingSuffix}
          </h1>
          <p className="max-w-2xl text-muted-foreground">{hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className={buttonVariants()}>
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className={buttonVariants({ variant: "outline" })}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </section>

        <section className="section-reveal section-reveal-2 space-y-6">
          <h2 className="font-serif text-3xl">Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="hover-lift hover-glow">
                <CardContent className="space-y-2 pt-6">
                  <p className="font-mono text-3xl font-semibold text-chart-2">{metric.value}</p>
                  <p className="text-sm font-medium">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="section-reveal section-reveal-3 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">{about.title}</h2>
          <Card className="hover-lift hover-glow">
            <CardContent className="grid gap-6 pt-6 sm:grid-cols-[96px_1fr] sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground animate-soft-pulse">
                {about.avatarLabel}
              </div>
              <p className="text-muted-foreground">{about.description}</p>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="section-reveal section-reveal-4 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.group} className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle>{skillGroup.group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge key={item} variant="secondary" className="font-mono text-[11px]">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="section-reveal section-reveal-5 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">Experience</h2>
          <div className="relative space-y-4 border-l pl-6">
            {experiences.map((experience) => (
              <Card key={`${experience.company}-${experience.role}`} className="relative hover-lift hover-glow">
                <span className="absolute -left-[2.15rem] top-7 h-3 w-3 rounded-full bg-chart-2 animate-soft-pulse" />
                <CardHeader>
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>{experience.company} · {experience.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="section-reveal section-reveal-6 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-mono text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <a href={project.githubUrl} className="inline-flex items-center gap-1 transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground">GitHub <ArrowUpRight size={14} /></a>
                    <a href={project.liveUrl} className="inline-flex items-center gap-1 transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground">Live <ArrowUpRight size={14} /></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-reveal section-reveal-6 space-y-6">
          <h2 className="font-serif text-3xl">{writing.title}</h2>
          <Card className="hover-glow">
            <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{writing.description}</p>
                <p className="mt-1 text-sm text-muted-foreground">{blogPosts.length} articles available</p>
              </div>
              <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
                {writing.buttonLabel}
              </Link>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="section-reveal section-reveal-6 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">{contact.title}</h2>
          <Card className="hover-glow">
            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                  <a href={`mailto:${contact.email}`} className="mt-2 inline-block font-mono text-sm text-chart-2 hover:underline">
                    {contact.email}
                  </a>
                </div>
                <a href={`mailto:${contact.email}`} className={buttonVariants()}>
                  {contact.ctaLabel}
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={contact.linkedinUrl} aria-label={contact.linkedinLabel} className="group rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-secondary">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground"><Linkedin size={16} /> {contact.linkedinLabel}</span>
                </a>
                <a href={`mailto:${contact.email}`} aria-label={contact.emailLabel} className="group rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-secondary">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground"><Mail size={16} /> {contact.emailLabel}</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
