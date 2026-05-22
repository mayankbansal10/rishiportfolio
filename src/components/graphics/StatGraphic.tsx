interface StatGraphicProps {
  index: number
}

export function StatGraphic({ index }: StatGraphicProps) {
  const patterns = [
    // CISSP badge ring
    <svg key="0" className="absolute -right-2 -top-2 w-16 h-16 opacity-30" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r="28" fill="none" stroke="#d4a853" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow" />
      <circle cx="32" cy="32" r="20" fill="none" stroke="#2dd4bf" strokeWidth="0.75" />
    </svg>,
    // Shield mini
    <svg key="1" className="absolute -right-1 -top-1 w-14 h-14 opacity-25" viewBox="0 0 56 56" aria-hidden>
      <path d="M28 8L12 14v10c0 9 6.5 17.5 16 20 9.5-2.5 16-11 16-20V14L28 8z" stroke="#2dd4bf" strokeWidth="1" fill="none" />
    </svg>,
    // Compliance check arcs
    <svg key="2" className="absolute -right-2 -top-2 w-16 h-16 opacity-30" viewBox="0 0 64 64" aria-hidden>
      <path d="M16 32 A16 16 0 0 1 48 32" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
      <path d="M20 38 A10 10 0 0 1 44 38" fill="none" stroke="#d4a853" strokeWidth="1" strokeOpacity="0.6" />
    </svg>,
    // Publication nodes
    <svg key="3" className="absolute -right-2 -top-2 w-16 h-16 opacity-30" viewBox="0 0 64 64" aria-hidden>
      <circle cx="20" cy="32" r="4" fill="#2dd4bf" fillOpacity="0.5" />
      <circle cx="44" cy="24" r="4" fill="#2dd4bf" fillOpacity="0.5" />
      <circle cx="44" cy="40" r="4" fill="#d4a853" fillOpacity="0.5" />
      <path d="M24 32 L40 24 M24 32 L40 40" stroke="#2dd4bf" strokeWidth="0.75" strokeOpacity="0.5" />
    </svg>,
  ]

  return patterns[index] ?? null
}
