# Portfolio

A minimal, modern single-page portfolio built with Next.js App Router, Tailwind CSS v4, and shadcn-style UI components.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 + `tw-animate-css`
- TypeScript
- `gray-matter` for Markdown frontmatter parsing

## Project Structure

```text
app/
	layout.tsx            # Root layout, fonts, hydration guard
	globals.css           # Theme tokens, animations, utility classes
	page.tsx              # Home page mapped from JSON + markdown summary
	blog/
		page.tsx            # Blog listing page mapped from markdown

content/
	home.json             # Editable content for home sections
	blog/
		*.md                # Blog posts with frontmatter

components/
	theme-toggle.tsx      # Client theme toggle
	ui/                   # Reusable shadcn-style UI primitives

lib/
	content.ts            # JSON/Markdown loaders and shared content types
	utils.ts              # `cn` utility
```

## Content Editing

### Home content (JSON)

Edit [content/home.json](content/home.json) to update:

- `profileName` for top identity label
- `hero` badge, heading, description, and CTAs
- `metrics` cards (value, label, detail)
- `about`, `skills`, `experiences`, and `projects`
- `experiences[].techStack` badges shown under each role
- `contact` fields used by the contact section:
	- `description`
	- `email`
	- `ctaLabel`
	- `linkedinUrl`, `linkedinLabel`
	- `emailLabel`
- `footer.copyrightName`

### Current JSON shape (summary)

```json
{
	"profileName": "...",
	"hero": {
		"badge": "...",
		"headingPrefix": "...",
		"headingHighlight": "...",
		"headingSuffix": "...",
		"description": "...",
		"primaryCta": { "label": "...", "href": "..." },
		"secondaryCta": { "label": "...", "href": "..." }
	},
	"metrics": [{ "value": "...", "label": "...", "detail": "..." }],
	"about": { "title": "...", "avatarLabel": "...", "description": "..." },
	"skills": [{ "group": "...", "items": ["..."] }],
	"experiences": [{ "company": "...", "role": "...", "date": "...", "description": "...", "techStack": ["..."] }],
	"projects": [{ "title": "...", "description": "...", "tags": ["..."], "githubUrl": "...", "liveUrl": "..." }],
	"writing": { "title": "...", "description": "...", "buttonLabel": "..." },
	"contact": {
		"title": "...",
		"description": "...",
		"email": "...",
		"ctaLabel": "...",
		"linkedinUrl": "...",
		"linkedinLabel": "...",
		"emailLabel": "..."
	},
	"footer": { "copyrightName": "..." }
}
```

### Blog content (Markdown)

Add or edit files in [content/blog](content/blog) using frontmatter:

```md
---
title: "Post title"
date: "2026-02-13"
excerpt: "Short summary"
---

Post body content...
```

Posts are auto-loaded and sorted by date (newest first).

## TODO

- Add remote blog publishing so posts can be created/updated without local file edits.
- Suggested approach: connect blog content to a headless CMS or database-backed admin route, then replace file-based `content/blog/*.md` loading in `lib/content.ts`.
- Keep markdown as optional fallback for local drafts.

## UI Behavior

- Project cards only show the `GitHub` link when `projects[].githubUrl` is a real URL (not `#` or empty).
- Text animations use easing utilities in [app/globals.css](app/globals.css):
	- `text-ease-in`
	- `text-ease-delay-1`
	- `text-ease-delay-2`
	- `text-ease-delay-3`
- Section reveal delays are controlled by:
	- `section-reveal-1` to `section-reveal-6`

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Other scripts:

```bash
npm run lint
npm run build
npm run start
```

## Notes

- Theme is controlled by toggling the `.dark` class on `document.documentElement`.
- Colors and animation primitives are centralized in [app/globals.css](app/globals.css).
