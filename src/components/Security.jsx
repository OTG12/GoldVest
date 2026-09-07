import { Vault, ShieldCheck, Fingerprint, FileText } from 'lucide-react'
import { security } from '../data/content'

const icons = [Vault, ShieldCheck, Fingerprint, FileText]

export default function Security() {
  return (
    <section id="security" className="py-24 lg:py-32 border-t border-hairline bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">Where your gold lives</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed">
            Custody is the part clients care about most. Here is how it is handled.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-10">
          {security.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.title} className="flex gap-5">
                <Icon className="shrink-0 mt-1 text-gold" size={22} strokeWidth={1.5} />
                <div>
                  <h3 className="text-parchment text-lg font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-parchment/65 leading-relaxed">{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
