export default function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 2 L30 12 L2 12 Z" fill="#B0502C" />
      <rect x="4" y="13" width="24" height="4" rx="1" fill="#2B2018" />
      <rect x="4" y="19" width="24" height="4" rx="1" fill="#2B2018" />
      <rect x="4" y="25" width="24" height="4" rx="1" fill="#2B2018" />
    </svg>
  )
}
