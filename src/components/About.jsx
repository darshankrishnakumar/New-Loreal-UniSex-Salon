import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    "Professional salon experience",
    "L'Oreal Professional products",
    "Wide range of services",
    "Unisex services",
    "Convenient location",
    "Personalized service"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        
        <div className="about-visual animate-fade-up">
          <div className="about-image-wrapper">
            <img src="/images/about.png" alt="Salon Professional Service" className="about-image" />
            <div className="about-decorative-box"></div>
          </div>
        </div>

        <div className="about-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title">
            Beauty, Hair & Grooming —<br />
            <span className="text-primary">All Under One Roof</span>
          </h2>
          
          <p className="about-description">
            Welcome to <strong>New L'Oreal Professional Unisex Salon</strong>, your premier destination for exceptional beauty, hair, and grooming services. We cater to both men and women, ensuring everyone walks out feeling confident and looking their absolute best.
          </p>
          <p className="about-description">
            Our expert stylists and therapists combine their rich experience with premium L'Oreal Professional products to deliver personalized care in a relaxing, luxurious environment.
          </p>

          <ul className="about-highlights">
            {highlights.map((item, index) => (
              <li key={index} className="highlight-item">
                <CheckCircle2 size={20} className="highlight-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
};

export default About;
