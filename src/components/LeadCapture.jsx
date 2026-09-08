
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="application" className="py-24 lg:py-32 border-t border-hairline">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="w-16 h-16 mx-auto border border-gold/40 flex items-center justify-center">
            <Send className="text-gold" size={24} strokeWidth={1.5} />
          </div>

          <h2 className="mt-7 font-display text-4xl sm:text-5xl text-parchment">
            Thank you.
          </h2>

          <p className="mt-5 text-parchment/65 leading-relaxed max-w-xl mx-auto">
            Thank you. A Le Élite representative will contact you with the
            relevant Goldvest information.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="application"
      className="py-24 lg:py-32 border-t border-hairline bg-panel/40"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-10">

        <div className="text-center">
          <p className="text-gold text-sm tracking-[0.25em] uppercase">
            Request Information
          </p>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-parchment">
            Start a conversation.
          </h2>

          <p className="mt-4 text-parchment/60 leading-relaxed">
            Complete the form and a Le Élite representative can provide
            relevant Goldvest information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-parchment/70 mb-2">
                Full Name
              </label>

              <input
                type="text"
                required
                className="w-full bg-transparent border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm text-parchment/70 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                required
                className="w-full bg-transparent border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-parchment/70 mb-2">
              Email Address
            </label>

            <input
              type="email"
              required
              className="w-full bg-transparent border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-parchment/70 mb-2">
              Investment Range
            </label>

            <select
              required
              className="w-full bg-panel border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors"
            >
              <option value="">Select investment range</option>
              <option>Below ₦1,000,000</option>
              <option>₦1,000,000 - ₦5,000,000</option>
              <option>₦5,000,000 - ₦10,000,000</option>
              <option>₦10,000,000+</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <fieldset>
            <legend className="block text-sm text-parchment/70 mb-3">
              Preferred Tenure
            </legend>

            <div className="grid grid-cols-3 gap-3">
              {['3 Months', '6 Months', '12 Months'].map((tenure) => (
                <label
                  key={tenure}
                  className="flex items-center gap-3 border border-hairline2 px-4 py-3 cursor-pointer hover:border-gold/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="tenure"
                    value={tenure}
                    required
                    className="accent-gold"
                  />

                  <span className="text-sm text-parchment/70">
                    {tenure}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block text-sm text-parchment/70 mb-2">
              How did you hear about Goldvest?
            </label>

            <select className="w-full bg-panel border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors">
              <option value="">Select an option</option>
              <option>Referral</option>
              <option>Social Media</option>
              <option>Website</option>
              <option>WhatsApp</option>
              <option>Event</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-parchment/70 mb-2">
              Message
            </label>

            <textarea
              rows="5"
              className="w-full bg-transparent border border-hairline2 px-4 py-3 text-parchment outline-none focus:border-gold/60 transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-ink font-medium px-8 py-3.5 rounded-sm hover:bg-gold-bright transition-colors"
          >
            Request Information
            <Send size={17} />
          </button>

        </form>
      </div>
    </section>
  )
}

