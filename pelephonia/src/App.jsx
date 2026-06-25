import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Categories from './components/Categories'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Testimonials />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default App
