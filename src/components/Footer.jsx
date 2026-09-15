import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import LogoImage from './LogoImage';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <LogoImage className="footer-logo-img" />
            <p className="footer-address">
              Tirukkoilur • Sandhapet • Asanur Road
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://wa.me/919942890776" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="footer-hours">
              <p><strong>Business Hours:</strong></p>
              <p>9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 New L'Oreal Professional Unisex Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
