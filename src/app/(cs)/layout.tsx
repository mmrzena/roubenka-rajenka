import type { Metadata } from 'next'
import LocaleShell from '@/components/LocaleShell'
import { buildMetadata } from '@/lib/metadata'
import { cs } from '@/i18n/cs'

export const metadata: Metadata = buildMetadata(cs)

export default function CzechLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="cs">{children}</LocaleShell>
}
