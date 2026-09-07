const links = [
  { label: 'Bullion', href: '#bullion' },
  { label: 'How it works', href: '#process' },
  { label: 'Advisory', href: '#services' },
  { label: 'Security', href: '#security' },
  { label: 'Risk disclosure', href: '#risk' },
  { label: 'Contact', href: '#contact' },
]

const legal = ['Privacy policy', 'Terms and conditions', 'Client disclosures']

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-display text-xl text-parchment">Aurelis</p>
            <p className="mt-2 text-sm text-muted">Private wealth, held in physical gold.</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-parchment/70 hover:text-gold-bright">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {legal.map((l) => (
              <a key={l} href="#" className="text-sm text-parchment/70 hover:text-gold-bright">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="rule-center mt-12 mb-8" />

        <p className="text-xs text-muted leading-relaxed max-w-3xl">
          This website is provided for general information only and does not constitute an offer,
          solicitation or personalised financial advice. Physical gold prices fluctuate and value can go
          down as well as up. [Insert regulatory registration / licence information]
        </p>
        <p className="mt-4 text-xs text-muted">© 2026 Aurelis Private Wealth. All rights reserved.</p>
      </div>
    </footer>
  )
}
