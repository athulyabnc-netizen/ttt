'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await res.json();
        if (res.ok && data.success) {
          alert('Thank you — your message was sent. We will contact you soon.');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } else {
          console.error('Send failed:', data);
          alert('Sorry, something went wrong sending your message.');
        }
      } catch (err) {
        console.error('Send error:', err);
        alert('Unable to send message at this time.');
      }
    })();
  };

  const contactInfo = [
    {
      icon: faPhone,
      title: 'Phone',
      content: '+966 50 000 0000',
      href: 'tel:+966500000000'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'athulyabnc@gmail.com',
      href: 'mailto:athulyabnc@gmail.com'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Address',
      content: 'Riyadh, Saudi Arabia',
      href: '#'
    },
    {
      icon: faClock,
      title: 'Business Hours',
      content: '24/7 Available',
      href: '#'
    }
  ];

  return (
    <section className="contact-section py-6">
      <div className="floating-shapes" aria-hidden>
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-lg-5 mb-4">
            <div className="contact-left p-5">
              <h3 className="mb-3 text-white display-6 fw-semibold">Get in touch</h3>
              <p className="text-white-90 mb-4">We're available 24/7 to help with quotes, bookings and emergency transport.</p>

              <div className="contact-list">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="contact-item d-flex align-items-center mb-3 text-white text-decoration-none"
                    onClick={() => {}}
                  >
                    <div className="contact-icon me-3 d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={info.icon} className="icon-svg" />
                    </div>
                    <div>
                      <div className="small text-white-70">{info.title}</div>
                      <div className="fw-medium">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4">
                <a href="tel:+966500000000" className="btn premium-cta me-2">Call Now</a>
                <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="btn secondary-cta">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-right p-5">
              <h4 className="mb-4 fw-semibold">Send us a message</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control large-input"
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control large-input"
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                      className="form-control large-input"
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+966 5X XXX XXXX"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Service</label>
                    <select
                      className="form-select large-input"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      <option value="truck-rental">Truck Rental</option>
                      <option value="crane-rental">Crane Rental</option>
                      <option value="logistics">Logistics Transport</option>
                      <option value="heavy-equipment">Heavy Equipment Moving</option>
                      <option value="container">Container Transport</option>
                      <option value="emergency">Emergency Transport</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control large-input"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-gradient-lg">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
