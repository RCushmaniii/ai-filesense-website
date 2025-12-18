import { Metadata } from 'next'
import NextLink from 'next/link'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllWork } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Browse our portfolio of web development projects and case studies.',
}

export default function WorkPage() {
  const work = getAllWork()

  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped clients achieve their goals.
            </p>
          </div>

          {work.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">
                No work items found. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {work.map((item) => (
                <NextLink key={item.slug} href={`/work/${item.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tech?.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      {item.client && (
                        <p className="text-sm text-foreground/50 mb-2">
                          {item.client}
                        </p>
                      )}
                      <CardDescription>{item.description}</CardDescription>
                      <p className="text-sm text-foreground/50 mt-4">
                        {formatDate(item.date)}
                      </p>
                    </CardHeader>
                  </Card>
                </NextLink>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
