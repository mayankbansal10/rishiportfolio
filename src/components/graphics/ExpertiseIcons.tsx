interface IconProps {
  className?: string
}

export function ShieldIcon({ className = 'w-10 h-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 4L8 9v8c0 7.5 5.2 14.5 12 17 6.8-2.5 12-9.5 12-17V9L20 4z"
        stroke="url(#shieldGrad)"
        strokeWidth="1.5"
        fill="rgba(45,212,191,0.08)"
      />
      <path d="M20 14v8M16 18h8" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="shieldGrad" x1="8" y1="4" x2="32" y2="34">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#d4a853" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function AutomationIcon({ className = 'w-10 h-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="8" stroke="#2dd4bf" strokeWidth="1.5" fill="rgba(45,212,191,0.06)" />
      <circle cx="20" cy="20" r="3" fill="#2dd4bf" fillOpacity="0.5" />
      <path
        d="M20 6v4M20 30v4M6 20h4M30 20h4M9.5 9.5l2.8 2.8M27.7 27.7l2.8 2.8M9.5 30.5l2.8-2.8M27.7 12.3l2.8-2.8"
        stroke="#14b8a6"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-spin-slow"
        style={{ transformOrigin: '20px 20px' }}
      />
    </svg>
  )
}

export function CloudIcon({ className = 'w-10 h-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M12 28h18a6 6 0 0 0 1.2-11.9A8 8 0 0 0 14 14a5.5 5.5 0 0 0-2 14z"
        stroke="url(#cloudGrad)"
        strokeWidth="1.5"
        fill="rgba(45,212,191,0.08)"
      />
      <circle cx="28" cy="16" r="2" fill="#d4a853" fillOpacity="0.8" />
      <defs>
        <linearGradient id="cloudGrad" x1="10" y1="14" x2="32" y2="28">
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function ChartIcon({ className = 'w-10 h-10' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="8" y="26" width="5" height="8" rx="1" fill="#2dd4bf" fillOpacity="0.6" />
      <rect x="17" y="18" width="5" height="16" rx="1" fill="#2dd4bf" fillOpacity="0.8" />
      <rect x="26" y="10" width="5" height="24" rx="1" fill="url(#barGrad)" />
      <path d="M8 12 L17 18 L26 10 L32 6" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="barGrad" x1="26" y1="10" x2="31" y2="34">
          <stop stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#d4a853" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const expertiseIcons = [ShieldIcon, AutomationIcon, CloudIcon, ChartIcon]
