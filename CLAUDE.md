# CLAUDE.md - AI FileSense Website

## Project Overview

**Name:** AI FileSense Website
**Type:** Marketing website for AI FileSense desktop application
**Framework:** Next.js 14 (App Router)
**Language:** TypeScript (strict mode)
**Styling:** Tailwind CSS with CSS variables

AI FileSense is a Windows desktop application that uses Claude AI to intelligently organize files locally. This website serves as the marketing/documentation hub.

## Quick Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Production build
npm run check      # TypeScript + ESLint validation
npm run format     # Prettier formatting
```

## Project Structure

```
ai-filesense-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navbar/footer
│   ├── page.tsx           # Home page (hero, features, pricing)
│   ├── actions/           # Server actions (contact form)
│   ├── blog/[slug]/       # Dynamic blog posts
│   ├── work/[slug]/       # Dynamic case studies
│   └── support/           # Support hub pages
├── components/
│   ├── ui/                # Atomic components (button, card, input)
│   ├── layout/            # Layout components (navbar, footer, container)
│   ├── content/           # MDX rendering components
│   ├── contact/           # Contact form
│   └── emails/            # React Email templates
├── content/
│   ├── blog/              # MDX blog posts
│   ├── work/              # MDX case studies
│   └── legal/             # Privacy policy, terms
├── lib/
│   ├── mdx.ts             # Content loading utilities
│   ├── schemas.ts         # Zod validation schemas
│   ├── seo.ts             # Structured data helpers
│   └── utils.ts           # cn(), formatDate(), etc.
├── public/images/         # Static assets
├── styles/globals.css     # Tailwind + CSS variables
└── docs/                  # Internal documentation
```

## Key Technologies

- **Next.js 14** - App Router, Server Components, Server Actions
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first styling with `cn()` helper
- **MDX** - Blog posts and case studies via `next-mdx-remote`
- **React Hook Form + Zod** - Form validation
- **Resend** - Transactional emails
- **Framer Motion** - Animations (available but lightly used)

## Architecture Patterns

### Server vs Client Components
- Pages are Server Components by default
- Client Components marked with `'use client'` (navbar, forms)

### Content Management
- MDX files in `/content` directory
- Frontmatter parsed with `gray-matter`
- Draft posts excluded in production (`draft: true`)
- Sorted by date (newest first)

### Styling
- CSS variables for theme colors (`--color-primary`, etc.)
- Dark mode via class strategy + localStorage
- `cn()` utility combines `clsx` + `tailwind-merge`

### Forms
- React Hook Form for state management
- Zod schemas for validation
- Server Actions for submission
- Honeypot field for spam protection

## Important Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, providers |
| `app/page.tsx` | Home page (~19KB, main marketing) |
| `components/layout/navbar.tsx` | Navigation with dark mode toggle |
| `components/contact/contact-form.tsx` | Contact form with validation |
| `app/actions/contact.ts` | Server action for email submission |
| `lib/mdx.ts` | getAllPosts(), getPostBySlug() |
| `lib/utils.ts` | cn(), formatDate(), calculateReadingTime() |
| `tailwind.config.ts` | Theme configuration |

## Component Variants

**Button:** `primary`, `secondary`, `outline`, `ghost`
**Container:** `sm`, `md`, `lg`, `xl` (max-width)
**Section:** `sm`, `md`, `lg`, `xl` (vertical padding)

## Environment Variables

```env
SITE_URL=https://aifilesense.com
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=support@aifilesense.com
CONTACT_FROM="AI FileSense <noreply@aifilesense.com>"
```

## Content Schema

### Blog Posts (`content/blog/*.mdx`)
```yaml
title: string        # Required
description: string  # Required
date: YYYY-MM-DD     # Required
tags: string[]       # Optional
draft: boolean       # Optional (default: false)
coverImage: string   # Optional
```

### Case Studies (`content/work/*.mdx`)
```yaml
title: string        # Required
description: string  # Required
date: YYYY-MM-DD     # Required
client: string       # Optional
role: string         # Optional
tech: string[]       # Optional
coverImage: string   # Optional
draft: boolean       # Optional
```

## Code Conventions

- Use `@/` import alias for absolute imports
- TypeScript strict mode - no implicit any
- Prefer named exports
- Use `cn()` for conditional Tailwind classes
- Mobile-first responsive design
- Semantic HTML for accessibility

## SEO Features

- Dynamic metadata per page (`generateMetadata`)
- Open Graph and Twitter cards
- JSON-LD structured data (Organization, Article)
- Auto-generated sitemap (`app/sitemap.ts`)
- Auto-generated robots.txt (`app/robots.ts`)

## Pre-Commit Checklist

```bash
npm run check        # Must pass before committing
```

Validates TypeScript types and ESLint rules.
