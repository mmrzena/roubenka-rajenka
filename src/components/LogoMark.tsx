export default function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <clipPath id="logo-wall">
          <rect x="2" y="12" width="28" height="18" />
        </clipPath>
      </defs>
      <path className="logo-roof" d="M16 2 L30 12 L2 12 Z" fill="#B0502C" />
      <g clipPath="url(#logo-wall)" fill="#2B2018">
        <rect className="logo-beam logo-beam-3" x="4" y="13" width="24" height="4" rx="1" />
        <rect className="logo-beam logo-beam-2" x="4" y="19" width="24" height="4" rx="1" />
        <rect className="logo-beam logo-beam-1" x="4" y="25" width="24" height="4" rx="1" />
      </g>
    </svg>
  )
}
