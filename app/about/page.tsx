import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUsers, faAward, faMapMarkerAlt, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const teamMembers = [
    {
      name: 'Abdul Rahman Al-Saud',
      position: 'CEO & Founder',
      description: '15+ years in logistics and transportation industry'
    },
    {
      name: 'Mohammed Al-Qahtani',
      position: 'Operations Manager',
      description: 'Expert in fleet management and route optimization'
    },
    {
      name: 'Fatima Al-Rashid',
      position: 'Customer Relations Manager',
      description: 'Dedicated to exceptional customer service'
    },
    {
      name: 'Ahmed Al-Harbi',
      position: 'Technical Director',
      description: 'Specialist in heavy equipment and crane operations'
    }
  ];

  const achievements = [
    {
      icon: faAward,
      title: 'Industry Leader',
      description: 'Recognized as one of the top truck rental companies in Saudi Arabia'
    },
    {
      icon: faTruck,
      title: 'Modern Fleet',
      description: '50+ modern trucks and equipment maintained to highest standards'
    },
    {
      icon: faUsers,
      title: 'Expert Team',
      description: '100+ trained professionals dedicated to quality service'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Nationwide Coverage',
      description: 'Services available across all major cities in Saudi Arabia'
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your requirements and provide expert consultation'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Customized transportation plan tailored to your needs'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional team executes the plan with precision'
    },
    {
      step: '04',
      title: 'Support',
      description: '24/7 support throughout the transportation process'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About TechTruck Transport</h1>
              <p className="lead mb-4">
                Your trusted partner for professional truck rental and logistics services in Saudi Arabia since 2014.
              </p>
              <p className="mb-4">
                We pride ourselves on delivering excellence, reliability, and innovation in every transportation solution we provide.
              </p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-light rounded-pill">
                  Contact Us
                </a>
                <a href="/services" className="btn btn-outline-light rounded-pill">
                  Our Services
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/about-hero.jpg" 
                alt="About TechTruck Transport" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h2 className="text-primary-blue fw-bold mb-3">Our Story</h2>
                <p className="text-muted">Building trust through excellence in transportation</p>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <p className="text-muted">
                    Founded in 2014, TechTruck Transport started as a small family business with a vision to revolutionize 
                    the truck rental and logistics industry in Saudi Arabia. Our commitment to quality service and customer 
                    satisfaction has helped us grow into one of the most trusted transportation companies in the Kingdom.
                  </p>
                  <p className="text-muted">
                    Over the years, we have expanded our fleet, diversified our services, and built a team of dedicated 
                    professionals who share our passion for excellence. Today, we serve hundreds of clients across various 
                    industries, from construction to retail, manufacturing to logistics.
                  </p>
                </div>
                <div className="col-lg-6 mb-4">
                  <p className="text-muted">
                    Our success is built on three core principles: reliability, safety, and innovation. We invest heavily 
                    in modern equipment, continuous training for our team, and cutting-edge technology to ensure that we 
                    deliver the best possible service to our clients.
                  </p>
                  <p className="text-muted">
                    As we look to the future, we remain committed to our founding values while embracing new technologies 
                    and expanding our capabilities to meet the evolving needs of Saudi Arabia's growing economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-primary-blue fw-bold mb-3">Our Mission</h3>
                  <p className="text-muted">
                    To provide reliable, efficient, and professional transportation solutions that exceed our clients' 
                    expectations while contributing to the growth and development of Saudi Arabia's logistics sector.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Deliver excellence in every service
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Maintain highest safety standards
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Innovate and adapt to market needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-primary-blue fw-bold mb-3">Our Vision</h3>
                  <p className="text-muted">
                    To be the leading truck rental and logistics company in Saudi Arabia, recognized for our 
                    innovation, reliability, and commitment to customer satisfaction.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Expand our modern fleet and services
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Embrace cutting-edge technology
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
                      Build lasting client relationships
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Industry Experience in KSA</h2>
            <p className="text-muted">Deep understanding of Saudi Arabia's transportation landscape</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                  <span className="text-primary-orange fw-bold fs-2">10+</span>
                </div>
                <h5 className="text-primary-blue fw-bold">Years Experience</h5>
                <p className="text-muted">Serving Saudi Arabia's transportation needs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                  <span className="text-primary-orange fw-bold fs-2">20+</span>
                </div>
                <h5 className="text-primary-blue fw-bold">Cities Covered</h5>
                <p className="text-muted">Major cities and regions across KSA</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                  <span className="text-primary-orange fw-bold fs-2">500+</span>
                </div>
                <h5 className="text-primary-blue fw-bold">Projects Completed</h5>
                <p className="text-muted">Successfully delivered transportation projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                  <span className="text-primary-orange fw-bold fs-2">98%</span>
                </div>
                <h5 className="text-primary-blue fw-bold">Client Satisfaction</h5>
                <p className="text-muted">Consistently high satisfaction ratings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Work Process</h2>
            <p className="text-muted">How we ensure successful transportation projects</p>
          </div>
          <div className="row">
            {workProcess.map((process, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="text-center">
                  <div className="bg-primary-blue text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="fw-bold fs-4">{process.step}</span>
                  </div>
                  <h5 className="text-primary-blue fw-bold mb-3">{process.title}</h5>
                  <p className="text-muted">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Leadership Team</h2>
            <p className="text-muted">Experienced professionals dedicated to your success</p>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                      <span className="text-primary-orange fw-bold fs-3">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h5 className="text-primary-blue fw-bold mb-2">{member.name}</h5>
                    <p className="text-primary-orange mb-2">{member.position}</p>
                    <p className="text-muted small">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Why Choose Us</h2>
            <p className="text-white-50">Our commitment to excellence sets us apart</p>
          </div>
          <div className="row">
            {achievements.map((achievement, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="text-center">
                  <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FontAwesomeIcon icon={achievement.icon} className="text-warning fs-2" />
                  </div>
                  <h5 className="fw-bold mb-3">{achievement.title}</h5>
                  <p className="text-white-50">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
