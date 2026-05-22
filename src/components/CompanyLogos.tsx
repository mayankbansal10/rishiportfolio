import { featuredCompanies } from '../data/companies'

export function CompanyLogos() {
  return (
    <section
      aria-label="Companies and organizations"
      className="py-16 border-y border-white/5 bg-navy-900/30"
    >
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center">
        <p className="text-teal-400 text-sm font-medium tracking-widest uppercase mb-2">
          Experience At
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-white tracking-tight">
          Trusted by industry leaders
        </h2>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featuredCompanies.map((brand) => (
            <div
              key={brand.slug}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-navy-900/50 px-4 py-5 hover:border-teal-500/30 transition-colors"
            >
              <div className="flex h-16 md:h-[4.5rem] w-full items-center justify-center rounded-lg bg-white px-4 py-3 shadow-sm">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-11 md:max-h-12 w-full object-contain"
                />
              </div>
              <span className="text-xs text-slate-400 text-center font-medium">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
