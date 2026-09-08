
import {
  CalendarDays,
  CircleDollarSign,
  Gem,
  FileText,
  ShieldCheck,
  Scale,
} from 'lucide-react'
import { security } from '../data/content'

const icons = [
  CalendarDays,
  CircleDollarSign,
  Gem,
  FileText,
  ShieldCheck,
  Scale,
]

export default function Security() {
  return (
    <section
      id="why-goldvest"
      className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-gold text-sm tracking-[0.25em] uppercase">
            Why Goldvest
          </p>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
            Why Goldvest?
          </h2>

          <p className="mt-5 text-parchment/70 leading-relaxed max-w-xl">
            A structured participation programme designed around defined
            tenures, transparent returns, formal documentation and responsible
            commercial risk management.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {security.map((item, i) => {
            const Icon = icons[i]

            return (
              <div
                key={item.title}
                className="group relative p-7 border border-hairline bg-panel/30 hover:border-gold/40 transition-all duration-300"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-gold/70 text-sm tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <Icon
                    className="text-gold transition-transform duration-300 group-hover:scale-110"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-8 text-parchment text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-parchment/65 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


