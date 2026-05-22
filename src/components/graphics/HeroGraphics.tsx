/** Security network mesh & orbital rings for hero */
export function HeroGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d4a853" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        {[
          [120, 180], [280, 120], [450, 200], [620, 140], [780, 220],
          [900, 380], [700, 450], [500, 520], [300, 480], [150, 400],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" fill="#2dd4bf" className="network-node" style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}
        {/* Connection lines */}
        <path
          d="M120 180 L280 120 L450 200 L620 140 L780 220 M450 200 L500 520 L300 480 L150 400 M780 220 L900 380 L700 450 L500 520"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="0.75"
          className="network-line"
        />
        <path
          d="M280 120 L300 480 M620 140 L700 450 M150 400 L500 520"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          className="network-line"
          style={{ animationDelay: '1s' }}
        />
      </svg>

      {/* Floating hexagons */}
      <svg className="absolute top-[18%] right-[8%] w-24 h-24 text-teal-500/20 animate-float-slow" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-[22%] left-[6%] w-16 h-16 text-gold-500/15 animate-float-reverse" viewBox="0 0 100 100">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Diagonal accent beams */}
      <div className="absolute top-0 right-0 w-px h-[40%] bg-gradient-to-b from-transparent via-teal-500/30 to-transparent origin-top rotate-12 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-px h-[35%] bg-gradient-to-t from-transparent via-amber-500/20 to-transparent origin-bottom -rotate-12 -translate-x-20" />
    </div>
  )
}

export function PortraitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
      <div className="absolute w-[105%] h-[105%] rounded-full border border-teal-500/20 animate-spin-slow" />
      <div className="absolute w-[115%] h-[115%] rounded-full border border-dashed border-teal-500/10 animate-spin-reverse" />
      <div className="absolute w-[125%] h-[125%] rounded-full border border-gold-500/10 opacity-60" />
      {/* Corner brackets */}
      <svg className="absolute -top-2 -left-2 w-12 h-12 text-teal-400/50" viewBox="0 0 48 48" fill="none">
        <path d="M4 20V4h16M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg className="absolute -bottom-2 -right-2 w-12 h-12 text-teal-400/50 rotate-180" viewBox="0 0 48 48" fill="none">
        <path d="M4 20V4h16M4 4l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
