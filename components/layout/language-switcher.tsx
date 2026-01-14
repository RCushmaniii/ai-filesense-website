'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    // Replace current locale in pathname with new locale
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    // Store preference in localStorage
    localStorage.setItem('preferred-locale', newLocale)

    router.push(newPath)
  }

  return (
    <nav aria-label="Language switcher" className={cn('flex items-center', className)}>
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && (
            <span className="mx-1.5 text-foreground/30 select-none" aria-hidden="true">|</span>
          )}
          <button
            onClick={() => switchLocale(loc)}
            disabled={locale === loc}
            className={cn(
              'px-1 py-0.5 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              locale === loc
                ? 'text-primary font-bold cursor-default'
                : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
            )}
            aria-current={locale === loc ? 'true' : undefined}
            aria-label={loc === 'en' ? 'Switch to English' : 'Cambiar a Espanol'}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </nav>
  )
}
