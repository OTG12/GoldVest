import { motion } from 'framer-motion'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 border-t border-hairline bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">How an allocation begins</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed">
            Five steps, from first conversation to a bar registered in your name.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-10 lg:gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-6 lg:pl-0 border-l lg:border-l-0 lg:border-t border-hairline2 lg:pt-6"
            >
              <span className="font-display text-3xl text-gold/70">{step.number}</span>
              <h3 className="mt-3 text-parchment text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-parchment/60 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
