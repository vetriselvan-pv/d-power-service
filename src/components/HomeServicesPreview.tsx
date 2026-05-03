import { services } from '../data/siteContent'

function HomeServicesPreview() {
  return (
    <section className="home-services-preview">
      <div className="section-heading">
        <p className="section-tag">Our Services</p>
        <h2>Connected service cards designed to feel fast, modern, and structured.</h2>
      </div>

      <div className="connected-services-grid">
        {services.slice(0, 6).map((service, index) => (
          <article
            key={service.title}
            className={`connected-service-card connected-service-card-${(index % 3) + 1}`}
          >
            <span className="connected-service-code">{service.code}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HomeServicesPreview
