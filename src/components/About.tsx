import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <svg
        className="absolute left-0 top-20 w-48 h-48 opacity-[0.07] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <path
          d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1"
        />
        <path
          d="M100 50 L150 75 L150 125 L100 150 L50 125 L50 75 Z"
          fill="none"
          stroke="#d4a853"
          strokeWidth="0.75"
          strokeDasharray="6 8"
          className="animate-spin-slow"
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
            {profile.aboutHeading}
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-28 h-28 rounded-2xl object-cover object-top border border-white/10 shrink-0 md:hidden"
                width={112}
                height={112}
              />
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed flex-1">
                {profile.summary.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="rounded-2xl border border-white/8 bg-navy-900/80 p-6">
                <h3 className="text-white font-medium mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
                <h3 className="text-teal-400 font-medium mb-2">Mission</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {profile.mission}
                </p>
              </div>

              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/8 p-6 hover:border-teal-500/30 transition-colors group"
                >
                  <span className="text-white group-hover:text-teal-400 transition-colors">
                    rishijain.io
                  </span>
                  <span className="text-slate-500 group-hover:text-teal-400">→</span>
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {profile.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-gold-500/30 bg-gold-500/5 px-3 py-1.5 text-xs sm:text-sm text-gold-400"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <img
                src={profile.photo}
                alt={`${profile.name} — ${profile.title}`}
                className="w-full aspect-[4/5] object-cover object-top hidden md:block"
                width={400}
                height={500}
              />
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="hidden md:flex items-center justify-between rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 hover:border-teal-500/40 transition-colors group"
            >
              <span className="text-teal-400 group-hover:text-teal-300 transition-colors text-sm">
                {profile.email}
              </span>
              <span className="text-slate-500 group-hover:text-teal-400">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
