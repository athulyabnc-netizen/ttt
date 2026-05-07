'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';

export default function TruckCard({ truck }) {
  const { name, image, capacity, availability, description, link } = truck;

  return (
    <div className="truck-card card h-100 border-0 shadow-sm">
      <div className="position-relative overflow-hidden">
        <img 
          src={image} 
          className="card-img-top" 
          alt={name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-0 end-0 m-2">
          <span className={`badge ${availability === 'Available' ? 'bg-success' : 'bg-warning'} rounded-pill`}>
            {availability}
          </span>
        </div>
      </div>
      <div className="card-body p-4">
        <h5 className="card-title text-primary-blue fw-bold mb-2">{name}</h5>
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-primary-orange me-2" />
          <span className="text-muted">{capacity}</span>
        </div>
        <p className="card-text text-muted mb-4">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <a href={link} className="btn btn-primary-orange rounded-pill">
            <FontAwesomeIcon icon={faEye} className="me-1" />
            View Details
          </a>
          {availability === 'Available' ? (
            <small className="text-success">
              <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
              Ready to Rent
            </small>
          ) : (
            <small className="text-warning">
              <FontAwesomeIcon icon={faClock} className="me-1" />
              Currently Busy
            </small>
          )}
        </div>
      </div>
    </div>
  );
}
