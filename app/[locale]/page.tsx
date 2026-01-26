import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  LockFilledIcon,
  CheckIcon,
  ClipboardIcon,
  EyeIcon,
  CheckSimpleIcon,
  LightbulbIcon,
  LockIcon,
  UndoIcon,
  FolderIcon,
  GlobeIcon,
  CursorClickIcon,
  SparklesIcon,
} from '@/components/icons'

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('home')
  const common = await getTranslations('common')

  const steps = [
    { step: '1', title: t('solution.step1Title'), desc: t('solution.step1Desc'), icon: <ClipboardIcon /> },
    { step: '2', title: t('solution.step2Title'), desc: t('solution.step2Desc'), icon: <EyeIcon /> },
    { step: '3', title: t('solution.step3Title'), desc: t('solution.step3Desc'), icon: <CheckSimpleIcon /> },
  ]

  const features = [
    { icon: <LightbulbIcon />, title: t('features.aiClassification'), desc: t('features.aiClassificationDesc') },
    { icon: <FolderIcon />, title: t('features.smartFolders'), desc: t('features.smartFoldersDesc') },
    { icon: <CursorClickIcon />, title: t('features.oneClick'), desc: t('features.oneClickDesc') },
    { icon: <UndoIcon />, title: t('features.safeReversible'), desc: t('features.safeReversibleDesc') },
    { icon: <LockIcon />, title: t('features.privacyFirst'), desc: t('features.privacyFirstDesc') },
    { icon: <GlobeIcon />, title: t('features.fullyBilingual'), desc: t('features.fullyBilingualDesc') },
  ]

  const folders = [
    { name: t('folders.work'), desc: t('folders.workDesc') },
    { name: t('folders.personal'), desc: t('folders.personalDesc') },
    { name: t('folders.financial'), desc: t('folders.financialDesc') },
    { name: t('folders.medical'), desc: t('folders.medicalDesc') },
    { name: t('folders.legal'), desc: t('folders.legalDesc') },
    { name: t('folders.education'), desc: t('folders.educationDesc') },
    { name: t('folders.creative'), desc: t('folders.creativeDesc') },
    { name: t('folders.technical'), desc: t('folders.technicalDesc') },
    { name: t('folders.reference'), desc: t('folders.referenceDesc') },
    { name: t('folders.archive'), desc: t('folders.archiveDesc') },
    { name: t('folders.review'), desc: t('folders.reviewDesc') },
    { name: t('folders.getStarted'), desc: t('folders.getStartedDesc'), isSpecial: true },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8">
              <LockFilledIcon className="w-4 h-4" />
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t('hero.title')}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <NextLink href={`/${locale}/download`}>
                <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto">
                  {common('downloadFree')}
                </Button>
              </NextLink>
              <NextLink href={`/${locale}/features`}>
                <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                  {common('seeHowItWorks')}
                </Button>
              </NextLink>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <CheckIcon className="w-4 h-4 text-secondary" />
                {t('hero.stat1')}
              </span>
              <span className="hidden sm:inline text-foreground/30">•</span>
              <span className="flex items-center gap-1">
                <CheckIcon className="w-4 h-4 text-secondary" />
                {t('hero.stat2')}
              </span>
              <span className="hidden sm:inline text-foreground/30">•</span>
              <span className="flex items-center gap-1">
                <CheckIcon className="w-4 h-4 text-secondary" />
                {t('hero.stat3')}
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

      {/* How It Works - 3 Steps */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('solution.title')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
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
            {folders.map((folder, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg transition-colors ${
                  'isSpecial' in folder && folder.isSpecial
                    ? 'bg-primary/10 border-2 border-primary/30 hover:border-primary/50'
                    : 'bg-background border border-foreground/10 hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {'isSpecial' in folder && folder.isSpecial ? (
                    <SparklesIcon className="w-5 h-5 text-primary" />
                  ) : (
                    <FolderIcon className="w-5 h-5 text-primary" />
                  )}
                  <span className={`font-semibold ${'isSpecial' in folder && folder.isSpecial ? 'text-primary' : ''}`}>
                    {folder.name}
                  </span>
                </div>
                <p className="text-sm text-foreground/60">{folder.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="lg" className="bg-primary/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-xl text-foreground/70 mb-8">
              {t('cta.subtitle')}
            </p>
            <NextLink href={`/${locale}/download`}>
              <Button variant="primary" className="text-lg px-8 py-4">
                {t('cta.button')}
              </Button>
            </NextLink>
            <p className="mt-6 text-sm text-foreground/50">
              {t('cta.specs')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
