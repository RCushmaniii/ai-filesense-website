import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  localeDetection: true,
})

export const config = {
  // Match all pathnames except static files and API routes
  matcher: ['/', '/(en|es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
