import '@/styles/globals.css'

// Root layout is minimal - main layout is in [locale]/layout.tsx
// This file only imports global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
