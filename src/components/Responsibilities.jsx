import { responsibilities } from '../data/content'

export default function Responsibilities() {
  return (
    <section className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">What we ask of clients</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed">
            A working relationship goes both ways. This is what we rely on from you.
          </p>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-5">
          {responsibilities.map((item, i) => (
            <li key={item} className="flex gap-4 border-b border-hairline/70 pb-5">
              <span className="font-display text-gold/70 text-lg w-6 shrink-0">{i + 1}</span>
              <span className="text-parchment/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
