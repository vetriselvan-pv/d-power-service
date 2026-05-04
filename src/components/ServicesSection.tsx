import { useState } from 'react'
import { services } from '../data/siteContent'

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="section-tag">Core Services</p>
        <h2>Specialized testing, maintenance, and modification services.</h2>
      </div>

      <div className="services-interactive-wrapper">
        <nav className="services-master-list">
          {services.map((service, index) => (
            <button
              key={service.title}
              className={`service-nav-item ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="service-nav-code">{service.code}</span>
              <span className="service-nav-title">{service.title}</span>
            </button>
          ))}
        </nav>

        <div className="services-detail-panel">
          <div key={activeService.code} className="service-detail-content">
            <div className="detail-header">
              <span className="detail-code">{activeService.code}</span>
              <h3>{activeService.title}</h3>
            </div>
            <div className="detail-body">
              <p>{activeService.text}</p>
              <div className="detail-features">
                <div className="feature-tag">24/7 Support</div>
                <div className="feature-tag">Expert Engineering</div>
                <div className="feature-tag">EMA Compliant</div>
              </div>
            </div>
            <div className="detail-actions">
              <a href="/contact" className="secondary-button">Enquire for Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
