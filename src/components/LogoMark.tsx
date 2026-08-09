export default function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`overflow-visible ${className}`} aria-hidden="true">
      <defs>
        <clipPath id="logo-sky">
          <path d="M-12 -26 H44 V12 H30 L16 2 L2 12 H-12 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-sky)">
        <g transform="translate(6.5 -1)">
          <g className="logo-hand" fill="#E5A33F">
            <rect x="14.6" y="-2.5" width="3.2" height="7" rx="1.6" />
            <rect x="12" y="-6" width="8.2" height="6" rx="2.8" />
            <rect x="12.1" y="-9.7" width="1.7" height="5" rx="0.85" />
            <rect x="14.2" y="-10.6" width="1.7" height="6" rx="0.85" />
            <rect x="16.3" y="-10.3" width="1.7" height="5.6" rx="0.85" />
            <rect x="18.4" y="-9.4" width="1.7" height="4.6" rx="0.85" />
            <rect
              x="9.9"
              y="-5.2"
              width="3.6"
              height="1.9"
              rx="0.95"
              transform="rotate(-32 11.7 -4.2)"
            />
          </g>
        </g>
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
