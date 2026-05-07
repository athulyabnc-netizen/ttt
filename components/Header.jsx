'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Header({ isHero = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/trucks', label: 'Our Trucks' },
    // { href: '/faq', label: 'FAQ' },
    // { href: '/clients', label: 'Our Clients' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isHero ? 'navbar-hero' : 'navbar-sticky sticky-top'}`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <FontAwesomeIcon icon={faTruck} className="text-primary-orange me-2" />
            <span className={isHero ? 'text-white' : 'text-primary-blue'}>TechTruck Transport</span>
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a 
                    className={`nav-link ${isHero ? 'text-white' : 'text-primary-blue'}`}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="d-flex align-items-center">
              <a 
                href="https://wa.me/966500000000" 
                className={`btn ${isHero ? 'btn-light' : 'btn-primary-orange'} rounded-pill px-3 me-3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
               Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
