'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faCheckCircle, faTimesCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

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
          showToast('success', 'Thank you — your message was sent. We will contact you soon.');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else {
          console.error('Send failed:', data);
          showToast('error', 'Sorry, something went wrong sending your message.');
        }
      } catch (err) {
        console.error('Send error:', err);
        showToast('error', 'Unable to send message at this time.');
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
      content: 'info@ttglobalservice.com',
      href: 'mailto:info@ttglobalservice.com'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Address',
      content: 'Kingdom of Saudi Arabia',
      href: '#'
    }
    // {
    //   icon: faClock,
    //   title: 'Business Hours',
    //   content: '24/7 Available',
    //   href: '#'
    // }
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
            <div className="contact-left p-3 p-lg-5">
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
                <a href="#!" className="btn btn-primary-orange me-2 px-3 rounded-pill">Call Now</a>
                <a href="#!" target="_blank" rel="noreferrer" className="btn secondary-cta">WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-right p-3 p-lg-5">
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
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subject</label>
                    <input
                      className="form-control large-input"
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                    />
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
                    <button type="submit" className="btn btn-primary-orange rounded-pill">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            minWidth: '320px',
            maxWidth: '420px',
          }}
        >
          <div className={`d-flex align-items-start gap-3 p-4 rounded-3 shadow-lg text-white ${toast.type === 'success' ? 'bg-success' : 'bg-danger'}`}>
            <FontAwesomeIcon
              icon={toast.type === 'success' ? faCheckCircle : faTimesCircle}
              className="fs-5 mt-1 flex-shrink-0"
            />
            <span className="flex-grow-1 fw-medium">{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              className="btn p-0 text-white opacity-75 lh-1"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
