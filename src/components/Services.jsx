import { useState } from 'react';
import { serviceCategories } from '../data/services';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="services" className="section services-section section-alt">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <span className="hero-eyebrow">OUR EXPERTISE</span>
          <h2 className="section-title">
            Premium <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle">
            Explore our comprehensive range of hair, beauty, and grooming treatments designed to elevate your style.
          </p>
        </div>

        <div className="services-grid">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedId === category.id;

            return (
              <div 
                key={category.id} 
                className={`service-card animate-fade-up ${isExpanded ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="service-card-header" onClick={() => toggleExpand(category.id)}>
                  <div className="service-icon-wrapper">
                    <Icon size={28} className="service-icon" />
                  </div>
                  <div className="service-info">
                    <h3 className="service-title">{category.title}</h3>
                    <p className="service-desc">{category.description}</p>
                  </div>
                  <div className="service-action">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                <div className={`service-list-container ${isExpanded ? 'open' : ''}`}>
                  <ul className="service-list">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="service-list-item">
                        <span className="service-dot"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <button className="btn-secondary btn-sm" onClick={() => {
                       const message = encodeURIComponent(`Hi, I would like to enquire about ${category.title} services at New L'Oreal Professional Unisex Salon.`);
                       window.open(`https://wa.me/919942890776?text=${message}`, '_blank');
                    }}>
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
