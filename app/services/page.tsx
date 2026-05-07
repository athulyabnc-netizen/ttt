import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faTruckLoading, 
  faShippingFast, 
  faWeightHanging,
  faBox,
  faTools,
  faTruckPickup,
  faAmbulance,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const services = [
    {
      icon: faTruck,
      title: 'Truck Rental',
      description: 'Comprehensive truck rental services with modern fleet including flatbeds, pickups, and heavy-duty trucks for all your transportation needs across Saudi Arabia.',
      link: '#truck-rental'
    },
    {
      icon: faTruckLoading,
      title: 'Crane Rental',
      description: 'Professional crane rental services with certified operators for construction, industrial lifting, and heavy equipment movement projects.',
      link: '#crane-rental'
    },
    {
      icon: faShippingFast,
      title: 'Logistics Transport',
      description: 'End-to-end logistics solutions including supply chain management, warehousing, and distribution services tailored to your business requirements.',
      link: '#logistics'
    },
    {
      icon: faWeightHanging,
      title: 'Heavy Equipment Moving',
      description: 'Specialized transportation services for heavy machinery, construction equipment, and industrial assets with proper safety protocols.',
      link: '#heavy-equipment'
    },
    {
      icon: faBox,
      title: 'Container Transport',
      description: 'Professional container transport services for shipping containers, storage containers, and cargo containers across KSA.',
      link: '#container-transport'
    },
    {
      icon: faTools,
      title: 'Machinery Lifting',
      description: 'Expert machinery lifting services using advanced equipment and trained operators for industrial and commercial applications.',
      link: '#machinery-lifting'
    },
    {
      icon: faTruckPickup,
      title: 'Cargo Transport',
      description: 'Reliable cargo transport services for goods, materials, and products with proper handling and timely delivery across Saudi Arabia.',
      link: '#cargo-transport'
    },
    {
      icon: faAmbulance,
      title: 'Emergency Transport',
      description: '24/7 emergency transport services for urgent transportation needs with rapid response and dedicated support team.',
      link: '#emergency-transport'
    }
  ];

  const serviceDetails = [
    {
      id: 'truck-rental',
      title: 'Truck Rental Services',
      description: 'Our truck rental services offer flexible solutions for businesses and individuals across Saudi Arabia.',
      features: [
        'Modern fleet of 50+ trucks',
        'Various sizes and capacities available',
        'Experienced and licensed drivers',
        '24/7 availability',
        'Competitive pricing',
        'Full insurance coverage'
      ],
      image: '/images/truck-rental-service.jpg'
    },
    {
      id: 'crane-rental',
      title: 'Crane Rental Services',
      description: 'Professional crane rental with certified operators for construction and industrial projects.',
      features: [
        'Various crane capacities (5-50 tons)',
        'Certified and experienced operators',
        'Safety-compliant operations',
        'On-site technical support',
        'Flexible rental periods',
        'Emergency crane services'
      ],
      image: '/images/crane-service.jpg'
    },
    {
      id: 'logistics',
      title: 'Logistics Transport',
      description: 'Comprehensive logistics solutions for efficient supply chain management.',
      features: [
        'Supply chain optimization',
        'Warehousing solutions',
        'Route planning and optimization',
        'Real-time tracking',
        'Dedicated logistics team',
        'Custom solutions'
      ],
      image: '/images/logistics-service.jpg'
    },
    {
      id: 'heavy-equipment',
      title: 'Heavy Equipment Moving',
      description: 'Specialized services for moving heavy machinery and industrial equipment.',
      features: [
        'Specialized transport equipment',
        'Expert rigging team',
        'Site assessment and planning',
        'Permit handling',
        'Safety-first approach',
        'Insurance coverage'
      ],
      image: '/images/heavy-equipment-service.jpg'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead mb-4">
                Comprehensive transportation and logistics solutions tailored to your needs across Saudi Arabia.
              </p>
              <p className="mb-4">
                From truck rentals to heavy equipment moving, we provide professional services with modern equipment 
                and experienced team members dedicated to excellence.
              </p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-light rounded-pill">
                  Get Quote
                </a>
                <a href="tel:+966500000000" className="btn btn-outline-light rounded-pill">
                  Call Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <img 
                src="/images/services-hero.jpg" 
                alt="Our Services" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Complete Transportation Solutions</h2>
            <p className="text-muted">Professional services for all your transportation needs</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Service Details</h2>
            <p className="text-muted">Learn more about our comprehensive services</p>
          </div>
          {serviceDetails.map((service, index) => (
            <div className="row align-items-center mb-5" key={index} id={service.id}>
              <div className={`col-lg-6 mb-4 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className={`col-lg-6 mb-4 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                <h3 className="text-primary-blue fw-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <ul className="list-unstyled">
                  {service.features.map((feature, featureIndex) => (
                    <li className="mb-2" key={featureIndex}>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="d-flex gap-3 mt-4">
                  <a href="/contact" className="btn btn-primary-orange rounded-pill">
                    Get Quote
                  </a>
                  <a href="https://wa.me/966500000000" className="btn btn-outline-primary-blue rounded-pill" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Why Choose Our Services?</h2>
            <p className="text-muted">Experience the difference with TechTruck Transport</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faTruck} className="text-primary-orange fs-3" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Modern Equipment</h5>
                  <p className="text-muted">
                    State-of-the-art trucks and equipment maintained to highest industry standards for reliability and safety.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faTools} className="text-primary-orange fs-3" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">Expert Team</h5>
                  <p className="text-muted">
                    Trained and certified professionals with extensive experience in transportation and logistics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faShippingFast} className="text-primary-orange fs-3" />
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">24/7 Support</h5>
                  <p className="text-muted">
                    Round-the-clock availability and support for all your transportation needs across Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary-orange text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Get Started?</h2>
          <p className="mb-4">Contact us today for a free consultation and quote</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
              Get Quote
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
