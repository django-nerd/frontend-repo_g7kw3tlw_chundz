import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 p-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <div className="leading-tight">
              <p className="text-white font-semibold">OY Media Management</p>
              <p className="text-xs text-blue-200/80">Full-Service Agentur</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              Unverbindlich anfragen
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menü">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur p-4">
            <div className="flex flex-col gap-3">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-sm text-blue-100/80 hover:text-white">
                  {n.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                Unverbindlich anfragen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
