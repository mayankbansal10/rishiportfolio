import { profile } from '../data/profile'

const icons = ['🛡️', '⚙️', '☁️', '📊']

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-navy-900/50 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          Core Expertise
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-16 max-w-2xl">
          Where technology meets trust
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {profile.expertise.map((item, i) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-white/8 bg-navy-950/60 p-8 hover:border-teal-500/25 hover:bg-navy-900/40 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block" role="img" aria-hidden>
                {icons[i]}
              </span>
              <h3 className="text-xl text-white font-medium mb-3 group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-white font-medium mb-6">Technical & Professional Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:border-teal-500/30 hover:text-teal-400 transition-colors cursor-default"
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
