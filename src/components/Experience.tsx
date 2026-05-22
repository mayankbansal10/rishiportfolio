import { profile } from '../data/profile'
import { CompanyLogo } from './CompanyLogo'

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          Career Journey
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4">
          Professional experience
        </h2>
        <p className="text-slate-500 mb-16 max-w-xl">
          From founding a PAN-India startup to leading GRC at Silicon Valley
          data platforms—eight years of measurable impact.
        </p>

        <div className="relative">
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent hidden md:block"
            aria-hidden
          />

          <div className="space-y-8">
            {profile.experience.map((job, index) => (
              <article
                key={`${job.company}-${job.role}-${job.period}`}
                className="relative md:pl-20 group"
              >
                <div
                  className="hidden md:flex absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-teal-500 bg-navy-950 group-hover:bg-teal-500 transition-colors"
                  aria-hidden
                />

                <div className="rounded-2xl border border-white/8 bg-navy-900/40 p-6 md:p-8 hover:border-teal-500/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex gap-4 items-start">
                      <div className="hidden sm:block shrink-0">
                        <CompanyLogo company={job.company} size="md" />
                      </div>
                      <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-xl text-white font-medium">
                          {job.role}
                        </h3>
                        {index < 3 && (
                          <span className="rounded-full bg-teal-500/15 px-2.5 py-0.5 text-xs text-teal-400 font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-teal-400 font-medium">{job.company}</p>
                        <span className="sm:hidden">
                          <CompanyLogo company={job.company} size="sm" />
                        </span>
                      </div>
                    </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-white/80">{job.period}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {job.location} · {job.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight.slice(0, 50)}
                        className="flex gap-3 text-slate-400 text-sm leading-relaxed"
                      >
                        <span className="text-teal-500 mt-1 shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
