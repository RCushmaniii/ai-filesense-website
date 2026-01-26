import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import {
  FolderIcon,
  SearchIcon,
  EyeIcon,
  CheckSimpleIcon,
  MonitorIcon,
  CheckIcon,
  LightbulbIcon,
  GlobeIcon,
  UserIcon,
  LockIcon,
  UndoIcon,
  CheckCircleIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover how AI FileSense organizes your files in 4 simple steps with 11 smart folders—all 100% local and private.',
}

export default async function FeaturesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('features')
  const common = await getTranslations('common')

  const steps = [
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: t('howItWorks.folderSelection.title'),
      desc: t('howItWorks.folderSelection.description'),
    },
    {
      icon: <SearchIcon className="w-8 h-8" />,
      title: t('howItWorks.fileTypes.title'),
      desc: t('howItWorks.fileTypes.description'),
    },
    {
      icon: <UserIcon className="w-8 h-8" />,
      title: t('howItWorks.personalization.title'),
      desc: t('howItWorks.personalization.description'),
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: t('howItWorks.scanning.title'),
      desc: t('howItWorks.scanning.description'),
    },
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: t('howItWorks.classification.title'),
      desc: t('howItWorks.classification.description'),
    },
    {
      icon: <CheckSimpleIcon className="w-8 h-8" />,
      title: t('howItWorks.quickFixes.title'),
      desc: t('howItWorks.quickFixes.description'),
    },
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: t('howItWorks.preview.title'),
      desc: t('howItWorks.preview.description'),
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: t('howItWorks.apply.title'),
      desc: t('howItWorks.apply.description'),
    },
  ]

  const folders = [
    { key: 'work', name: t('folders.work.name'), desc: t('folders.work.desc') },
    { key: 'personal', name: t('folders.personal.name'), desc: t('folders.personal.desc') },
    { key: 'financial', name: t('folders.financial.name'), desc: t('folders.financial.desc') },
    { key: 'medical', name: t('folders.medical.name'), desc: t('folders.medical.desc') },
    { key: 'legal', name: t('folders.legal.name'), desc: t('folders.legal.desc') },
    { key: 'education', name: t('folders.education.name'), desc: t('folders.education.desc') },
    { key: 'creative', name: t('folders.creative.name'), desc: t('folders.creative.desc') },
    { key: 'technical', name: t('folders.technical.name'), desc: t('folders.technical.desc') },
    { key: 'reference', name: t('folders.reference.name'), desc: t('folders.reference.desc') },
    { key: 'archive', name: t('folders.archive.name'), desc: t('folders.archive.desc') },
    { key: 'review', name: t('folders.review.name'), desc: t('folders.review.desc') },
  ]

  const differentiators = [
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: t('differentiators.contentBased.title'),
      desc: t('differentiators.contentBased.description'),
    },
    {
      icon: <CheckSimpleIcon className="w-8 h-8" />,
      title: t('differentiators.zeroConfig.title'),
      desc: t('differentiators.zeroConfig.description'),
    },
    {
      icon: <UndoIcon className="w-8 h-8" />,
      title: t('differentiators.safeByDefault.title'),
      desc: t('differentiators.safeByDefault.description'),
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: t('differentiators.trulyBilingual.title'),
      desc: t('differentiators.trulyBilingual.description'),
    },
    {
      icon: <LockIcon className="w-8 h-8" />,
      title: t('differentiators.privacyFirst.title'),
      desc: t('differentiators.privacyFirst.description'),
    },
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: t('differentiators.incremental.title'),
      desc: t('differentiators.incremental.description'),
    },
  ]

  const fileTypes = [
    {
      type: t('fileTypes.pdf.type'),
      extensions: t('fileTypes.pdf.extensions'),
      extraction: t('fileTypes.pdf.extraction'),
    },
    {
      type: t('fileTypes.word.type'),
      extensions: t('fileTypes.word.extensions'),
      extraction: t('fileTypes.word.extraction'),
    },
    {
      type: t('fileTypes.powerpoint.type'),
      extensions: t('fileTypes.powerpoint.extensions'),
      extraction: t('fileTypes.powerpoint.extraction'),
    },
    {
      type: t('fileTypes.text.type'),
      extensions: t('fileTypes.text.extensions'),
      extraction: t('fileTypes.text.extraction'),
    },
  ]

  const roadmapPhases = [
    {
      phase: t('roadmap.phase1.title'),
      status: t('roadmap.phase1.status'),
      description: t('roadmap.phase1.description'),
      isComplete: true,
    },
    {
      phase: t('roadmap.phase2.title'),
      status: t('roadmap.phase2.status'),
      description: t('roadmap.phase2.description'),
      isComplete: false,
    },
    {
      phase: t('roadmap.phase3.title'),
      status: t('roadmap.phase3.status'),
      description: t('roadmap.phase3.description'),
      isComplete: false,
    },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* How It Works - 4 Steps */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorks.title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {step.icon}
                  </div>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11 Smart Folders */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('folders.title')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('folders.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {folders.map((folder) => (
              <div
                key={folder.key}
                className="p-4 rounded-lg bg-background border border-foreground/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FolderIcon className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{folder.name}</span>
                </div>
                <p className="text-sm text-foreground/60">{folder.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What Makes AI FileSense Different */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('differentiators.title')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('differentiators.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((diff, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {diff.icon}
                  </div>
                  <CardTitle className="text-lg">{diff.title}</CardTitle>
                  <CardDescription>{diff.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Supported File Types */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('fileTypes.title')}</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('fileTypes.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="text-left py-4 px-4 font-semibold">{t('fileTypes.tableHeaders.type')}</th>
                  <th className="text-left py-4 px-4 font-semibold">{t('fileTypes.tableHeaders.extensions')}</th>
                  <th className="text-left py-4 px-4 font-semibold">{t('fileTypes.tableHeaders.extraction')}</th>
                </tr>
              </thead>
              <tbody>
                {fileTypes.map((ft, index) => (
                  <tr key={index} className="border-b border-foreground/5">
                    <td className="py-4 px-4 font-medium">{ft.type}</td>
                    <td className="py-4 px-4 text-foreground/70 font-mono text-sm">{ft.extensions}</td>
                    <td className="py-4 px-4 text-foreground/70">{ft.extraction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Product Roadmap */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('roadmap.title')}</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('roadmap.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {roadmapPhases.map((phase, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  phase.isComplete
                    ? 'border-secondary/30 bg-secondary/5'
                    : 'border-foreground/10 bg-background'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {phase.isComplete ? (
                    <CheckCircleIcon className="w-6 h-6 text-secondary" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-foreground/20" />
                  )}
                  <h3 className="text-xl font-semibold">{phase.phase}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      phase.isComplete
                        ? 'bg-secondary/10 text-secondary'
                        : 'bg-foreground/10 text-foreground/60'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <p className="text-foreground/70 ml-9">{phase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* System Requirements */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('technical.title')}</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('technical.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Minimum */}
            <div className="bg-background rounded-xl border border-foreground/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MonitorIcon className="w-5 h-5 text-foreground/60" />
                <h3 className="font-semibold">{t('technical.minTitle')}</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-secondary" />
                  {t('technical.minOS')}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-secondary" />
                  {t('technical.minRAM')}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-secondary" />
                  {t('technical.minDisk')}
                </li>
              </ul>
            </div>

            {/* Recommended */}
            <div className="bg-background rounded-xl border border-primary/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MonitorIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">{t('technical.recTitle')}</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  {t('technical.recOS')}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  {t('technical.recRAM')}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  {t('technical.recDisk')}
                </li>
              </ul>
              <p className="mt-4 text-xs text-foreground/50">{t('technical.note')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('hero.title')}</h2>
            <p className="text-lg text-foreground/70 mb-8">
              {t('hero.subtitle')}
            </p>
            <NextLink href={`/${locale}/download`}>
              <Button variant="primary" className="text-lg px-8 py-4">
                {common('downloadFree')}
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
