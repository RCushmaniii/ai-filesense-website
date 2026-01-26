import Image from 'next/image'
import { ReactNode } from 'react'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: ReactNode
  subtitle?: ReactNode
  imageSrc?: string
  imageAlt?: string
  children?: ReactNode
  align?: 'left' | 'center'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  priorityImage?: boolean
  variant?: 'default' | 'mesh' | 'dots' | 'waves' | 'glow'
}

function HeroBackground({ variant }: { variant: PageHeroProps['variant'] }) {
  switch (variant) {
    case 'mesh':
      return (
        <>
          {/* Gradient mesh background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10" />
          {/* Floating gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl opacity-40" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </>
      )
    case 'dots':
      return (
        <>
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/15 dark:via-background dark:to-background" />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />
          {/* Accent glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] opacity-70" />
        </>
      )
    case 'waves':
      return (
        <>
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10" />
          {/* Wave shapes using CSS */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-48 text-primary/5 dark:text-primary/10"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-32 text-secondary/5 dark:text-secondary/10"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          {/* Top accent */}
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50" />
        </>
      )
    case 'glow':
      return (
        <>
          {/* Dark base for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-background dark:from-foreground/[0.05] dark:to-background" />
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 dark:bg-primary/25 rounded-full blur-[120px]" />
          {/* Secondary glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[100px] opacity-60" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 dark:bg-primary/15 rounded-full blur-[80px] opacity-50" />
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )
    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-background to-foreground/5" />
      )
  }
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  children,
  align = 'center',
  containerSize = 'lg',
  priorityImage = false,
  variant = 'mesh',
}: PageHeroProps) {
  return (
    <Section
      spacing="xl"
      className="relative overflow-hidden"
    >
      {imageSrc ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priorityImage}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background/95 dark:from-background/70 dark:via-background/60 dark:to-background/90" />
        </>
      ) : (
        <HeroBackground variant={variant} />
      )}

      <Container size={containerSize}>
        <div
          className={cn('relative mx-auto max-w-4xl', {
            'text-center': align === 'center',
            'text-left': align === 'left',
          })}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </Container>
    </Section>
  )
}
