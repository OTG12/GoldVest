import { pricing } from '../data/content'

export default function Pricing() {
  return (
    <section id="bullion" className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">Pricing, plainly</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed max-w-sm">
            Every transaction is priced against the live spot gold price. We add a disclosed premium on the
            way in and a disclosed spread on the way out \u2014 nothing else.
          </p>
        </div>

        <div>
          <div className="border border-hairline rounded-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-hairline bg-panel/60 text-muted">
                  <th className="py-3 px-5 font-medium">Item</th>
                  <th className="py-3 px-5 font-medium">Basis</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr key={row.item} className={i !== pricing.length - 1 ? 'border-b border-hairline' : ''}>
                    <td className="py-4 px-5 text-parchment font-medium align-top whitespace-nowrap">
                      {row.item}
                    </td>
                    <td className="py-4 px-5 text-parchment/70 leading-relaxed">{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-l-2 border-gold/60 pl-5 text-sm text-parchment/70 leading-relaxed">
            Gold prices fluctuate and are outside Aurelis\u2019s control. Past pricing is not indicative of
            future pricing. This is a description of how transactions are priced, not a description of
            investment returns.
          </div>
        </div>
      </div>
    </section>
  )
}
