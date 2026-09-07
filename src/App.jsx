import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Security from './components/Security'
import Responsibilities from './components/Responsibilities'
import RiskDisclosure from './components/RiskDisclosure'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Security />
        <Responsibilities />
        <RiskDisclosure />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
