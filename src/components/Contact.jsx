
import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  MapPin,
  Instagram,
} from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact-agent"
      className="py-24 lg:py-32 border-t border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          <div>
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              Contact
            </p>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl text-parchment leading-[0.95]">
              Speak with
              <br />
              Le Élite Agent
            </h2>

            <p className="mt-7 text-parchment/65 leading-relaxed max-w-md">
              Have questions about Goldvest? Contact an authorised
              representative for relevant programme information and
              documentation.
            </p>

            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={19} />
              Chat with Tec on WhatsApp
            </a>
          </div>

          <div className="border-t border-hairline">

            <div className="flex gap-5 py-6 border-b border-hairline">
              <Phone className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  Phone
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert phone number]
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-6 border-b border-hairline">
              <MessageCircle className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert WhatsApp number]
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-6 border-b border-hairline">
              <Mail className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  Email
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert official email]
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-6 border-b border-hairline">
              <Globe className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  Website
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert official website]
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-6 border-b border-hairline">
              <MapPin className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  Office Address
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert office address]
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-6">
              <Instagram className="text-gold shrink-0" size={21} strokeWidth={1.5} />
              <div>
                <p className="text-xs text-parchment/40 uppercase tracking-wider">
                  Social Media
                </p>
                <p className="mt-1 text-parchment/75">
                  [Insert official social media links]
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

