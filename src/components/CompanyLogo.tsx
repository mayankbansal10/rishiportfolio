import { getCompanyBrand } from '../data/companies'

interface CompanyLogoProps {
  company: string
  size?: 'sm' | 'md' | 'lg'
  showName?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-6 w-auto max-w-[72px]',
  md: 'h-8 w-auto max-w-[96px]',
  lg: 'h-10 w-auto max-w-[120px]',
}

export function CompanyLogo({
  company,
  size = 'md',
  showName = false,
  className = '',
}: CompanyLogoProps) {
  const brand = getCompanyBrand(company)

  if (!brand) {
    const initials = company
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase()
    return (
      <div
        className={`flex items-center gap-2 ${className}`}
        title={company}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-bold text-slate-400">
          {initials}
        </span>
        {showName && (
          <span className="text-sm text-slate-400 truncate">{company}</span>
        )}
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      title={brand.name}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className={`${sizeClasses[size]} object-contain opacity-90 hover:opacity-100 transition-opacity`}
      />
      {showName && (
        <span className="text-sm text-slate-400">{brand.name}</span>
      )}
    </div>
  )
}
