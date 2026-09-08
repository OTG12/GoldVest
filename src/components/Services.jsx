
import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="border-t border-hairline">

      {/* =========================================================
          INTRO / WHAT IS GOLDVEST
      ========================================================= */}
      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">

            <div className="max-w-3xl">

              <p className="mb-5 text-sm tracking-[0.25em] text-gold uppercase">
                DISCOVER HOW IT WORKS
              </p>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-parchment">
                WHAT IS <span className="text-gold">GOLDVEST</span>?
              </h2>

              <div className="mt-8 space-y-5 text-parchment/70 text-base sm:text-lg leading-relaxed">

                <p>
                  Goldvest is BLC’s structured investment participation plan
                  designed for investors seeking an opportunity to participate
                  in a defined investment programme connected to gold trading
                  and related commercial activities.
                </p>

                <p>
                  Investors select a preferred investment tenure, complete the
                  required verification process, review the applicable
                  documentation and participate according to the terms of
                  their selected plan.
                </p>

                <p>
                  At maturity, the principal and applicable return are
                  processed according to the executed investment documentation.
                </p>

              </div>
            </div>

            {/* RIGHT SIDE LINK */}
            <a
              href="#plans"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.15em] text-gold hover:text-parchment transition-colors"
            >
              DISCOVER THE PLANS
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>
      </div>


      {/* =========================================================
          GOLDVEST PLANS
      ========================================================= */}
      <div id="plans" className="py-24 lg:py-32 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">

            <div>
              <p className="mb-5 text-sm tracking-[0.25em] text-gold uppercase">
                01. THE GOLDVEST PLANS
              </p>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-parchment">
                CHOOSE YOUR{' '}
                <span className="text-gold">GOLDVEST</span> PLAN
              </h2>

              <p className="mt-5 text-base sm:text-lg text-parchment/60">
                A defined tenure for every investment horizon.
              </p>
            </div>

            <span className="hidden lg:block text-sm tracking-[0.15em] text-parchment/30">
              SELECT YOUR TENURE
            </span>

          </div>


          {/* Investment Cards */}
          <div className="grid gap-5 lg:grid-cols-3">

            {/* 3 MONTHS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="group relative border border-gold/20 bg-white/[0.02] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-parchment/40">
                  GOLDVEST
                </span>

                <span className="text-sm text-gold">
                  03
                </span>
              </div>

              <div className="mt-12">
                <p className="text-sm tracking-[0.2em] text-parchment/45">
                  3 MONTHS
                </p>

                <div className="mt-4">
                  <span className="font-display text-6xl text-gold">
                    15%
                  </span>
                </div>

                <p className="mt-2 text-sm text-parchment/45">
                  Applicable Return
                </p>
              </div>

              <button
                type="button"
                className="mt-10 w-full border border-gold/40 px-6 py-4 text-xs tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                SELECT 3-MONTH PLAN
              </button>
            </motion.div>


            {/* 6 MONTHS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative border border-gold/50 bg-gold/[0.05] p-8 lg:p-10 shadow-[0_0_60px_rgba(212,175,55,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-gold"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-parchment/40">
                  GOLDVEST
                </span>

                <span className="rounded-full bg-gold px-3 py-1 text-xs text-ink">
                  06
                </span>
              </div>

              <div className="mt-12">
                <p className="text-sm tracking-[0.2em] text-parchment/45">
                  6 MONTHS
                </p>

                <div className="mt-4">
                  <span className="font-display text-6xl text-gold">
                    35%
                  </span>
                </div>

                <p className="mt-2 text-sm text-parchment/45">
                  Applicable Return
                </p>
              </div>

              <button
                type="button"
                className="mt-10 w-full bg-gold px-6 py-4 text-xs tracking-[0.15em] text-ink transition-all duration-300 hover:bg-parchment"
              >
                SELECT 6-MONTH PLAN
              </button>
            </motion.div>


            {/* 12 MONTHS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative border border-gold/20 bg-white/[0.02] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-parchment/40">
                  GOLDVEST
                </span>

                <span className="text-sm text-gold">
                  12
                </span>
              </div>

              <div className="mt-12">
                <p className="text-sm tracking-[0.2em] text-parchment/45">
                  12 MONTHS
                </p>

                <div className="mt-4">
                  <span className="font-display text-6xl text-gold">
                    75%
                  </span>
                </div>

                <p className="mt-2 text-sm text-parchment/45">
                  Applicable Return
                </p>
              </div>

              <button
                type="button"
                className="mt-10 w-full border border-gold/40 px-6 py-4 text-xs tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                SELECT 12-MONTH PLAN
              </button>
            </motion.div>

          </div>


          {/* Disclaimer */}
          <div className="mt-8 border-t border-hairline pt-6">
            <p className="max-w-4xl text-xs sm:text-sm leading-relaxed text-parchment/40">
              <span className="text-parchment/60">
                Please note:
              </span>{' '}
              The stated returns are not monthly returns and are subject to
              the applicable investment documentation and terms.
            </p>
          </div>

        </div>
      </div>


      {/* =========================================================
          HOW GOLDVEST WORKS
      ========================================================= */}
      <div id="how-it-works" className="py-24 lg:py-32 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="max-w-2xl mb-14">

            <p className="mb-5 text-sm tracking-[0.25em] text-gold uppercase">
              02. THE PROCESS
            </p>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-parchment">
              HOW <span className="text-gold">GOLDVEST</span> WORKS
            </h2>

            <p className="mt-5 text-base sm:text-lg text-parchment/60">
              A straightforward process from plan selection through maturity.
            </p>

          </div>


          {/* Process Cards */}
          <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">

            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="bg-ink p-8 lg:p-10"
              >

                <span className="text-sm tracking-[0.2em] text-gold">
                  {s.number}
                </span>

                <h3 className="mt-6 font-display text-2xl lg:text-3xl text-parchment">
                  {s.title}
                </h3>

                <p className="mt-4 text-parchment/60 leading-relaxed">
                  {s.body}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </div>

    </section>
  )
}


