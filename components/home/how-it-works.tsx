'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { ClipboardIcon, EyeIcon, CheckSimpleIcon } from '@/components/icons'

export function HowItWorks() {
  const t = useTranslations('home.solution')

  const steps = [
    { step: '1', title: t('step1Title'), desc: t('step1Desc'), icon: <ClipboardIcon /> },
    { step: '2', title: t('step2Title'), desc: t('step2Desc'), icon: <EyeIcon /> },
    { step: '3', title: t('step3Title'), desc: t('step3Desc'), icon: <CheckSimpleIcon /> },
  ]

  return (
    <Section spacing="lg" className="bg-foreground/[0.02]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
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
  )
}
