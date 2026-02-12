import { promises as fs } from "node:fs"
import path from "node:path"

import matter from "gray-matter"

export type NavLink = {
  id: string
  label: string
  mobileLabel: string
  href: string
}

export type Cta = {
  label: string
  href: string
}

export type HomeContent = {
  profileName: string
  navLinks: NavLink[]
  hero: {
    badge: string
    headingPrefix: string
    headingHighlight: string
    headingSuffix: string
    description: string
    primaryCta: Cta
    secondaryCta: Cta
  }
  metrics: Array<{
    value: string
    label: string
    detail: string
  }>
  about: {
    title: string
    avatarLabel: string
    description: string
  }
  skills: Array<{
    group: string
    items: string[]
  }>
  experiences: Array<{
    company: string
    role: string
    date: string
    description: string
  }>
  projects: Array<{
    title: string
    description: string
    tags: string[]
    githubUrl: string
    liveUrl: string
  }>
  writing: {
    title: string
    description: string
    buttonLabel: string
  }
  contact: {
    title: string
    description: string
    email: string
    ctaLabel: string
    linkedinUrl: string
    linkedinLabel: string
    emailLabel: string
  }
  footer: {
    copyrightName: string
  }
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const contentRoot = path.join(process.cwd(), "content")

export async function getHomeContent(): Promise<HomeContent> {
  const filePath = path.join(contentRoot, "home.json")
  const jsonContent = await fs.readFile(filePath, "utf8")
  return JSON.parse(jsonContent) as HomeContent
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentRoot, "blog")
  const files = await fs.readdir(blogDir)

  const markdownFiles = files.filter((fileName) => fileName.endsWith(".md"))

  const posts = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const filePath = path.join(blogDir, fileName)
      const fileContent = await fs.readFile(filePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: String(data.title ?? "Untitled"),
        date: String(data.date ?? ""),
        excerpt: String(data.excerpt ?? ""),
        content,
      }
    })
  )

  return posts.sort((firstPost, secondPost) => {
    const firstDate = new Date(firstPost.date).getTime()
    const secondDate = new Date(secondPost.date).getTime()
    return secondDate - firstDate
  })
}
