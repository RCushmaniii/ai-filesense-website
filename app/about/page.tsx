import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and the team behind Agency.',
}

export default function AboutPage() {
  return (
    <>
      <Section spacing="lg">
        <Container size="md">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-foreground/70 mb-12">
            We're a team of passionate developers and designers committed to building exceptional web experiences.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Our Mission</h2>
            <p>
              We believe that great web experiences shouldn't be complicated or expensive. Our mission is to deliver production-grade websites and applications that combine beautiful design with cutting-edge technology.
            </p>

            <h2>What We Value</h2>
            <ul>
              <li><strong>Quality</strong> - We never compromise on code quality or user experience</li>
              <li><strong>Performance</strong> - Every site we build is optimized for speed and accessibility</li>
              <li><strong>Transparency</strong> - Clear communication and honest timelines</li>
              <li><strong>Innovation</strong> - We stay current with the latest web technologies</li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              We work closely with our clients to understand their goals and deliver solutions that exceed expectations. Every project follows our proven process: Discovery, Design, Development, and Launch.
            </p>

            <p>
              Whether you're a startup looking to launch your first product or an established business in need of a refresh, we're here to help bring your vision to life.
            </p>
          </div>

          <div className="mt-12">
            <NextLink href="/contact">
              <Button variant="primary">Let's Work Together</Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
