'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  LightbulbIcon,
  FolderIcon,
  CursorClickIcon,
  UndoIcon,
  LockIcon,
  GlobeIcon,
} from '@/components/icons'

export function FeaturesSection() {
  const t = useTranslations('home.features')

  const features = [
    { icon: <LightbulbIcon />, title: t('aiClassification'), desc: t('aiClassificationDesc') },
    { icon: <FolderIcon />, title: t('smartFolders'), desc: t('smartFoldersDesc') },
    { icon: <CursorClickIcon />, title: t('oneClick'), desc: t('oneClickDesc') },
    { icon: <UndoIcon />, title: t('safeReversible'), desc: t('safeReversibleDesc') },
    { icon: <LockIcon />, title: t('privacyFirst'), desc: t('privacyFirstDesc') },
    { icon: <GlobeIcon />, title: t('fullyBilingual'), desc: t('fullyBilingualDesc') },
  ]

  return (
    <Section spacing="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
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
  )
}
