import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const mapLink = "https://maps.app.goo.gl/Byn3me3zN1MjkHMA9?g_st=aw";
  const whatsappLink = "https://wa.me/919942890776";
  const phoneLink = "tel:+919942890776";
  const emailLink = "mailto:priyatamilarasan62@gmail.com";

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        
        <div className="contact-content animate-fade-up">
          <span className="hero-eyebrow">VISIT US</span>
          <h2 className="section-title">
            Contact & <span className="text-primary">Location</span>
          </h2>
          <p className="contact-subtitle">
            Ready for a transformation? Send your enquiry or visit our salon today.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={24} className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Our Location</h4>
                <p>New L'Oreal Professional Unisex Salon<br/>Tirukkoilur, Sandhapet, Asanur Road, 605757</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Clock size={24} className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Business Hours</h4>
                <p>Open Daily<br/>9:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={24} className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Contact Info</h4>
                <p>+91 9942890776</p>
                <p>priyatamilarasan62@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaInstagram size={24} className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Instagram</h4>
                <p>L'Oreal Professional Salon</p>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a href={phoneLink} className="btn-primary flex-btn">
              <Phone size={18} /> Call Now
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary flex-btn whatsapp-btn">
              <FaWhatsapp size={18} /> WhatsApp
            </a>
            <a href={mapLink} target="_blank" rel="noreferrer" className="btn-secondary flex-btn">
              <Navigation size={18} /> Get Directions
            </a>
          </div>
        </div>

        <div className="contact-map animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="map-wrapper">
            {/* Elegant Map Placeholder or actual embed if possible. Using a styled placeholder that links to maps for premium look, as we only have the maps URL, not embed HTML */}
            <div className="map-visual">
               <div className="map-content">
                  <MapPin size={48} className="map-marker-icon" />
                  <h3>New L'Oreal Professional Unisex Salon</h3>
                  <p>Tirukkoilur, Sandhapet, Asanur Road</p>
                  <a href={mapLink} target="_blank" rel="noreferrer" className="btn-primary mt-4">
                    Open in Google Maps
                  </a>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
