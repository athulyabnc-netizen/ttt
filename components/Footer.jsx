'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const serviceLinks = [
    { href: '/services/truck-rental', label: 'Truck Rental' },
    { href: '/services/crane-rental', label: 'Crane Rental' },
    { href: '/services/logistics-transport', label: 'Logistics Transport' },
    { href: '/services/heavy-equipment-moving', label: 'Heavy Equipment Moving' },
    { href: '/services/container-transport', label: 'Container Transport' },
    { href: '/services/machinery-lifting', label: 'Machinery Lifting' },
    { href: '/services/cargo-transport', label: 'Cargo Transport' },
    { href: '/services/emergency-transport', label: 'Emergency Transport' },
    { href: '/services/restaurant', label: 'Restaurant' },
    { href: '/services/catering-services', label: 'Catering Services' },
  ];

  const socialLinks = [
    { href: '#', icon: faFacebook, label: 'Facebook' },
    { href: '#', icon: faXTwitter, label: 'Twitter' },
    { href: '#', icon: faInstagram, label: 'Instagram' },
    { href: '#', icon: faLinkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="footer-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
            <img src="/images/ttg-logo-white.png" alt="TechTruck Transport"
    style={{ height: '80px', transition: '0.3s' }} />
            </div>
            <p className="text-light">
              TT Global provides you with vehicle rental services for your logistics operations.
              Well maintained trucks rented out for keeping your logistics activities seamless and break free.
            </p>
            <div className="d-flex gap-3 mt-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-light fs-5 social-hover-pop"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-4 mb-4">
            <div className="row">
              <div className="col-6">
                <h5 className="text-white mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  {serviceLinks.slice(0, 5).map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-light text-decoration-none hover-primary-orange">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <h5 className="text-white mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  {serviceLinks.slice(5).map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="text-light text-decoration-none hover-primary-orange">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          {/* <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-primary-orange mb-3">Services</h5>
            <ul className="list-unstyled">
              {serviceLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="text-light text-decoration-none hover-primary-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Contact Info</h5>
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white me-3 hover-primary-orange" />
              <div>
                {/* <p className="mb-0 text-light">Riyadh, Saudi Arabia</p> */}
                <p className="mb-0 text-light hover-primary-orange" >{`TT Global Company, \n2569 Al Nadi,\n7975, Al Aziziyah Dist, \nJEDDAH, 23333, Kingdom of Saudi Arabia`}</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-white me-3 hover-primary-orange" />
              {/* <a href="tel:+966500000000" className="text-light text-decoration-none"> */}
                <a href="tel:+96656232021" className="text-light text-decoration-none hover-primary-orange">
                +966 056232021
              </a>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white me-3 hover-primary-orange" />
              {/* <a href="mailto:info@techtruck.sa" className="text-light text-decoration-none"> */}
                   <a href="mailto:info@ttglobalservice.com" className="text-light text-decoration-none hover-primary-orange">
                info@ttglobalservice.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-secondary my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              © {new Date().getFullYear()} TT Global. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-light">
              Site by <a href="https://brandsncodes.com" target="_blank" rel="noopener noreferrer" className="text-light" style={{ textDecoration: 'none' }}>brandsncodes</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    
  );
}
