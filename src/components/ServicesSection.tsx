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
// Each card navigates to /contact via react-router useNavigate
// ============================================================

import { useNavigate } from 'react-router-dom'

const serviceCards = [
  { id: 1,  title: '24/7 Emergency Call-Up Services' },
  { id: 2,  title: 'Infrared Scanning' },
  { id: 3,  title: 'Electrical & Lightning Audit' },
  { id: 4,  title: 'Checking & Troubleshooting Work' },
  { id: 5,  title: 'Electrical Components Repair / Replacement' },
  { id: 6,  title: 'LV Switchboard Preventive Maintenance' },
  { id: 7,  title: 'Switchboard Manufacturing' },
  { id: 8,  title: 'Commercial / Industrial Installation Work' },
  { id: 9,  title: 'Licensing' },
]

function ServicesSection() {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="services-section"
      aria-label="Electrical Testing and Engineering Services"
    >
      <div className="section-heading">
        <p className="section-tag">Core Services</p>
        <h2>Specialized electrical services tailored to your needs.</h2>
      </div>

      {/* Semantic list so crawlers index each service name as a list item */}
      <ul className="services-card-grid" role="list">
        {serviceCards.map((service) => (
          <li key={service.id}>
            <button
              className="service-card-tile"
              onClick={handleCardClick}
              aria-label={`Enquire about ${service.title}`}
            >
              <span className="service-card-tile__title">{service.title}</span>
              <span className="service-card-tile__arrow" aria-hidden="true">→</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ServicesSection
