import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'AI FileSense release notes and version history. See what\'s new in each release.',
}

export default function ChangelogPage() {
  const releases = [
    {
      version: '1.0.0',
      date: 'January 2025',
      tag: 'Latest',
      sections: [
        {
          title: 'Added',
          items: [
            'Initial release of AI FileSense',
            'AI-powered file classification using Claude',
            'Three organization styles: Life Areas, Timeline Archive, Quick Sort',
            'Smart search with natural language queries',
            'Full undo/redo support with transaction history',
            'Preview mode to see changes before applying',
            'Bilingual support (English + Spanish)',
            'Local SQLite database for file indexing',
            'Incremental scanning for performance',
            'Batch AI processing for cost efficiency',
          ],
        },
        {
          title: 'Security',
          items: [
            'Local-first architecture — files never leave your computer',
            'Encrypted API key storage',
            'Anonymized file paths sent to AI',
            'No user accounts or cloud sync',
          ],
        },
      ],
    },
  ]

  return (
    <>
      <PageHero
        title="Changelog"
        subtitle="Track our progress and see what's new in each release."
      />

      <Section spacing="lg">
        <Container size="sm">
          <div className="space-y-12">
            {releases.map((release) => (
              <article key={release.version} className="relative">
                {/* Version Header */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold">v{release.version}</h2>
                  {release.tag && (
                    <Badge variant="secondary">{release.tag}</Badge>
                  )}
                  <span className="text-foreground/60">{release.date}</span>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  {release.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        {section.title === 'Added' && (
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                        )}
                        {section.title === 'Changed' && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                        {section.title === 'Fixed' && (
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                        )}
                        {section.title === 'Security' && (
                          <span className="w-2 h-2 rounded-full bg-purple-500" />
                        )}
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-foreground/70">
                            <svg className="w-5 h-5 text-foreground/30 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Future Updates Note */}
          <div className="mt-16 p-6 bg-foreground/5 rounded-xl border border-foreground/10 text-center">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-foreground/70 text-sm">
              New releases will be announced here and through the app. Check back for updates!
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
