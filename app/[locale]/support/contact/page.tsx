import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactForm } from '@/components/contact/contact-form'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Support',
  description: 'Get in touch with AI FileSense support. We\'re here to help with any questions.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Support"
        subtitle="Have a question? We're here to help."
      />

      <Section spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Get Help</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Check the FAQ</CardTitle>
                        <CardDescription>
                          Most questions are answered in our FAQ. It&apos;s the fastest way to get help.
                        </CardDescription>
                        <NextLink href="/support/faq" className="text-sm text-primary hover:underline mt-2 inline-block">
                          View FAQ
                        </NextLink>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Getting Started Guide</CardTitle>
                        <CardDescription>
                          New to AI FileSense? Our step-by-step guide will help you get set up.
                        </CardDescription>
                        <NextLink href="/support/getting-started" className="text-sm text-primary hover:underline mt-2 inline-block">
                          Read Guide
                        </NextLink>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email Directly</CardTitle>
                        <CardDescription>
                          Prefer email? Reach us at support@aifilesense.com
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
                  <strong>Response time:</strong> We typically respond within 24-48 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
