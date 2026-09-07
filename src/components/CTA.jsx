export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-parchment">Start with a conversation.</h2>
        <p className="mt-5 text-parchment/70 leading-relaxed max-w-xl mx-auto">
          Every allocation begins with understanding your objectives, time horizon and constraints. There
          is no obligation to proceed after a first call.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@aurelis.example"
            className="inline-flex justify-center items-center bg-gold text-ink font-medium px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors"
          >
            Book a consultation
          </a>
          <a
            href="mailto:hello@aurelis.example"
            className="inline-flex justify-center items-center border border-hairline2 text-parchment px-7 py-3.5 rounded-sm hover:border-gold/70 transition-colors"
          >
            Contact Aurelis
          </a>
        </div>

        <p className="mt-8 text-xs text-muted">
          Subject to eligibility, verification and a formal client agreement.
        </p>
      </div>
    </section>
  )
}
