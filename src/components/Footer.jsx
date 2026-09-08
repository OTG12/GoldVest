
const links = [
  { label: 'About Goldvest', href: '#behind-goldvest' },
  { label: 'Plans', href: '#plans' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Referral Programme', href: '#referral' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Investment Guide', href: '#investor-guide' },
  { label: 'Contact', href: '#contact-agent' },
]

const legal = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Risk Disclosure', href: '#responsible-participation' },
]

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] gap-12">

          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-parchment">
              Goldvest
            </p>

            <p className="mt-1 text-xs tracking-[0.2em] uppercase text-gold/70">
              By Le Élite
            </p>

            <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
              A structured investment participation programme connected to
              gold-focused commercial activities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-parchment/40 uppercase tracking-[0.2em] mb-5">
              Navigation
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-parchment/65 hover:text-gold-bright transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs text-parchment/40 uppercase tracking-[0.2em] mb-5">
              Legal
            </p>

            <div className="flex flex-col gap-3">
              {legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-parchment/65 hover:text-gold-bright transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="rule-center mt-14 mb-8" />

        <div className="max-w-4xl">

          <p className="text-xs text-muted leading-relaxed">
            This website is provided for general information only and does not
            constitute personalised financial, legal or tax advice, an offer
            or solicitation. Investment activities involve commercial and
            market risks. Applicable returns, terms and payment arrangements
            are subject to the executed investment documentation.
          </p>

          <p className="mt-4 text-xs text-muted leading-relaxed">
            Risk-management procedures may reduce exposure but cannot
            eliminate all investment or commercial risk. Investors should
            consider their own circumstances and seek independent professional
            advice where appropriate.
          </p>

          <p className="mt-4 text-xs text-muted">
            © 2026 Goldvest by Le Élite. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}

