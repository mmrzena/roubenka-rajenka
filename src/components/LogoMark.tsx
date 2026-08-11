export default function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`overflow-visible ${className}`} aria-hidden="true">
      <defs>
        <clipPath id="logo-sky">
          <path d="M-12 -26 H44 V12 H30 L16 2 L2 12 H-12 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-sky)" fill="#A3907C">
        <circle className="logo-puff" cx="17.6" cy="4.2" r="1.4" />
        <circle className="logo-puff logo-puff-2" cx="17.6" cy="4.2" r="1.8" />
        <circle className="logo-puff logo-puff-3" cx="17.6" cy="4.2" r="2.2" />
      </g>
      <path
        d="M16 2 L30 12 L2 12 Z"
        fill="#B0502C"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-[2px]"
      />
      <rect x="4" y="13" width="24" height="4" rx="1" fill="#2B2018" />
      <rect x="4" y="19" width="24" height="4" rx="1" fill="#2B2018" />
      <rect x="4" y="25" width="24" height="4" rx="1" fill="#2B2018" />
    </svg>
  )
}
