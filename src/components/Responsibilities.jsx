
import {
  Check,
  ChevronRight,
  CircleCheck,
  FileText,
  ShieldCheck,
} from 'lucide-react'

const journey = [
  {
    number: '01',
    title: 'Choose',
    body: 'Select your preferred Goldvest tenure.',
  },
  {
    number: '02',
    title: 'Verify',
    body: 'Complete the required investor verification and compliance checks.',
  },
  {
    number: '03',
    title: 'Invest',
    body: 'Make your investment through BLC’s officially designated payment channel.',
  },
  {
    number: '04',
    title: 'Participate',
    body: 'Your investment participates according to the applicable BLC programme.',
  },
  {
    number: '05',
    title: 'Maturity',
    body: 'At maturity, the applicable payment is processed according to your executed investment documentation.',
  },
]

const transparencyItems = [
  'Investment amount',
  'Selected tenure',
  'Applicable return',
  'Commencement date',
  'Maturity date',
  'Payment arrangements',
  'Applicable documentation',
  'Verification requirements',
  'Investment risks',
  'Early withdrawal conditions',
]

export default function Responsibilities() {
  return (
    <>
      {/* =========================================
          HOW IT WORKS
      ========================================== */}
      <section
        id="how-it-works"
        className="py-24 lg:py-32 border-t border-hairline"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              How it works
            </p>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
              Your Goldvest Journey
            </h2>

            <p className="mt-5 text-parchment/70 leading-relaxed">
              From selecting your preferred tenure to maturity, every stage
              of the Goldvest participation process is clearly defined.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">

            {/* Connecting line */}
            <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-hairline" />

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
              {journey.map((step) => (
                <div key={step.number} className="relative group">

                  {/* Number */}
                  <div className="relative z-10 w-14 h-14 flex items-center justify-center border border-gold/40 bg-panel text-gold font-display text-lg transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-parchment text-lg font-medium capitalize">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-parchment/65 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14">
            <a
              href="#plans"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold text-gold text-sm tracking-wide uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              Start Your Goldvest Journey
              <ChevronRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          TRANSPARENCY
      ========================================== */}
      <section
        id="transparency"
        className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-24">
              <p className="text-gold text-sm tracking-[0.25em] uppercase">
                Transparency
              </p>

              <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl text-parchment leading-[0.95]">
                Know what
                <br />
                you’re investing
                <br />
                in.
              </h2>

              <div className="mt-10 flex items-start gap-4 max-w-md">
                <ShieldCheck
                  className="text-gold shrink-0 mt-1"
                  size={24}
                  strokeWidth={1.5}
                />

                <p className="text-parchment/65 leading-relaxed">
                  We believe investors should understand the structure of
                  their participation before committing funds.
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="flex items-center gap-4 pb-6 border-b border-hairline">
                <FileText
                  className="text-gold"
                  size={24}
                  strokeWidth={1.5}
                />

                <div>
                  <h3 className="text-parchment text-xl font-medium">
                    Clear information. Clear terms.
                  </h3>

                  <p className="mt-1 text-sm text-parchment/50">
                    Investors should have access to information regarding:
                  </p>
                </div>
              </div>

              <div className="mt-6">
                {transparencyItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-4 border-b border-hairline/70 group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gold/30 text-gold shrink-0">
                      <Check size={13} strokeWidth={2} />
                    </span>

                    <span className="text-parchment/75 group-hover:text-parchment transition-colors">
                      {item}
                    </span>

                    <span className="ml-auto text-xs text-parchment/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-10 p-6 border border-hairline bg-panel/30">
                <div className="flex gap-4">
                  <CircleCheck
                    className="text-gold shrink-0 mt-0.5"
                    size={20}
                    strokeWidth={1.5}
                  />

                  <p className="text-sm text-parchment/65 leading-relaxed">
                    Goldvest is structured around clear participation terms
                    and formal documentation so investors can review the
                    relevant information before making an investment decision.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}


