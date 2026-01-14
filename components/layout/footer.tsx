import NextLink from 'next/link'
import { Container } from './container'

const navigation = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Download', href: '/download' },
    { name: 'Changelog', href: '/changelog' },
  ],
  support: [
    { name: 'FAQ', href: '/support/faq' },
    { name: 'Getting Started', href: '/support/getting-started' },
    { name: 'Contact', href: '/support/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background dark:bg-black dark:border-white/10">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Brand */}
            <div>
              <NextLink
                href="/"
                className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="sr-only">AI FileSense</span>
                {/* Logo Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white font-bold text-sm">
                  AI
                </div>
                {/* Logo Text */}
                <span className="text-lg font-semibold tracking-tight">
                  <span className="text-primary">File</span>Sense
                </span>
              </NextLink>

              <p className="mt-4 max-w-md text-sm text-foreground/70">
                AI-powered file organization for Windows. Your files stay on your computer — only filenames are sent to AI for smart classification.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-foreground/50">
                <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>100% Local & Private</span>
              </div>

              <p className="mt-8 text-xs text-foreground/50">
                &copy; {new Date().getFullYear()} AI FileSense. All rights reserved.
              </p>
            </div>

            {/* Link Columns */}
            <div className="grid gap-10 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold">Product</h3>
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
                <h3 className="text-sm font-semibold">Support</h3>
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
                <h3 className="text-sm font-semibold">Legal</h3>
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
