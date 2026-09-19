import { MapPin, Clock } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-up">
          <span className="hero-eyebrow">NEW • PROFESSIONAL BEAUTY EXPERIENCE</span>
          <h1 className="hero-title">
            New L'Oreal Professional<br />
            <span className="text-primary">Unisex Salon</span>
          </h1>
          <p className="hero-description">
            Professional hair, beauty and grooming services designed to make you look and feel your best. Experience premium care with L'Oreal Professional.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Enquiry
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-location-info">
            <div className="info-item">
              <MapPin size={20} className="info-icon" />
              <span>Tirukkoilur • Sandhapet</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-wrapper">
            <img src="/images/hero.png" alt="Premium Salon Interior" className="hero-image" />
            
            {/* Floating Info Card */}
            <div className="floating-card">
              <div className="card-icon-wrapper">
                <Clock size={24} className="card-icon" />
              </div>
              <div className="card-text">
                <span className="card-title">Open Today</span>
                <span className="card-subtitle">9:00 AM – 9:00 PM</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="decoration deco-1"></div>
            <div className="decoration deco-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
