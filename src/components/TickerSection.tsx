import { highlights } from '../data/siteContent'

function TickerSection() {
  return (
    <section className="ticker-section" aria-label="Service highlights">
      <div className="ticker-track">
        {[...highlights, ...highlights, ...highlights].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export default TickerSection
