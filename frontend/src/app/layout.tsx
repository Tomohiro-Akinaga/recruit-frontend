import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans_JP({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='jp'>
      <body className={`${noto.variable}`}>{children}</body>
    </html>
  )
}
