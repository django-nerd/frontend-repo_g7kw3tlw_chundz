import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Moderne Full-Service Agentur
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            OY Media Management
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            Web-Entwicklung, Social Media Management und Branding – alles aus einer Hand. Wir entwickeln digitale Erlebnisse, die Vertrauen schaffen und wachsen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#leistungen" className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              Leistungen entdecken
            </a>
            <a href="#portfolio" className="pointer-events-auto inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
              Portfolio ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
