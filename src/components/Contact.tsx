import { profile } from '../data/profile'
import { ResumeLink } from './ResumeLink'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ResumeLink className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-10 py-4 text-sm font-semibold text-navy-950 hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/25" />
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
              Visit rishijain.info
            </a>
          )}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
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
