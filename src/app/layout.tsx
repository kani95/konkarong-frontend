import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Konkarong',
  description: 'A task and expense tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
