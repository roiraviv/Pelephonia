import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react'
import { CONTACT } from '../constants/siteData'

const footerColumns = [
  {
    icon: Clock,
    title: 'שעות פעילות',
    lines: [CONTACT.hours.weekdays, CONTACT.hours.friday],
  },
  {
    icon: MapPin,
    title: 'כתובת',
    lines: [CONTACT.address],
  },
  {
    icon: Phone,
    title: 'חייגו אלינו',
    lines: [CONTACT.phone],
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    title: 'וואטסאפ',
    lines: ['שלחו הודעה'],
    href: CONTACT.whatsapp,
    external: true,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-pele-dark border-t border-pele-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {footerColumns.map((col) => {
            const Icon = col.icon
            const content = (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-pele-gray rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{col.title}</h3>
                </div>
                <div className="pr-13 space-y-1">
                  {col.lines.map((line) => (
                    <p key={line} className="text-pele-muted text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )

            if (col.href) {
              return (
                <a
                  key={col.title}
                  href={col.href}
                  target={col.external ? '_blank' : undefined}
                  rel={col.external ? 'noopener noreferrer' : undefined}
                  className="hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              )
            }

            return <div key={col.title}>{content}</div>
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-pele-gray/50 text-center">
          <p className="text-pele-muted text-sm">
            &copy; {new Date().getFullYear()} PELEPHONIA — מעבדת סלולר מתקדמת. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
