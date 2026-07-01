// ============================================================
// OLD SERVICES SECTION (Interactive master-detail layout)
// Commented out as per request — replaced with card grid below
// ============================================================
// import { useState } from 'react'
// import { services } from '../data/siteContent'
//
// function ServicesSection() {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const activeService = services[activeIndex]
//
//   return (
//     <section id="services" className="services-section">
//       <div className="section-heading">
//         <p className="section-tag">Core Services</p>
//         <h2>Specialized testing, maintenance, and modification services.</h2>
//       </div>
//
//       <div className="services-interactive-wrapper">
//         <nav className="services-master-list">
//           {services.map((service, index) => (
//             <button
//               key={service.title}
//               className={`service-nav-item ${index === activeIndex ? 'is-active' : ''}`}
//               onClick={() => setActiveIndex(index)}
//             >
//               <span className="service-nav-code">{service.code}</span>
//               <span className="service-nav-title">{service.title}</span>
//             </button>
//           ))}
//         </nav>
//
//         <div className="services-detail-panel">
//           <div key={activeService.code} className="service-detail-content">
//             <div className="detail-header">
//               <span className="detail-code">{activeService.code}</span>
//               <h3>{activeService.title}</h3>
//             </div>
//             <div className="detail-body">
//               <p>{activeService.text}</p>
//               <div className="detail-features">
//                 <div className="feature-tag">24/7 Support</div>
//                 <div className="feature-tag">Expert Engineering</div>
//                 <div className="feature-tag">EMA Compliant</div>
//               </div>
//             </div>
//             <div className="detail-actions">
//               <a href="/contact" className="secondary-button">Enquire for Service</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
//
// export default ServicesSection
// ============================================================

// ============================================================
// NEW SERVICES SECTION — Card Grid Layout
// Each card navigates to /contact on click
// ============================================================

const serviceCards = [
  { id: 1, title: '24-7 Emergency Call-Up Services', highlight: false },
  { id: 2, title: 'Infrared Scanning', highlight: false },
  { id: 3, title: 'Electrical & Lightning Audit', highlight: false },
  { id: 4, title: 'Checking & Troubleshooting Work', highlight: false },
  { id: 5, title: 'Electrical Components Repair / Replacement', highlight: false },
  { id: 6, title: 'LV Switchboard Preventive Maintenance', highlight: false },
  { id: 8, title: 'Switchboard Manufacturing', highlight: false },
  { id: 9, title: 'Commercial / Industrial Installation Work', highlight: false },
  { id: 10, title: 'Licensing', highlight: false },
]

function ServicesSection() {
  const handleCardClick = () => {
    window.history.pushState({}, '', '/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="section-tag">Core Services</p>
        <h2>Specialized electrical services tailored to your needs.</h2>
      </div>

      <div className="services-card-grid">
        {serviceCards.map((service) => (
          <button
            key={service.id}
            className={`service-card-tile ${service.highlight ? 'service-card-tile--highlight' : ''}`}
            onClick={handleCardClick}
            aria-label={`Enquire about ${service.title}`}
          >
            <span className="service-card-tile__title">{service.title}</span>
            <span className="service-card-tile__arrow">→</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
