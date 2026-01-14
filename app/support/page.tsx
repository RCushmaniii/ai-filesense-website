import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with AI FileSense. FAQs, getting started guides, and contact information.',
}

export default function SupportPage() {
  const supportLinks = [
    {
      title: 'Getting Started',
      description: 'Step-by-step guide to install AI FileSense and start organizing your files.',
      href: '/support/getting-started',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'FAQ',
      description: 'Answers to common questions about features, pricing, privacy, and troubleshooting.',
      href: '/support/faq',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Contact Us',
      description: 'Need more help? Send us a message and we\'ll get back to you.',
      href: '/support/contact',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <PageHero
        title="How Can We Help?"
        subtitle="Find answers, guides, and contact information."
      />

      <Section spacing="lg">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {supportLinks.map((link) => (
              <NextLink key={link.href} href={link.href}>
                <Card className="h-full hover:border-primary/30 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {link.icon}
                    </div>
                    <CardTitle>{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </NextLink>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Download', href: '/download' },
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Changelog', href: '/changelog' },
              ].map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className="p-4 rounded-lg bg-background border border-foreground/10 hover:border-primary/30 transition-colors text-sm font-medium"
                >
                  {item.label}
                </NextLink>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
