import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Stack({
  children,
  spacing = 'md',
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        {
          'gap-2': spacing === 'sm',
          'gap-4': spacing === 'md',
          'gap-6': spacing === 'lg',
          'gap-8': spacing === 'xl',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
