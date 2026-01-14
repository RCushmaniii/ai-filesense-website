import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover how AI FileSense uses smart AI classification to organize your files while keeping everything private and local.',
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        title="Smart File Organization, Zero Cloud Upload"
        subtitle="AI FileSense combines powerful AI classification with complete privacy. Your files stay on your computer — always."
      />

      {/* AI Classification Section */}
      <Section spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">AI-Powered Classification</h2>
              <p className="text-lg text-foreground/70 mb-6">
                AI FileSense doesn&apos;t just look at filenames — it understands your files. Using Claude AI, it reads small snippets of your documents to intelligently categorize them.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Content-Aware', desc: 'Understands what files are about, not just their names' },
                  { title: 'Smart Categories', desc: 'Work, Medical, Finances, Education, Personal, and more' },
                  { title: 'Learns Context', desc: 'Groups related files together based on content' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground/5 rounded-xl p-8 border border-foreground/10">
              <h3 className="font-medium mb-4 text-sm text-foreground/60 uppercase tracking-wide">Example Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Work Projects', 'Medical Records', 'Tax Documents', 'Receipts', 'Photos', 'Education', 'Personal', 'Archive'].map((cat) => (
                  <div key={cat} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-foreground/10">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-sm">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Organization Styles */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Three Ways to Organize</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose the organization style that fits how you think about your files
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Life Areas',
                description: 'Organize by category — Work, Medical, Finances, Education, Personal. Perfect for finding files by topic.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                example: 'Work/Projects/ClientName/',
              },
              {
                title: 'Timeline Archive',
                description: 'Organize by date — Year/Month folders. Great for archiving old files and finding things by when you created them.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                example: '2024/January/document.pdf',
              },
              {
                title: 'Quick Sort',
                description: 'Fast cleanup — moves files to categorized folders without deep nesting. Best for quick desktop cleanup.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                example: 'Documents/Finances/',
              },
            ].map((style) => (
              <Card key={style.title}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {style.icon}
                  </div>
                  <CardTitle className="text-xl">{style.title}</CardTitle>
                  <CardDescription className="mb-4">{style.description}</CardDescription>
                  <code className="text-xs bg-foreground/5 px-3 py-2 rounded-lg block text-foreground/60">
                    {style.example}
                  </code>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Privacy Section */}
      <Section spacing="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-foreground/5 rounded-xl p-8 border border-foreground/10">
                <h3 className="font-medium mb-6 text-center">What Stays Local vs. What Goes to AI</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium text-sm">Stays on Your PC</span>
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• Full file contents</li>
                      <li>• Your actual files</li>
                      <li>• File paths</li>
                      <li>• Organization history</li>
                      <li>• Search index</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.321A1 1 0 0113 17H7a1 1 0 01-.707-1.707l.804-.321L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium text-sm">Sent to AI</span>
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• Filenames only</li>
                      <li>• ~500 char snippets</li>
                      <li>• Anonymized paths</li>
                      <li className="text-secondary">• Never full contents</li>
                      <li className="text-secondary">• Never personal info</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">Privacy by Design</h2>
              <p className="text-lg text-foreground/70 mb-6">
                AI FileSense was built from the ground up with privacy as the core principle. Your files never leave your computer.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Local-First Architecture', desc: 'All processing happens on your machine' },
                  { title: 'Your Own API Key', desc: 'You control the AI costs — no middleman' },
                  { title: 'Encrypted Storage', desc: 'API keys stored securely on your device' },
                  { title: 'No Account Required', desc: 'No signup, no cloud sync, no tracking' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="w-6 h-6 text-secondary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Smart Search */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Files by Describing Them</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stop searching by exact filename. Describe what you&apos;re looking for in plain English.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-xl border border-foreground/10 p-6">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-foreground/10">
                <svg className="w-5 h-5 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-foreground/40">Search your files...</span>
              </div>
              <h4 className="text-sm font-medium text-foreground/60 mb-3">Try searches like:</h4>
              <div className="space-y-2">
                {[
                  'that tax PDF from last year',
                  'medical records for mom',
                  'project proposal I was working on',
                  'receipts from December',
                  'files that used to be on my Desktop',
                ].map((query, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>&quot;{query}&quot;</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technical Specs */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Details</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported File Types</CardTitle>
                <CardDescription>
                  PDF, DOCX, TXT, RTF, images (JPG, PNG), and 50+ more formats. If Windows can read it, we can organize it.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Requirements</CardTitle>
                <CardDescription>
                  Windows 10/11 (64-bit), 4GB RAM minimum, 100MB disk space. Internet required for AI features.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Storage</CardTitle>
                <CardDescription>
                  SQLite database stored locally at %APPDATA%. Portable, reliable, and always accessible offline.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Download AI FileSense and see how it works with your own files. Free for up to 1,000 files.
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
