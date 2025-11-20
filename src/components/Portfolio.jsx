const works = [
  { id: 1, title: 'E-Commerce Redesign', tag: 'Web', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Food Brand Identity', tag: 'Branding', img: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'SaaS Landing Page', tag: 'Web', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'TikTok Shorts Pack', tag: 'Social', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Restaurant Speisekarte', tag: 'Branding', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Community Growth', tag: 'Social', img: 'https://images.unsplash.com/photo-1529336953121-a0ce66f9b2ff?q=80&w=1600&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 text-blue-200/90">Eine Auswahl unserer Arbeiten. Weitere Referenzen teilen wir gerne im Gespräch.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <div key={w.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img src={w.img} alt={w.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-blue-100">{w.tag}</span>
                <p className="mt-2 text-white font-semibold">{w.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
