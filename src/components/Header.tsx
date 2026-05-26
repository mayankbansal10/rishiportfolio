import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { ResumeLink } from './ResumeLink'
import { ThemeSwitcher } from './ThemeSwitcher'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-base sm:text-lg text-white tracking-tight hover:text-teal-400 transition-colors whitespace-nowrap"
        >
          {profile.name}, {profile.credentials}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher />
          <ResumeLink className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-slate-300 hover:border-teal-500/50 hover:text-teal-400 transition-all" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-2 text-sm font-medium text-teal-400 hover:bg-teal-500/20 transition-all"
          >
            Connect
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-navy-950/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-slate-300 hover:text-teal-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher variant="menu" onSelect={() => setMenuOpen(false)} />
          <ResumeLink
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-slate-300 font-medium"
            onClick={() => setMenuOpen(false)}
          />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-3 text-teal-400 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </nav>
      )}
    </header>
  )
}
