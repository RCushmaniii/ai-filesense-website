import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactForm } from '@/components/contact/contact-form'
import NextLink from 'next/link'
import { QuestionIcon, BookIcon, MailIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact Support',
  description: 'Get in touch with AI FileSense support. We\'re here to help with any questions.',
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('support.contact')

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('sendMessage')}</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('otherWays')}</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <QuestionIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{t('checkFaq')}</CardTitle>
                        <CardDescription>
                          {t('checkFaqDesc')}
                        </CardDescription>
                        <NextLink href={`/${locale}/support/faq`} className="text-sm text-primary hover:underline mt-2 inline-block">
                          {t('viewFaq')}
                        </NextLink>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <BookIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{t('gettingStartedGuide')}</CardTitle>
                        <CardDescription>
                          {t('gettingStartedGuideDesc')}
                        </CardDescription>
                        <NextLink href={`/${locale}/support/getting-started`} className="text-sm text-primary hover:underline mt-2 inline-block">
                          {t('readGuide')}
                        </NextLink>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MailIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{t('emailDirectly')}</CardTitle>
                        <CardDescription>
                          {t('emailDirectlyDesc')}
                        </CardDescription>
                        <a href="mailto:support@aifilesense.com" className="text-sm text-primary hover:underline mt-2 inline-block">
                          support@aifilesense.com
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-foreground/5 rounded-lg">
                <p className="text-sm text-foreground/70">
                  <strong>{t('responseTime')}</strong> {t('responseTimeDesc')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
