/** Full-page ambient gradient mesh and texture overlay */
export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#060d14_72%)]" />
      <div className="absolute inset-0 opacity-[0.35] noise-overlay" />
    </div>
  )
}
