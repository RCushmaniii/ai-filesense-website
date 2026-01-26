'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { LockFilledIcon, CheckIcon, ArrowRightIcon, PlayIcon } from '@/components/icons'
import Image from 'next/image'

export function Hero() {
  const t = useTranslations('home.hero')
  const common = useTranslations('common')

  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Creative textured background - mesh variant */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10" />
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl opacity-40" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8">
            <LockFilledIcon className="w-4 h-4" />
            {t('badge')}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t('title')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/download">
              <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto group">
                {common('downloadFree')}
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto">
                <PlayIcon className="mr-2 w-5 h-5" />
                {common('seeHowItWorks')}
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60">
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-secondary" />
              {t('stat1')}
            </span>
            <span className="hidden sm:inline text-foreground/30">•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-secondary" />
              {t('stat2')}
            </span>
            <span className="hidden sm:inline text-foreground/30">•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="w-4 h-4 text-secondary" />
              {t('stat3')}
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
          {/* Decorative glow under screenshot */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-3xl rounded-full" />
        </div>
      </Container>
    </Section>
  )
}
