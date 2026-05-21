import { companyBrands } from '../data/companies'

export function CompanyLogos() {
  const marqueeItems = [...companyBrands, ...companyBrands]

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

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-12 md:gap-16 w-max px-6">
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="flex flex-col items-center justify-center gap-3 shrink-0 min-w-[140px]"
            >
              <div className="flex h-16 w-36 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 hover:border-teal-500/25 hover:bg-white/[0.06] transition-all">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-8 w-full max-w-[120px] object-contain opacity-85"
                />
              </div>
              <span className="text-xs text-slate-500 text-center whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-12 hidden md:grid grid-cols-4 lg:grid-cols-5 gap-4">
        {companyBrands.slice(0, 5).map((brand) => (
          <div
            key={brand.slug}
            className="flex items-center justify-center rounded-xl border border-white/8 bg-white/[0.02] p-4 h-20 hover:border-teal-500/20 transition-colors"
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-7 w-full max-w-[100px] object-contain opacity-85"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
