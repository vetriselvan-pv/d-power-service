import { useRef, useEffect } from 'react'
import { testimonials } from '../data/siteContent'

function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current
        const cardNode = carousel.querySelector('.testimonial-card') as HTMLElement
        const cardWidth = cardNode ? cardNode.offsetWidth + 24 : 364
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
        
        if (carousel.scrollLeft >= maxScrollLeft - 10) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          carousel.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 364 // approx width + gap
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 364
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div className="header-text">
          <p className="eyebrow">Client Feedback</p>
          <h2>Trusted by Industry Professionals</h2>
        </div>
        <div className="carousel-nav">
          <button className="carousel-btn prev-btn" onClick={scrollLeft} aria-label="Previous Testimonial">
            &#8592;
          </button>
          <button className="carousel-btn next-btn" onClick={scrollRight} aria-label="Next Testimonial">
            &#8594;
          </button>
        </div>
      </div>
      
      <div className="testimonials-carousel" ref={carouselRef}>
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="quote-mark">"</div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {t.author.charAt(0)}
              </div>
              <div className="author-info">
                <h4>{t.author}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
