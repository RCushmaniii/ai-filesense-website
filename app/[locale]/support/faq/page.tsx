import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about AI FileSense. Get answers to common questions about features, pricing, and privacy.',
}

export default async function FAQPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('faq')

  const faqs = [
    { q: t('questions.q1'), a: t('questions.a1') },
    { q: t('questions.q2'), a: t('questions.a2') },
    { q: t('questions.q3'), a: t('questions.a3') },
    { q: t('questions.q4'), a: t('questions.a4') },
    { q: t('questions.q5'), a: t('questions.a5') },
    { q: t('questions.q6'), a: t('questions.a6') },
    { q: t('questions.q7'), a: t('questions.a7') },
    { q: t('questions.q8'), a: t('questions.a8') },
    { q: t('questions.q9'), a: t('questions.a9') },
    { q: t('questions.q10'), a: t('questions.a10') },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container size="md">
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="pb-8 border-b border-foreground/10 last:border-b-0">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Still Need Help */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t('stillHaveQuestions')}</h2>
            <p className="text-foreground/70 mb-6">
              {t('stillHaveQuestionsDesc')}
            </p>
            <NextLink href={`/${locale}/support/contact`}>
              <Button variant="primary">{t('contactSupport')}</Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
