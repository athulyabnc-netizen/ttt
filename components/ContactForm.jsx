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
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
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
      content: 'info@techtruck.sa',
      href: 'mailto:info@techtruck.sa'
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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="contact-info">
              <h3 className="text-primary-blue mb-4">Get in Touch</h3>
              {contactInfo.map((info, index) => (
                <div className="contact-item mb-4" key={index}>
                  <div className="d-flex align-items-start">
                    <div className="icon-box bg-primary-orange bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <FontAwesomeIcon icon={info.icon} className="text-primary-orange fs-5" />
                    </div>
                    <div>
                      <h5 className="text-primary-blue mb-1">{info.title}</h5>
                      {info.href !== '#' ? (
                        <a href={info.href} className="text-muted text-decoration-none">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted mb-0">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <h3 className="text-primary-blue mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label text-primary-blue">Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label text-primary-blue">Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label text-primary-blue">Phone *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="service" className="form-label text-primary-blue">Service Type</label>
                      <select 
                        className="form-select" 
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
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-primary-blue">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary-orange btn-lg rounded-pill px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
