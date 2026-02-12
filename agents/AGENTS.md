# Software Engineer Portfolio — Current Implementation Guide

## Scope
Single-page portfolio + dedicated blog listing page built with Next.js App Router and Tailwind v4.

## Content Source of Truth

### Home Page Content
- File: `content/home.json`
- Drives hero, metrics, about, skills, experiences, projects, writing preview, contact, and footer.

### Blog Content
- Directory: `content/blog/*.md`
- Parsed via frontmatter (`title`, `date`, `excerpt`) and rendered in blog listing.

### Loader
- File: `lib/content.ts`
- `getHomeContent()` reads `home.json`
- `getBlogPosts()` reads markdown files and sorts by date (desc)

## Current Routes
- `app/page.tsx` → home page (content-mapped from JSON + blog count summary)
- `app/blog/page.tsx` → blog list (content-mapped from markdown)

## UI & Interaction Rules

### Navigation
- Desktop: right-side floating section nav with theme toggle
- Tablet: bottom floating nav with theme toggle
- Mobile: theme toggle only

### Theme
- Theme toggle in `components/theme-toggle.tsx`
- Uses `.dark` class on `document.documentElement`

### Contact Section
- No form
- Keep CTA button (`Start a Conversation`) using `mailto:`
- Keep LinkedIn and Email action cards

### Project Links
- Show `GitHub` link only when `projects[].githubUrl` is valid and not `#`
- Always show `Live` link when provided

### Experience
- Each experience includes `techStack` and renders as badges

## Styling & Animation
- Core tokens + utilities: `app/globals.css`
- Fonts: DM Sans, Lora, IBM Plex Mono
- Existing animation classes used in pages:
	- `section-reveal-*`
	- `text-ease-in`
	- `text-ease-delay-*`
	- `animate-soft-pulse`, `animate-float`, `hover-lift`, `hover-glow`

## Guardrails for Future Updates
- Prefer editing `content/home.json` and `content/blog/*.md` over hardcoding text in pages.
- Keep schema changes synchronized between `content/home.json` and `lib/content.ts` types.
- Preserve minimal design and token-based styling (avoid hardcoded colors).

