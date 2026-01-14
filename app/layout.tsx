import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://aifilesense.com'),
  title: {
    default: 'AI FileSense - AI-Powered File Organization for Windows',
    template: '%s | AI FileSense',
  },
  description:
    'Finally organize your Desktop, Documents, and Downloads without uploading anything to the cloud. Smart AI classification that respects your privacy.',
  keywords: [
    'file organization',
    'AI file manager',
    'Windows file organizer',
    'local file organization',
    'desktop organizer',
    'document management',
    'privacy-first',
    'AI classification',
  ],
  authors: [{ name: 'AI FileSense' }],
  creator: 'AI FileSense',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aifilesense.com',
    siteName: 'AI FileSense',
    title: 'AI FileSense - AI-Powered File Organization for Windows',
    description:
      'Finally organize your Desktop, Documents, and Downloads without uploading anything to the cloud. Smart AI classification that respects your privacy.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI FileSense - Smart File Organization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI FileSense - AI-Powered File Organization for Windows',
    description:
      'Finally organize your Desktop, Documents, and Downloads without uploading anything to the cloud.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
