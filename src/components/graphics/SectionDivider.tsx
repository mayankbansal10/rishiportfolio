interface SectionDividerProps {
  variant?: 'wave' | 'slant'
  flip?: boolean
}

export function SectionDivider({ variant = 'wave', flip = false }: SectionDividerProps) {
  if (variant === 'slant') {
    return (
      <div
        className={`relative h-16 md:h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}
        aria-hidden
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 Q360,80 720,40 T1440,40 L1440,80 L0,80 Z"
            fill="#0a1628"
            fillOpacity="0.6"
          />
          <path
            d="M0,50 Q360,10 720,50 T1440,50"
            fill="none"
            stroke="url(#dividerGrad)"
            strokeWidth="1"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="dividerGrad" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#d4a853" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  return (
    <div className={`relative h-12 overflow-hidden ${flip ? 'scale-y-[-1]' : ''}`} aria-hidden>
      <svg
        className="absolute w-full h-24 -top-6"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,24 C240,0 480,48 720,24 C960,0 1200,48 1440,24 L1440,48 L0,48 Z"
          fill="#0a1628"
          fillOpacity="0.5"
        />
      </svg>
    </div>
  )
}
