import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Industries />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
