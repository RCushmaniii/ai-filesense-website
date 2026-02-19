<div align="center">

# AI FileSense Website

**Marketing website for AI FileSense — the Windows desktop app that organizes your files locally using Claude AI.**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://ai-filesense-website.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-Proprietary-red?style=for-the-badge)](LICENSE)

[**Live Demo**](https://ai-filesense-website.vercel.app/) · [**Features**](https://ai-filesense-website.vercel.app/features) · [**Support**](https://ai-filesense-website.vercel.app/support)

</div>

---

## Overview

This repository contains the marketing website for AI FileSense, a Windows desktop application that uses Claude AI to intelligently organize files into a 12-folder system. The website provides bilingual product information (English and Spanish), documentation, FAQ, and support resources.

**Built for:** Windows users who want to organize their Desktop, Documents, and Downloads without uploading files to the cloud.

![AI FileSense Application Interface](./public/images/home/screenshot.jpg)

---

## Live Demo

**URL:** [https://ai-filesense-website.vercel.app/](https://ai-filesense-website.vercel.app/)

**Test scenarios:**

1. **Language switching** — Toggle between English and Spanish using the language switcher in the navigation bar
2. **Contact form** — Navigate to Support > Contact and submit a test message (validates with Zod, sends via Resend)
3. **Dark mode** — Toggle dark mode in the navbar to test theme persistence across page navigations

---

## Features

| Feature               | Benefit                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **Bilingual Support** | Full English and Spanish (Mexico) localization via locale-based routing |
| **Server Components** | Fast initial page loads with Next.js 14 App Router architecture         |
| **Contact System**    | Form validation with Zod schemas, email delivery via Resend             |
| **SEO Optimized**     | Dynamic metadata per page, Open Graph cards, auto-generated sitemap     |
| **Accessible**        | Semantic HTML, keyboard navigation, WCAG AA color contrast              |
| **Dark Mode**         | System preference detection with localStorage persistence               |

---

## Tech Stack

| Category   | Technology                                                 |
| ---------- | ---------------------------------------------------------- |
| Framework  | Next.js 14 (App Router, Server Components, Server Actions) |
| Language   | TypeScript 5.5 (strict mode)                               |
| Styling    | Tailwind CSS with CSS variables                            |
| i18n       | next-intl (EN + ES-MX)                                     |
| Forms      | React Hook Form + Zod validation                           |
| Email      | Resend                                                     |
| Animations | Framer Motion                                              |

---

## Quick Start

### Prerequisites

- **Node.js** 20.x or later — verify with `node -v`
- **npm** 8.x or later — verify with `npm -v`

### 1. Clone and Install

```powershell
git clone https://github.com/RCushmaniii/ai-filesense-website
cd ai-filesense-website

npm install
```

**Expected output:** `added 247 packages in 30s`

### 2. Configure Environment

```powershell
copy .env.example .env.local
notepad .env.local
```

Add your values:

```
SITE_URL=http://localhost:3000
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=your-email@example.com
CONTACT_FROM="AI FileSense <noreply@yourdomain.com>"
```

### 3. Start Development Server

```powershell
npm run dev
```

**Expected output:** `▲ Next.js 14.2.x` followed by `Local: http://localhost:3000`

Open [http://localhost:3000](http://localhost:3000) — you should see the home page with the hero section and app screenshot.

---

## Project Structure

```
ai-filesense-website/
├── app/
│   ├── [locale]/              # Locale-based routing (en, es)
│   │   ├── layout.tsx         # Root layout with navbar/footer
│   │   ├── page.tsx           # Home page
│   │   ├── features/          # Features and differentiators
│   │   ├── download/          # Download page with system requirements
│   │   ├── pricing/           # Pricing tiers and API cost info
│   │   ├── support/           # Support hub
│   │   │   ├── faq/           # 10+ FAQs
│   │   │   ├── getting-started/  # 5-step user journey
│   │   │   └── contact/       # Contact form
│   │   ├── blog/              # Blog with MDX support
│   │   ├── privacy/           # Privacy policy
│   │   └── terms/             # Terms of service
│   ├── actions/               # Server actions (contact.ts)
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # Robots.txt configuration
├── components/
│   ├── ui/                    # Atomic components (badge)
│   ├── layout/                # Navbar, footer, container, section
│   ├── home/                  # Home page sections
│   ├── contact/               # Contact form with validation
│   ├── emails/                # React Email templates
│   └── icons/                 # SVG icon components
├── messages/
│   ├── en.json                # English translations
│   └── es.json                # Spanish translations
├── lib/                       # Utilities (schemas, seo, utils)
├── public/images/             # Static assets
└── styles/globals.css         # Tailwind + CSS variables
```

---

## Available Scripts

| Command             | Description                                         |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Start development server on port 3000               |
| `npm run build`     | Create production build                             |
| `npm start`         | Run production server                               |
| `npm run check`     | TypeScript + ESLint validation (run before commits) |
| `npm run typecheck` | TypeScript type checking only                       |
| `npm run lint`      | ESLint validation only                              |
| `npm run format`    | Format code with Prettier                           |

---

## Content Structure

### 12 Smart Folders

The desktop application organizes files into `Documents/Organized Files/` with numbered folders:

| #   | Folder   | Contents                                              |
| --- | -------- | ----------------------------------------------------- |
| 01  | Work     | Resumes, job offers, performance reviews, payslips    |
| 02  | Money    | Bank statements, taxes, investments, receipts         |
| 03  | Home     | Mortgage, rent, utilities, repairs, warranties        |
| 04  | Health   | Medical records, prescriptions, lab results, insurance|
| 05  | Legal    | Contracts, agreements, licenses, IDs, passports       |
| 06  | School   | Courses, certificates, transcripts, research          |
| 07  | Family   | Family correspondence, kids' records, personal letters|
| 08  | Clients  | Client docs, vendor contracts, invoices               |
| 09  | Projects | Project deliverables, milestones, active work         |
| 10  | Travel   | Itineraries, bookings, boarding passes, visas         |
| 11  | Archive  | Old docs (3+ years), completed projects, historical   |
| 12  | Review   | Low-confidence items needing manual sorting           |

---

## Configuration

### Environment Variables

| Variable         | Required | Description                                   |
| ---------------- | -------- | --------------------------------------------- |
| `SITE_URL`       | Yes      | Production URL for SEO and sitemap generation |
| `RESEND_API_KEY` | Yes      | Resend API key for email delivery             |
| `CONTACT_EMAIL`  | Yes      | Recipient for contact form submissions        |
| `CONTACT_FROM`   | Yes      | From address for outgoing emails              |

### Internationalization

Translations are stored in `messages/*.json`. The app supports two locales:

- `en` — English (default)
- `es` — Spanish (Mexico)

**Server Components:**

```typescript
// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'

const t = await getTranslations('home')
return <h1>{t('hero.title')}</h1>
```

**Client Components:**

```typescript
// components/layout/navbar.tsx
'use client'
import { useTranslations } from 'next-intl'

const t = useTranslations('nav')
return <span>{t('features')}</span>
```

### Component Variants

**Button:** `primary` | `secondary` | `outline` | `ghost`

**Container:** `sm` | `md` | `lg` | `xl` (max-width)

**Section:** `sm` | `md` | `lg` | `xl` (vertical padding)

---

## Deployment

### Vercel (Recommended)

```powershell
npm install -g vercel
vercel --prod
```

Set these environment variables in the Vercel dashboard:

- `SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `CONTACT_FROM`

### Manual Build

```powershell
npm run build
npm start
```

Production server runs on port 3000.

---

## Code Conventions

| Convention    | Description                                        |
| ------------- | -------------------------------------------------- |
| Imports       | Use `@/` alias for absolute imports                |
| TypeScript    | Strict mode enabled — no implicit any              |
| Exports       | Prefer named exports                               |
| Styling       | Use `cn()` helper for conditional Tailwind classes |
| Responsive    | Mobile-first design approach                       |
| Accessibility | Semantic HTML with ARIA labels where needed        |

### Pre-Commit Validation

```powershell
npm run check
```

Must pass before committing. Validates TypeScript types and ESLint rules.

---

## Performance

Lighthouse scores from production deployment (January 2026):

| Category         | Score |
| ---------------- | ----- |
| Performance      | 100   |
| Accessibility    | 92    |
| Best Practices   | 100   |
| SEO              | 92    |

### Core Web Vitals

| Metric                     | Value | Target |
| -------------------------- | ----- | ------ |
| First Contentful Paint     | 0.3s  | < 1.8s |
| Largest Contentful Paint   | 0.4s  | < 2.5s |
| Total Blocking Time        | 0ms   | < 200ms |
| Cumulative Layout Shift    | 0     | < 0.1  |
| Speed Index                | 0.4s  | < 3.4s |

---

## Security

- [x] Honeypot field on contact form for spam protection
- [x] Zod schema validation on all form inputs
- [x] Server Actions for form processing (no exposed API routes)
- [x] Environment variables for sensitive configuration

---

## License

Proprietary — All Rights Reserved. See [LICENSE](./LICENSE) for details.

---

## Documentation

| Document | Description |
|----------|-------------|
| [MARKETING.md](./docs/MARKETING.md) | Marketing copy, value proposition, and product positioning |
| [BRAND.md](./docs/BRAND.md) | Brand guidelines and visual identity |
| [DESIGN.md](./docs/DESIGN.md) | Design system and component documentation |
| [CLIENT_START.md](./docs/CLIENT_START.md) | Client onboarding guide |
| [IMAGE_SOURCES.md](./docs/IMAGE_SOURCES.md) | Image asset attribution and sources |

---

## Support

- **Documentation:** [ai-filesense-website.vercel.app/support](https://ai-filesense-website.vercel.app/support)
- **FAQ:** [ai-filesense-website.vercel.app/support/faq](https://ai-filesense-website.vercel.app/support/faq)
- **Contact:** [ai-filesense-website.vercel.app/support/contact](https://ai-filesense-website.vercel.app/support/contact)

---

<div align="center">

**Built by [Robert Cushman](https://cushlabs.ai)**

</div>
