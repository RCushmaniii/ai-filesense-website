---
# === CONTROL FLAGS ===
portfolio_enabled: true
portfolio_priority: 2
portfolio_featured: true

# === CARD DISPLAY ===
title: "AI FileSense Website"
tagline: "Production-grade bilingual marketing platform and software distribution system for a Windows desktop app"
slug: "ai-filesense-website"
category: "Marketing"
tech_stack:
  - "Next.js 14"
  - "TypeScript"
  - "Tailwind CSS"
  - "next-intl"
  - "React Hook Form"
  - "Zod"
  - "Resend"
  - "Framer Motion"
  - "Vercel"
thumbnail: "/images/portfolio/ai-filesense-website-thumb.jpg"
status: "Production"

# === DETAIL PAGE ===
problem: "Most indie software developers and small businesses ship a desktop app and then have nothing — no discoverability, no trust signals, no bilingual reach, no support system, and no conversion path. A download link with no context doesn't convert visitors into users."
solution: "A 17-page bilingual marketing and support website that handles everything between 'I built an app' and 'I have a business' — SEO-optimized, conversion-focused, with a working contact/lead system and a complete support hub."
key_features:
  - "17 pages across 7 sections — full marketing funnel from homepage to terms of service"
  - "Bilingual from day one (EN + ES-MX) — locale-based routing with hreflang sitemap alternates"
  - "Working contact/lead capture — Zod + React Hook Form + Server Actions + Resend email delivery + honeypot spam protection"
  - "Complete support hub — Getting Started guide, 11-question FAQ, validated contact form"
  - "Software distribution page — system requirements, quick-start walkthrough, GitHub Releases integration"
  - "Production SEO — dynamic metadata, auto-generated sitemap, Open Graph cards, canonical URLs"

# === MEDIA: PORTFOLIO SLIDES ===
slides:
  - src: "/images/portfolio/ai-filesense-website-01.png"
    alt_en: "Homepage hero with video explainer and download CTA"
    alt_es: "Hero de la pagina principal con video explicativo y boton de descarga"
  - src: "/images/portfolio/ai-filesense-website-02.png"
    alt_en: "How It Works — 3-step process breakdown"
    alt_es: "Como Funciona — desglose del proceso en 3 pasos"
  - src: "/images/portfolio/ai-filesense-website-03.png"
    alt_en: "Features section with trust signals"
    alt_es: "Seccion de caracteristicas con senales de confianza"
  - src: "/images/portfolio/ai-filesense-website-04.png"
    alt_en: "The 12-Folder Smart System overview"
    alt_es: "Vista general del Sistema Inteligente de 12 Carpetas"
  - src: "/images/portfolio/ai-filesense-website-05.png"
    alt_en: "Features page — differentiators and competitive advantages"
    alt_es: "Pagina de caracteristicas — diferenciadores y ventajas competitivas"
  - src: "/images/portfolio/ai-filesense-website-06.png"
    alt_en: "Support hub with Getting Started guide"
    alt_es: "Centro de soporte con guia de inicio"
  - src: "/images/portfolio/ai-filesense-website-07.png"
    alt_en: "Download page with system requirements and quick-start"
    alt_es: "Pagina de descarga con requisitos del sistema e inicio rapido"
  - src: "/images/portfolio/ai-filesense-website-08.png"
    alt_en: "Dark mode — full theme support across all pages"
    alt_es: "Modo oscuro — soporte completo de temas en todas las paginas"

# === MEDIA: VIDEO ===
video_url: "/videos/AI-FileSense-Website-brief.mp4"
video_poster: "/images/portfolio/AI-FileSense-Website-brief-poster.jpg"

# === LINKS ===
demo_url: "https://ai-filesense-website.vercel.app/"
live_url: "https://ai-filesense-website.vercel.app"

# === OPTIONAL ===
metrics:
  - "17 pages across 7 sections covering the full product lifecycle"
  - "500+ translation strings per language (EN + ES-MX)"
  - "Lighthouse 100 Performance, 100 Best Practices, 92 SEO, 92 Accessibility"
  - "0.3s First Contentful Paint, 0.4s Largest Contentful Paint, 0ms Total Blocking Time"
  - "Auto-generated sitemap with hreflang alternates for 30+ locale-specific URLs"
tags:
  - "nextjs"
  - "typescript"
  - "tailwind"
  - "i18n"
  - "bilingual"
  - "seo"
  - "resend"
  - "react-hook-form"
  - "zod"
  - "framer-motion"
  - "vercel"
  - "marketing"
  - "software-distribution"
date_completed: "2026-02"
---

## Architecture Overview

AI FileSense Website is a Next.js 14 App Router marketing platform that doubles as a software distribution system. Server Components handle all pages by default for fast initial loads, with Client Components scoped to interactive elements (navbar, contact form, language switcher, dark mode toggle). The i18n system uses next-intl with locale-based URL routing (`/en/features`, `/es/features`), and every translation string lives in structured JSON files — no hardcoded English anywhere.

The contact pipeline is production-grade: React Hook Form manages client state, Zod schemas validate on both client and server, a Server Action processes the submission (no exposed API routes), a honeypot field silently drops bot submissions, and Resend delivers a professionally templated email via React Email.

## Key Engineering Decisions

**next-intl over next-i18next:** Locale-based routing via `[locale]` dynamic segments gives clean URLs and proper `hreflang` support. The auto-generated sitemap produces alternates for every page in both languages with correct `x-default` fallbacks. Google indexes each locale separately and serves the right version to each audience.

**Server Actions over API routes:** The contact form uses Next.js Server Actions for form processing. No `/api/contact` endpoint exists — the form submits directly to a server function with Zod validation, reducing attack surface and keeping the codebase simpler.

**CSS variables over theme config:** The design system uses CSS custom properties (`--color-primary`, etc.) with Tailwind's class strategy for dark mode. A flash-prevention script in `<head>` reads localStorage before paint, eliminating the dark mode FOUC that plagues most theme implementations.

**Component library over UI framework:** Custom atomic components (Button with 4 variants, Card, Badge, Container with 4 sizes, Section with 4 spacings, PageHero with multiple background variants) matched to the specific design — no shadcn/ui or Radix dependency overhead for a marketing site.

## Security

- Honeypot spam protection: hidden `address` field silently drops bot submissions
- Zod schema validation: client-side and server-side with matching schemas
- Server Actions: no exposed API endpoints for form processing
- Environment variables: all secrets (`RESEND_API_KEY`, `NOTIFICATION_EMAIL`) externalized
- No telemetry: zero analytics or tracking scripts shipped to the client

## Performance

Lighthouse scores from production deployment:

- **Performance:** 100
- **Best Practices:** 100
- **SEO:** 92
- **Accessibility:** 92

Core Web Vitals: FCP 0.3s, LCP 0.4s, TBT 0ms, CLS 0. Achieved through Server Components (minimal client JS), Next.js Image optimization, Inter font loaded via `next/font` (no layout shift), and static generation for all marketing pages.
