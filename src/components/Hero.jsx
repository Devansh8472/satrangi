import React from 'react';
import HeroBackgroundVideo from './HeroBackgroundVideo';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-video-wrapper">
        <HeroBackgroundVideo />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <p className="hero-kicker fade-in">Presenting the Collection</p>
          <h1 className="hero-title fade-in">
            Elegance <br />
            <span className="hero-title-accent">Redefined</span>
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.3s' }}>
            A symphony of tradition and modern luxury. Curated exclusively by Rangmohini.
          </p>
          
          <div className="hero-actions fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="#collections" className="btn-solid">Discover the Art</a>
            <a href="#about" className="btn-outline">Watch Film</a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll down</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
