import { services } from '../data/siteContent'

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <p className="section-tag">Core Services</p>
        <h2>Specialized testing, maintenance, and modification services.</h2>
      </div>

      <div className="services-layout">
        <div className="services-intro-panel">
          <p className="services-kicker">What We Handle</p>
          <h3>From routine maintenance to protection system testing.</h3>
          <p>
            The service presentation is designed to feel structured and
            premium while staying easy to scan for both desktop and mobile visitors.
          </p>
        </div>

        <div className="services-flow">
          {services.map((service) => (
            <article key={service.title} className="service-row">
              <div className="service-code">{service.code}</div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
