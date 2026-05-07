import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClientSection from '@/components/ClientSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faAward, faUsers, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function Clients() {
  const clients = [
    { name: 'Saudi Aramco', logo: '/images/client1.png', industry: 'Oil & Gas' },
    { name: 'SABIC', logo: '/images/client2.png', industry: 'Chemicals' },
    { name: 'Maaden', logo: '/images/client3.png', industry: 'Mining' },
    { name: 'SEC', logo: '/images/client4.png', industry: 'Electricity' },
    { name: 'STC', logo: '/images/client5.png', industry: 'Telecommunications' },
    { name: 'SABB', logo: '/images/client6.png', industry: 'Banking' },
    { name: 'Riyadh Bank', logo: '/images/client7.png', industry: 'Banking' },
    { name: 'Almarai', logo: '/images/client8.png', industry: 'Food & Beverage' },
    { name: 'Savola', logo: '/images/client9.png', industry: 'Food Industry' },
    { name: 'Jarir', logo: '/images/client10.png', industry: 'Retail' },
    { name: 'Panda', logo: '/images/client11.png', industry: 'Retail' },
    { name: 'NCCI', logo: '/images/client12.png', industry: 'Construction' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Riyadh Construction Co.',
      position: 'Operations Manager',
      text: 'TechTruck Transport has been our reliable partner for over 3 years. Their fleet is modern, drivers are professional, and service is exceptional. They always deliver on time and handle our heavy equipment with care.',
      rating: 5,
      image: '/images/testimonial1.jpg'
    },
    {
      name: 'Fatima Al-Saud',
      company: 'Jeddah Logistics',
      position: 'CEO',
      text: 'Professional team, always on time, and competitive pricing. Highly recommend their services for any transportation needs in Saudi Arabia. Their 24/7 support has saved us multiple times.',
      rating: 5,
      image: '/images/testimonial2.jpg'
    },
    {
      name: 'Mohammed Al-Qahtani',
      company: 'Dammam Heavy Industries',
      position: 'Supply Chain Director',
      text: 'We use TechTruck for all our heavy equipment moving. Their expertise and equipment are unmatched in the region. Safety standards are excellent and their team is very knowledgeable.',
      rating: 5,
      image: '/images/testimonial3.jpg'
    },
    {
      name: 'Khalid Al-Harbi',
      company: 'Mecca Development Projects',
      position: 'Project Manager',
      text: 'Outstanding service! They handled our complex logistics requirements perfectly. From planning to execution, everything was smooth. Their attention to detail is impressive.',
      rating: 5,
      image: '/images/testimonial4.jpg'
    },
    {
      name: 'Nora Al-Fahad',
      company: 'Medina Trading Co.',
      position: 'General Manager',
      text: 'TechTruck Transport is our go-to partner for all transportation needs. Their reliability and professionalism have helped us grow our business. Excellent customer service!',
      rating: 5,
      image: '/images/testimonial5.jpg'
    },
    {
      name: 'Omar Al-Johani',
      company: 'Tabuk Mining Operations',
      position: 'Logistics Coordinator',
      text: 'Best truck rental company in Saudi Arabia! Their modern fleet and experienced drivers make every project successful. Very competitive pricing and flexible terms.',
      rating: 5,
      image: '/images/testimonial6.jpg'
    }
  ];

  const statistics = [
    {
      icon: faUsers,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses trust us across Saudi Arabia'
    },
    {
      icon: faHandshake,
      number: '10,000+',
      label: 'Projects Completed',
      description: 'Successfully delivered transportation projects'
    },
    {
      icon: faAward,
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognized for excellence in logistics'
    },
    {
      icon: faChartLine,
      number: '98%',
      label: 'Client Retention',
      description: 'Clients continue to choose us year after year'
    }
  ];

  const renderStars = (rating: number) => {
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
      <Header />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Valued Clients</h1>
              <p className="lead mb-4">
                Trusted by leading companies across Saudi Arabia for reliable transportation and logistics services.
              </p>
              <p className="mb-4">
                We are proud to serve some of the most respected organizations in the Kingdom, 
                from multinational corporations to local businesses. Their trust in our services 
                drives us to maintain the highest standards of excellence.
              </p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-light rounded-pill">
                  Become a Client
                </a>
                <a href="/services" className="btn btn-outline-light rounded-pill">
                  Our Services
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <img 
                src="/images/clients-hero.jpg" 
                alt="Our Clients" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Trusted by the Best</h2>
            <p className="text-muted">Our success is measured by our clients' success</p>
          </div>
          <div className="row g-4">
            {statistics.map((stat, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="text-center">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                    <FontAwesomeIcon icon={stat.icon} className="text-primary-orange fs-2" />
                  </div>
                  <h2 className="text-primary-orange fw-bold mb-2">{stat.number}</h2>
                  <h5 className="text-primary-blue fw-bold mb-2">{stat.label}</h5>
                  <p className="text-muted">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Trusted Partners</h2>
            <p className="text-muted">Companies that choose TechTruck Transport</p>
          </div>
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>
                <div className="client-logo text-center p-3">
                  <div className="bg-white rounded shadow-sm p-4 mb-2" style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="img-fluid"
                      style={{ maxHeight: '60px', filter: 'grayscale(100%)', opacity: '0.7' }}
                    />
                  </div>
                  <h6 className="text-primary-blue fw-bold mb-1">{client.name}</h6>
                  <small className="text-muted">{client.industry}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Client Testimonials</h2>
            <p className="text-muted">What our clients say about working with us</p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-primary-orange fs-2 opacity-25" />
                    </div>
                    <div className="mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="card-text text-muted mb-4">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-primary-orange bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h6 className="mb-0 text-primary-blue">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.position}</small>
                        <br />
                        <small className="text-primary-orange">{testimonial.company}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Industries We Serve</h2>
            <p className="text-muted">Comprehensive transportation solutions for diverse sectors</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={faAward} className="text-primary-orange fs-2" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Oil & Gas</h5>
                  <p className="text-muted">Specialized equipment for oil field operations and gas industry transportation needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={faAward} className="text-primary-orange fs-2" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Construction</h5>
                  <p className="text-muted">Heavy equipment transport and construction site logistics solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={faAward} className="text-primary-orange fs-2" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Manufacturing</h5>
                  <p className="text-muted">Raw material transport and finished goods delivery services.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={faAward} className="text-primary-orange fs-2" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Retail & Distribution</h5>
                  <p className="text-muted">Supply chain solutions for retail and distribution networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary-orange text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Join Our Growing Family of Clients</h2>
          <p className="mb-4">Experience the TechTruck Transport difference for your business</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
              Get Started
            </a>
            <a href="tel:+966500000000" className="btn btn-outline-light btn-lg rounded-pill px-4">
              Call +966 50 000 0000
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
