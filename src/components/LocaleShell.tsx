import { Karla, Vollkorn } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import QueryProvider from '@/providers/QueryProvider'
import { Locale } from '@/i18n/types'
import '@/app/globals.css'

const vollkorn = Vollkorn({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-vollkorn',
  weight: ['400', '500', '600'],
})

const karla = Karla({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-karla',
  weight: ['400', '500', '700'],
})

export default function LocaleShell({
  lang,
  children,
}: {
  lang: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={lang} className={`${vollkorn.variable} ${karla.variable}`}>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
