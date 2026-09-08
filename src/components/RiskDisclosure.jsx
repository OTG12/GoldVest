
import {
  Coins,
  FileCheck2,
  Fingerprint,
  CreditCard,
  ShieldAlert,
  ArrowUpRight,
} from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: FileCheck2,
    title: 'Documentation',
    body: 'Investment terms are formally documented.',
  },
  {
    number: '02',
    icon: Fingerprint,
    title: 'Verification',
    body: 'Investor information may be subject to KYC/AML and source-of-funds checks.',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Payment Control',
    body: 'Investors should use only officially designated BLC payment channels.',
  },
  {
    number: '04',
    icon: ShieldAlert,
    title: 'Risk Awareness',
    body: 'Investment activities involve commercial and market risks.',
  },
]

export default function RiskDisclosure() {
  return (
    <>
      {/* =========================================
          BEHIND GOLDVEST
      ========================================== */}
      <section
        id="behind-goldvest"
        className="py-24 lg:py-32 border-t border-hairline overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Content */}
            <div>
              <p className="text-gold text-sm tracking-[0.25em] uppercase">
                Gold / Business
              </p>

              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-parchment leading-tight">
                Behind Goldvest
              </h2>

              <p className="mt-6 text-parchment/70 leading-relaxed max-w-xl">
                Goldvest is connected to Le Elite gold-focused commercial
                activities, including gold sourcing, buying, selling,
                brokerage and related activities.
              </p>

              <div className="mt-10 flex items-center gap-4 text-gold/80">
                <div className="h-px w-12 bg-gold/40" />
                <span className="text-xs tracking-[0.2em] uppercase">
                  Gold-focused commercial activity
                </span>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative min-h-[420px] border border-hairline bg-panel/30 overflow-hidden">

              {/* Decorative gold texture */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-72 h-72 rounded-full border border-gold/40 -top-24 -right-24" />
                <div className="absolute w-96 h-96 rounded-full border border-gold/20 -bottom-48 -left-32" />
                <div className="absolute w-56 h-56 rounded-full border border-gold/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Main visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">

                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-gold/30 flex items-center justify-center">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-gold/50 flex items-center justify-center">
                      <Coins
                        className="text-gold"
                        size={72}
                        strokeWidth={1}
                      />
                    </div>
                  </div>

                  {/* Orbit elements */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-panel border border-hairline text-xs text-parchment/70">
                    SOURCING
                  </div>

                  <div className="absolute top-1/2 -right-24 -translate-y-1/2 px-4 py-2 bg-panel border border-hairline text-xs text-parchment/70">
                    BROKERAGE
                  </div>

                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 bg-panel border border-hairline text-xs text-parchment/70">
                    TRADING
                  </div>

                  <div className="absolute top-1/2 -left-24 -translate-y-1/2 px-4 py-2 bg-panel border border-hairline text-xs text-parchment/70">
                    LOGISTICS
                  </div>

                </div>
              </div>

              {/* Corner label */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-parchment/40">
                <ArrowUpRight size={14} />
                COMMERCIAL ACTIVITY
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================
          RESPONSIBLE PARTICIPATION
      ========================================== */}
      <section
        id="responsible-participation"
        className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              Security / Responsible Participation
            </p>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-parchment leading-tight">
              Built Around
              <br />
              Responsible Participation
            </h2>

            <p className="mt-5 text-parchment/65 leading-relaxed max-w-xl">
              Goldvest is structured around clear documentation, appropriate
              verification, controlled payment processes and awareness of
              investment and commercial risks.
            </p>
          </div>

          {/* Four pillars */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline">

            {pillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <div
                  key={pillar.number}
                  className="group bg-panel p-7 lg:p-8 hover:bg-panel/70 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between">

                    <span className="text-gold/60 font-display text-lg">
                      {pillar.number}
                    </span>

                    <Icon
                      className="text-gold group-hover:scale-110 transition-transform duration-300"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-10 text-parchment text-lg font-medium">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-parchment/60 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              )
            })}

          </div>

          {/* Disclaimer */}
          <div className="mt-10 border-l border-gold/50 pl-5 max-w-3xl">
            <p className="text-sm text-parchment/55 leading-relaxed">
              Risk-management procedures may reduce exposure but cannot
              eliminate all investment or commercial risk.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}


