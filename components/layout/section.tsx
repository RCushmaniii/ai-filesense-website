import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  spacing = 'lg',
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          'py-12': spacing === 'sm',
          'py-16 md:py-20': spacing === 'md',
          'py-20 md:py-28': spacing === 'lg',
          'py-24 md:py-32': spacing === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
