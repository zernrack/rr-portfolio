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
import { blogPosts } from "@/lib/blog-posts"

const navLinks = [
  { id: "about", label: "About", mobileLabel: "About", href: "#about" },
  { id: "skills", label: "Skills", mobileLabel: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", mobileLabel: "Work", href: "#experience" },
  { id: "projects", label: "Projects", mobileLabel: "Projects", href: "#projects" },
  { id: "blog", label: "Blog", mobileLabel: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", mobileLabel: "Contact", href: "#contact" },
]

const skillGroups = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  Tools: ["Git", "Docker", "Vercel", "Figma"],
}

const experiences = [
  {
    company: "Northbound Labs",
    role: "Senior Software Engineer",
    date: "2023 — Present",
    description:
      "Leading frontend architecture for customer-facing products, improving performance and shipping design-system driven features.",
  },
  {
    company: "Meridian Tech",
    role: "Software Engineer",
    date: "2021 — 2023",
    description:
      "Built full-stack internal tools and automated manual workflows, reducing reporting time and increasing product team velocity.",
  },
  {
    company: "Pixel Foundry",
    role: "Frontend Engineer",
    date: "2019 — 2021",
    description:
      "Collaborated with design to build accessible interfaces and reusable components for multi-client web applications.",
  },
  {
    company: "Studio Start",
    role: "Junior Developer",
    date: "2018 — 2019",
    description:
      "Supported rapid MVP delivery and maintained production websites for small business clients.",
  },
]

const projects = [
  {
    title: "Atlas Dashboard",
    description: "Analytics dashboard with role-based access, realtime charts, and exportable insights.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Pulse API",
    description: "Scalable backend service for event ingestion and processing with robust observability.",
    tags: ["Node.js", "Express", "Redis"],
  },
  {
    title: "Orbit UI Kit",
    description: "Component library for internal products focused on accessibility and consistency.",
    tags: ["React", "Storybook", "Tailwind CSS"],
  },
  {
    title: "Shipyard",
    description: "Lightweight project planning tool with collaborative boards and release tracking.",
    tags: ["Next.js", "Prisma", "Vercel"],
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <a
        href="#home"
        className="fixed left-4 top-4 z-40 rounded-full border bg-background/80 px-3 py-1 text-sm font-medium backdrop-blur"
      >
        Renz Rackhold
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
        <div className="bg-dot-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <main id="home" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-4 py-20 pb-28 sm:px-6 lg:px-8 lg:pb-20">
        <section className="section-reveal section-reveal-1 relative space-y-6 pt-10">
          <div className="pointer-events-none absolute -top-8 right-0 h-36 w-36 rounded-full bg-chart-2/10 blur-3xl animate-soft-pulse" />
          <Badge className="bg-chart-2/20 text-chart-2 hover:bg-chart-2/30 animate-float">Software Engineer</Badge>
          <h1 className="max-w-3xl font-serif text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Building thoughtful digital products with a <span className="text-chart-2">minimal, modern</span> approach.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            I design and ship reliable web experiences, combining clean interfaces, solid architecture, and efficient collaboration.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className={buttonVariants()}>
              View Projects
            </a>
            <a href="#contact" className={buttonVariants({ variant: "outline" })}>
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="section-reveal section-reveal-2 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">About</h2>
          <Card className="hover-lift hover-glow">
            <CardContent className="grid gap-6 pt-6 sm:grid-cols-[96px_1fr] sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary font-mono text-xs text-muted-foreground animate-soft-pulse">
                Avatar
              </div>
              <p className="text-muted-foreground">
                I’m a software engineer focused on building performant, maintainable applications. I enjoy translating ideas into polished user experiences and working across design and engineering boundaries. Outside of code, I write about product craftsmanship and engineering process.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="section-reveal section-reveal-3 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skillGroups).map(([group, items]) => (
              <Card key={group} className="hover-lift hover-glow">
                <CardHeader>
                  <CardTitle>{group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} variant="secondary" className="font-mono text-[11px]">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="section-reveal section-reveal-4 scroll-mt-20 space-y-6">
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

        <section id="projects" className="section-reveal section-reveal-5 scroll-mt-20 space-y-6">
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
                    <a href="#" className="inline-flex items-center gap-1 transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground">GitHub <ArrowUpRight size={14} /></a>
                    <a href="#" className="inline-flex items-center gap-1 transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground">Live <ArrowUpRight size={14} /></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="section-reveal section-reveal-6 space-y-6">
          <h2 className="font-serif text-3xl">Writing</h2>
          <Card className="hover-glow">
            <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Recent posts on UI architecture, performance, and engineering workflow.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{blogPosts.length} articles available</p>
              </div>
              <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
                Open Blog
              </Link>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="section-reveal section-reveal-6 scroll-mt-20 space-y-6">
          <h2 className="font-serif text-3xl">Contact</h2>
          <Card className="hover-glow">
            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Open to product engineering roles, consulting, and collaborative builds.
                  </p>
                  <a href="mailto:hello@example.com" className="mt-2 inline-block font-mono text-sm text-chart-2 hover:underline">
                    hello@example.com
                  </a>
                </div>
                <a href="mailto:hello@example.com" className={buttonVariants()}>
                  Start a Conversation
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="#" aria-label="LinkedIn" className="group rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-secondary">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground"><Linkedin size={16} /> LinkedIn</span>
                </a>
                <a href="mailto:hello@example.com" aria-label="Email" className="group rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-secondary">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground"><Mail size={16} /> Email</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Renz Rackhold. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
