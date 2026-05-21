import { profile } from '../data/profile'

export function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 bg-navy-900/50 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
              Credentials
            </p>
            <h2 className="font-serif text-4xl text-white tracking-tight mb-8">
              Certifications & education
            </h2>

            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-400 text-sm">
                ✓
              </span>
              Professional Certifications
            </h3>
            <ul className="space-y-3 mb-12">
              {profile.certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-3 text-slate-400 text-sm leading-relaxed pl-2 border-l-2 border-teal-500/30 hover:border-teal-500 transition-colors"
                >
                  {cert}
                </li>
              ))}
            </ul>

            <h3 className="text-white font-medium mb-4">Education</h3>
            <div className="space-y-4">
              {profile.education.map((edu) => (
                <div
                  key={edu.school}
                  className="rounded-xl border border-white/8 p-5 hover:border-teal-500/20 transition-colors"
                >
                  <p className="text-white font-medium">{edu.school}</p>
                  <p className="text-teal-400/90 text-sm mt-1">{edu.degree}</p>
                  {'focus' in edu && edu.focus && (
                    <p className="text-slate-500 text-sm">{edu.focus}</p>
                  )}
                  <p className="text-slate-600 text-xs mt-2">{edu.period}</p>
                  {'highlight' in edu && edu.highlight && (
                    <p className="text-slate-400 text-xs mt-2 italic">
                      {edu.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                <span className="text-gold-400">★</span>
                Honors & Awards
              </h3>
              {profile.awards.map((award) => (
                <div
                  key={award.title}
                  className="rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/10 to-transparent p-6"
                >
                  <p className="text-gold-400 font-semibold text-lg">{award.title}</p>
                  <p className="text-white/80 mt-1">{award.org}</p>
                  <p className="text-slate-400 text-sm mt-3">{award.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-white font-medium mb-6">Publications</h3>
              <div className="space-y-4">
                {profile.publications.map((pub, i) => (
                  <article
                    key={pub.title}
                    className="rounded-xl border border-white/8 p-5 hover:border-teal-500/20 transition-colors"
                  >
                    <span className="text-xs text-teal-500 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {pub.title}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
