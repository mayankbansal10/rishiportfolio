import { profile } from '../data/profile'
import { ResumeLink } from './ResumeLink'
import { HeroGraphics, PortraitRings } from './graphics/HeroGraphics'
import { StatGraphic } from './graphics/StatGraphic'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <HeroGraphics />
      <div
        className="glow-orb w-[500px] h-[500px] bg-teal-500/15 -top-32 -right-32"
        aria-hidden
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-amber-500/10 bottom-0 -left-32"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 text-sm text-teal-400 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                {profile.openTo}
              </p>
            </div>

            <h1 className="animate-fade-up animate-delay-100 font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              {profile.name}
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 gradient-text font-normal italic">
                {profile.credentials}
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-200 text-xl md:text-2xl text-white max-w-3xl mb-3 font-medium">
              {profile.headlineRole}
            </p>

            <p className="animate-fade-up animate-delay-300 text-slate-400 mb-2">
              {profile.location}
            </p>

            <p className="animate-fade-up animate-delay-300 text-slate-500 mb-3">
              {profile.pastEmployers}
            </p>

            <p className="animate-fade-up animate-delay-300 text-lg text-teal-400/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-4 justify-center lg:justify-start mb-12 lg:mb-16">
              <ResumeLink className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm font-semibold text-navy-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25" />
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-teal-500/40 bg-teal-500/10 px-8 py-3.5 text-sm font-semibold text-teal-400 hover:bg-teal-500/20 transition-colors"
              >
                Email Me
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white hover:border-teal-500/50 hover:text-teal-400 transition-all"
              >
                View Experience
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-all"
              >
                LinkedIn →
              </a>
            </div>

            <div className="animate-fade-up animate-delay-500 grid grid-cols-2 gap-4 md:gap-6">
              {profile.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="card-shimmer stat-card-glow relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-5 md:p-6 text-center lg:text-left hover:border-teal-500/20 transition-colors overflow-hidden"
                >
                  <StatGraphic index={i} />
                  <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200 flex justify-center lg:justify-end">
            <div className="relative group">
              <PortraitRings />
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal-500/40 via-teal-500/10 to-amber-500/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
              <div className="relative rounded-3xl border border-white/10 bg-navy-900/60 p-2 shadow-2xl shadow-black/40 overflow-hidden">
                <img
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.credentials} — professional headshot`}
                  className="w-64 sm:w-72 md:w-80 aspect-[4/5] object-cover object-top rounded-2xl"
                  width={320}
                  height={400}
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-teal-500/30 bg-navy-950/90 px-4 py-1.5 text-xs font-medium text-teal-400 backdrop-blur-sm">
                {profile.credentials} Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-teal-400 transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  )
}
