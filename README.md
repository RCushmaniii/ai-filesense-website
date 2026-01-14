# AI FileSense Website

**The official marketing website for AI FileSense - Intelligent File Organization Made Simple**

A modern, production-ready Next.js website showcasing AI FileSense, the desktop application that uses AI to intelligently organize your files and folders.

🌐 **Live Demo:** Coming soon

---

## About AI FileSense

AI FileSense is a desktop application that revolutionizes file organization using artificial intelligence. This website serves as the marketing and information hub for the product.

**Key Features:**

- 🤖 AI-powered file organization
- 📁 Intelligent folder structure suggestions
- 🔒 Privacy-first: all processing happens locally
- ⚡ Fast and efficient file indexing
- 🎯 Smart tagging and categorization

**This website provides:**

- Product information and features
- Documentation and guides
- Blog posts about file organization and productivity
- Legal information (Privacy Policy, Terms of Service)
- Contact and support resources

---

## ✨ Website Features

### 🎨 Modern UI/UX

- Clean, professional design system
- Responsive layout optimized for all devices
- Dark mode support with localStorage persistence
- Accessible components (WCAG AA compliant)
- Smooth animations and transitions

### 📝 Content Management

- **MDX-powered** blog for product updates and tips
- Legal pages (Privacy Policy, Terms of Service)
- Comprehensive documentation
- Easy-to-update content structure

### 📬 Contact & Support

- Functional contact form with validation
- Server-side processing via Next.js Server Actions
- Email delivery via Resend
- Professional email templates

### 🔍 SEO & Performance

- Optimized metadata and Open Graph tags
- Fast page loads and excellent Core Web Vitals
- Sitemap and robots.txt configured
- Image optimization built-in

---

## 🚀 Features

- ⚡ **Next.js 14** (App Router)
- 📘 **TypeScript** in strict mode
- 🎨 **Tailwind CSS**
- 📝 **MDX** for content
- 🌗 Dark mode support
- ♿ Accessibility-first components
- 🔍 SEO-ready (metadata, sitemap, robots.txt)
- 🖼️ Image optimization
- 🚀 90+ Lighthouse performance scores
- 📦 Reusable component library

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── blog/               # Blog routes
│   ├── work/               # Portfolio routes
│   └── ...
├── components/
│   ├── ui/                 # Buttons, inputs, badges
│   ├── layout/             # Navbar, footer, sections
│   └── content/            # MDX, Prose, content helpers
├── content/
│   ├── blog/               # Blog posts (MDX)
│   └── work/               # Case studies (MDX)
├── lib/                    # Utilities and helpers
├── public/                 # Static assets
└── styles/                 # Global styles
```

Clean. Predictable. Easy to onboard new developers.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Update `SITE_URL` to match your domain.

### 3. Start the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Adding Content

### Blog posts

Create a file in `content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'Short summary'
date: '2024-01-15'
tags: ['nextjs', 'react']
draft: false
---

Your content here…
```

### Case studies

Create a file in `content/work/`:

```mdx
---
title: 'Project Name'
description: 'What you built and why'
date: '2024-01-15'
client: 'Client Name'
role: 'Your Role'
tech: ['Next.js', 'TypeScript']
draft: false
---

Your content here…
```

---

## 🎨 Customization

### Brand colors

Edit `styles/globals.css`:

```css
:root {
  --color-primary: 59 130 246;
  --color-secondary: 16 185 129;
}
```

### Fonts

Change the font in `app/layout.tsx` using `next/font`.

---

## 🛠️ Scripts

- `npm run dev` – Development
- `npm run build` – Production build
- `npm start` – Run production server
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run typecheck` – TypeScript
- `npm run check` – Lint + types

---

## 🚢 Deployment

### Vercel (recommended)

This project is optimized for Vercel.

1. Push to GitHub
2. Import into Vercel
3. Set environment variables
4. Deploy

[Deploy with Vercel](https://vercel.com/new)

---

## 🔧 Environment Variables

```env
SITE_URL=https://yourdomain.com

RESEND_API_KEY=your_api_key
CONTACT_EMAIL=you@yourdomain.com
CONTACT_FROM="Your Studio <hello@yourdomain.com>"
```

---

## 📚 Documentation

- `docs/CLAUDE.md` – Architecture & AI assistant notes
- `docs/CLIENT_START.md` – Client handoff checklist
- `docs/IMAGE_SOURCES.md` – Image attribution guidance

---

## 🎯 Project Purpose

This website serves as the official online presence for AI FileSense, providing:

- Product information and feature highlights
- Educational content about file organization
- Support and documentation resources
- Legal compliance (privacy policy, terms of service)
- Lead generation and user acquisition

---

## 📄 License

See [LICENSE](./LICENSE).

---

Built with ❤️ using **Next.js, TypeScript, and Tailwind CSS**

---

## 📞 Contact

For questions about AI FileSense or this website:

- Email: privacy@aifilesense.com
- Website: https://aifilesense.com/contact
