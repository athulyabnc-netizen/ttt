'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="accordion" id="faqAccordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button ${activeKey === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              style={{
                backgroundColor: activeKey === index ? 'var(--primary-blue)' : '#f8f9fa',
                color: activeKey === index ? 'white' : 'var(--primary-blue)'
              }}
            >
              {faq.question}
            </button>
          </h2>
          <div 
            className={`accordion-collapse collapse ${activeKey === index ? 'show' : ''}`}
            id={`collapse${index}`}
          >
            <div className="accordion-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
