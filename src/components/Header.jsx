import { useState } from 'react'
import { Menu, X, Search, ShoppingCart, Smartphone } from 'lucide-react'
import { NAV_LINKS } from '../constants/siteData'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-pele-black border-b border-pele-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — right side in RTL */}
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <Smartphone className="w-7 h-7 text-white group-hover:text-pele-muted transition-colors" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-wide">PELEPHONIA</span>
              <span className="text-pele-muted text-xs hidden sm:block">מעבדת סלולר מתקדמת</span>
            </div>
          </a>

          {/* Desktop Navigation — center */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="ניווט ראשי">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-pele-gray/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions — left side in RTL */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="חיפוש"
              className="p-2 text-white/90 hover:text-white hover:bg-pele-gray/50 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              type="button"
              aria-label={`עגלת קניות${itemCount > 0 ? `, ${itemCount} פריטים` : ''}`}
              className="relative p-2 text-white/90 hover:text-white hover:bg-pele-gray/50 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -left-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-white text-pele-black text-[10px] font-bold rounded-full px-1">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
              className="lg:hidden p-2 text-white hover:bg-pele-gray/50 rounded-md transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-pele-gray/50 bg-pele-black" aria-label="ניווט נייד">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-pele-gray/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
