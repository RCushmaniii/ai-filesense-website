import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ProseProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Prose({ children, className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        'prose prose-slate dark:prose-invert max-w-none',
        // Headings
        'prose-headings:font-semibold prose-headings:text-foreground',
        'prose-h1:text-4xl prose-h1:mb-8',
        'prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6',
        'prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4',
        // Paragraphs
        'prose-p:text-foreground/80 prose-p:leading-relaxed',
        // Links
        'prose-a:text-primary prose-a:no-underline prose-a:font-medium',
        'hover:prose-a:underline hover:prose-a:underline-offset-4',
        // Lists
        'prose-ul:text-foreground/80 prose-ol:text-foreground/80',
        'prose-li:marker:text-primary',
        // Code
        'prose-code:text-primary prose-code:bg-foreground/5',
        'prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
        'prose-code:before:content-none prose-code:after:content-none',
        // Pre (code blocks)
        'prose-pre:bg-foreground/5 prose-pre:border prose-pre:border-foreground/10',
        // Blockquotes
        'prose-blockquote:border-l-primary prose-blockquote:text-foreground/70',
        'prose-blockquote:not-italic',
        // Images
        'prose-img:rounded-lg',
        // Strong
        'prose-strong:text-foreground prose-strong:font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
