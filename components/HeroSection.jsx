'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhone, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const slides = [
  {
    id: 1,
    image: '/banner/hero-img-1.jpg',
    title: 'Professional Truck Rental Services',
    subtitle: 'Heavy Transport Solutions Across Saudi Arabia',
    // description: 'Your trusted partner for reliable transportation solutions across the Kingdom. From heavy equipment moving to emergency transport, we\'ve got you covered.',
    buttons: [
      // { text: 'Get Quote', link: '/contact', icon: faPhone, class: 'btn-light' },
      // { text: 'WhatsApp Us', link: 'https://wa.me/966500000000', icon: faWhatsapp, class: 'btn-success', external: true }
        { text: 'View More', link: '/about', icon: faTruck, class: 'btn-slider' },
    ],
    // stats: [
    //   { icon: faTruck, title: '24/7 Service', subtitle: 'Always available' },
    //   { icon: faTruck, title: '50+ Trucks', subtitle: 'Modern fleet' }
    // ]
  },
  {
    id: 2,
    image: '/banner/hero-img-2.jpg',
    title: 'Crane Rental & Heavy Equipment',
    subtitle: 'Advanced Lifting Solutions for Construction',
    // description: 'State-of-the-art cranes and heavy machinery for all your project requirements. Professional operators and safety-first approach.',
    buttons: [
      { text: 'View More', link: '/about', icon: faTruck, class: 'btn-slider' },
      // { text: 'Book Now', link: '/contact', icon: faPhone, class: 'btn-warning' }
    ],
    // stats: [
    //   { icon: faTruck, title: 'Expert Operators', subtitle: 'Certified team' },
    //   { icon: faTruck, title: 'Safety First', subtitle: '100% compliant' }
    // ]
  },
  {
    id: 3,
    image: '/banner/hero-img-3.jpg',
    title: 'Complete Logistics Solutions',
    subtitle: 'End-to-End Supply Chain Management',
    description: 'Comprehensive logistics services tailored to your specific industry needs. From warehousing to final delivery, we handle it all.',
    buttons: [
      // { text: 'Our Services', link: '/services', icon: faTruck, class: 'btn-info' },
      // { text: 'Contact Team', link: '/contact', icon: faPhone, class: 'btn-success' }
        { text: 'View More', link: '/about', icon: faTruck, class: 'btn-slider' },
    ],
    // stats: [
    //   { icon: faTruck, title: '10+ Years', subtitle: 'Experience' },
    //   { icon: faTruck, title: '100% Satisfaction', subtitle: 'Guaranteed' }
    // ]
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="position-relative" style={{ minHeight: '100vh' }}>
      {/* Background Image Slider */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="position-absolute top-0 start-0 w-100 h-100 transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
              transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'
            }}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      
      {/* Content */}
      <div className="position-relative z-1 d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-white">
                <h1 className="display-3 fw-bold mb-4">
                  {currentSlideData.title}
                </h1>
                <h2 className="h2 text-light mb-4">
                  {currentSlideData.subtitle}
                </h2>
                <p className="lead mb-4">
                  {currentSlideData.description}
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  {currentSlideData.buttons.map((button, index) => (
                    <a 
                      key={index}
                      href={button.link} 
                      className={`btn ${button.class} btn-lg rounded-pill px-4`}
                      target={button.external ? '_blank' : '_self'}
                      rel={button.external ? 'noopener noreferrer' : ''}
                    >
                      <FontAwesomeIcon icon={button.icon} className="me-2" />
                      {button.text}
                    </a>
                  ))}
                </div>
                {/* <div className="row g-3">
                  {currentSlideData.stats.map((stat, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={stat.icon} className="text-warning me-3 fs-4" />
                        <div>
                          <h6 className="mb-0 text-white">{stat.title}</h6>
                          <small className="text-white-50">{stat.subtitle}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              {/* Optional: Add a form or additional content here */}
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Slider Navigation Arrows */}
      <button 
        className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white border-0 rounded-end p-3 ms-2"
        onClick={goToPrevious}
        style={{ zIndex: 10 }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="fs-4" />
      </button>
      <button 
        className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white border-0 rounded-start p-3 me-2"
        onClick={goToNext}
        style={{ zIndex: 10 }}
      >
        <FontAwesomeIcon icon={faChevronRight} className="fs-4" />
      </button>

      {/* Slider Pagination Dots */}
      <div className="position-absolute bottom-20 start-50 translate-middle-x d-none" style={{ zIndex: 10 }}>
        <div className="d-flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`rounded-circle border-0 transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-primary' 
                  : 'bg-white bg-opacity-50'
              }`}
              style={{
                width: '12px',
                height: '12px',
                transform: currentSlide === index ? 'scale(1.3)' : 'scale(1)'
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="text-white text-center">
          <small className="d-block mb-2">Scroll Down</small>
          <div className="bounce-animation">
            <FontAwesomeIcon icon={faTruck} className="fs-3" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
