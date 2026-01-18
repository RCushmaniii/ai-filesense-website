# AI FileSense Website

**The official marketing website for AI FileSense - Intelligent File Organization Made Simple**

A modern, production-ready Next.js website showcasing AI FileSense, the Windows desktop application that uses Claude AI to intelligently organize your files and folders.

---

## About AI FileSense

AI FileSense is a Windows desktop application that revolutionizes file organization using artificial intelligence. This website serves as the marketing and information hub for the product.

**Phase 1 Core Features:**

- **AI-Powered Classification** - Claude Haiku reads your documents and categorizes them based on actual content
- **11-Folder Smart System** - Numbered folders (01-11) covering Work, Money, Home, Health, Legal, School, Family, Clients, Projects, Archive, and Review
- **3-Level Organization** - Choose light, moderate, or detailed organization depth
- **Safe & Reversible** - Preview all changes, one-click undo, crash recovery built-in
- **Privacy First** - Files stay local, only small text snippets sent to AI
- **Fully Bilingual** - Complete English and Spanish (Mexico) support

**This website provides:**

- Product information and features
- 8-step getting started guide
- FAQ with 10 common questions
- Product roadmap (Phase 1/2/3)
- Supported file types documentation
- Contact and support resources

---

## Website Features

### Modern UI/UX

- Clean, professional design system
- Responsive layout optimized for all devices
- Dark mode support with localStorage persistence
- Accessible components (WCAG AA compliant)
- Smooth animations and transitions

### Bilingual Support

- Full English and Spanish (Mexico) translations
- Locale-based routing (`/en`, `/es`)
- Language switcher in navigation

### Content Management

- MDX-powered blog for product updates
- Legal pages (Privacy Policy, Terms of Service)
- Comprehensive documentation
- Easy-to-update content structure

### Contact & Support

- Streamlined contact form (name, email, company, message)
- Server-side processing via Next.js Server Actions
- Email delivery via Resend
- Professional email templates

### SEO & Performance

- Optimized metadata and Open Graph tags
- Fast page loads and excellent Core Web Vitals
- Sitemap and robots.txt configured
- Image optimization built-in

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **next-intl** (i18n)
- **MDX** for content
- **Resend** for emails
- **Zod** for validation

---

## Project Structure

```
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── page.tsx        # Home page
│   │   ├── features/       # Features page
│   │   ├── support/        # Support hub (FAQ, Getting Started, Contact)
│   │   └── ...
│   ├── actions/            # Server actions
│   └── sitemap.ts          # Auto-generated sitemap
├── components/
│   ├── ui/                 # Buttons, inputs, cards
│   ├── layout/             # Navbar, footer, sections
│   ├── contact/            # Contact form
│   └── emails/             # Email templates
├── messages/
│   ├── en.json             # English translations
│   └── es.json             # Spanish translations
├── lib/                    # Utilities and schemas
└── public/                 # Static assets
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file:

```env
SITE_URL=https://aifilesense.com

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
NOTIFICATION_EMAIL=your-email@example.com
CONTACT_FROM="AI FileSense <noreply@yourdomain.com>"
```

### 3. Start the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Scripts

- `npm run dev` – Development server
- `npm run build` – Production build
- `npm start` – Run production server
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run typecheck` – TypeScript check
- `npm run check` – Lint + TypeScript

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SITE_URL` | Production URL | `https://aifilesense.com` |
| `RESEND_API_KEY` | Resend API key for emails | `re_xxxxx` |
| `NOTIFICATION_EMAIL` | Where contact form emails go | `support@aifilesense.com` |
| `CONTACT_FROM` | From address for emails | `AI FileSense <noreply@domain.com>` |

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import into Vercel
3. Set environment variables
4. Deploy

[Deploy with Vercel](https://vercel.com/new)

---

## License

See [LICENSE](./LICENSE).

---

Built with Next.js, TypeScript, and Tailwind CSS
