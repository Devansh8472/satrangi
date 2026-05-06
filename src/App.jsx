import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductGallery from './components/ProductGallery';
import VideoHighlights from './components/VideoHighlights';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductGallery />
        <VideoHighlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
