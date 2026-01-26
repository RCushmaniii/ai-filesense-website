import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/home/hero'
import { HowItWorks } from '@/components/home/how-it-works'
import { FeaturesSection } from '@/components/home/features-section'
import { FoldersSection } from '@/components/home/folders-section'
import { CTASection } from '@/components/home/cta-section'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <FoldersSection />
      <CTASection />
    </>
  )
}
