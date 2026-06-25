import { Star, ExternalLink } from 'lucide-react'
import { CONTACT, TESTIMONIALS } from '../constants/siteData'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} כוכבים`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-pele-gold fill-pele-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-pele-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          מה הלקוחות שלנו אומרים
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.name}
              className="bg-pele-gray rounded-xl p-6 flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <StarRating count={review.rating} />
              <p className="text-white/80 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-white font-semibold text-sm">{review.name}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CONTACT.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            לכל הביקורות שלנו ב-Google
          </a>
        </div>
      </div>
    </section>
  )
}
