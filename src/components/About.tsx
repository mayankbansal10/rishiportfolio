import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
              Bridging security, risk & data
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-md">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 text-sm text-gold-400"
              >
                {role}
              </span>
            ))}
          </div>
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
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="hidden md:block rounded-2xl border border-white/10 overflow-hidden mb-2">
              <img
                src={profile.photo}
                alt={`${profile.name} — ${profile.title}`}
                className="w-full aspect-[4/5] object-cover object-top"
                width={400}
                height={500}
              />
            </div>
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
                Continuously drive excellence—for organization and self—in
                challenging environments that provide growth and continuous
                learning.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6 hover:border-teal-500/40 transition-colors group"
            >
              <span className="text-teal-400 group-hover:text-teal-300 transition-colors">
                {profile.email}
              </span>
              <span className="text-slate-500 group-hover:text-teal-400">→</span>
            </a>

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
      </div>
    </section>
  )
}
