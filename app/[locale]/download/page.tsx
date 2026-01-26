import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { PageHero } from '@/components/layout/page-hero'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'
import {
  CheckCircleIcon,
  LightningIcon,
  CheckIcon,
  FolderIcon,
  UndoIcon,
  LockFilledIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download AI FileSense for Windows. Free AI-powered file organization that keeps your files private.',
}

const DOWNLOAD_URL = 'https://github.com/RCushmaniii/ai-filesense-website/releases/download/v1.0.0/AI.FileSense_1.0.0_x64-setup.exe'

export default async function DownloadPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('download')

  const quickStartSteps = [
    { title: t('quickStart.step1'), desc: t('quickStart.step1Desc') },
    { title: t('quickStart.step2'), desc: t('quickStart.step2Desc') },
    { title: t('quickStart.step3'), desc: t('quickStart.step3Desc') },
    { title: t('quickStart.step4'), desc: t('quickStart.step4Desc') },
    { title: t('quickStart.step5'), desc: t('quickStart.step5Desc') },
  ]

  return (
    <>
      <PageHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="dots"
      />

      {/* Main Download Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader className="py-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl">
                  FS
                </div>
                <CardTitle className="text-2xl mb-2">AI FileSense for Windows</CardTitle>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Badge variant="secondary">{t('badge')}</Badge>
                  <span className="text-sm text-foreground/60">{t('size')}</span>
                </div>

                <a href={DOWNLOAD_URL} download>
                  <Button variant="primary" className="text-lg px-10 py-4 mb-4">
                    {t('button')}
                  </Button>
                </a>

                <p className="text-sm text-foreground/50 mb-6">
                  {t('platform')}
                </p>

                {/* Feature badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-xs">
                    <LockFilledIcon className="w-3 h-3 text-secondary" />
                    {t('features.local')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-xs">
                    <FolderIcon className="w-3 h-3 text-primary" />
                    {t('features.folders')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-xs">
                    <UndoIcon className="w-3 h-3 text-primary" />
                    {t('features.undo')}
                  </span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Quick Start */}
      <Section spacing="lg" className="bg-foreground/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">{t('quickStart.title')}</h2>
              <p className="text-foreground/70">{t('quickStart.subtitle')}</p>
            </div>

            <div className="space-y-5">
              {quickStartSteps.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-background rounded-xl border border-foreground/10">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* System Requirements */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">{t('requirements.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-foreground/60" />
                    {t('requirements.minTitle')}
                  </CardTitle>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-secondary" />
                      {t('requirements.minOS')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-secondary" />
                      {t('requirements.minRAM')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-secondary" />
                      {t('requirements.minDisk')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-secondary" />
                      {t('requirements.minNet')}
                    </li>
                  </ul>
                </CardHeader>
              </Card>

              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <LightningIcon className="w-5 h-5 text-primary" />
                    {t('requirements.recTitle')}
                  </CardTitle>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      {t('requirements.recOS')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      {t('requirements.recRAM')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      {t('requirements.recDisk')}
                    </li>
                    <li className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckIcon className="w-4 h-4 text-primary" />
                      {t('requirements.recNet')}
                    </li>
                  </ul>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Help Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t('help.title')}</h2>
            <p className="text-foreground/70 mb-6">
              {t('help.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href={`/${locale}/support/getting-started`}>
                <Button variant="outline">{t('help.gettingStarted')}</Button>
              </NextLink>
              <NextLink href={`/${locale}/support/faq`}>
                <Button variant="outline">{t('help.faq')}</Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
