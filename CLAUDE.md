# CLAUDE.md - AI FileSense Website

## Project Overview

**Name:** AI FileSense Website
**Type:** Marketing website for AI FileSense desktop application
**Framework:** Next.js 14 (App Router)
**Language:** TypeScript (strict mode)
**Styling:** Tailwind CSS with CSS variables
**i18n:** next-intl (English + Spanish)

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
├── app/
│   ├── [locale]/              # Locale-based routing (en, es)
│   │   ├── layout.tsx         # Root layout with navbar/footer
│   │   ├── page.tsx           # Home page (hero, features, folders)
│   │   ├── features/          # Features page with differentiators
│   │   ├── support/           # Support hub (FAQ, Getting Started, Contact)
│   │   └── ...                # Other pages
│   ├── actions/               # Server actions (contact form)
│   └── sitemap.ts             # Auto-generated sitemap
├── components/
│   ├── ui/                    # Atomic components (button, card, input)
│   ├── layout/                # Layout components (navbar, footer, container)
│   ├── contact/               # Contact form
│   └── emails/                # React Email templates
├── messages/
│   ├── en.json                # English translations
│   └── es.json                # Spanish translations
├── lib/
│   ├── schemas.ts             # Zod validation schemas
│   ├── utils.ts               # cn(), formatDate(), etc.
│   └── ...
├── public/images/             # Static assets
└── styles/globals.css         # Tailwind + CSS variables
```

## Key Technologies

- **Next.js 14** - App Router, Server Components, Server Actions
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first styling with `cn()` helper
- **next-intl** - Internationalization (EN + ES-MX)
- **React Hook Form + Zod** - Form validation
- **Resend** - Transactional emails

## Architecture Patterns

### Server vs Client Components
- Pages are Server Components by default
- Client Components marked with `'use client'` (navbar, forms, language switcher)

### Internationalization
- Translations in `/messages/*.json`
- Locale routing via `[locale]` dynamic segment
- `getTranslations()` for server components
- `useTranslations()` for client components

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
| `app/[locale]/layout.tsx` | Root layout, metadata, providers |
| `app/[locale]/page.tsx` | Home page (hero, features, folders) |
| `app/[locale]/features/page.tsx` | Features, differentiators, roadmap |
| `app/[locale]/support/faq/page.tsx` | 10 FAQs (flat list) |
| `app/[locale]/support/getting-started/page.tsx` | 5-step user journey |
| `components/contact/contact-form.tsx` | Contact form with validation |
| `app/actions/contact.ts` | Server action for email submission |
| `messages/en.json` | English translations |
| `messages/es.json` | Spanish translations |

## Component Variants

**Button:** `primary`, `secondary`, `outline`, `ghost`
**Container:** `sm`, `md`, `lg`, `xl` (max-width)
**Section:** `sm`, `md`, `lg`, `xl` (vertical padding)

## Environment Variables

```env
SITE_URL=https://aifilesense.com
RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL=your-email@example.com
CONTACT_FROM="AI FileSense <noreply@aifilesense.com>"
```

## Key Content

### 12 Smart Folders (numbered 01-12)
Work, Money, Home, Health, Legal, School, Family, Clients, Projects, Travel, Archive, Review

### 6 Phase 1 Core Features
AI-Powered Classification, 12-Folder Smart System, 3-Level Organization, Safe & Reversible, Privacy First, Fully Bilingual

### 10 FAQs (flat structure)
Data safety, undo changes, Review folder, file exclusion, bilingual support, file types, organized file location, re-running, incorrect categorization, internet requirement

### 5-Step User Journey
Choose Folders, Scan, Preview, Organize, Done

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
- Auto-generated sitemap (`app/sitemap.ts`)
- Auto-generated robots.txt (`app/robots.ts`)

## Pre-Commit Checklist

```bash
npm run check        # Must pass before committing
```

Validates TypeScript types and ESLint rules.
