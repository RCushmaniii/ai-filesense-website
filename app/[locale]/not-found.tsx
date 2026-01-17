import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import { PageHero } from '@/components/layout/page-hero'

export default function NotFound() {
  return (
    <>
      <PageHero
        title="404"
        subtitle="Page not found. The page you're looking for doesn't exist or has been moved."
        containerSize="md"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NextLink href="/en">
            <Button variant="primary">Go Home</Button>
          </NextLink>
          <NextLink href="/en/support">
            <Button variant="outline">Get Help</Button>
          </NextLink>
        </div>
      </PageHero>

      <Section spacing="lg">
        <Container size="md">
          <div className="text-center text-sm text-foreground/70">
            If you think this is a mistake, double-check the URL or head back to the homepage.
          </div>
        </Container>
      </Section>
    </>
  )
}
