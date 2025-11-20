import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,.15),transparent_25%)]" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-blue-200/80 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} OY Media Management. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#leistungen" className="hover:text-white">Leistungen</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
