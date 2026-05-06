import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Our Story', href: '#about' },
    { name: 'The Studio', href: '#studio' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="navbar-logo">
          <img 
            src="/satrangi_logo-removebg-preview.png" 
            alt="Satrangi Designer Studio" 
            className="logo-img"
          />
        </div>

        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions desktop-only">
          <button className="icon-btn">
            <ShoppingBag size={20} />
          </button>
          <a href="#contact" className="cta-btn">Book Appointment</a>
        </div>

        <div className="mobile-toggle mobile-only">
          <button 
            className="icon-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="mobile-cta-btn">Book Appointment</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
