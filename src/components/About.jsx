import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="about section-padding" id="about" ref={sectionRef}>
      <div className="container about-container">
        <div className="about-image-wrapper animate-on-scroll slide-up">
          <img 
            src="/gallery-1.jpeg" 
            alt="Rangmohini Studio" 
            className="about-image"
          />
          <div className="about-image-accent"></div>
        </div>
        
        <div className="about-content animate-on-scroll fade-in-late">
          <h2 className="heading-lg">The Vision of <br/><span className="text-gold">Rangmohini</span></h2>
          <div className="about-text">
            <p>
              Satrangi Designer Studio is born from a passion for preserving traditional craftsmanship while embracing modern aesthetics. Every piece is a canvas where threads weave stories of heritage, luxury, and unmatched elegance.
            </p>
            <p>
              Under the creative direction of Rangmohini, our collections celebrate the timeless beauty of ethnic wear, offering bespoke lehengas and designer ensembles that make every moment unforgettable.
            </p>
          </div>
          <div className="about-signature">
            <img src="/satrangi_logo-removebg-preview.png" alt="Satrangi Signature" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
