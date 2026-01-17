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
          title: 'Added',
          items: [
            'Initial release of AI FileSense',
            'AI-powered file classification using Claude',
            '11 smart folders: Work, Money, Home, Health, Legal, School, Family, Clients, Projects, Archive, Review',
            'Three organization styles: Simple (by topic), Timeline (by date), Smart Groups (by project)',
            'Full Activity Log with complete undo support',
            'Preview mode—see exactly where files will go before applying',
            'Personalization wizard for recommended organization style',
            'Bilingual support (English + Spanish)',
            'Local SQLite database for file indexing',
            'Incremental scanning for performance',
            'Batch AI processing for cost efficiency',
          ],
        },
        {
          title: 'Security',
          items: [
            '100% local processing—files never leave your computer',
            'Only filenames and ~500 char snippets sent to AI',
            'Encrypted API key storage',
            'Anonymized file paths (username removed)',
            'No user accounts, no cloud sync, no telemetry',
          ],
        },
        {
          title: 'Coming Soon',
          items: [
            'Auto-Organize: Watch folders and organize new files automatically',
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
                        {section.title === 'Added' && <span className="w-2 h-2 rounded-full bg-secondary" />}
                        {section.title === 'Security' && <span className="w-2 h-2 rounded-full bg-purple-500" />}
                        {section.title === 'Coming Soon' && <span className="w-2 h-2 rounded-full bg-primary" />}
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
