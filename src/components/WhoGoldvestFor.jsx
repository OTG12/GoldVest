
import { Check, ArrowUpRight } from 'lucide-react'

const suitabilityPoints = [
  'Want a defined investment tenure',
  'Understand that investment involves risk',
  'Are comfortable committing funds for a selected period',
  'Want exposure to a structured commercial investment programme',
  'Prefer documented investment terms',
  'Are prepared to complete applicable verification requirements',
]

export default function WhoGoldvestFor() {
  return (
    <section
      id="suitability"
      className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              Investor Suitability
            </p>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl text-parchment leading-[0.95]">
              Is Goldvest
              <br />
              right for you?
            </h2>

            <p className="mt-7 text-parchment/65 leading-relaxed max-w-md">
              Goldvest may be suitable for individuals whose objectives and
              circumstances align with the structure and terms of the
              programme.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs text-gold/70 uppercase tracking-[0.18em]">
              <ArrowUpRight size={15} />
              Consider your circumstances
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="border-t border-hairline">
              {suitabilityPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-5 py-5 border-b border-hairline"
                >
                  <span className="text-gold/50 text-sm font-display w-6 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex gap-4">
                    <Check
                      className="text-gold shrink-0 mt-0.5"
                      size={18}
                      strokeWidth={1.5}
                    />

                    <span className="text-parchment/75 leading-relaxed">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-parchment/50 leading-relaxed">
              Investors should consider their own circumstances and seek
              independent professional advice where appropriate.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

