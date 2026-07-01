import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ContactSection from './ContactSection'
import HoursSection from './HoursSection'
// import TestimonialsSection from './TestimonialsSection' 
import { slides } from '../data/siteContent'

type RoutePath = '/' | '/about' | '/services' | '/contact' | '/quote'

const validRoutes: RoutePath[] = ['/', '/about', '/services', '/contact', '/quote']

function getCurrentRoute(): RoutePath {
  const path = window.location.pathname as RoutePath
  return validRoutes.includes(path) ? path : '/'
}

function navigate(path: RoutePath) {
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}

function AppRouter() {
  const [route, setRoute] = useState<RoutePath>(getCurrentRoute())
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const handleLocationChange = () => setRoute(getCurrentRoute())
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
        return
      }

      if (validRoutes.includes(href as RoutePath)) {
        event.preventDefault()
        navigate(href as RoutePath)
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    document.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    if (route !== '/') return
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [route])

  return (
    <div className="page-shell">
      <Header currentRoute={route} />
      <main>
        <div key={route} className="page-enter-active">
          {route === '/' && (
            <>
              <HeroSection activeSlide={activeSlide} onSelectSlide={setActiveSlide} />
              <HoursSection />
              {/* <HomeServicesPreview /> */}
              {/* <CertificatesSection /> */}
              {/* <TestimonialsSection /> */}
            </>
          )}

          {route === '/about' && (
            <>
              <AboutSection />
              <HoursSection />
            </>
          )}

          {route === '/services' && (
            <>
              <ServicesSection />
            </>
          )}

          {route === '/contact' && (
            <>
              <ContactSection />
            </>
          )}

          {route === '/quote' && (
            <>
              <ContactSection />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AppRouter
