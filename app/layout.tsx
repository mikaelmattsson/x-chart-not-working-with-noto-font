import type { Metadata } from 'next'
import ThemeProvider from './ThemeProvider'
import { notoSerif } from './fonts'

export const metadata: Metadata = {
  title: 'MUI X-Charts Demo',
  description: 'Next.js app with MUI X-Charts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSerif.variable}>
        {children}
      </body>
    </html>
  )
}
