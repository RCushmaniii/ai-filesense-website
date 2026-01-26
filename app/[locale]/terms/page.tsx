import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Prose } from '@/components/content/prose'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AI FileSense Terms of Service. Read our terms for using the desktop application.',
}

export default async function TermsPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('terms')

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container size="sm">
          <Prose>
            <p className="lead">
              Welcome to AI FileSense! These Terms of Service (&quot;Terms&quot;) govern your use of the AI FileSense desktop application (&quot;Service&quot;). By using our Service, you agree to these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using AI FileSense, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              AI FileSense is a desktop application that helps you organize and find files on your Windows computer using AI-powered classification. The Service:
            </p>
            <ul>
              <li>Runs locally on your computer</li>
              <li>AI-powered classification included—no API key setup required</li>
              <li>Moves and organizes files based on your instructions</li>
            </ul>

            <h2>3. Free During Launch</h2>
            <p>AI FileSense is currently free during our launch period, including:</p>
            <ul>
              <li>Unlimited local file scanning and indexing</li>
              <li>Full AI-powered classification</li>
              <li>Complete organization and search features</li>
            </ul>

            <h2>4. User Responsibilities</h2>
            <ul>
              <li>You are responsible for backing up your files before using organization features</li>
              <li>You understand that file organization involves moving files on your computer</li>
              <li>Use the undo features if you need to reverse any changes</li>
            </ul>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND.</strong>
            </p>

            <h2>6. Contact Information</h2>
            <p>For questions about these Terms:</p>
            <ul>
              <li>Email: legal@aifilesense.com</li>
              <li>Website: <a href={`/${locale}/support/contact`}>https://aifilesense.com/support/contact</a></li>
            </ul>
          </Prose>
        </Container>
      </Section>
    </>
  )
}
