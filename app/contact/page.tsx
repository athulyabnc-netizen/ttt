import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: 'Head Office',
      content: 'Riyadh, Saudi Arabia',
      subContent: 'Kingdom of Saudi Arabia',
      type: 'address'
    },
    {
      icon: faPhone,
      title: 'Phone',
      content: '+966 50 000 0000',
      subContent: '24/7 Available',
      type: 'phone'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'info@techtruck.sa',
      subContent: 'Quick response guaranteed',
      type: 'email'
    },
    {
      icon: faClock,
      title: 'Business Hours',
      content: '24/7 Available',
      subContent: 'Emergency services always ready',
      type: 'hours'
    }
  ];

  const socialLinks = [
    {
      icon: faFacebook,
      href: 'https://facebook.com/techtruck',
      label: 'Facebook'
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/techtruck',
      label: 'Twitter'
    },
    {
      icon: faInstagram,
      href: 'https://instagram.com/techtruck',
      label: 'Instagram'
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/company/techtruck',
      label: 'LinkedIn'
    }
  ];

  const officeLocations = [
    {
      city: 'Riyadh',
      address: 'King Abdullah Road, Riyadh',
      phone: '+966 50 000 0001',
      email: 'riyadh@techtruck.sa'
    },
    {
      city: 'Jeddah',
      address: 'Prince Sultan Street, Jeddah',
      phone: '+966 50 000 0002',
      email: 'jeddah@techtruck.sa'
    },
    {
      city: 'Dammam',
      address: 'King Fahd Road, Dammam',
      phone: '+966 50 000 0003',
      email: 'dammam@techtruck.sa'
    },
    {
      city: 'Mecca',
      address: 'Hajj Road, Mecca',
      phone: '+966 50 000 0004',
      email: 'mecca@techtruck.sa'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
  className="text-white d-flex justify-content-center align-items-center text-center"
  style={{
    minHeight: "400px",
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url("/images/contact-us.jpg")
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="container">
    <h1 className="display-4 fw-bold">Contact Us</h1>
  </div>
</section>

      {/* Contact Form and Info */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Find Us on Map</h2>
            <p className="text-muted">Our main office locations across Saudi Arabia</p>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124267608!2d46.52282629411045!3d24.72545537318324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1778741081182!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TechTruck Transport Location"
                  ></iframe>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Office Locations</h2>
            <p className="text-muted">Serving major cities across Saudi Arabia</p>
          </div>
          <div className="row g-4">
            {officeLocations.map((office, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="text-primary-blue fw-bold mb-3">{office.city}</h5>
                    <div className="mb-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-orange me-2" />
                      <span className="text-muted">{office.address}</span>
                    </div>
                    <div className="mb-3">
                      <FontAwesomeIcon icon={faPhone} className="text-primary-orange me-2" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-muted text-decoration-none">
                        {office.phone}
                      </a>
                    </div>
                    <div className="mb-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-primary-orange me-2" />
                      <a href={`mailto:${office.email}`} className="text-muted text-decoration-none">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Emergency Contact */}
      {/* <section className="py-5 bg-primary-orange text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Emergency Transportation Services</h2>
              <p className="mb-4">
                Need urgent transportation? Our emergency team is available 24/7 to handle your critical 
                transportation needs across Saudi Arabia. We respond quickly and efficiently to minimize downtime.
              </p>
              <div className="d-flex gap-3">
                <a href="tel:+966500000000" className="btn btn-light btn-lg rounded-pill">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Emergency Hotline
                </a>
                <a href="https://wa.me/966500000000" className="btn btn-outline-light btn-lg rounded-pill" target="_blank" rel="noopener noreferrer">
                  WhatsApp Emergency
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                  <FontAwesomeIcon icon={faPhone} className="text-white fs-2" />
                </div>
                <h3 className="fw-bold">24/7 Emergency</h3>
                <p>Always ready when you need us most</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      <WhatsAppButton />
    </>
  );
}
