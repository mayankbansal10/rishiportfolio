import { profile } from '../data/profile'
import { expertiseIcons } from './graphics/ExpertiseIcons'

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32 bg-navy-900/50 border-y border-white/5 overflow-hidden">
      {/* Decorative side graphic */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.06] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#2dd4bf" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#2dd4bf" strokeWidth="0.5" strokeDasharray="8 12" className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }} />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#d4a853" strokeWidth="0.5" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          Core Expertise
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-16 max-w-2xl">
          Where technology meets trust
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {profile.expertise.map((item, i) => {
            const Icon = expertiseIcons[i]
            return (
              <article
                key={item.title}
                className="card-shimmer group relative rounded-2xl border border-white/8 bg-navy-950/60 p-8 hover:border-teal-500/25 hover:bg-navy-900/40 transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
                <div className="mb-5 p-3 rounded-xl bg-teal-500/5 border border-teal-500/10 w-fit group-hover:border-teal-500/25 transition-colors">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl text-white font-medium mb-3 group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-16 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-gold-500/30" aria-hidden />
          <h3 className="text-white font-medium mb-6 pl-4">Technical & Professional Skills</h3>
          <div className="flex flex-wrap gap-2 pl-4">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:border-teal-500/30 hover:text-teal-400 hover:bg-teal-500/5 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
