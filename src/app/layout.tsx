import type { Metadata } from 'next'

import './globals.css'


export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A basic Todo App',
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
