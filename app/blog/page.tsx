import Link from "next/link"

import { ArrowLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getBlogPosts } from "@/lib/content"

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-2">
          <Badge variant="secondary">Blog</Badge>
          <h1 className="font-serif text-4xl tracking-tight">Writing</h1>
          <p className="text-sm text-muted-foreground">Notes on software engineering, product craft, and frontend systems.</p>
        </div>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          <ArrowLeft size={16} /> Home
        </Link>
      </div>

      <section className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover-lift hover-glow">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}