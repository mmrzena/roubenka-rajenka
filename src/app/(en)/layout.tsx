import type { Metadata } from 'next'
import LocaleShell from '@/components/LocaleShell'
import { buildMetadata } from '@/lib/metadata'
import { en } from '@/i18n/en'

export const metadata: Metadata = buildMetadata(en)

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="en">{children}</LocaleShell>
}
