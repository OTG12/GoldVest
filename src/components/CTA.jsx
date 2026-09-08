
import { ArrowRight, MessageCircle, Download } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 border-t border-hairline overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-gold/10 -top-64 -right-64" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/10 -bottom-56 -left-56" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">

        <p className="text-gold text-sm tracking-[0.25em] uppercase">
          Take the next step
        </p>

        <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl text-parchment leading-[0.95]">
          Ready to explore
          <br />
          Goldvest?
        </h2>

        <p className="mt-7 text-parchment/65 leading-relaxed max-w-2xl mx-auto">
          Take the next step toward understanding a structured investment
          opportunity connected to BLC’s gold-focused commercial activities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">

          <a
            href="#application"
            className="inline-flex items-center justify-center gap-3 bg-gold text-ink font-medium px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors"
          >
            Start Your Application
            <ArrowRight size={17} />
          </a>

          <a
            href="#contact-agent"
            className="inline-flex items-center justify-center gap-3 border border-hairline2 text-parchment px-7 py-3.5 rounded-sm hover:border-gold/70 transition-colors"
          >
            <MessageCircle size={17} />
            Speak to Le Élite Agent
          </a>

          <a
            href="#investor-guide"
            className="inline-flex items-center justify-center gap-3 border border-hairline2 text-parchment/70 px-7 py-3.5 rounded-sm hover:text-gold hover:border-gold/50 transition-colors"
          >
            <Download size={17} />
            Download Investment Guide
          </a>

        </div>

        <p className="mt-8 text-xs text-muted">
          Subject to eligibility, verification and applicable investment
          documentation.
        </p>

      </div>
    </section>
  )
}


