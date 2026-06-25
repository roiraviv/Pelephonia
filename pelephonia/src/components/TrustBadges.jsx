import { ShieldCheck, Wrench, Zap, Award } from 'lucide-react'
import { TRUST_BADGES } from '../constants/siteData'

const iconMap = {
  'shield-check': ShieldCheck,
  wrench: Wrench,
  zap: Zap,
  award: Award,
}

export default function TrustBadges() {
  return (
    <section className="bg-pele-light py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_BADGES.map((badge) => {
            const Icon = iconMap[badge.icon]
            return (
              <div
                key={badge.icon}
                className="flex flex-col items-center text-center gap-3 p-4"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-pele-black rounded-full">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-pele-black font-bold text-base sm:text-lg">{badge.title}</h3>
                  <p className="text-pele-muted text-xs sm:text-sm mt-1">{badge.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
