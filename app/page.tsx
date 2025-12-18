import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NextLink from 'next/link'
import { getAllWork } from '@/lib/mdx'

export default function HomePage() {
  const featuredWork = getAllWork().slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-gradient-to-b from-background to-foreground/5">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              We Build{' '}
              <span className="text-primary">Exceptional</span>{' '}
              Web Experiences
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 text-balance">
              Production-grade websites and applications crafted with Next.js, TypeScript, and modern design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextLink href="/work">
                <Button variant="primary" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </NextLink>
              <NextLink href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We specialize in building fast, accessible, and beautiful web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Modern, performant websites built with Next.js and TypeScript for optimal user experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>
                  Beautiful, intuitive interfaces designed with accessibility and user needs at the forefront.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Lightning-fast load times and optimal Core Web Vitals for better SEO and user engagement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section spacing="lg" className="bg-foreground/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A proven approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals, audience, and requirements.' },
              { step: '02', title: 'Design', description: 'Creating beautiful, functional designs aligned with your brand.' },
              { step: '03', title: 'Development', description: 'Building with modern tech and best practices.' },
              { step: '04', title: 'Launch', description: 'Deploying, monitoring, and optimizing for success.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Recent projects we're proud of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((work) => (
              <NextLink key={work.slug} href={`/work/${work.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {work.tech?.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle>{work.title}</CardTitle>
                    <CardDescription>{work.description}</CardDescription>
                  </CardHeader>
                </Card>
              </NextLink>
            ))}
          </div>

          <div className="text-center mt-12">
            <NextLink href="/work">
              <Button variant="outline">View All Work</Button>
            </NextLink>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section spacing="lg" className="bg-foreground/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-foreground/80 mb-4 italic">
                      "Working with this team was an absolute pleasure. They delivered a beautiful, performant website that exceeded our expectations."
                    </p>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-foreground/70">CEO, Acme Corp</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-foreground/80 mb-4 italic">
                      "Their attention to detail and technical expertise helped us launch ahead of schedule. Highly recommended!"
                    </p>
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-foreground/70">Founder, Bloom</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <NextLink href="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                Get In Touch
              </Button>
            </NextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
