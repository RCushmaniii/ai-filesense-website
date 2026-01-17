import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Card } from '@/components/ui/card'
import { PageHero } from '@/components/layout/page-hero'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AI FileSense. Questions, feedback, or support requests welcome.',
}

export default async function ContactPage({
  params: { locale: _locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('contact')

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <Card>
                <h3 className="text-xl font-semibold mb-3">{t('process.title')}</h3>
                <ol className="space-y-2 text-foreground/70">
                  <li>1. {t('process.step1')}</li>
                  <li>2. {t('process.step2')}</li>
                  <li>3. {t('process.step3')}</li>
                </ol>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-foreground/70">
                  <a className="underline underline-offset-4" href="mailto:support@aifilesense.com">
                    support@aifilesense.com
                  </a>
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
