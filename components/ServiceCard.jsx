'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="service-card card h-100 border-0 shadow-sm">
      <div className="card-body text-center p-4">
        <div className="icon-box mb-3">
          <div className="icon-wrapper bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
            <FontAwesomeIcon icon={icon} className="text-primary-orange fs-2" />
          </div>
        </div>
        <h5 className="card-title text-primary-blue fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted mb-4">{description}</p>
        <a href={link} className="btn btn-primary-orange rounded-pill">
          Read More <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </a>
      </div>
    </div>
  );
}
