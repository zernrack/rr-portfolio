export type BlogPost = {
  title: string
  date: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
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