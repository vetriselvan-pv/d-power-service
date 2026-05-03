import { certificates } from '../data/siteContent'

function CertificatesSection() {
  const getIcon = (type: string) => {
    if (type === 'shield') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
    if (type === 'bolt') {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  }

  return (
    <section className="certificates-section">
      <div className="certificates-header">
        <p className="eyebrow">Technical Authority</p>
        <h2>Certified Excellence & Compliance</h2>
      </div>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.title} className="certificate-card">
            <div className="cert-icon-wrapper">
              {getIcon(cert.icon)}
            </div>
            <div className="cert-content">
              <h4>{cert.title}</h4>
              <span className="cert-category">{cert.category}</span>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificatesSection
