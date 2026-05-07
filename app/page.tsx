'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';
import TruckCard from '@/components/TruckCard';
import HeroSection from '@/components/HeroSection';
import ClientSection from '@/components/ClientSection';
import FAQAccordion from '@/components/FAQAccordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faTruckLoading, 
  faShippingFast, 
  faWeightHanging,
  faBox,
  faTools,
  faTruckPickup,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const services = [
    {
      icon: faTruck,
      title: 'Truck Rental',
      description: 'Modern fleet of trucks for all your transportation needs across Saudi Arabia.',
      link: '/services'
    },
    {
      icon: faTruckLoading,
      title: 'Crane Rental',
      description: 'Professional crane services for heavy lifting and construction projects.',
      link: '/services'
    },
    {
      icon: faShippingFast,
      title: 'Logistics Transport',
      description: 'Comprehensive logistics solutions for efficient supply chain management.',
      link: '/services'
    },
    {
      icon: faWeightHanging,
      title: 'Heavy Equipment Moving',
      description: 'Specialized equipment for moving heavy machinery and industrial assets.',
      link: '/services'
    }
  ];

  const featuredTrucks = [
    {
      name: 'Heavy Duty Flatbed',
      image: '/images/truck1.jpg',
      capacity: '20 tons capacity',
      availability: 'Available',
      description: 'Perfect for heavy equipment and large cargo transportation.',
      link: '/trucks/flatbed'
    },
    {
      name: 'Mobile Crane Truck',
      image: '/images/truck2.jpg',
      capacity: '15 tons lifting',
      availability: 'Available',
      description: 'Versatile crane truck for construction and industrial lifting.',
      link: '/trucks/crane'
    },
    {
      name: 'Container Trailer',
      image: '/images/truck3.jpg',
      capacity: '40ft container',
      availability: 'Available',
      description: 'Specialized trailer for container transport and shipping.',
      link: '/trucks/trailer'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you serve in Saudi Arabia?',
      answer: 'We provide services across all major cities in Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, and surrounding areas. Our network covers the entire Kingdom with 24/7 availability.'
    },
    {
      question: 'Do you provide drivers with the trucks?',
      answer: 'Yes, all our truck rentals include experienced, licensed drivers who are familiar with Saudi roads and regulations. Our drivers are trained professionals with excellent safety records.'
    },
    {
      question: 'What are your rental rates?',
      answer: 'Our rates vary depending on the truck type, duration, and distance. We offer competitive pricing with flexible packages for short-term and long-term rentals. Contact us for a customized quote.'
    },
    {
      question: 'Do you offer emergency transport services?',
      answer: 'Yes, we provide 24/7 emergency transport services across Saudi Arabia. Our emergency response team is always ready to handle urgent transportation needs.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Modern Trucks' },
    { number: '500+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Header isHero={true} />
      <HeroSection />
      
      {/* Company Introduction */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h2 className="text-primary-blue fw-bold mb-3">Welcome to TechTruck Transport</h2>
              <p className="text-muted mb-4">
                TechTruck Transport is your premier partner for truck rental and logistics services in Saudi Arabia. 
                With over a decade of experience in the industry, we understand the unique transportation needs of businesses 
                and individuals across the Kingdom.
              </p>
              <p className="text-muted mb-4">
                Our commitment to excellence, safety, and reliability has made us the preferred choice for companies 
                requiring professional transportation solutions. From heavy equipment moving to emergency transport, 
                we deliver quality service every time.
              </p>
              <div className="d-flex gap-3">
                <a href="/about" className="btn btn-primary-orange rounded-pill">
                  View  More
                </a>
                {/* <a href="/contact" className="btn btn-outline-primary-blue rounded-pill">
                  Contact Us
                </a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/about-home-page.jpg" 
                alt="TechTruck Transport" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          
        </div>
        
      </section>


      {/* Why Choose Us */}
      <section className="py-5 ">
  <div className="container">
    {/* <div className="text-center mb-5">
      <h2 className="fw-bold text-primary-blue mb-3">
        Why Choose TechTruck Transport?
      </h2>
      <p className="text-muted">
        We deliver excellence in every journey
      </p>
    </div> */}

    <div className="row g-4">

      {/* Item 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="d-flex">
          <FontAwesomeIcon icon={faTruck} className="text-primary-orange fs-3 me-3 mt-1" />
          <div>
            <h5 className="fw-bold text-primary-blue">Modern Fleet</h5>
            <p className="text-muted mb-0">
              State-of-the-art trucks and equipment maintained to highest standards.
            </p>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="d-flex">
          <FontAwesomeIcon icon={faTools} className="text-primary-orange fs-3 me-3 mt-1" />
          <div>
            <h5 className="fw-bold text-primary-blue">Expert Team</h5>
            <p className="text-muted mb-0">
              Experienced professionals dedicated to your transportation needs.
            </p>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="d-flex">
          <FontAwesomeIcon icon={faShippingFast} className="text-primary-orange fs-3 me-3 mt-1" />
          <div>
            <h5 className="fw-bold text-primary-blue">24/7 Service</h5>
            <p className="text-muted mb-0">
              Round-the-clock availability for all your transportation requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Item 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="d-flex">
          <FontAwesomeIcon icon={faTruckPickup} className="text-primary-orange fs-3 me-3 mt-1" />
          <div>
            <h5 className="fw-bold text-primary-blue">Full Coverage</h5>
            <p className="text-muted mb-0">
              Services available across all major cities in Saudi Arabia.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Statistics - Modern Premium Cards */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundImage: 'url("/images/our-achievements.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Dark Overlay for better text visibility */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0, 0, 0, 0.7)' }}></div>
        
        {/* Decorative Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="position-absolute bottom-10 end-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="text-white fw-bold mb-3 display-5">Our Achievements</h2>
            <p className="text-white-50 fs-5">Numbers that speak for our excellence</p>
          </div>

          {/* Modern Stats Grid */}
          <div className="row g-4">
            {stats.map((stat, index) => {
              // Define icons for each stat
              const statIcons = [faTruck, faBox, faWeightHanging, faShippingFast];
              const currentIcon = statIcons[index % statIcons.length];
              
              return (
                <div className="col-6 col-lg-3 mb-4" key={index}>
                  <div className="stat-card glassmorphism-stat text-center position-relative overflow-hidden">
                    {/* Background Glow Effect */}
                    <div className="position-absolute top-0 end-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-5 blur-2xl"></div>
                    
                    {/* Icon */}
                    {/* <div className="mb-3">
                      <div className="icon-circle bg-white/10 backdrop-blur-sm d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={currentIcon} className="text-warning fs-3" />
                      </div>
                    </div> */}
                    
                    {/* Counter Number */}
                    <div className="counter-number mb-2">
                      <h2 className="text-white fw-bold mb-0">{stat.number}</h2>
                    </div>
                    
                    {/* Label */}
                    <p className="text-white mb-0">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Styles for Stats */}
        <style jsx>{`
          .glassmorphism-stat {
               backdrop-filter: blur(15px);
    background: #ffffff1a;
    border: 1px solid #fff3;
    border-radius: 146px;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    padding: 3.5rem;
    transition: all .4s cubic-bezier(.4, 0, .2, 1);
    display: flex;
          }

          .icon-circle {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .glassmorphism-stat:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 165, 0, 0.3);
          }

          .counter-number h2 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            background: linear-gradient(135deg, #ffffff 0%, #ffa500 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .glassmorphism-stat:hover .counter-number h2 {
            background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transform: scale(1.05);
          }

          .stat-card {
            position: relative;
            overflow: hidden;
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 165, 0, 0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s;
            opacity: 0;
          }

          .glassmorphism-stat:hover::before {
            animation: shimmer 0.6s ease-in-out;
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
          }

          /* Mobile Responsive */
          @media (max-width: 767px) {
            .glassmorphism-stat {
              min-height: 160px;
              border-radius: 1.5rem;
            }
            
            .counter-number h2 {
              font-size: 2.8rem;
            }
          }

          @media (max-width: 575px) {
            .glassmorphism-stat {
              min-height: 140px;
              border-radius: 1.25rem;
            }
            
            .counter-number h2 {
              font-size: 2.5rem;
            }
          }
        `}</style>
      </section>
      {/* Services Overview */}
      {/* <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Services</h2>
            <p className="text-muted">Comprehensive transportation solutions for every need</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/services" className="btn btn-primary-blue rounded-pill px-4">
              View All Services
            </a>
          </div>
        </div>
      </section> */}
     <section className="py-5 bg-light">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="fw-bold text-primary-blue mb-3">
        Our Services
      </h2>
      <p className="text-muted">
        Comprehensive transportation solutions for every need
      </p>
    </div>

    <div className="row g-4">

      {services.map((service, index) => (
        <div className="col-lg-3 col-md-6" key={index}>

          <div className="card border-0 shadow-sm h-100 service-card text-center">

            {/* ICON */}
            <div className="card-body">
              <div className="mb-3">
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="text-primary-orange display-5" 
                />
              </div>

              {/* TITLE */}
              <h5 className="fw-bold text-primary-blue">
                {service.title}
              </h5>

              {/* LINE */}
              <div className="service-line mx-auto my-2"></div>

              {/* DESCRIPTION */}
              <p className="text-muted small mb-0">
                {service.description}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

    <div className="text-center mt-5">
      <a href="/services" className="btn btn-primary-blue px-4">
        View All Services →
      </a>
    </div>

  </div>
</section>
<section className="py-5 bg-primary-blue text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Transport with Us?</h2>
          <p className="mb-4">Get in touch today for a free quote and consultation</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
              Enquire now
            </a>
            <a href="tel:+966500000000" className="btn btn-outline-light btn-lg rounded-pill px-4">
              Call Now
            </a>
          </div>
        </div>
      </section>
      {/* Featured Trucks */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Featured Trucks</h2>
            <p className="text-muted">Our most popular vehicles ready for your projects</p>
          </div>
          <div className="row g-4">
            {featuredTrucks.map((truck, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <TruckCard truck={truck} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/trucks" className="btn btn-primary-orange rounded-pill px-4">
              View All Trucks
            </a>
          </div>
        </div>
      </section> */}

      
      {/* Client Section */}
      <ClientSection />

      {/* FAQ Preview */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">Quick answers to common questions</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/faq" className="btn btn-primary-blue rounded-pill px-4">
              View All FAQs
            </a>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      

      <Footer />
      <WhatsAppButton />
    </>
  );
}
