import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus({ state: 'loading', message: 'Wird gesendet…' })

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Fehler beim Senden')

      setStatus({ state: 'success', message: 'Danke! Wir melden uns in Kürze.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: 'Bitte später erneut versuchen.' })
    }
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontakt</h2>
          <p className="mt-3 text-blue-200/90">Erzählen Sie uns kurz von Ihrem Projekt – wir melden uns innerhalb von 24h.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100/80">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80">E-Mail</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100/80">Unternehmen (optional)</label>
              <input name="company" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80">Telefon (optional)</label>
              <input name="phone" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100/80">Interesse</label>
              <select name="service" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500">
                <option>Web-Entwicklung</option>
                <option>Social Media Management</option>
                <option>OY-Branding</option>
                <option>Beratung</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-blue-100/80">Budget (optional)</label>
              <select name="budget" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500">
                <option>Unter 2.000 €</option>
                <option>2.000 – 5.000 €</option>
                <option>5.000 – 10.000 €</option>
                <option>Über 10.000 €</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm text-blue-100/80">Projektbeschreibung</label>
            <textarea name="message" required rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-800/70 px-4 py-3 text-white outline-none focus:border-blue-500" />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              Anfrage senden
            </button>
            <p className={`text-sm ${status.state === 'error' ? 'text-red-300' : status.state === 'success' ? 'text-green-300' : 'text-blue-200/80'}`}>
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
