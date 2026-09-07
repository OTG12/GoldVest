import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-sm border-b border-hairline' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="font-display text-xl tracking-wide text-gold">
          GOLDVEST
        </a>

        <ul className="hidden md:flex items-center gap-9 text-lg text-parchment/80">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-gold-bright transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-gold/60 text-parchment text-sm px-5 py-2.5 rounded-sm hover:border-gold-bright hover:text-gold-bright transition-colors"
        >
          Book a consultation
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-parchment p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-hairline px-6 pb-8 pt-2">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-parchment/85 text-base border-b border-hairline/60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block text-center border border-gold/60 text-parchment px-5 py-3 rounded-sm"
          >
            Book a consultation
          </a>
        </div>
      )}
    </header>
  )
}
