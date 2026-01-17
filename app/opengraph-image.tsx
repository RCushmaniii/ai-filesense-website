import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AI FileSense - Smart File Organization'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f13',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16162a 0%, transparent 50%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            backgroundColor: '#6366f1',
            borderRadius: 24,
            marginBottom: 40,
            fontSize: 48,
            fontWeight: 700,
            color: 'white',
          }}
        >
          FS
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          AI FileSense
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: 48,
          }}
        >
          Smart File Organization for Windows
        </div>

        {/* Features row */}
        <div
          style={{
            display: 'flex',
            gap: 32,
          }}
        >
          {['AI-Powered', 'Privacy-First', 'Local-Only'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                padding: '12px 24px',
                borderRadius: 50,
                color: '#a5b4fc',
                fontSize: 20,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#22c55e">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
