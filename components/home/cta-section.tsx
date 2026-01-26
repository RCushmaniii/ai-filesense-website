'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@/components/icons'

export function CTASection() {
  const t = useTranslations('home.cta')

  return (
    <Section spacing="lg" className="bg-primary/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px]" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
          <p className="text-xl text-foreground/70 mb-8">
            {t('subtitle')}
          </p>
          <Link href="/download">
            <Button variant="primary" className="text-lg px-8 py-4 group">
              {t('button')}
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-foreground/50">
            {t('specs')}
          </p>
        </div>
      </Container>
    </Section>
  )
}
