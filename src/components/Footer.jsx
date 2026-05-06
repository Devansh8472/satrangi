import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img 
              src="/satrangi_logo-removebg-preview.png" 
              alt="Satrangi Designer Studio" 
              className="footer-logo"
            />
            <p className="footer-bio">
              Redefining ethnic luxury. Every stitch tells a story of heritage, passion, and elegance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Ig</a>
              <a href="#" className="social-link">Fb</a>
              <a href="#" className="social-link">Tw</a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">The Signature Collection</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#studio">Behind the Seams</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Visit Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Couture Avenue, Fashion District, New Delhi</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@satrangistudio.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-text">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Satrangi Designer Studio By Rangmohini. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
