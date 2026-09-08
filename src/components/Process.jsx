
import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = {
  '3': {
    months: '3 Months',
    rate: 15,
  },
  '6': {
    months: '6 Months',
    rate: 35,
  },
  '12': {
    months: '12 Months',
    rate: 75,
  },
}

export default function Process() {
  const [amount, setAmount] = useState(1000000)
  const [selectedPlan, setSelectedPlan] = useState('3')

  const plan = plans[selectedPlan]

  const investmentAmount = Number(amount) || 0
  const illustrativeReturn =
    investmentAmount * (plan.rate / 100)

  const illustrativeMaturity =
    investmentAmount + illustrativeReturn

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section
      id="process"
      className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm tracking-[0.25em] text-gold uppercase">
            ILLUSTRATIVE INVESTMENT CALCULATOR
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-parchment">
            ESTIMATE YOUR{' '}
            <span className="text-gold">GOLDVEST</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-parchment/60 leading-relaxed">
            Explore illustrative outcomes based on your selected investment
            amount and GoldVest tenure.
          </p>
        </div>


        {/* CALCULATOR */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6">

          {/* LEFT: INPUTS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="border border-hairline bg-ink p-8 sm:p-10"
          >

            <div>
              <label
                htmlFor="investment-amount"
                className="text-xs tracking-[0.2em] uppercase text-parchment/50"
              >
                Investment Amount
              </label>

              <div className="relative mt-4">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gold">
                  ₦
                </span>

                <input
                  id="investment-amount"
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-hairline2 bg-white/[0.03] py-4 pl-10 pr-5 text-lg text-parchment outline-none transition-colors focus:border-gold"
                  placeholder="1,000,000"
                />
              </div>
            </div>


            {/* TENURE */}
            <div className="mt-8">
              <label
                htmlFor="investment-plan"
                className="text-xs tracking-[0.2em] uppercase text-parchment/50"
              >
                Investment Tenure
              </label>

              <select
                id="investment-plan"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="mt-4 w-full appearance-none border border-hairline2 bg-white/[0.03] px-5 py-4 text-parchment outline-none transition-colors focus:border-gold"
              >
                <option value="3" className="bg-ink">
                  3 Months
                </option>

                <option value="6" className="bg-ink">
                  6 Months
                </option>

                <option value="12" className="bg-ink">
                  12 Months
                </option>
              </select>
            </div>


            {/* SELECTED PLAN */}
            <div className="mt-10 border-t border-hairline pt-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-parchment/50">
                  Selected Plan
                </span>

                <span className="text-sm text-gold">
                  {plan.months}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-parchment/50">
                  Applicable Return
                </span>

                <span className="font-display text-3xl text-gold">
                  {plan.rate}%
                </span>
              </div>
            </div>

          </motion.div>


          {/* RIGHT: RESULTS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gold/30 bg-gold/[0.04] p-8 sm:p-10"
          >

            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Illustrative Estimate
              </span>

              <span className="text-xs text-parchment/30">
                {plan.months}
              </span>
            </div>


            {/* INVESTMENT AMOUNT */}
            <div className="mt-10 pb-7 border-b border-hairline">
              <p className="text-sm text-parchment/50">
                Investment Amount
              </p>

              <p className="mt-2 font-display text-3xl sm:text-4xl text-parchment">
                {formatCurrency(investmentAmount)}
              </p>
            </div>


            {/* RETURN */}
            <div className="py-7 border-b border-hairline">
              <p className="text-sm text-parchment/50">
                Illustrative Return
              </p>

              <p className="mt-2 font-display text-3xl sm:text-4xl text-gold">
                {formatCurrency(illustrativeReturn)}
              </p>
            </div>


            {/* MATURITY */}
            <div className="pt-7">
              <p className="text-sm text-parchment/50">
                Illustrative Maturity Value
              </p>

              <p className="mt-2 font-display text-4xl sm:text-5xl text-gold">
                {formatCurrency(illustrativeMaturity)}
              </p>
            </div>


            {/* DISCLAIMER */}
            <div className="mt-10 border-t border-gold/20 pt-6">
              <p className="text-xs leading-relaxed text-parchment/45">
                <span className="text-parchment/60">
                  ILLUSTRATIVE ESTIMATE:
                </span>{' '}
                This calculator is provided for illustrative purposes only.
                It does not constitute a guarantee, offer or promise of
                returns.
              </p>

              <p className="mt-3 text-xs leading-relaxed text-parchment/45">
                Actual amounts payable are governed by the executed investment
                documentation and applicable terms.
              </p>
            </div>

          </motion.div>

        </div>


        {/* PLAN QUICK REFERENCE */}
        <div className="mt-12 grid grid-cols-3 border border-hairline">

          <button
            type="button"
            onClick={() => setSelectedPlan('3')}
            className={`p-5 text-center transition-colors ${
              selectedPlan === '3'
                ? 'bg-gold/[0.08]'
                : 'hover:bg-white/[0.03]'
            }`}
          >
            <span className="block text-xs tracking-[0.15em] text-parchment/40">
              3 MONTHS
            </span>

            <span className="mt-2 block font-display text-2xl text-gold">
              15%
            </span>
          </button>


          <button
            type="button"
            onClick={() => setSelectedPlan('6')}
            className={`border-x border-hairline p-5 text-center transition-colors ${
              selectedPlan === '6'
                ? 'bg-gold/[0.08]'
                : 'hover:bg-white/[0.03]'
            }`}
          >
            <span className="block text-xs tracking-[0.15em] text-parchment/40">
              6 MONTHS
            </span>

            <span className="mt-2 block font-display text-2xl text-gold">
              35%
            </span>
          </button>


          <button
            type="button"
            onClick={() => setSelectedPlan('12')}
            className={`p-5 text-center transition-colors ${
              selectedPlan === '12'
                ? 'bg-gold/[0.08]'
                : 'hover:bg-white/[0.03]'
            }`}
          >
            <span className="block text-xs tracking-[0.15em] text-parchment/40">
              12 MONTHS
            </span>

            <span className="mt-2 block font-display text-2xl text-gold">
              75%
            </span>
          </button>

        </div>

      </div>
    </section>
  )
}


