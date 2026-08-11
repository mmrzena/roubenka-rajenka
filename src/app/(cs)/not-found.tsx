import Link from 'next/link'
import { cs } from '@/i18n/cs'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-4xl text-timber">{cs.notFound.title}</h1>
      <p className="text-timber-soft">{cs.notFound.body}</p>
      <Link
        href="/"
        className="btn-cut bg-terracotta px-6 py-3 font-medium text-chalk transition-colors hover:bg-terracotta-dark"
      >
        {cs.notFound.back}
      </Link>
    </main>
  )
}
