import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Badge } from '@/components/ui/badge'
import { ArrowRightIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'AI FileSense release notes and version history. See what\'s new in each release.',
}

export default async function ChangelogPage({
  params: { locale: _locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('changelog')

  const releases = [
    {
      version: '1.0.0',
      date: 'January 2025',
      tag: 'Latest',
      sections: [
        {
          title: 'Core Features',
          items: [
            'AI-powered file classification using Claude Haiku',
            '11 numbered smart folders (01-11): Work, Personal, Financial, Medical, Legal, Education, Creative, Technical, Reference, Archive, Review',
            '3-level organization depth: light (top folders), moderate (subfolders), detailed (date-based)',
            'Preview all changes before applying—nothing moves until you approve',
            'One-click undo for any file or entire sessions',
            'Crash recovery with full activity log',
            'Personalization wizard based on your work style',
          ],
        },
        {
          title: 'File Support',
          items: [
            'PDF documents (first page text extraction)',
            'Word documents (.doc, .docx) with full text parsing',
            'PowerPoint presentations (.pptx) with slide text',
            'Text files (.txt, .md, .log, .csv) first 100 lines',
            'Any file can be classified by filename alone',
          ],
        },
        {
          title: 'Bilingual Support',
          items: [
            'Complete English interface and AI classification',
            'Complete Spanish (Mexico) interface and AI classification',
            'Documents in either language are understood and categorized correctly',
          ],
        },
        {
          title: 'Privacy & Security',
          items: [
            'Files never leave your computer—100% local processing',
            'Only ~500 character text snippets sent to AI for classification',
            'Username stripped from file paths before AI processing',
            'AI bundled—no API key setup required',
            'No user accounts, no cloud sync, no telemetry',
          ],
        },
      ],
    },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      <Section spacing="lg">
        <Container size="sm">
          <div className="space-y-12">
            {releases.map((release) => (
              <article key={release.version} className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold">v{release.version}</h2>
                  {release.tag && <Badge variant="secondary">{release.tag}</Badge>}
                  <span className="text-foreground/60">{release.date}</span>
                </div>

                <div className="space-y-6">
                  {release.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        {section.title === 'Core Features' && <span className="w-2 h-2 rounded-full bg-secondary" />}
                        {section.title === 'File Support' && <span className="w-2 h-2 rounded-full bg-primary" />}
                        {section.title === 'Bilingual Support' && <span className="w-2 h-2 rounded-full bg-blue-500" />}
                        {section.title === 'Privacy & Security' && <span className="w-2 h-2 rounded-full bg-purple-500" />}
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-foreground/70">
                            <ArrowRightIcon className="w-5 h-5 text-foreground/30 shrink-0 mt-0.5" />
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
