import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Hair', 'Beauty', 'Bridal', 'Salon'];

  const galleryImages = [
    { id: 1, src: '/images/hero.png', category: 'Salon', alt: 'Salon Interior' },
    { id: 2, src: '/images/bridal.png', category: 'Bridal', alt: 'Bridal Makeup' },
    { id: 3, src: '/images/about.png', category: 'Beauty', alt: 'Beauty Treatment' },
    { id: 4, src: '/images/gallery_hair.png', category: 'Hair', alt: 'Hair Styling' }
  ];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <span className="hero-eyebrow">OUR PORTFOLIO</span>
          <h2 className="section-title">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="section-subtitle">
            Take a look at our premium salon space and the stunning transformations we've created.
          </p>
        </div>

        <div className="gallery-filters animate-fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item animate-fade-up">
              <img src={image.src} alt={image.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
