'use client';

import Link from "next/link";
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
    { href: '#!', label: 'About Us' },
    { href: '#!', label: 'Services' },
    { href: '#!', label: 'Our Trucks' },
    { href: '#!', label: 'Contact Us' }
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

          {/* ================= LOGO ================= */}

          <Link
            className="navbar-brand fw-bold"
            href="/"
          >

            <img
              src={
                isHero
                  ? scrolled
                    ? '/images/ttg-logo.png'
                    : '/images/ttg-logo-white.png'
                  : '/images/ttg-logo.png'
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

          </Link>

          {/* ================= MOBILE TOGGLE ================= */}

          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* ================= DESKTOP MENU ================= */}

          <div className="collapse navbar-collapse d-none d-lg-flex align-items-center w-100">

            {/* CENTER NAV */}

            <ul className="navbar-nav mx-auto">

              {navLinks.map((link, index) => (

                <li className="nav-item" key={index}>

                  {/* NEXT LINK = NO REFRESH */}
                  <Link
                    className="nav-link fw-medium"
                    href={link.href}
                  >
                    {link.label}
                  </Link>

                </li>

              ))}

            </ul>

            {/* RIGHT BUTTON */}

            <a
              href="tel:+966500000000"
              className="btn btn-primary-orange rounded-pill px-3"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="me-2"
              />

              Call Now
            </a>

          </div>

        </div>

      </nav>

      {/* ================= OVERLAY ================= */}

      <div
        className={`mobile-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>

        {/* MOBILE HEADER */}

        <div className="mobile-menu-header d-flex justify-content-between align-items-center mb-4">

          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >

            <img
              src="/images/ttg-logo.png"
              alt="TechTruck Transport"
              style={{ height: "70px" }}
            />

          </Link>

          <button
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

        </div>

        {/* MOBILE NAV */}

        <ul className="mobile-nav">

          {navLinks.map((link, index) => (

            <li key={index}>

              {/* NEXT LINK = NO PAGE REFRESH */}
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>

            </li>

          ))}

        </ul>

        {/* MOBILE CTA */}

        <a
          href="tel:+966500000000"
          className="btn btn-primary-orange rounded-pill px-4 mt-4"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="me-2"
          />

          Call Now
        </a>

      </div>
    </>
  );
}