'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export default function ClientSection() {
  const clients = [
    { name: 'Saudi Aramco', logo: '/images/client1.png' },
    { name: 'SABIC', logo: '/images/client2.png' },
    { name: 'Maaden', logo: '/images/client3.png' },
    { name: 'SEC', logo: '/images/client4.png' },
    { name: 'STC', logo: '/images/client5.png' },
    { name: 'SABB', logo: '/images/client6.png' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Riyadh Construction Co.',
      text: 'TechTruck Transport has been our reliable partner for over 3 years. Their fleet is modern and their service is exceptional.',
      rating: 5
    },
    {
      name: 'Fatima Al-Saud',
      company: 'Jeddah Logistics',
      text: 'Professional team, always on time, and competitive pricing. Highly recommend their services for any transportation needs.',
      rating: 5
    },
    {
      name: 'Mohammed Al-Qahtani',
      company: 'Dammam Heavy Industries',
      text: 'We use TechTruck for all our heavy equipment moving. Their expertise and equipment are unmatched in the region.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i < rating ? 'text-warning' : 'text-secondary'} 
      />
    ));
  };

  return (
    <>
      {/* Client Logos Section */}
      {/* <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Trusted by Leading Companies</h2>
            <p className="text-muted">We proudly serve some of Saudi Arabia's most respected organizations</p>
          </div>
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-md-4 col-lg-2 mb-4" key={index}>
                <div className="client-logo text-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="img-fluid"
                    style={{ maxHeight: '60px', filter: 'grayscale(100%)', opacity: '0.7' }}
                  />
                  <p className="mt-2 text-muted small">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">What Our Clients Say</h2>
            <p className="text-muted">Real feedback from our valued customers</p>
          </div>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-primary-orange fs-2 opacity-25" />
                    </div>
                    <div className="mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="card-text text-muted mb-3">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-primary-orange bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <span className="text-primary-orange fw-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-primary-blue">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
