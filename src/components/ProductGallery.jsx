import React, { useEffect, useRef } from 'react';
import './ProductGallery.css';

const images = [
  '/gallery-2.jpeg',
  '/gallery-3.jpeg',
  '/gallery-4.jpeg',
  '/gallery-5.jpeg',
  '/gallery-6.jpeg',
  '/gallery-7.jpeg',
  '/gallery-1.jpeg'
];

const generateProducts = () => {
  const products = [];
  const names = [
    'The Royal Maroon Lehenga', 'Emerald Silk Saree', 'Ivory Pearl Anarkali', 
    'Gold Zari Ensemble', 'Midnight Velvet Gown', 'Ruby Red Bridal Wear',
    'Champagne Net Lehenga', 'Sapphire Georgette Drape', 'Rose Gold Fusion Set'
  ];
  
  for (let i = 0; i < 18; i++) {
    products.push({
      id: i + 1,
      name: names[i % names.length] + (i >= names.length ? ' II' : ''),
      price: '₹' + (Math.floor(Math.random() * 50) + 20) + ',000',
      image: images[i % images.length]
    });
  }
  return products;
};

const products = generateProducts();

const ProductGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = galleryRef.current.querySelectorAll('.product-card');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${(index % 3) * 0.15}s`;
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="gallery section-padding" id="collections" ref={galleryRef}>
      <div className="container">
        <div className="gallery-header text-center">
          <h2 className="heading-lg">The Signature Collection</h2>
          <p className="gallery-subtitle">Meticulously crafted for the modern muse.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="product-overlay">
                  <button className="btn-secondary">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-footer text-center">
          <button className="btn-primary">View Full Catalog</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
