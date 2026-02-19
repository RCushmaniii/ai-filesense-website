'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface VideoBriefProps {
  poster: string
  videoUrl?: string
  alt?: string
  className?: string
}

function PlayIconSvg({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIconSvg({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  )
}

export function VideoBrief({ poster, videoUrl, alt = 'Video brief', className }: VideoBriefProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (!videoUrl) return
    setIsPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  const handlePause = () => {
    videoRef.current?.pause()
    setIsPlaying(false)
  }

  return (
    <div className={cn('my-8 rounded-xl border border-foreground/10 overflow-hidden shadow-lg', className)}>
      {!isPlaying ? (
        <button
          onClick={videoUrl ? handlePlay : undefined}
          className={cn(
            'relative w-full block group',
            videoUrl ? 'cursor-pointer' : 'cursor-default'
          )}
          aria-label={videoUrl ? 'Play video brief' : alt}
        >
          <Image
            src={poster}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
          {videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <PlayIconSvg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
              </div>
            </div>
          )}
        </button>
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={poster}
            controls
            className="w-full h-auto"
            playsInline
            onEnded={() => setIsPlaying(false)}
          />
          <button
            onClick={handlePause}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <PauseIconSvg className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  )
}
