
import {
  FileText,
  ClipboardList,
  ReceiptText,
  CalendarCheck2,
  ArrowRight,
} from 'lucide-react'

const documents = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Application Form',
    body: 'Captures investor and investment information.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Investment Agreement',
    body: 'Sets out the applicable contractual terms.',
  },
  {
    number: '03',
    icon: ReceiptText,
    title: 'Payment Acknowledgement',
    body: 'Records the investment payment where applicable.',
  },
  {
    number: '04',
    icon: CalendarCheck2,
    title: 'Maturity Record',
    body: 'Records the applicable maturity and payment process.',
  },
]

export default function InvestorDocumentation() {
  return (
    <section
      id="investor-documentation"
      className="py-24 lg:py-32 border-t border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-start">

          {/* Header */}
          <div>
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              Investor Documentation
            </p>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-parchment leading-tight">
              Everything starts
              <br />
              with documentation.
            </h2>

            <p className="mt-5 text-parchment/65 leading-relaxed max-w-md">
              The Goldvest participation process is supported by applicable
              documentation that records the relevant investor information,
              terms and payment arrangements.
            </p>

            <a
              href="#investor-guide"
              className="mt-8 inline-flex items-center gap-3 text-gold hover:text-gold-bright transition-colors"
            >
              View Investor Guide
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
            {documents.map((document) => {
              const Icon = document.icon

              return (
                <div
                  key={document.number}
                  className="group bg-panel p-7 lg:p-8 hover:bg-panel/70 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gold/60 font-display text-lg">
                      {document.number}
                    </span>

                    <Icon
                      className="text-gold group-hover:scale-110 transition-transform duration-300"
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-10 text-parchment text-lg font-medium">
                    {document.title}
                  </h3>

                  <p className="mt-3 text-sm text-parchment/60 leading-relaxed">
                    {document.body}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

