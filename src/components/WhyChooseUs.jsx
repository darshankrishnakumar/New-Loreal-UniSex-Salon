import { Award, Users, Sparkles, Clock } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: "Professional Products",
      description: "We exclusively use L'Oreal Professional products for our selected salon services to ensure premium quality results."
    },
    {
      id: 2,
      icon: Users,
      title: "Unisex Experience",
      description: "Expert beauty, hair, and grooming services tailored specifically for both men and women in a comfortable environment."
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Complete Beauty Care",
      description: "From haircuts to bridal makeup, skin care, and spa therapies, find all your beauty needs under one roof."
    },
    {
      id: 4,
      icon: Clock,
      title: "Convenient Timings",
      description: "Open daily from 9:00 AM to 9:00 PM to fit into your busy schedule perfectly."
    }
  ];

  return (
    <section className="section why-choose-section section-alt">
      <div className="container">
        
        <div className="section-header text-center animate-fade-up">
          <span className="hero-eyebrow">THE DIFFERENCE</span>
          <h2 className="section-title">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="section-subtitle">
            Experience the pinnacle of beauty and grooming services with our dedicated team of professionals.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="feature-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  <Icon size={32} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
