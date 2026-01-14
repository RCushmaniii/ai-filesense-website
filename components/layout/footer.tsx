'use client'

import NextLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Container } from './container'
import { LockFilledIcon } from '@/components/icons'

export function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')

  const navigation = {
    product: [
      { name: t('features'), href: `/${locale}/features` },
      { name: t('pricing'), href: `/${locale}/pricing` },
      { name: t('download'), href: `/${locale}/download` },
      { name: t('changelog'), href: `/${locale}/changelog` },
    ],
    support: [
      { name: t('faq'), href: `/${locale}/support/faq` },
      { name: t('gettingStarted'), href: `/${locale}/support/getting-started` },
      { name: t('contact'), href: `/${locale}/support/contact` },
    ],
    legal: [
      { name: t('privacyPolicy'), href: `/${locale}/privacy` },
      { name: t('termsOfService'), href: `/${locale}/terms` },
    ],
  }

  return (
    <footer className="border-t border-foreground/10 bg-background dark:bg-black dark:border-white/10">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Brand */}
            <div>
              <NextLink
                href={`/${locale}`}
                className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="sr-only">AI FileSense</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                  AI
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  <span className="text-primary">File</span>Sense
                </span>
              </NextLink>

              <p className="mt-4 max-w-md text-sm text-foreground/70">
                {t('tagline')}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-foreground/50">
                <LockFilledIcon className="w-4 h-4 text-secondary" />
                <span>{t('localPrivate')}</span>
              </div>

              <p className="mt-8 text-xs text-foreground/50">
                {t('copyright', { year: new Date().getFullYear() })}
              </p>
            </div>

            {/* Link Columns */}
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold">{t('product')}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.product.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </NextLink>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">{t('support')}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.support.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </NextLink>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold">{t('legal')}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.legal.map((item) => (
                    <NextLink
                      key={item.name}
                      href={item.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </NextLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
