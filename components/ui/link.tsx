import NextLink from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function Link({ href, children, className, ...props }: LinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('https')
  const isHash = href.startsWith('#')

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(
          'text-primary hover:text-primary/80 transition-colors duration-200',
          'underline-offset-4 hover:underline',
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  if (isHash) {
    return (
      <a
        href={href}
        className={cn(
          'text-primary hover:text-primary/80 transition-colors duration-200',
          'underline-offset-4 hover:underline',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={cn(
        'text-primary hover:text-primary/80 transition-colors duration-200',
        'underline-offset-4 hover:underline',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
