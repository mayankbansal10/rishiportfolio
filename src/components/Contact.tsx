import { profile } from '../data/profile'
import { ResumeLink } from './ResumeLink'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="contactGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="#2dd4bf" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contactGrid)" />
        <circle cx="50%" cy="50%" r="200" fill="none" stroke="#2dd4bf" strokeWidth="0.5" strokeOpacity="0.5" className="animate-ping" style={{ animationDuration: '4s' }} />
      </svg>
      <div
        className="glow-orb w-[600px] h-[300px] bg-teal-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
          Let's Connect
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight mb-6">
          Ready to strengthen your security posture?
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          {profile.contactIntro}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <a
            href={`mailto:${profile.email}`}
            className="w-full sm:w-auto rounded-full bg-teal-500 px-10 py-4 text-sm font-semibold text-navy-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25"
          >
            {profile.email}
          </a>
          <ResumeLink className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-10 py-4 text-sm font-semibold text-teal-400 hover:bg-teal-500/20 transition-colors" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full border border-teal-500/40 bg-teal-500/10 px-10 py-4 text-sm font-semibold text-teal-400 hover:bg-teal-500/20 transition-colors"
          >
            Connect on LinkedIn
          </a>
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full border border-white/15 px-10 py-4 text-sm font-medium text-white hover:border-teal-500/50 transition-all"
            >
              Visit rishijain.io
            </a>
          )}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-teal-400 transition-colors"
          >
            {profile.email}
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{profile.location}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{profile.title} @ {profile.company}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>{profile.credentials} Certified</span>
        </div>
      </div>
    </section>
  )
}
