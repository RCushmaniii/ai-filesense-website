'use client'

import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Container } from './container'
import { LanguageSwitcher } from './language-switcher'
import { Button } from '@/components/ui/button'
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

const DOWNLOAD_URL = 'https://github.com/RCushmaniii/ai-filesense-website/releases/download/v1.0.0/AI.FileSense_1.0.0_x64-setup.exe'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')

  const navItems = [
    { label: t('features'), href: `/${locale}/features` },
    { label: t('pricing'), href: `/${locale}/pricing` },
    { label: t('download'), href: `/${locale}/download` },
    { label: t('support'), href: `/${locale}/support` },
  ]

  useEffect(() => {
    // Sync state with actual DOM state set by inline script
    setDarkMode(document.documentElement.classList.contains('dark'))
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b transition-colors',
        darkMode
          ? 'border-white/10 bg-black text-white'
          : 'border-foreground/10 bg-white text-foreground'
      )}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <NextLink
            href={`/${locale}`}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="sr-only">AI FileSense</span>
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary text-white font-bold text-sm md:text-base">
              AI
            </div>
            <span className="text-lg md:text-xl font-semibold tracking-tight">
              <span className="text-primary">File</span>Sense
            </span>
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : darkMode
                      ? 'text-white/70'
                      : 'text-foreground/70'
                )}
              >
                {item.label}
              </NextLink>
            ))}

            {/* Download CTA */}
            <a href={DOWNLOAD_URL} download>
              <Button variant="primary" className="text-sm">
                {t('download')}
              </Button>
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label={t('toggleDarkMode')}
            >
              {mounted && (darkMode ? <SunIcon /> : <MoonIcon />)}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Switcher - Mobile */}
            <LanguageSwitcher className="mr-1" />

            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label={t('toggleDarkMode')}
            >
              {mounted && (darkMode ? <SunIcon /> : <MoonIcon />)}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                darkMode ? 'hover:bg-white/10' : 'hover:bg-foreground/5'
              )}
              aria-label={t('toggleMenu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              'md:hidden py-4 border-t',
              darkMode ? 'border-white/10' : 'border-foreground/10'
            )}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : darkMode
                        ? 'text-white/70'
                        : 'text-foreground/70'
                  )}
                >
                  {item.label}
                </NextLink>
              ))}
              <a href={DOWNLOAD_URL} download className="mt-2">
                <Button variant="primary" className="w-full">
                  {t('download')}
                </Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
