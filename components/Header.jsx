'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isHero = false }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' }
  ];

  const socialLinks = [
    { href: '#', icon: faFacebook,  label: 'Facebook'  },
    { href: '#', icon: faInstagram, label: 'Instagram' },
    { href: '#', icon: faXTwitter,  label: 'Twitter'   },
    { href: '#', icon: faLinkedin,  label: 'LinkedIn'  },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

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
              alt="TT GLOBAL"
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

                  <Link
                    className={`nav-link fw-medium${isActive(link.href) ? ' nav-link-active' : ''}`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>

                </li>

              ))}

            </ul>

            {/* RIGHT BUTTON */}
            <a
              href="#!"
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

      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        style={{ top: 0, bottom: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >

        {/* HEADER ROW */}
        <div className="mobile-menu-header d-flex justify-content-between align-items-center">

          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/ttg-logo.png"
              alt="TT Global"
              style={{ height: '60px', objectFit: 'contain' }}
            />
          </Link>

          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>

        </div>

        {/* NAV LINKS */}
        <ul className="mobile-nav">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={isActive(link.href) ? 'mobile-nav-active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CALL BUTTON */}
        <a
          href="tel:+966500000000"
          className="btn btn-primary-orange rounded-pill px-4 mt-2"
          style={{ alignSelf: 'flex-start' }}
        >
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          Call Now
        </a>

        {/* DIVIDER */}
        <hr style={{ borderColor: '#eee', margin: '24px 0 20px' }} />

        {/* CONTACT INFO */}
        <div className="mobile-contact-info">

          <div className="d-flex align-items-start gap-3 mb-3">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ color: '#ff6b35', marginTop: '3px', flexShrink: 0, fontSize: '18px' }}
            />
            <span style={{ color: '#555', fontSize: '18px', fontWeight: '600', lineHeight: 1.5 }}>
              Jeddah, KSA
            </span>
          </div>

          <div className="d-flex align-items-center gap-3 mb-3">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: '#ff6b35', flexShrink: 0, fontSize: '18px' }}
            />
            <a
              href="tel:+966 056232021"
              style={{ color: '#555', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}
            >
              +966 056232021
            </a>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: '#ff6b35', flexShrink: 0, fontSize: '18px' }}
            />
            <a
              href="mailto:info@ttglobalservice.com"
              style={{ color: '#555', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}
            >
              info@ttglobalservice.com
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="d-flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{ color: '#555', fontSize: '22px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#ff6b35'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
