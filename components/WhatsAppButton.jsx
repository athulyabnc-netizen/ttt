'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  const whatsappNumber = "";
  const whatsappMessage = "Hello! I'm interested in your truck rental services. Can you provide more information?";

  const handleClick = () => {
    // const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
     const url = `#!`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className="whatsapp-float border-0"
      onClick={handleClick}
      aria-label="Contact on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white fs-3" />
    </button>
  );
}
