import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'AI FileSense pricing plans. Start free with 1,000 files, upgrade when you need more.',
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="Start free and upgrade when you need more. No credit card required."
      />

      {/* Pricing Cards */}
      <Section spacing="lg">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-4">Available Now</Badge>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-foreground/60 ml-2">forever</span>
                </div>
                <CardDescription className="text-base mb-6">
                  Perfect for trying out AI FileSense and organizing your most important files.
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {[
                    '1,000 files AI classification',
                    'Unlimited local scanning & indexing',
                    'All 3 organization styles',
                    'Full search capabilities',
                    'One-click undo',
                    'English + Spanish',
                    'No account required',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <NextLink href="/download" className="block">
                  <Button variant="primary" className="w-full">
                    Download Free
                  </Button>
                </NextLink>
              </CardHeader>
            </Card>

            {/* Personal Tier */}
            <Card className="relative border-primary/30 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="primary" className="shadow-sm">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">Coming Soon</Badge>
                <CardTitle className="text-2xl">Personal</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$9.99</span>
                  <span className="text-foreground/60 ml-2">/year</span>
                </div>
                <CardDescription className="text-base mb-6">
                  For home users with lots of files to organize.
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {[
                    '10,000 files AI classification',
                    'Everything in Free',
                    'Email support',
                    'Early access to new features',
                    'Multiple folder profiles',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardHeader>
            </Card>

            {/* Professional Tier */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">Coming Soon</Badge>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4 mb-6">
                  <span className="text-5xl font-bold">$29.99</span>
                  <span className="text-foreground/60 ml-2">/year</span>
                </div>
                <CardDescription className="text-base mb-6">
                  For power users and small businesses.
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  {[
                    '50,000 files AI classification',
                    'Everything in Personal',
                    'Priority support',
                    'Custom organization rules',
                    'Batch processing priority',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* API Cost Transparency */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">About AI Costs</h2>
              <p className="text-foreground/70">
                AI FileSense uses Anthropic&apos;s Claude AI for intelligent file classification. You provide your own API key, giving you full control and transparency over costs.
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">How It Works</h3>
                    <ol className="space-y-2 text-sm text-foreground/70">
                      <li className="flex gap-2">
                        <span className="font-medium text-primary">1.</span>
                        Create a free Anthropic account
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-primary">2.</span>
                        Generate an API key
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-primary">3.</span>
                        Add credit to your account ($5 minimum)
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-primary">4.</span>
                        Paste the key into AI FileSense
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Estimated Costs</h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li className="flex justify-between">
                        <span>1,000 files</span>
                        <span className="font-medium">~$0.50 - $1.00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>5,000 files</span>
                        <span className="font-medium">~$2.50 - $5.00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>10,000 files</span>
                        <span className="font-medium">~$5.00 - $10.00</span>
                      </li>
                    </ul>
                    <p className="text-xs text-foreground/50 mt-3">
                      Costs vary based on file types and content length. Batch processing keeps costs low.
                    </p>
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
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What counts as a "file" in the limit?',
                  a: 'Only files that are processed by AI for classification count toward your limit. Local scanning and indexing is always unlimited.',
                },
                {
                  q: 'Do I need to pay for AI separately?',
                  a: 'Yes, AI classification uses Anthropic\'s Claude API, which requires your own API key. This gives you transparency and control over costs — typically $0.50-1.00 per 1,000 files.',
                },
                {
                  q: 'What happens when I hit my file limit?',
                  a: 'You can still use all features for files already classified. New files will need to wait until you upgrade or until we launch paid tiers.',
                },
                {
                  q: 'Can I use my own API key with any plan?',
                  a: 'Yes! All plans (including Free) use your own Anthropic API key. This ensures your data goes directly to Anthropic without any middleman.',
                },
                {
                  q: 'Is there a refund policy?',
                  a: 'Paid plans (when available) will have a 30-day money-back guarantee. But try the free tier first — it has all the features!',
                },
                {
                  q: 'Do I need an internet connection?',
                  a: 'Only for AI classification. Scanning, searching, and organizing already-classified files works completely offline.',
                },
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
            <h2 className="text-3xl font-bold mb-4">Start Organizing for Free</h2>
            <p className="text-lg text-foreground/70 mb-8">
              No credit card required. Get started in minutes with 1,000 free file classifications.
            </p>
            <NextLink href="/download">
              <Button variant="primary" className="text-lg px-8 py-4">
                Download Free
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
