import { useTheme, type ThemePreference } from '../lib/theme'

const options: { value: ThemePreference; label: string; shortLabel: string; icon: string }[] = [
  { value: 'system', label: 'System', shortLabel: 'Auto', icon: '◐' },
  { value: 'light', label: 'Light', shortLabel: 'Light', icon: '☀' },
  { value: 'dark', label: 'Dark', shortLabel: 'Dark', icon: '☾' },
]

interface ThemeSwitcherProps {
  /** Full labels on mobile menu */
  variant?: 'compact' | 'menu'
  onSelect?: () => void
}

export function ThemeSwitcher({ variant = 'compact', onSelect }: ThemeSwitcherProps) {
  const { preference, setPreference } = useTheme()

  const handleSelect = (value: ThemePreference) => {
    setPreference(value)
    onSelect?.()
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={
        variant === 'menu'
          ? 'flex flex-col gap-2'
          : 'inline-flex rounded-full border border-white/15 bg-white/[0.03] p-1'
      }
    >
      {variant === 'menu' && (
        <span className="text-xs font-medium tracking-widest uppercase text-slate-500 px-1">
          Theme
        </span>
      )}
      <div className={variant === 'menu' ? 'grid grid-cols-3 gap-2' : 'flex gap-0.5'}>
        {options.map((opt) => {
          const active = preference === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              aria-pressed={active}
              aria-label={`${opt.label} theme${opt.value === 'system' ? ' (follow system setting)' : ''}`}
              className={
                variant === 'menu'
                  ? `flex flex-col items-center justify-center gap-1 rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                      active
                        ? 'border-teal-500/50 bg-teal-500/15 text-teal-400'
                        : 'border-white/10 text-slate-400 hover:border-teal-500/30 hover:text-teal-400'
                    }`
                  : `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? 'bg-teal-500/20 text-teal-400 shadow-sm'
                        : 'text-slate-400 hover:text-teal-400'
                    }`
              }
            >
              <span aria-hidden className="text-sm leading-none">
                {opt.icon}
              </span>
              <span>{variant === 'menu' ? opt.label : opt.shortLabel}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
