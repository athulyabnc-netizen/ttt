'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isHero = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Our Trucks' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isHero
            ? scrolled
              ? 'navbar-sticky'
              : 'navbar-hero'
            : 'navbar-sticky'
        }`}
      >
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo */}
          <a className="navbar-brand fw-bold" href="/">
  <img
  src={
    isHero
      ? scrolled
        ? '/images/ttt-logo.png'
        : '/images/ttt-logo-white.png'
      : '/images/ttt-logo.png'
  }
  alt="TechTruck Transport"
  style={{
    width: '180px',
    height: '70px',
    objectFit: 'contain',
    display: 'block',
    transition: 'all 0.3s ease'
  }}
/>
</a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-flex align-items-center w-100">

            {/* Center Nav */}
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link fw-medium" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Button */}
            <a
              // href="https://wa.me/91XXXXXXXXXX"
              // href="tel:+91XXXXXXXXXX"
                 href="#!"
              className="btn btn-primary-orange rounded-pill px-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> */}
                 <FontAwesomeIcon icon={faPhone} className="me-2" />
              Call Now
            </a>

          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        className={`mobile-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>

        {/* Header */}
        <div className="mobile-menu-header d-flex justify-content-between align-items-center mb-4">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/ttt-logo.png"
              alt="TechTruck Transport"
              style={{ height: "70px" }}
            />
          </a>

          <button
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <ul className="mobile-nav">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="btn btn-primary-orange rounded-pill px-4 mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call Now
        </a>

      </div>
    </>
  );
}