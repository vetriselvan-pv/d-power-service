import LogoMark from './LogoMark'
import { company } from '../data/siteContent'

interface HeaderProps {
  currentRoute?: string
}

function Header({ currentRoute }: HeaderProps) {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="/">
          <LogoMark />
          <span>
            {company.name}
            <small>{company.subtitle}</small>
          </span>
        </a>

        <nav className="menu menu-desktop">
          <a href="/" className={currentRoute === '/' ? 'active' : ''}>
            Home
          </a>
          <a href="/about" className={currentRoute === '/about' ? 'active' : ''}>
            About
          </a>
          <a href="/services" className={currentRoute === '/services' ? 'active' : ''}>
            Services
          </a>
          <a href="/contact" className={currentRoute === '/contact' ? 'active' : ''}>
            Contact
          </a>
          {/* <a className={`menu-cta ${currentRoute === '/quote' ? 'active' : ''}`} href="/quote">
            Get Quote
          </a> */}
        </nav>
      </header>

      <nav className="mobile-bottom-nav">
        <a href="/" className={currentRoute === '/' ? 'active' : ''}>
          <span className="mobile-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </span>
          <span>Home</span>
        </a>
        <a href="/about" className={currentRoute === '/about' ? 'active' : ''}>
          <span className="mobile-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </span>
          <span>About</span>
        </a>
        <a href="/services" className={currentRoute === '/services' ? 'active' : ''}>
          <span className="mobile-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </span>
          <span>Services</span>
        </a>
        <a href="/contact" className={currentRoute === '/contact' ? 'active' : ''}>
          <span className="mobile-nav-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </span>
          <span>Contact</span>
        </a>
      </nav>
    </>
  )
}

export default Header
