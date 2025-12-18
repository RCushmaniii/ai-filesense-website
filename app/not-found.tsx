import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export default function NotFound() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NextLink href="/">
              <Button variant="primary">Go Home</Button>
            </NextLink>
            <NextLink href="/work">
              <Button variant="outline">View Our Work</Button>
            </NextLink>
          </div>
        </div>
      </Container>
    </Section>
  )
}
