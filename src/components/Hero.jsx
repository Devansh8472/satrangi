import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-video-wrapper">
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/WhatsApp Video 2026-05-06 at 13.27.16.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Elegance Redefined
        </h1>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.3s' }}>
          By Rangmohini
        </p>
        <div className="hero-cta fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#collections" className="btn-primary">Explore Collection</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
