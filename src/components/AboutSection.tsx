import { useState, useEffect } from 'react'
import { aboutSlides } from '../data/siteContent'
import aboutSlide1 from '../assets/about-slide-1.jpg'
import aboutSlide2 from '../assets/about-slide-2.jpg'
import aboutSlide3 from '../assets/about-slide-3.jpg'
import aboutSlide4 from '../assets/about-slide-4.png'

function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const aboutSlideImages = [aboutSlide1, aboutSlide2, aboutSlide3, aboutSlide4]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="intro-section">
      <div className="about-main-wrapper">
        <div className="about-carousel">
          <div className="about-carousel-inner">
            {aboutSlides.map((slide, index) => (
              <div 
                key={index} 
                className={`about-slide ${index === activeSlide ? 'active' : ''}`}
              >
                <img src={aboutSlideImages[index]} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="about-carousel-indicators">
            {aboutSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="intro-copy">
          <p className="section-tag">About The Company</p>
          <h2>Dependable electrical testing and engineering support tailored for Singapore operations.</h2>
          <div className="about-text-content">
            <p>
              At <strong>D-POWER TESTING SERVICES PTE LTD</strong>, we provide comprehensive, one-stop solutions for all your electrical needs. 
              With extensive experience in the commercial and industrial landscape, our team is highly competent in Low Voltage installations 
              and switchboard maintenance.
            </p>
            <p>
              We understand that downtime isn't an option. That’s why we’ve built our reputation on being fast, dependable, and technically superior.
            </p>
            
            <div className="about-commitment">
              <h3>Our Service Commitment:</h3>
              <ul className="commitment-list">
                <li>
                  <strong>24/7 Emergency Support:</strong> 
                  <span>Around-the-clock electrical call-outs and replacements.</span>
                </li>
                <li>
                  <strong>Total LV Solutions:</strong> 
                  <span>A seamless, "one-stop" approach to low-voltage services.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
            <div className="stat-card">
              <strong>Singapore</strong>
              <span>Registered</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-map-container full-width">
        <iframe 
          title="D-Power Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790647895058!2d103.8504068!3d1.3067167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1994bb7753bf%3A0xc3f58739265f02f0!2s42%20Cuff%20Rd%2C%20Singapore%20209752!5e0!3m2!1sen!2ssg!4v1714810900000!5m2!1sen!2ssg"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default AboutSection
