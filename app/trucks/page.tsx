'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TruckCard from '@/components/TruckCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Trucks() {
  const trucks = [
    // Flatbed Trucks
    {
      name: 'Heavy Duty Flatbed',
      image: '/images/flatbed1.jpg',
      capacity: '20 tons capacity',
      availability: 'Available',
      description: 'Heavy-duty flatbed truck perfect for large equipment and oversized cargo.',
      category: 'Flatbed Trucks'
    },
    {
      name: 'Standard Flatbed',
      image: '/images/flatbed2.jpg',
      capacity: '15 tons capacity',
      availability: 'Available',
      description: 'Versatile flatbed suitable for construction materials and machinery.',
      category: 'Flatbed Trucks'
    },
    {
      name: 'Extended Flatbed',
      image: '/images/flatbed3.jpg',
      capacity: '25 tons capacity',
      availability: 'Available',
      description: 'Extended length flatbed for long cargo and special projects.',
      category: 'Flatbed Trucks'
    },

    // Crane Trucks
    {
      name: 'Mobile Crane 20T',
      image: '/images/crane1.jpg',
      capacity: '20 tons lifting',
      availability: 'Available',
      description: 'Powerful mobile crane for construction and industrial lifting.',
      category: 'Crane Trucks'
    },
    {
      name: 'Hydraulic Crane 15T',
      image: '/images/crane2.jpg',
      capacity: '15 tons lifting',
      availability: 'Available',
      description: 'Hydraulic crane with precise control for delicate operations.',
      category: 'Crane Trucks'
    },
    {
      name: 'Tower Crane Truck',
      image: '/images/crane3.jpg',
      capacity: '10 tons lifting',
      availability: 'Busy',
      description: 'Tower crane truck for high-rise construction projects.',
      category: 'Crane Trucks'
    },

    // Trailer Trucks
    {
      name: '40ft Container Trailer',
      image: '/images/trailer1.jpg',
      capacity: '40ft container',
      availability: 'Available',
      description: 'Standard container trailer for shipping and logistics.',
      category: 'Trailer Trucks'
    },
    {
      name: '20ft Container Trailer',
      image: '/images/trailer2.jpg',
      capacity: '20ft container',
      availability: 'Available',
      description: 'Compact container trailer for smaller cargo loads.',
      category: 'Trailer Trucks'
    },
    {
      name: 'Refrigerated Trailer',
      image: '/images/trailer3.jpg',
      capacity: '30 tons capacity',
      availability: 'Available',
      description: 'Temperature-controlled trailer for perishable goods.',
      category: 'Trailer Trucks'
    },

    // Pickup Trucks
    {
      name: 'Heavy Duty Pickup',
      image: '/images/pickup1.jpg',
      capacity: '3 tons capacity',
      availability: 'Available',
      description: 'Heavy-duty pickup for medium loads and construction sites.',
      category: 'Pickup Trucks'
    },
    {
      name: 'Utility Pickup',
      image: '/images/pickup2.jpg',
      capacity: '2 tons capacity',
      availability: 'Available',
      description: 'Versatile pickup truck for various utility applications.',
      category: 'Pickup Trucks'
    },
    {
      name: '4x4 Pickup',
      image: '/images/pickup3.jpg',
      capacity: '2.5 tons capacity',
      availability: 'Available',
      description: 'All-wheel drive pickup for rough terrain access.',
      category: 'Pickup Trucks'
    },

    // Hydraulic Trucks
    {
      name: 'Hydraulic Platform',
      image: '/images/hydraulic1.jpg',
      capacity: '10 tons capacity',
      availability: 'Available',
      description: 'Hydraulic platform truck for easy loading and unloading.',
      category: 'Hydraulic Trucks'
    },
    {
      name: 'Hydraulic Lift Truck',
      image: '/images/hydraulic2.jpg',
      capacity: '15 tons capacity',
      availability: 'Available',
      description: 'Advanced hydraulic lift for heavy equipment handling.',
      category: 'Hydraulic Trucks'
    },

    // Construction Vehicles
    {
      name: 'Dump Truck',
      image: '/images/construction1.jpg',
      capacity: '25 tons capacity',
      availability: 'Available',
      description: 'Heavy-duty dump truck for construction and mining.',
      category: 'Construction Vehicles'
    },
    {
      name: 'Cement Mixer Truck',
      image: '/images/construction2.jpg',
      capacity: '8 cubic meters',
      availability: 'Available',
      description: 'Professional cement mixer for construction projects.',
      category: 'Construction Vehicles'
    },
    {
      name: 'Water Tanker Truck',
      image: '/images/construction3.jpg',
      capacity: '10,000 liters',
      availability: 'Available',
      description: 'Water tanker for dust control and construction sites.',
      category: 'Construction Vehicles'
    }
  ];

  const categories = [
    'All Trucks',
    'Flatbed Trucks',
    'Crane Trucks',
    'Trailer Trucks',
    'Pickup Trucks',
    'Hydraulic Trucks',
    'Construction Vehicles'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Trucks');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrucks = trucks.filter(truck => {
    const matchesCategory = selectedCategory === 'All Trucks' || truck.category === selectedCategory;
    const matchesSearch = truck.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         truck.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Our Truck Fleet</h1>
              <p className="lead mb-4">
                Modern, well-maintained fleet of trucks for all your transportation needs across Saudi Arabia.
              </p>
              <p className="mb-4">
                From heavy-duty flatbeds to specialized construction vehicles, we have the right equipment 
                for your project. All our trucks are regularly maintained and operated by experienced professionals.
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
                src="/images/trucks-hero.jpg" 
                alt="Our Truck Fleet" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`btn ${selectedCategory === category ? 'btn-primary-orange' : 'btn-outline-secondary'} rounded-pill`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <FontAwesomeIcon icon={faSearch} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search trucks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trucks Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Available Trucks</h2>
            <p className="text-muted">Choose from our wide range of modern trucks</p>
          </div>
          
          {filteredTrucks.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="text-muted">No trucks found matching your criteria</h4>
              <p className="text-muted">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredTrucks.map((truck, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <TruckCard truck={truck} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fleet Statistics */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Our Fleet by Numbers</h2>
            <p className="text-muted">Modern equipment maintained to highest standards</p>
          </div>
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4">
              <h2 className="text-primary-orange fw-bold">50+</h2>
              <p className="text-muted">Total Trucks</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h2 className="text-primary-orange fw-bold">6</h2>
              <p className="text-muted">Truck Categories</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h2 className="text-primary-orange fw-bold">95%</h2>
              <p className="text-muted">Availability Rate</p>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <h2 className="text-primary-orange fw-bold">24/7</h2>
              <p className="text-muted">Service Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Why Choose Our Fleet?</h2>
            <p className="text-muted">Quality, reliability, and professional service</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="text-primary-blue fw-bold mb-3">Modern Equipment</h5>
                  <p className="text-muted">
                    All our trucks are modern, well-maintained, and equipped with latest safety features 
                    to ensure reliable and efficient transportation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="text-primary-blue fw-bold mb-3">Experienced Drivers</h5>
                  <p className="text-muted">
                    Professional, licensed drivers with extensive knowledge of Saudi roads and regulations, 
                    ensuring safe and timely delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="text-primary-blue fw-bold mb-3">Full Insurance</h5>
                  <p className="text-muted">
                    Comprehensive insurance coverage for all trucks and cargo, providing peace of mind 
                    and protection for your valuable shipments.
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
          <h2 className="fw-bold mb-3">Need Help Choosing the Right Truck?</h2>
          <p className="mb-4">Our experts are here to help you find the perfect solution</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
              Get Expert Advice
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
