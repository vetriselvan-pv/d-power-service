import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import ContactSection from './ContactSection'
import HoursSection from './HoursSection'
import JsonLd from './JsonLd'
import { useSEO } from '../hooks/useSEO'
import { slides, company } from '../data/siteContent'

// ─── Home Page ───────────────────────────────────────────────────────────────
function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <HeroSection activeSlide={activeSlide} onSelectSlide={setActiveSlide} />
      <HoursSection />
    </>
  )
}

// ─── About Page ───────────────────────────────────────────────────────────────
function AboutPage() {
  return (
    <>
      <AboutSection />
      <HoursSection />
    </>
  )
}

// ─── 404 Not Found Page ───────────────────────────────────────────────────────
function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="not-found-page">
      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')} className="btn-primary">
        Go Home
      </button>
    </div>
  )
}

// ─── Scroll To Top on Route Change ───────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

// ─── Shell (layout wrapper with header + footer) ──────────────────────────────
function AppShell() {
  const { pathname } = useLocation()

  // Update page title, meta description, OG tags, and canonical per route
  useSEO()

  return (
    <div className="page-shell">
      {/* Structured data: LocalBusiness + BreadcrumbList JSON-LD */}
      <JsonLd />

      <ScrollToTop />
      <Header currentRoute={pathname} />
      <main>
        <div key={pathname} className="page-enter-active">
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/about"    element={<AboutPage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/contact"  element={<ContactSection />} />
            <Route path="/quote"    element={<ContactSection />} />
            <Route path="*"         element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
      <Footer />

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.773L0 32l8.522-2.001A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.785-1.856l-.486-.289-5.058 1.188 1.237-4.92-.317-.505A13.248 13.248 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.91c-.398-.199-2.355-1.163-2.72-1.295-.366-.133-.633-.199-.9.199-.266.398-1.031 1.295-1.264 1.562-.232.266-.465.299-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.216-2.76-.232-.398-.025-.613.175-.81.18-.178.398-.465.597-.698.2-.232.266-.398.399-.664.132-.266.066-.498-.033-.697-.1-.2-.9-2.17-1.232-2.97-.324-.78-.654-.674-.9-.687l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.396 1.363-1.396 3.325s1.43 3.857 1.629 4.123c.199.266 2.813 4.296 6.818 6.026.953.412 1.697.658 2.277.842.957.305 1.828.262 2.516.159.768-.115 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z"/>
        </svg>
        <span className="whatsapp-fab__tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  )
}

// ─── Root with HashRouter ─────────────────────────────────────────────────────
function AppRouter() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}

export default AppRouter
