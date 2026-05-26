import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Theme = 'light' | 'dark'
export type ThemePreference = Theme | 'system'

interface ThemeContextValue {
  theme: Theme
  preference: ThemePreference
  setPreference: (value: ThemePreference) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const THEME_STORAGE_KEY = 'rishi-theme-preference'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>('system')
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null
    const nextPreference: ThemePreference =
      stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
    setPreferenceState(nextPreference)
    setTheme(nextPreference === 'system' ? getSystemTheme() : nextPreference)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = () => {
      setTheme((current) => {
        if (preference !== 'system') return current
        return mediaQuery.matches ? 'dark' : 'light'
      })
    }
    mediaQuery.addEventListener('change', onSystemChange)
    return () => mediaQuery.removeEventListener('change', onSystemChange)
  }, [preference])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  const setPreference = (value: ThemePreference) => {
    setPreferenceState(value)
    window.localStorage.setItem(THEME_STORAGE_KEY, value)
    setTheme(value === 'system' ? getSystemTheme() : value)
  }

  const toggleTheme = () => {
    setPreference(theme === 'dark' ? 'light' : 'dark')
  }

  const contextValue = useMemo(
    () => ({ theme, preference, setPreference, toggleTheme }),
    [theme, preference],
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
