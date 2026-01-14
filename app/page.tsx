import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Your files never leave your computer
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">AI-Powered</span> File Organization for Windows
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto">
              Finally organize your Desktop, Documents, and Downloads — without uploading anything to the cloud.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <NextLink href="/download">
                <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto">
                  Download Free
                </Button>
              </NextLink>
              <NextLink href="/features">
                <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                  See How It Works
                </Button>
              </NextLink>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free for 1,000 files
              </span>
              <span className="hidden sm:inline text-foreground/30">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No account required
              </span>
              <span className="hidden sm:inline text-foreground/30">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Windows 10/11
              </span>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto rounded-xl border border-foreground/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/home/Screenshot.jpg"
                alt="AI FileSense application interface showing intelligent file organization"
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem Section */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sound Familiar?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                ),
                text: 'Hundreds of files dumped on your Desktop',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                text: 'Can never find that document you need',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: 'Tried organizing but gave up after 10 minutes',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                text: "Don't want to upload personal files to the cloud",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-foreground/10"
              >
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4 text-foreground/60">
                  {item.icon}
                </div>
                <p className="text-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solution Section - 3 Steps */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet AI FileSense</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Smart organization that respects your privacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Scan',
                description: 'Point it at your Desktop, Documents, or Downloads folder',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                step: '2',
                title: 'Preview',
                description: "See exactly how AI would organize your files before anything moves",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Organize',
                description: 'One click to a clean, organized computer with full undo support',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Powerful features that keep your files private
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Smart AI Classification',
                description: 'AI understands your files by content, not just filename. Tax docs, medical records, work projects — automatically sorted.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: '100% Local & Private',
                description: 'Your files never leave your computer. Only filenames and small snippets go to AI — never full file contents.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                ),
                title: 'One-Click Undo',
                description: 'Made a mistake? Reverse any organization instantly. Full transaction history lets you go back to any previous state.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
                title: 'English + Spanish',
                description: 'Full bilingual support. Use AI FileSense in English or Spanish (Mexico) — your choice.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Fast & Lightweight',
                description: 'Incremental indexing means only changed files are re-scanned. Batch AI processing keeps costs low.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Free for 1,000 Files',
                description: 'Get started at no cost. Unlimited scanning, full features, one-click undo — all free for your first 1,000 files.',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Preview */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Tier */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-4">Current</Badge>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-foreground/60 ml-2">forever</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    '1,000 files AI classification',
                    'Unlimited local scanning',
                    'All organization styles',
                    'Full search features',
                    'One-click undo',
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
                <NextLink href="/download" className="mt-8 block">
                  <Button variant="primary" className="w-full">
                    Download Free
                  </Button>
                </NextLink>
              </CardHeader>
            </Card>

            {/* Pro Tier */}
            <Card className="relative border-primary/20">
              <CardHeader>
                <Badge variant="default" className="w-fit mb-4">Coming Soon</Badge>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-foreground/60 ml-2">/year</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    '10,000+ files AI classification',
                    'Everything in Free',
                    'Priority support',
                    'Early access to new features',
                    'Multiple organization profiles',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-8" disabled>
                  Coming Soon
                </Button>
              </CardHeader>
            </Card>
          </div>

          <p className="text-center text-sm text-foreground/60 mt-8">
            You provide your own Anthropic API key. Estimated AI cost: ~$0.50-1.00 per 1,000 files.
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Desktop?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Download AI FileSense and start organizing in minutes. No account needed, no files uploaded.
            </p>
            <NextLink href="/download">
              <Button variant="primary" className="text-lg px-8 py-4">
                Download Free for Windows
              </Button>
            </NextLink>
            <p className="mt-6 text-sm text-foreground/50">
              Windows 10/11 (64-bit) • 100MB download • Free for 1,000 files
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
