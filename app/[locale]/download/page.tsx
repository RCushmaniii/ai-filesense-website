import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download AI FileSense for Windows. Free AI-powered file organization that keeps your files private.',
}

export default function DownloadPage() {
  return (
    <>
      <PageHero
        title="Download AI FileSense"
        subtitle="Get started in minutes. Free for up to 1,000 files."
      />

      {/* Main Download Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader className="py-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
                  AI
                </div>
                <CardTitle className="text-2xl mb-2">AI FileSense for Windows</CardTitle>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Badge variant="secondary">v1.0.0</Badge>
                  <span className="text-sm text-foreground/60">~100 MB</span>
                </div>

                <Button variant="primary" className="text-lg px-10 py-4 mb-4" disabled>
                  Download Coming Soon
                </Button>

                <p className="text-sm text-foreground/50">
                  Windows 10/11 (64-bit) required
                </p>
              </CardHeader>
            </Card>

            {/* Checksum */}
            <div className="mt-6 p-4 bg-foreground/5 rounded-lg">
              <p className="text-xs text-foreground/50 text-center">
                <span className="font-medium">SHA256:</span> Checksum will be available with release
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* System Requirements */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">System Requirements</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Minimum
                  </CardTitle>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    <li>Windows 10 (64-bit)</li>
                    <li>4 GB RAM</li>
                    <li>100 MB disk space</li>
                    <li>Internet connection (for AI)</li>
                  </ul>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Recommended
                  </CardTitle>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                    <li>Windows 11 (64-bit)</li>
                    <li>8 GB RAM</li>
                    <li>500 MB disk space</li>
                    <li>Broadband internet</li>
                  </ul>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Installation Steps */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Start Guide</h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Download the installer',
                  description: 'Click the download button above to get the latest version of AI FileSense.',
                },
                {
                  step: '2',
                  title: 'Run the installer',
                  description: 'Double-click the downloaded .exe file and follow the setup wizard. Windows may show a security prompt — click "Run anyway".',
                },
                {
                  step: '3',
                  title: 'Get your Anthropic API key',
                  description: 'AI FileSense uses Claude AI for smart classification. You\'ll need a free Anthropic account and API key.',
                },
                {
                  step: '4',
                  title: 'Enter your API key',
                  description: 'Paste your API key into AI FileSense when prompted. It\'s stored securely and never leaves your computer.',
                },
                {
                  step: '5',
                  title: 'Start organizing!',
                  description: 'Select a folder to scan, preview the organization plan, and click to organize. It\'s that simple.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Getting API Key */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Getting Your Anthropic API Key</h2>
            <p className="text-center text-foreground/70 mb-8">
              AI FileSense uses your own Anthropic API key for AI classification. Here&apos;s how to get one:
            </p>

            <Card>
              <CardHeader>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">1</span>
                    <div>
                      <p className="font-medium">Go to console.anthropic.com</p>
                      <p className="text-sm text-foreground/60">Create a free account or sign in</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">2</span>
                    <div>
                      <p className="font-medium">Navigate to API Keys</p>
                      <p className="text-sm text-foreground/60">Find it in the left sidebar under your account</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">3</span>
                    <div>
                      <p className="font-medium">Create a new API key</p>
                      <p className="text-sm text-foreground/60">Give it a name like &quot;AI FileSense&quot;</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">4</span>
                    <div>
                      <p className="font-medium">Add credit to your account</p>
                      <p className="text-sm text-foreground/60">$5 minimum — enough for ~5,000-10,000 files</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">5</span>
                    <div>
                      <p className="font-medium">Copy and paste into AI FileSense</p>
                      <p className="text-sm text-foreground/60">Your key is stored locally and encrypted</p>
                    </div>
                  </li>
                </ol>

                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-secondary font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Setup takes about 5 minutes
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Help Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-foreground/70 mb-6">
              Check out our getting started guide or FAQ for common questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/support/getting-started">
                <Button variant="outline">Getting Started Guide</Button>
              </NextLink>
              <NextLink href="/support/faq">
                <Button variant="outline">View FAQ</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
