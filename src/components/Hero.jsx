import { motion, useReducedMotion } from 'framer-motion'

function GoldBars() {
  const bars = [
    { y: 0, w: 260, h: 46 },
    { y: 54, w: 230, h: 46 },
    { y: 108, w: 260, h: 46 },
    { y: 162, w: 200, h: 46 },
  ]

  return (
    <svg viewBox="0 0 340 240" className="w-full h-auto max-w-sm mx-auto" role="img" aria-label="Stylised illustration of stacked gold bars">
      <defs>
        <linearGradient id="barFace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6CE9C" />
          <stop offset="45%" stopColor="#B98D4B" />
          <stop offset="100%" stopColor="#7C5A2A" />
        </linearGradient>
        <linearGradient id="barTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1DFB8" />
          <stop offset="100%" stopColor="#C9A876" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <g key={i} transform={`translate(${(340 - b.w) / 2}, ${b.y + 10})`}>
          <polygon
            points={`14,0 ${b.w - 14},0 ${b.w},14 0,14`}
            fill="url(#barTop)"
          />
          <rect x="0" y="14" width={b.w} height={b.h - 14} fill="url(#barFace)" />
          <rect x="0" y="14" width={b.w} height="1" fill="#0B0A08" opacity="0.25" />
        </g>
      ))}
    </svg>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

return (
  <section
    id="top"
    className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden"
  >
    <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Billionaire Luxury Co.
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-parchment">
          Wealth you can{" "}
          <span className="text-gold-bright">hold.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-display italic text-2xl sm:text-3xl text-gold-bright mt-6 leading-snug max-w-xl">
          A structured investment participation programme connected to
          gold trading and related lawful commercial activities.
        </p>

        {/* Description */}
        <p className="mt-7 text-parchment/70 max-w-xl leading-relaxed">
          GOLDVEST is a structured investment participation plan by
          Billionaire Luxury Co. designed for investors seeking a defined
          opportunity to participate in BLC&apos;s gold trading and related
          lawful commercial activities over a specified investment period.
        </p>

        {/* Investment Tenures */}
        <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
          <div className="border border-hairline2 bg-white/[0.02] p-4 rounded-sm">
            <p className="text-xs uppercase tracking-wider text-muted">
              03 Months
            </p>
            <p className="mt-2 text-2xl font-display text-gold-bright">
              15%
            </p>
            <p className="text-xs text-parchment/50 mt-1">
              Applicable Return
            </p>
          </div>

          <div className="border border-hairline2 bg-white/[0.02] p-4 rounded-sm">
            <p className="text-xs uppercase tracking-wider text-muted">
              06 Months
            </p>
            <p className="mt-2 text-2xl font-display text-gold-bright">
              35%
            </p>
            <p className="text-xs text-parchment/50 mt-1">
              Applicable Return
            </p>
          </div>

          <div className="border border-hairline2 bg-white/[0.02] p-4 rounded-sm">
            <p className="text-xs uppercase tracking-wider text-muted">
              12 Months
            </p>
            <p className="mt-2 text-2xl font-display text-gold-bright">
              50%
            </p>
            <p className="text-xs text-parchment/50 mt-1">
              Applicable Return
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-gold text-ink font-medium px-7 py-3.5 rounded-sm hover:bg-gold-bright transition-colors"
          >
            Book a consultation
          </a>

          <a
            href="#process"
            className="inline-flex justify-center items-center border border-hairline2 text-parchment px-7 py-3.5 rounded-sm hover:border-gold/70 hover:text-gold-bright transition-colors"
          >
            How GOLDVEST works
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-muted max-w-xl leading-relaxed">
         Goldvest by BLC gives investors access to defined investment plans connected to Le Élite’s Gold trading and related commercial and Foreign exchange activities, with structured tenures and clearly stated returns.
        </p>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.15,
        }}
        className="relative"
      >
        {/* Gold Glow */}
        <div
          className="absolute inset-0 bg-gold/10 blur-3xl rounded-full"
          aria-hidden="true"
        />

        {/* Gold Bars */}
        <div className="relative">
          <GoldBars />
        </div>

        {/* Floating Investment Card */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: "easeOut",
          }}
          className="absolute -bottom-5 -left-4 sm:left-0 lg:-left-10 bg-ink/90 backdrop-blur-md border border-hairline2 px-5 py-4 rounded-sm shadow-2xl"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted">
            GOLDVEST
          </p>

          <div className="flex items-end gap-2 mt-1">
            <span className="text-2xl font-display text-gold-bright">
              15% - 50%
            </span>
          </div>

          <p className="text-xs text-parchment/50 mt-1">
            Applicable stated returns
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
)}
