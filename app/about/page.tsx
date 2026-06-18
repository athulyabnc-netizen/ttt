import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAward, faMapMarkerAlt, faClock, faCheckCircle, faShieldAlt, faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'About Us | TT Global Saudi Arabia',
  description: 'Learn about TT Global — a trusted provider of truck rental, crane rental, logistics, and transportation services across Saudi Arabia.',
  openGraph: {
    title: 'About Us | TT Global Saudi Arabia',
    description: 'Learn about TT Global — a trusted provider of truck rental, crane rental, logistics, and transportation services across Saudi Arabia.',
    images: [{ url: '/images/ttglobal-og.jpg', width: 1200, height: 630, alt: 'TT Global Saudi Arabia' }],
  },
};

export default function About() {
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
      icon: faMapMarkerAlt,
      title: 'Nationwide Coverage',
      description: 'Services available across all major cities in Saudi Arabia'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
        className="text-white d-flex justify-content-center align-items-center text-center"
        style={{
          minHeight: '400px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("/images/about-us-banner.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center g-5">

             {/* Left — image */}
            <div className="col-lg-6">
              <img
                src="/images/who-we-are.jpg"
                alt="TT Global Team"
                className="img-fluid rounded-4 shadow"
                style={{ objectFit: 'cover', width: '100%', height: '460px' }}
              />
            </div>

            {/* Right — badge, heading, text */}
            <div className="col-lg-6">
              <span className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ border: '1.5px solid #dee2e6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', color: '#666' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff6b35', display: 'inline-block', flexShrink: 0 }} />
                WHO WE ARE
              </span>
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', lineHeight: 1.25 }}>
                <span style={{ color: '#002554' }}>Reliable, Professional,</span>{' '}
                <span style={{ color: '#c0c8d8' }}>And Efficient Transport Solutions For Saudi Arabia</span>
              </h2>
              <p className="mb-3" style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem' }}>
                TT Global is a newly established logistics and transportation company in Saudi Arabia, built with a clear mission — to deliver reliable, professional, and efficient transport solutions that businesses can count on from day one.
              </p>
              <p className="mb-4" style={{ color: '#555', lineHeight: 1.9, fontSize: '0.97rem' }}>
                Our team brings deep expertise in truck rental, crane operations, heavy equipment moving, and logistics management. We are committed to setting a new standard of service quality in the Kingdom.
              </p>
            </div>

           

          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-4" style={{ background: '#f1f3f5', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
        <div className="d-flex flex-wrap">
          {[
            { icon: faMapMarkerAlt, title: 'On-Time Delivery' },
            { icon: faTruck,        title: 'Modern Fleet'     },
            { icon: faClock,        title: '24/7 Team'        },
            { icon: faShieldAlt,    title: 'Full Coverage'    },
          ].map((item, i) => (
            <div key={i} className="commitment-strip-item d-flex align-items-center justify-content-center gap-3 py-3 flex-grow-1" style={i < 3 ? { borderRight: '1px solid #dee2e6' } : {}}>
              <div
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{ width: '52px', height: '52px', background: 'rgba(255,107,53,0.15)' }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ color: '#ff6b35', fontSize: '1.3rem' }} />
              </div>
              <span className="text-primary-blue fw-bold fs-6">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">

            {/* Mission */}
            <div className="col-lg-6">
              <div className="mission-card bg-white h-100 rounded-3 shadow-sm p-4 p-lg-5" style={{ borderLeft: '5px solid #ff6b35' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '52px', height: '52px', background: 'rgba(255,107,53,0.1)' }}>
                    <FontAwesomeIcon icon={faBullseye} style={{ color: '#ff6b35', fontSize: '1.3rem' }} />
                  </div>
                  <h3 className="text-primary-blue fw-bold mb-0">Our Mission</h3>
                </div>
                <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                  To provide reliable, efficient, and professional transportation solutions that exceed our clients'
                  expectations while contributing to the growth and development of Saudi Arabia's logistics sector.
                </p>
                <div className="d-flex flex-column gap-2">
                  {['Deliver excellence in every service', 'Maintain highest safety standards', 'Innovate and adapt to market needs'].map((point, i) => (
                    <div key={i} className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#ff6b35', fontSize: '0.9rem', flexShrink: 0 }} />
                      <span className="text-muted" style={{ fontSize: '0.95rem' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-6">
              <div className="vision-card bg-white h-100 rounded-3 shadow-sm p-4 p-lg-5" style={{ borderLeft: '5px solid #002554' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '52px', height: '52px', background: 'rgba(0,37,84,0.1)' }}>
                    <FontAwesomeIcon icon={faEye} style={{ color: '#002554', fontSize: '1.3rem' }} />
                  </div>
                  <h3 className="text-primary-blue fw-bold mb-0">Our Vision</h3>
                </div>
                <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                  To be the leading truck rental and logistics company in Saudi Arabia, recognized for our
                  innovation, reliability, and commitment to customer satisfaction.
                </p>
                <div className="d-flex flex-column gap-2">
                  {['Expand our modern fleet and services', 'Embrace cutting-edge technology', 'Build lasting client relationships'].map((point, i) => (
                    <div key={i} className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#002554', fontSize: '0.9rem', flexShrink: 0 }} />
                      <span className="text-muted" style={{ fontSize: '0.95rem' }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-5" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center g-5">

           

            {/* Left — heading + feature rows */}
            <div className="col-lg-7">
              <span className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ border: '1.5px solid #dee2e6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', color: '#666' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff6b35', display: 'inline-block' }} />
                WHY CHOOSE US
              </span>
              <h2 className="fw-bold text-primary-blue mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', lineHeight: 1.3 }}>
                Our Commitment to Excellence
              </h2>
              <div style={{ width: '45px', height: '3px', background: '#ff6b35', borderRadius: '2px', marginBottom: '16px' }} />
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                We go beyond transportation — delivering trust, precision, and professionalism on every job across Saudi Arabia.
              </p>
              {achievements.map((achievement, index) => (
                <div key={index} className="d-flex align-items-start gap-4 py-3" style={{ borderBottom: index < achievements.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <div className="fw-bold flex-shrink-0" style={{ fontSize: '1.8rem', color: '#adb5bd', lineHeight: 1, minWidth: '44px' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: '50px', height: '50px', background: 'rgba(255,107,53,0.1)' }}>
                    <FontAwesomeIcon icon={achievement.icon} style={{ color: '#ff6b35', fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <h5 className="text-primary-blue fw-bold mb-1">{achievement.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: '0.93rem', lineHeight: 1.7 }}>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
 {/* Right — image */}
            <div className="col-lg-5">
              <img
                src="/images/why-choose-us-about.jpg"
                alt="Why Choose TT Global"
                className="img-fluid rounded-4 shadow"
                style={{ objectFit: 'cover', width: '100%', height: '480px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      {/* <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-2">TT Global By The Numbers</h2>
            <div style={{ width: '50px', height: '3px', background: '#ff6b35', margin: '0 auto', borderRadius: '2px' }} />
          </div>
          <div className="row g-4 text-center">
            {[
              { value: '50+',  label: 'Fleet Vehicles',   sub: 'Modern trucks & equipment'          },
              { value: '500+', label: 'Projects Completed', sub: 'Across Saudi Arabia'              },
              { value: '98%',  label: 'Client Satisfaction', sub: 'Consistently high ratings'       },
              { value: '24/7', label: 'Always Available',  sub: 'Round-the-clock support'            },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="bg-white rounded-4 py-4 px-3 shadow-sm h-100">
                  <div className="fw-bold mb-1" style={{ fontSize: '2.6rem', color: '#ff6b35', lineHeight: 1 }}>{s.value}</div>
                  <div className="fw-bold text-primary-blue mb-1" style={{ fontSize: '1rem' }}>{s.label}</div>
                  <div className="text-muted" style={{ fontSize: '0.82rem' }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #060d1a 0%, #0d1f3c 100%)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="text-white fw-bold mb-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
                Ready to Move Your Cargo Across Saudi Arabia?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: 0 }}>
                Get in touch with our team today and let us deliver a tailored logistics solution for your business.
              </p>
            </div>
            <div className="col-lg-4 d-flex gap-3 justify-content-lg-end flex-wrap">
              <a href="/contact" className="btn btn-primary-orange px-4 py-2 rounded-pill fw-semibold" style={{ whiteSpace: 'nowrap' }}>
                Get a Quote
              </a>
              <a href="tel:+966" className="btn px-4 py-2 rounded-pill fw-semibold" style={{ border: '2px solid rgba(255,255,255,0.5)', color: '#fff', whiteSpace: 'nowrap' }}>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
