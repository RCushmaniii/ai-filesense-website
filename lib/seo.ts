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
    name: 'AI FileSense',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    sameAs: [
      'https://github.com/RCushmaniii/ai-filesense-website',
    ],
  }
}

/**
 * Generate SoftwareApplication schema for the product
 */
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI FileSense',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows 10, Windows 11',
    description:
      'AI-powered desktop application that intelligently organizes your files locally using Claude AI. Privacy-first, fully bilingual (English/Spanish).',
    url: siteUrl,
    downloadUrl: `${siteUrl}/en/download`,
    author: {
      '@type': 'Organization',
      name: 'AI FileSense',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
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
      name: 'AI FileSense',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI FileSense',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${article.slug}`,
    },
  }
}
