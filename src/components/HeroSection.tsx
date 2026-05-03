import { useState, useEffect } from 'react'
import { slides } from '../data/siteContent'
import slideOne from '../assets/slide-1.png'
import slideTwo from '../assets/slide-2.png'
import slideThree from '../assets/slide-3.png'
import slideFour from '../assets/slide-4.png'

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    
    const interval = setInterval(() => {
      setDisplayedText(() => {
        index++
        if (index <= text.length) {
          return text.substring(0, index)
        }
        clearInterval(interval)
        return text
      })
    }, 25)

    return () => {
      clearInterval(interval)
      setDisplayedText('')
    }
  }, [text])

  return (
    <>
      {displayedText}
      <span className="typewriter-cursor">&nbsp;</span>
    </>
  )
}

type HeroSectionProps = {
  activeSlide: number
  onSelectSlide: (index: number) => void
}

function HeroSection({ activeSlide, onSelectSlide }: HeroSectionProps) {
  const currentSlide = slides[activeSlide]
  const slideImages = [slideOne, slideTwo, slideThree, slideFour]

  return (
    <section id="home" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
          >
            <img
              className="hero-slide-image"
              src={slideImages[index]}
              alt=""
            />
            <div className="hero-slide-shade" />
            <div className="grid-overlay" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <p className="eyebrow">{currentSlide.eyebrow}</p>
        <h1 className="hero-title">
          <TypewriterText text={currentSlide.title} />
        </h1> 

        <div className="hero-actions">
          <a className="primary-button" href="/contact">
            {currentSlide.cta}
          </a>
          <a className="secondary-button" href="/services">
            Explore Capabilities
          </a>
        </div>

        <div className="carousel-controls" aria-label="Hero slide controls">
          {slides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              className={index === activeSlide ? 'is-active' : ''}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => onSelectSlide(index)}
            />
          ))}
        </div>
      </div> 
    </section>
  )
}

export default HeroSection
