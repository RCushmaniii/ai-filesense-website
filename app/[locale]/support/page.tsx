import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import NextLink from 'next/link'
import { BookIcon, QuestionIcon, ChatIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with AI FileSense. FAQs, getting started guides, and contact information.',
}

export default async function SupportPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('support')
  const footer = await getTranslations('footer')

  const supportLinks = [
    {
      title: t('cards.gettingStarted'),
      description: t('cards.gettingStartedDesc'),
      href: `/${locale}/support/getting-started`,
      icon: <BookIcon className="w-6 h-6" />,
    },
    {
      title: t('cards.faq'),
      description: t('cards.faqDesc'),
      href: `/${locale}/support/faq`,
      icon: <QuestionIcon className="w-6 h-6" />,
    },
    {
      title: t('cards.contact'),
      description: t('cards.contactDesc'),
      href: `/${locale}/support/contact`,
      icon: <ChatIcon className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            <h2 className="text-2xl font-bold mb-6">{t('quickLinks.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: footer('download'), href: `/${locale}/download` },
                { label: footer('features'), href: `/${locale}/features` },
                { label: footer('pricing'), href: `/${locale}/pricing` },
                { label: footer('changelog'), href: `/${locale}/changelog` },
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
