import logo from '../assets/d-power-logo.png'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-column">
          <p className="footer-heading">About Us</p>
          <div className="footer-logo-placeholder">
            <img src={logo} alt="D-Power Logo" className="footer-logo-img" />
          </div>
          <h3 className="footer-title-highlight">D-POWER TESTING SERVICE PTE LTD.</h3>
          <h5 className="footer-subtitle-highlight">Electrical Testing & Engineering Services</h5>
        </section>

        <section className="footer-column">
          <p className="footer-heading">Contact Info</p>
          <div className="footer-contact-list">
            <p><strong>Phone:</strong> +65 90571320</p>
            <p><strong>Email:</strong> dpowertestingservices@gmail.com</p>
            <p><strong>Address:</strong> 42 Cuff Road, #02-E1 Singapore 209752</p>
          </div>
        </section>

        <section className="footer-column">
          <div className="footer-hours-list">
            <p className="footer-heading">Work Hours</p>
            <p>Mon - Sat: 09am - 05pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="footer-legal-list">
            <p className="footer-hours-title">Compliance</p>
            <a href="/terms">Terms of Service</a>
            <a href="/compliance">Compliance</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} D-POWER TESTING SERVICES PTE LTD. All rights reserved.
        </p>
        <div className="footer-socials">
          {/* <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.064 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a> 
          {/* <a href="https://wa.me/+6590571320" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
