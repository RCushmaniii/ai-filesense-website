import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Learn how to install and use AI FileSense. Step-by-step guide to organizing your files with AI.',
}

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        title="Getting Started with AI FileSense"
        subtitle="Follow this guide to start organizing your files in minutes."
      />

      {/* Overview */}
      <Section spacing="lg">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground/70 mb-8">
              AI FileSense helps you organize your files using AI. The setup takes about 5-10 minutes, and you&apos;ll be organizing files right away.
            </p>

            <div className="not-prose grid grid-cols-3 gap-4 mb-12">
              {[
                { number: '1', label: 'Download & Install' },
                { number: '2', label: 'Set Up API Key' },
                { number: '3', label: 'Start Organizing' },
              ].map((step) => (
                <div key={step.number} className="text-center p-4 bg-foreground/5 rounded-lg">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <span className="text-sm font-medium">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Step 1: Download & Install */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container size="md">
          <div className="flex gap-4 items-start mb-6">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold">Download & Install</h2>
              <p className="text-foreground/70">Get AI FileSense on your Windows computer</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">a</span>
                  <div>
                    <p className="font-medium">Download the installer</p>
                    <p className="text-sm text-foreground/60">Visit the <NextLink href="/download" className="text-primary hover:underline">download page</NextLink> and click &quot;Download Free&quot;</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">b</span>
                  <div>
                    <p className="font-medium">Run the installer</p>
                    <p className="text-sm text-foreground/60">Double-click the downloaded .exe file. If Windows shows a SmartScreen warning, click &quot;More info&quot; then &quot;Run anyway&quot;</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">c</span>
                  <div>
                    <p className="font-medium">Follow the setup wizard</p>
                    <p className="text-sm text-foreground/60">Accept the license agreement and choose your installation location (default is fine)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">d</span>
                  <div>
                    <p className="font-medium">Launch AI FileSense</p>
                    <p className="text-sm text-foreground/60">The app will open automatically after installation, or find it in your Start menu</p>
                  </div>
                </li>
              </ol>
            </CardHeader>
          </Card>
        </Container>
      </Section>

      {/* Step 2: API Key Setup */}
      <Section spacing="lg">
        <Container size="md">
          <div className="flex gap-4 items-start mb-6">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold">Set Up Your API Key</h2>
              <p className="text-foreground/70">Connect to Anthropic&apos;s AI for smart file classification</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <p className="text-foreground/70 mb-6">
                AI FileSense uses Claude AI from Anthropic to understand and classify your files. You&apos;ll need a free Anthropic account and API key.
              </p>

              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">a</span>
                  <div>
                    <p className="font-medium">Create an Anthropic account</p>
                    <p className="text-sm text-foreground/60">Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">console.anthropic.com</a> and sign up (it&apos;s free)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">b</span>
                  <div>
                    <p className="font-medium">Create an API key</p>
                    <p className="text-sm text-foreground/60">In the Anthropic console, go to &quot;API Keys&quot; and create a new key. Name it something like &quot;AI FileSense&quot;</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">c</span>
                  <div>
                    <p className="font-medium">Add credit to your account</p>
                    <p className="text-sm text-foreground/60">Add $5 of credit (minimum). This is enough for 5,000-10,000 files typically</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">d</span>
                  <div>
                    <p className="font-medium">Paste into AI FileSense</p>
                    <p className="text-sm text-foreground/60">Copy your API key and paste it into AI FileSense when prompted (or go to Settings)</p>
                  </div>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                <p className="text-sm text-secondary font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Your API key is stored locally and encrypted. It never leaves your computer.
                </p>
              </div>
            </CardHeader>
          </Card>
        </Container>
      </Section>

      {/* Step 3: Start Organizing */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container size="md">
          <div className="flex gap-4 items-start mb-6">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <div>
              <h2 className="text-2xl font-bold">Start Organizing</h2>
              <p className="text-foreground/70">Use AI FileSense to clean up your files</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">a</span>
                  <div>
                    <p className="font-medium">Select a folder to scan</p>
                    <p className="text-sm text-foreground/60">Start with your Desktop, Documents, or Downloads folder. Click &quot;Add Folder&quot; and browse to select it</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">b</span>
                  <div>
                    <p className="font-medium">Wait for scanning to complete</p>
                    <p className="text-sm text-foreground/60">AI FileSense will index all files in the folder. Large folders may take a few minutes</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">c</span>
                  <div>
                    <p className="font-medium">Run AI classification</p>
                    <p className="text-sm text-foreground/60">Click &quot;Classify Files&quot; to have the AI analyze and categorize your files</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">d</span>
                  <div>
                    <p className="font-medium">Choose an organization style</p>
                    <p className="text-sm text-foreground/60">Pick Life Areas (by category), Timeline (by date), or Quick Sort (fast cleanup)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium shrink-0">e</span>
                  <div>
                    <p className="font-medium">Preview and apply</p>
                    <p className="text-sm text-foreground/60">Review the proposed organization, then click &quot;Apply&quot; to move files. You can always undo!</p>
                  </div>
                </li>
              </ol>
            </CardHeader>
          </Card>
        </Container>
      </Section>

      {/* Tips */}
      <Section spacing="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold mb-6">Tips for Best Results</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Start Small',
                description: 'Begin with a single folder like Downloads. Get comfortable with the workflow before tackling larger folders.',
              },
              {
                title: 'Always Preview First',
                description: 'Use the preview feature to see exactly what will happen before applying any organization.',
              },
              {
                title: 'Back Up Important Files',
                description: 'While AI FileSense has full undo support, it\'s always good practice to back up critical files.',
              },
              {
                title: 'Use Search',
                description: 'After organizing, use natural language search to find files. Try "that tax document from last year".',
              },
            ].map((tip, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Need Help */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-foreground/70 mb-6">
              Check our FAQ for common questions or contact support if you&apos;re stuck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/support/faq">
                <Button variant="outline">View FAQ</Button>
              </NextLink>
              <NextLink href="/support/contact">
                <Button variant="primary">Contact Support</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
