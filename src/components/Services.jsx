import { Code2, Server, Mail, Wrench, Share2, Video, Users, Target, Palette, Sparkles, Layers, Printer } from 'lucide-react'

const services = [
  {
    id: 'web',
    title: 'Web-Entwicklung',
    description: 'Von der Idee bis zum Go-Live – schnelle, sichere und skalierbare Websites & WebApps.',
    items: [
      { icon: Code2, label: 'Individuelle Websites & WebApps' },
      { icon: Server, label: 'Hosting & Performance' },
      { icon: Mail, label: 'Eigene Mail-Server & Domains' },
      { icon: Wrench, label: 'Wartung & Support' },
      { icon: Layers, label: 'Software-Integration (CRM, Shops, Payments)' },
    ],
  },
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Strategie, Content Creation, Video-Editing und komplettes Community-Management.',
    items: [
      { icon: Target, label: 'Social-Strategie & Redaktionspläne' },
      { icon: Share2, label: 'Content Creation (Posts, Reels, Stories)' },
      { icon: Video, label: 'Video-Editing für Shorts & TikToks' },
      { icon: Users, label: 'Community-Management & Reporting' },
      { icon: Sparkles, label: 'Creator-Kooperationen & Ads' },
    ],
  },
  {
    id: 'branding',
    title: 'OY-Branding',
    description: 'Starke Markenidentität – vom Logo bis zum kompletten Print-Design.',
    items: [
      { icon: Palette, label: 'Logos & Brand Guidelines' },
      { icon: Sparkles, label: 'Corporate Design' },
      { icon: Layers, label: 'Flyer, Broschüren, Speisekarten' },
      { icon: Printer, label: 'Print-Design & Produktion' },
    ],
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Leistungen</h2>
          <p className="mt-3 text-blue-200/90">Transparente Pakete, klare Ergebnisse – alles was Sie brauchen, aus einer Hand.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-blue-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500" />
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-100/90">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-blue-100/80">
                    <it.icon size={16} className="text-cyan-300" />
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
