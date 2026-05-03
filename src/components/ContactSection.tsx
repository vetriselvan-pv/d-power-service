import logo from '../assets/d-power-logo.png'
import { company } from '../data/siteContent'

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-form-panel">
        <div className="contact-copy">
          <p className="section-tag">Contact</p>
          <h2>Get in touch.</h2>
          <p>
            Send your project details and service requirements. We can follow up
            for testing, maintenance, troubleshooting, earthing checks, and site modifications.
          </p>
        </div>

        <form className="contact-form">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            <span>Phone Number</span>
            <input type="tel" name="phone" placeholder="+65" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="your@email.com" />
          </label>

          <label>
            <span>Service Required</span>
            <input
              type="text"
              name="service"
              placeholder="Relay testing, maintenance, troubleshooting..."
            />
          </label>

          <label className="contact-form-message">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your project, site, or testing requirement"
            />
          </label>

          <button type="submit" className="primary-button">
            Send Enquiry
          </button>
        </form>
      </div>

      <div className="contact-panel">
        <p className="contact-panel-tag">Contact Info</p>
        <div className="contact-avatar-placeholder">
          <img src={logo} alt="D-Power Logo" className="contact-avatar-img" />
        </div>
        <p>{company.contactName}</p>
        <a href={company.phoneHref}>{company.phone}</a>
        <a href={company.emailHref}>{company.email}</a>
        <span>{company.address}</span>
      </div>
    </section>
  )
}

export default ContactSection
