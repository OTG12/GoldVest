import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl text-parchment">What we do</h2>
          <p className="mt-4 text-parchment/70 leading-relaxed">
            Four disciplines, one objective: durable, well-documented ownership of physical gold.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-ink p-8 lg:p-10"
            >
              <h3 className="font-display text-2xl text-parchment">{s.title}</h3>
              <p className="mt-3 text-parchment/65 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
