import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>
          © {year} {profile.name}, {profile.credentials}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-teal-400 transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
