import { Play } from 'lucide-react'
import { IMAGES } from '../constants/siteData'

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Thumbnail — left side in RTL */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl aspect-video shadow-2xl">
              <img
                src={IMAGES.aboutVideo}
                alt="תיקון לוח אם במעבדה"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-pele-black/30 group-hover:bg-pele-black/20 transition-colors" />
              <button
                type="button"
                aria-label="הפעל סרטון"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-pele-black mr-[-2px]" fill="currentColor" />
                </span>
              </button>
            </div>
          </div>

          {/* Text Content — right side in RTL */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pele-black leading-tight mb-6">
              לא מחליפים סתם.
              <br />
              <span className="text-pele-gray">מאבחנים, מתקנים ומחזירים לחיים.</span>
            </h2>
            <p className="text-pele-muted text-base sm:text-lg leading-relaxed mb-4">
              במעבדת PELEPHONIA אנחנו לא מחליפים חלקים באופן אוטומטי. כל מכשיר עובר אבחון מקצועי
              עם ציוד מתקדם — מיקרוסקופים, תחנות הלחמה ומכשירי בדיקה ייעודיים — כדי לאתר את
              התקלה האמיתית ולתקן אותה בדיוק.
            </p>
            <p className="text-pele-muted text-base sm:text-lg leading-relaxed mb-8">
              הצוות שלנו מורכב מטכנאים מוסמכים עם ניסיון של שנים בתחום תיקון הסלולר, מחשבים
              וטאבלטים. אנחנו עובדים עם חלפים מקוריים ונותנים אחריות מלאה על כל תיקון.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-pele-black text-white font-semibold px-8 py-3.5 rounded-md hover:bg-pele-gray transition-colors"
            >
              קראו עוד עלינו
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
