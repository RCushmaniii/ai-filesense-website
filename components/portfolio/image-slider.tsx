'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ImageSliderProps {
  images: { src: string; alt: string }[]
  className?: string
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
}

export function ImageSlider({ images, className }: ImageSliderProps) {
  const [[current, direction], setCurrent] = useState([0, 0])

  const paginate = useCallback(
    (newDirection: number) => {
      const next = current + newDirection
      if (next < 0 || next >= images.length) return
      setCurrent([next, newDirection])
    },
    [current, images.length]
  )

  const goTo = useCallback(
    (index: number) => {
      setCurrent([index, index > current ? 1 : -1])
    },
    [current]
  )

  if (!images || images.length === 0) return null

  return (
    <div className={cn('my-8', className)}>
      {/* Slider container */}
      <div className="relative rounded-xl border border-foreground/10 overflow-hidden bg-foreground/5">
        <div className="relative aspect-[16/9]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 720px, 100vw"
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {current > 0 && (
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />
            </button>
          )}
          {current < images.length - 1 && (
            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-5 h-5 text-white" />
            </button>
          )}

          {/* Counter badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium z-10">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-200',
              index === current
                ? 'bg-primary w-6'
                : 'bg-foreground/20 hover:bg-foreground/40'
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
