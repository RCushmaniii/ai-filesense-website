'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { FolderIcon, SparklesIcon } from '@/components/icons'

export function FoldersSection() {
  const t = useTranslations('home.folders')

  const folders = [
    { name: t('work'), desc: t('workDesc') },
    { name: t('personal'), desc: t('personalDesc') },
    { name: t('financial'), desc: t('financialDesc') },
    { name: t('medical'), desc: t('medicalDesc') },
    { name: t('legal'), desc: t('legalDesc') },
    { name: t('education'), desc: t('educationDesc') },
    { name: t('creative'), desc: t('creativeDesc') },
    { name: t('technical'), desc: t('technicalDesc') },
    { name: t('reference'), desc: t('referenceDesc') },
    { name: t('travel'), desc: t('travelDesc') },
    { name: t('archive'), desc: t('archiveDesc') },
    { name: t('review'), desc: t('reviewDesc') },
    { name: t('getStarted'), desc: t('getStartedDesc'), isSpecial: true },
  ]

  return (
    <Section spacing="lg" className="bg-foreground/[0.02]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
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
  )
}
