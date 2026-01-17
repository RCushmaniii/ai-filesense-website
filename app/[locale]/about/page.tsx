import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { PageHero } from '@/components/layout/page-hero'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  LockIcon,
  CheckCircleIcon,
  CheckIcon,
  LockFilledIcon,
  UserIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about AI FileSense and our commitment to privacy-first file organization.',
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('about')

  const values = [
    {
      title: t('values.privacy'),
      description: t('values.privacyDesc'),
      Icon: LockIcon,
    },
    {
      title: t('values.simplicity'),
      description: t('values.simplicityDesc'),
      Icon: CheckCircleIcon,
    },
    {
      title: t('values.transparency'),
      description: t('values.transparencyDesc'),
      Icon: UserIcon,
    },
  ]

  const commitmentItems = [
    t('commitment.items.local'),
    t('commitment.items.minimal'),
    t('commitment.items.noAccount'),
    t('commitment.items.noTelemetry'),
    t('commitment.items.yourKey'),
    t('commitment.items.encrypted'),
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Mission */}
      <Section spacing="lg">
        <Container size="md">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>{t('mission.title')}</h2>
            <p className="text-lg text-foreground/70">{t('mission.description')}</p>
          </div>
        </Container>
      </Section>

      {/* Privacy Commitment */}
      <Section spacing="lg" className="bg-secondary/5">
        <Container size="md">
          <div className="text-center mb-10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
              <LockFilledIcon className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{t('commitment.title')}</h2>
            <p className="text-foreground/70">{t('commitment.intro')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {commitmentItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-background rounded-xl border border-foreground/10"
              >
                <CheckIcon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t('values.title')}</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="h-full">
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                      <v.Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{v.title}</CardTitle>
                      <CardDescription className="mt-2">{v.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="mt-4 text-lg text-foreground/70">{t('cta.subtitle')}</p>
            <div className="mt-8">
              <NextLink href={`/${locale}/download`}>
                <Button variant="primary">{t('cta.button')}</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
