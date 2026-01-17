import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { FolderIcon, UndoIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Getting Started',
  description: 'Get organized in 5 minutes. Follow this step-by-step guide to set up AI FileSense and organize your files.',
}

export default async function GettingStartedPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('support.gettingStarted')
  const homeT = await getTranslations('home')

  const steps = [
    'selectFolders',
    'scanning',
    'personalization',
    'resultsPreview',
    'detailedReview',
    'quickClarifications',
    'applyingChanges',
    'success',
  ] as const

  const folders = [
    { key: 'work', name: homeT('folders.work'), desc: homeT('folders.workDesc') },
    { key: 'money', name: homeT('folders.money'), desc: homeT('folders.moneyDesc') },
    { key: 'home', name: homeT('folders.home'), desc: homeT('folders.homeDesc') },
    { key: 'health', name: homeT('folders.health'), desc: homeT('folders.healthDesc') },
    { key: 'legal', name: homeT('folders.legal'), desc: homeT('folders.legalDesc') },
    { key: 'school', name: homeT('folders.school'), desc: homeT('folders.schoolDesc') },
    { key: 'family', name: homeT('folders.family'), desc: homeT('folders.familyDesc') },
    { key: 'clients', name: homeT('folders.clients'), desc: homeT('folders.clientsDesc') },
    { key: 'projects', name: homeT('folders.projects'), desc: homeT('folders.projectsDesc') },
    { key: 'archive', name: homeT('folders.archive'), desc: homeT('folders.archiveDesc') },
    { key: 'review', name: homeT('folders.review'), desc: homeT('folders.reviewDesc') },
  ]

  const tips = [
    { title: t('tips.tip1Title'), desc: t('tips.tip1Desc') },
    { title: t('tips.tip2Title'), desc: t('tips.tip2Desc') },
    { title: t('tips.tip3Title'), desc: t('tips.tip3Desc') },
    { title: t('tips.tip4Title'), desc: t('tips.tip4Desc') },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* Overview */}
      <Section spacing="lg">
        <Container size="md">
          <p className="text-xl text-foreground/70 text-center mb-12">
            {t('overview')}
          </p>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold text-center mb-8">{t('timeline.title')}</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                t('timeline.step1'),
                t('timeline.step2'),
                t('timeline.step3'),
                t('timeline.step4'),
                t('timeline.step5'),
                t('timeline.step6'),
                t('timeline.step7'),
                t('timeline.step8'),
              ].map((step, i) => (
                <div key={i} className="flex items-center">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {step}
                  </span>
                  {i < 7 && (
                    <span className="hidden sm:block mx-2 text-foreground/30">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* The 8 Steps */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container size="md">
          <div className="space-y-6">
            {steps.map((stepKey) => (
              <div
                key={stepKey}
                className="flex gap-4 p-6 bg-background rounded-xl border border-foreground/10"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  {t(`steps.${stepKey}.number`)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t(`steps.${stepKey}.title`)}
                  </h3>
                  <p className="text-foreground/70">
                    {t(`steps.${stepKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 11 Smart Folders */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">{t('folders.title')}</h2>
            <p className="text-foreground/70">{t('folders.description')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {folders.map((folder) => (
              <div
                key={folder.key}
                className="p-3 rounded-lg bg-foreground/5 border border-foreground/10"
              >
                <div className="flex items-center gap-2 mb-1">
                  <FolderIcon className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{folder.name}</span>
                </div>
                <p className="text-xs text-foreground/60">{folder.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Activity Log & Undo */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container size="md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
              <UndoIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t('activityLog.title')}</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              {t('activityLog.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              t('activityLog.features.singleUndo'),
              t('activityLog.features.sessionUndo'),
              t('activityLog.features.fullRollback'),
              t('activityLog.features.crashRecovery'),
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-foreground/10">
                <CheckIcon className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tips */}
      <Section spacing="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold mb-8 text-center">{t('tips.title')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.desc}</CardDescription>
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
            <h2 className="text-2xl font-bold mb-4">{t('needHelp.title')}</h2>
            <p className="text-foreground/70 mb-6">
              {t('needHelp.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href={`/${locale}/support/faq`}>
                <Button variant="outline">{t('needHelp.viewFaq')}</Button>
              </NextLink>
              <NextLink href={`/${locale}/support/contact`}>
                <Button variant="primary">{t('needHelp.contactSupport')}</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
