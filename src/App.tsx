import { useEffect, useState } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import { Loader } from './components/layout/Loader'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/layout/BackToTop'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Portfolio } from './components/sections/Portfolio'
import { Differentiators } from './components/sections/Differentiators'
import { Testimonials } from './components/sections/Testimonials'
import { CTA } from './components/sections/CTA'

function App() {
  const { isDark, toggle } = useDarkMode()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader loading={loading} />
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Differentiators />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
