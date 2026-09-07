import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 py-6 text-left"
        >
          <span className="text-parchment text-lg font-medium">{item.q}</span>
          <ChevronDown
            className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            size={20}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-parchment/70 leading-relaxed max-w-2xl">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 lg:py-32 border-t border-hairline">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-display text-4xl sm:text-5xl text-parchment">Common questions</h2>

        <div className="mt-10 border-t border-hairline">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
