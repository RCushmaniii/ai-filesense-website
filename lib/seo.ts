const siteUrl = process.env.SITE_URL || 'http://localhost:3000'

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
  return `${siteUrl}${path}`
}

/**
 * Generate Organization schema for the home page
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agency',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/agency',
      'https://github.com/agency',
      'https://linkedin.com/company/agency',
    ],
  }
}

/**
 * Generate Article schema for blog posts
 */
export function getArticleSchema(article: {
  title: string
  description: string
  date: string
  coverImage?: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.coverImage ? `${siteUrl}${article.coverImage}` : undefined,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agency',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${article.slug}`,
    },
  }
}
