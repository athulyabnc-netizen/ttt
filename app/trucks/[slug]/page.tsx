'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TruckCard from '@/components/TruckCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faWeight, faRuler, faCog, faShieldAlt, faClock, faUsers, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function TruckDetails({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState('specifications');

  // Sample truck data - in a real app, this would come from an API or database
  const truckData = {
    flatbed: {
      name: 'Heavy Duty Flatbed Truck',
      image: '/images/flatbed-detail.jpg',
      category: 'Flatbed Trucks',
      price: 'SAR 800/day',
      availability: 'Available',
      description: 'Our heavy-duty flatbed truck is perfect for transporting large equipment, machinery, and oversized cargo. With a robust build and excellent load capacity, this truck is ideal for construction, industrial, and commercial transportation needs.',
      specifications: {
        'Load Capacity': '20 tons',
        'Bed Length': '40 feet',
        'Bed Width': '8.5 feet',
        'Engine': '6.7L Turbo Diesel',
        'Transmission': 'Automatic',
        'Fuel Type': 'Diesel',
        'Year': '2022',
        'Mileage': '45,000 km',
        'Color': 'White',
        'VIN': '1FTSW21RX4EC12345'
      },
      features: [
        'Heavy-duty steel frame construction',
        'Advanced braking system with ABS',
        'GPS tracking and monitoring',
        'Air suspension for smooth ride',
        'LED lighting system',
        'Weather-resistant cargo securing points',
        'Professional driver included',
        'Full insurance coverage'
      ],
      rentalDetails: {
        'Daily Rate': 'SAR 800',
        'Weekly Rate': 'SAR 5,000',
        'Monthly Rate': 'SAR 18,000',
        'Security Deposit': 'SAR 5,000',
        'Driver Included': 'Yes',
        'Insurance': 'Full Coverage',
        'Minimum Rental': '1 day',
        'Cancellation': '24 hours notice'
      }
    },
    crane: {
      name: 'Mobile Crane Truck 20T',
      image: '/images/crane-detail.jpg',
      category: 'Crane Trucks',
      price: 'SAR 1,200/day',
      availability: 'Available',
      description: 'Professional mobile crane truck with 20-ton lifting capacity. Perfect for construction sites, industrial projects, and heavy lifting operations. Operated by certified crane operators with extensive experience.',
      specifications: {
        'Lifting Capacity': '20 tons',
        'Max Reach': '30 meters',
        'Engine': '8.0L Turbo Diesel',
        'Transmission': 'Automatic',
        'Crane Type': 'Hydraulic Mobile Crane',
        'Year': '2023',
        'Mileage': '25,000 km',
        'Color': 'Yellow',
        'Operator': 'Certified Professional'
      },
      features: [
        '20-ton lifting capacity',
        '30-meter maximum reach',
        '360-degree rotation capability',
        'Advanced safety systems',
        'Remote control operation',
        'Stabilizer legs for stability',
        'Certified operator included',
        'Comprehensive insurance'
      ],
      rentalDetails: {
        'Daily Rate': 'SAR 1,200',
        'Weekly Rate': 'SAR 7,500',
        'Monthly Rate': 'SAR 28,000',
        'Security Deposit': 'SAR 8,000',
        'Operator Included': 'Yes',
        'Insurance': 'Full Coverage',
        'Minimum Rental': '1 day',
        'Cancellation': '48 hours notice'
      }
    }
  };

  const truck = truckData[params.slug as keyof typeof truckData] || truckData.flatbed;

  const relatedTrucks = [
    {
      name: 'Standard Flatbed',
      image: '/images/flatbed2.jpg',
      capacity: '15 tons capacity',
      availability: 'Available',
      description: 'Versatile flatbed suitable for construction materials.',
      link: '/trucks/flatbed'
    },
    {
      name: 'Extended Flatbed',
      image: '/images/flatbed3.jpg',
      capacity: '25 tons capacity',
      availability: 'Available',
      description: 'Extended length flatbed for special projects.',
      link: '/trucks/extended-flatbed'
    },
    {
      name: 'Hydraulic Platform',
      image: '/images/hydraulic1.jpg',
      capacity: '10 tons capacity',
      availability: 'Available',
      description: 'Hydraulic platform for easy loading and unloading.',
      link: '/trucks/hydraulic-platform'
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
              <h1 className="display-4 fw-bold mb-3">{truck.name}</h1>
              <p className="lead mb-3">{truck.category}</p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className={`badge ${truck.availability === 'Available' ? 'bg-success' : 'bg-warning'} fs-6`}>
                  {truck.availability}
                </span>
                <span className="fs-5 fw-bold">{truck.price}</span>
              </div>
              <p className="mb-4">{truck.description}</p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-light rounded-pill">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Get Quote
                </a>
                <a href="https://wa.me/966500000000" className="btn btn-success rounded-pill" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src={truck.image} 
                alt={truck.name} 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Tab Navigation */}
              <ul className="nav nav-tabs mb-4" role="tablist">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('specifications')}
                  >
                    <FontAwesomeIcon icon={faCog} className="me-2" />
                    Specifications
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
                    onClick={() => setActiveTab('features')}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    Features
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'rental' ? 'active' : ''}`}
                    onClick={() => setActiveTab('rental')}
                  >
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    Rental Details
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content">
                {/* Specifications Tab */}
                {activeTab === 'specifications' && (
                  <div className="tab-pane fade show active">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="text-primary-blue fw-bold mb-4">Technical Specifications</h3>
                        <div className="row">
                          {Object.entries(truck.specifications).map(([key, value]: [string, string], index: number) => (
                            <div className="col-md-6 mb-3" key={index}>
                              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                                <span className="text-muted fw-medium">{key}</span>
                                <span className="text-primary-blue fw-bold">{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div className="tab-pane fade show active">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="text-primary-blue fw-bold mb-4">Key Features</h3>
                        <div className="row">
                          {truck.features.map((feature: string, index: number) => (
                            <div className="col-md-6 mb-3" key={index}>
                              <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-3 fs-5" />
                                <span>{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rental Details Tab */}
                {activeTab === 'rental' && (
                  <div className="tab-pane fade show active">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <h3 className="text-primary-blue fw-bold mb-4">Rental Information</h3>
                        <div className="row">
                          {Object.entries(truck.rentalDetails).map(([key, value]: [string, string], index: number) => (
                            <div className="col-md-6 mb-3" key={index}>
                              <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                                <span className="text-muted fw-medium">{key}</span>
                                <span className="text-primary-blue fw-bold">{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="alert alert-info mt-4">
                          <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                          All rentals include comprehensive insurance coverage and 24/7 roadside assistance.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h4 className="text-primary-blue fw-bold mb-3">Quick Information</h4>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faWeight} className="text-primary-orange me-2" />
                      <span className="fw-medium">Capacity:</span>
                    </div>
                    <p className="text-primary-blue fw-bold">{(truck.specifications as any)['Load Capacity'] || (truck.specifications as any)['Lifting Capacity']}</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faRuler} className="text-primary-orange me-2" />
                      <span className="fw-medium">Dimensions:</span>
                    </div>
                    <p className="text-primary-blue fw-bold">{(truck.specifications as any)['Bed Length'] || (truck.specifications as any)['Max Reach']}</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faUsers} className="text-primary-orange me-2" />
                      <span className="fw-medium">Driver:</span>
                    </div>
                    <p className="text-primary-blue fw-bold">Included</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-primary-orange me-2" />
                      <span className="fw-medium">Insurance:</span>
                    </div>
                    <p className="text-primary-blue fw-bold">Full Coverage</p>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm bg-primary-orange text-white">
                <div className="card-body p-4 text-center">
                  <h4 className="fw-bold mb-3">Ready to Rent?</h4>
                  <p className="mb-4">Contact us now to book this truck</p>
                  <div className="d-grid gap-2">
                    <a href="/contact" className="btn btn-light rounded-pill">
                      Get Quote
                    </a>
                    <a href="tel:+966500000000" className="btn btn-outline-light rounded-pill">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Trucks */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Related Trucks</h2>
            <p className="text-muted">Similar trucks you might be interested in</p>
          </div>
          <div className="row g-4">
            {relatedTrucks.map((relatedTruck, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <TruckCard truck={relatedTruck} />
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
