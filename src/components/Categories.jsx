import { ArrowLeft } from 'lucide-react'
import { CATEGORIES } from '../constants/siteData'

export default function Categories() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pele-black text-center mb-12">
          מה מחפשים היום?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <article
              key={category.id}
              id={category.id}
              className="group bg-pele-light rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-pele-black font-bold text-lg mb-4">{category.title}</h3>
                <a
                  href={category.href}
                  className="inline-flex items-center gap-2 border border-pele-black text-pele-black text-sm font-medium px-4 py-2 rounded-md hover:bg-pele-black hover:text-white transition-colors"
                >
                  {category.buttonText}
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
