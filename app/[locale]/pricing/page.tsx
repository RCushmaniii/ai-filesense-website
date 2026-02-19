import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'
import { CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'AI FileSense pricing plans. Start free with 1,000 files, upgrade when you need more.',
}

export default async function PricingPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('pricing')
  const common = await getTranslations('common')

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="waves"
      />

      {/* Pricing Cards */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-4">{common('current')}</Badge>
                <CardTitle className="text-2xl">{t('tiers.free')}</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-foreground/60 ml-2">{t('cards.forever')}</span>
                </div>
                <CardDescription className="text-base mb-6">
                  {t('cards.freeDesc')}
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {(['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{t(`cards.freeFeatures.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <NextLink href={`/${locale}/download`} className="block">
                  <Button variant="primary" className="w-full">
                    {common('downloadFree')}
                  </Button>
                </NextLink>
              </CardHeader>
            </Card>

            {/* Personal Tier */}
            <Card className="relative border-primary/30 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="primary" className="shadow-sm">{t('cards.mostPopular')}</Badge>
              </div>
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">{common('comingSoon')}</Badge>
                <CardTitle className="text-2xl">{t('tiers.personal')}</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$9.99</span>
                  <span className="text-foreground/60 ml-2">{t('cards.perYear')}</span>
                </div>
                <CardDescription className="text-base mb-6">
                  {t('cards.personalDesc')}
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {(['f1', 'f2', 'f3', 'f4', 'f5'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{t(`cards.personalFeatures.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" disabled>
                  {common('comingSoon')}
                </Button>
              </CardHeader>
            </Card>

            {/* Professional Tier */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">{common('comingSoon')}</Badge>
                <CardTitle className="text-2xl">{t('tiers.professional')}</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$29.99</span>
                  <span className="text-foreground/60 ml-2">{t('cards.perYear')}</span>
                </div>
                <CardDescription className="text-base mb-6">
                  {t('cards.professionalDesc')}
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {(['f1', 'f2', 'f3', 'f4', 'f5'] as const).map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm">
                      <CheckIcon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{t(`cards.professionalFeatures.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" disabled>
                  {common('comingSoon')}
                </Button>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why Free During Launch */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">{t('whyFree.title')}</h2>
              <p className="text-foreground/70">
                {t('whyFree.subtitle')}
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">{t('whyFree.noSetup')}</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {(['s1', 's2', 's3', 's4'] as const).map((key) => (
                        <li key={key} className="flex gap-2">
                          <CheckIcon className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          {t(`whyFree.noSetupItems.${key}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">{t('whyFree.whatYouGet')}</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {(['w1', 'w2', 'w3', 'w4'] as const).map((key) => (
                        <li key={key} className="flex gap-2">
                          <CheckIcon className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          {t(`whyFree.whatYouGetItems.${key}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">{t('faq.title')}</h2>

            <div className="space-y-6">
              {[
                { q: t('faq.q1'), a: t('faq.a1') },
                { q: t('faq.q2'), a: t('faq.a2') },
                { q: t('faq.q3'), a: t('faq.a3') },
                { q: t('faq.q4'), a: t('faq.a4') },
                { q: t('faq.q5'), a: t('faq.a5') },
                { q: t('faq.q6'), a: t('faq.a6') },
              ].map((faq, i) => (
                <div key={i} className="border-b border-foreground/10 pb-6 last:border-0">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-lg text-foreground/70 mb-8">
              {t('cta.subtitle')}
            </p>
            <NextLink href={`/${locale}/download`}>
              <Button variant="primary" className="text-lg px-8 py-4">
                {common('downloadFree')}
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
