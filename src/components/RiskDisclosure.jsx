import { risks } from '../data/content'

export default function RiskDisclosure() {
  return (
    <section id="risk" className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="border border-gold/30 rounded-sm p-8 lg:p-14">
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">Understanding the risks</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed max-w-2xl">
            Owning physical gold, and arranging for its storage through a third party, carries real risk.
            We would rather you understood it clearly than found it in fine print.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {risks.map((risk) => (
              <div key={risk.title}>
                <h3 className="text-parchment font-medium">{risk.title}</h3>
                <p className="mt-1.5 text-parchment/65 leading-relaxed text-sm">{risk.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rule" />

          <p className="mt-8 text-parchment/80 leading-relaxed max-w-2xl">
            Aurelis does not guarantee any level of return, price appreciation or liquidity. Risk-management
            procedures may reduce exposure but cannot eliminate it. Clients should seek independent
            financial, legal and tax advice before proceeding.
          </p>
        </div>
      </div>
    </section>
  )
}
