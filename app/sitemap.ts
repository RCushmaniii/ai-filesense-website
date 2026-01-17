import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const locales = routing.locales

const siteUrl = process.env.SITE_URL || 'https://aifilesense.com'

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/download', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/support', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/support/faq', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/support/getting-started', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/support/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/work', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/changelog', priority: 0.6, changeFrequency: 'weekly' as const },
  { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            ...Object.fromEntries(
              locales.map((l) => [l, `${siteUrl}/${l}${page.path}`])
            ),
            'x-default': `${siteUrl}/en${page.path}`,
          },
        },
      })
    }
  }

  return entries
}
