import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const navLinks = ["about", "skills", "experience", "projects", "blog", "contact"]

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

const blogPosts = [
  {
    title: "Designing Components for Longevity",
    date: "Jan 2026",
    excerpt: "Practical decisions that keep UI systems maintainable as teams and products scale.",
  },
  {
    title: "Fast, Accessible Interfaces in Next.js",
    date: "Nov 2025",
    excerpt: "A concise checklist for performance and accessibility wins without overengineering.",
  },
  {
    title: "Shipping Better PRs",
    date: "Sep 2025",
    excerpt: "How clear structure and incremental scope improve reviews and delivery speed.",
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="bg-dot-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-serif text-lg font-semibold">Renz Rackhold</a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link}`} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="home" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-4 py-16 sm:px-6 lg:px-8">
        <section className="section-reveal relative space-y-6 pt-8">
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

        <section id="about" className="section-reveal space-y-6">
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

        <section id="skills" className="section-reveal space-y-6">
          <h2 className="font-serif text-3xl">Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
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

        <section id="experience" className="section-reveal space-y-6">
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

        <section id="projects" className="section-reveal space-y-6">
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

        <section id="blog" className="section-reveal space-y-6">
          <h2 className="font-serif text-3xl">Blog</h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Card key={post.title} className="hover-lift hover-glow">
                <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <a href="#" className="transition-transform duration-200 hover:-translate-y-0.5 hover:text-foreground">Read more</a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="section-reveal space-y-6">
          <h2 className="font-serif text-3xl">Contact</h2>
          <Card className="hover-glow">
            <CardContent className="space-y-4 pt-6">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="name" placeholder="Name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                </div>
                <Textarea name="message" placeholder="Message" required />
                <Button type="button" className="w-fit">Send Message</Button>
              </form>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-muted-foreground">
                <a href="#" aria-label="GitHub" className="inline-flex items-center gap-2 hover:text-foreground"><Github size={16} /> GitHub</a>
                <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin size={16} /> LinkedIn</a>
                <a href="#" aria-label="Twitter" className="inline-flex items-center gap-2 hover:text-foreground"><Twitter size={16} /> Twitter/X</a>
                <a href="mailto:hello@example.com" aria-label="Email" className="inline-flex items-center gap-2 hover:text-foreground"><Mail size={16} /> Email</a>
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
