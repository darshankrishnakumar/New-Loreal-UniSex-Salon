import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoImage from './LogoImage';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const bookAppointment = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment at New L'Oreal Professional Unisex Salon. Please share the available timings.");
    window.open(`https://wa.me/919942890776?text=${message}`, '_blank');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          <LogoImage className="logo-img" />
          <div className="logo-text-wrapper">
            <span className="logo-main-title">New L'Oreal</span>
            <span className="logo-sub-title">Unisex Salon</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions desktop-only">
          <button className="btn-primary" onClick={bookAppointment}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary mobile-book-btn" onClick={bookAppointment}>
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
