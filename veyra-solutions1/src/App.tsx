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
    <div className="min-h-screen bg-parchment">
      <Nav />
      <main>
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
