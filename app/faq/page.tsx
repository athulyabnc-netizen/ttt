import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FAQAccordion from '@/components/FAQAccordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
  const faqs = [
    // Rental Process
    {
      question: 'How do I rent a truck from TechTruck Transport?',
      answer: 'Renting a truck is simple! You can contact us through our website, call our hotline, or send us a WhatsApp message. Our team will help you choose the right truck for your needs, provide a quote, and arrange the rental. We require a valid ID, security deposit, and signed rental agreement.'
    },
    {
      question: 'What documents do I need to rent a truck?',
      answer: 'You\'ll need a valid Saudi ID or Iqama, valid driver\'s license, and a credit card for the security deposit. For commercial rentals, we may also require company registration documents. Our team will guide you through the documentation process.'
    },
    {
      question: 'Can I rent a truck without a driver?',
      answer: 'Most of our truck rentals include experienced, licensed drivers who are familiar with Saudi roads and regulations. For certain commercial clients with proper insurance and qualified drivers, we may offer driver-only rentals. Contact us to discuss your specific requirements.'
    },

    // Driver Availability
    {
      question: 'Are drivers included with truck rentals?',
      answer: 'Yes, all our truck rentals include professional, experienced drivers who are licensed and insured. Our drivers are familiar with Saudi roads, traffic regulations, and safety protocols. They undergo regular training to ensure safe and efficient transportation.'
    },
    {
      question: 'Are your drivers available 24/7?',
      answer: 'Yes, we offer 24/7 driver availability for emergency transportation needs. For regular rentals, drivers work according to Saudi labor laws with proper rest periods. Emergency services are always available when you need them most.'
    },
    {
      question: 'Can I request a specific driver?',
      answer: 'While we cannot guarantee specific drivers due to scheduling and availability, we do our best to accommodate requests for drivers you\'ve worked with before. All our drivers meet the same high standards of professionalism and experience.'
    },

    // Pricing
    {
      question: 'How are your rental rates calculated?',
      answer: 'Our rates are based on truck type, rental duration, distance, and additional services required. We offer daily, weekly, and monthly rates with discounts for longer rentals. Contact us for a customized quote based on your specific needs.'
    },
    {
      question: 'What\'s included in the rental price?',
      answer: 'Our rental prices include the truck, professional driver, fuel, basic insurance, and routine maintenance. Additional costs may apply for special equipment, overtime, or extended distances. We provide transparent pricing with no hidden fees.'
    },
    {
      question: 'Do you offer discounts for long-term rentals?',
      answer: 'Yes, we offer competitive discounts for weekly and monthly rentals. Long-term clients also benefit from priority booking and dedicated account management. Contact our sales team for custom pricing on extended rental periods.'
    },

    // Coverage Areas
    {
      question: 'Which areas in Saudi Arabia do you serve?',
      answer: 'We provide services across all major cities and regions in Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, Tabuk, Abha, and surrounding areas. We also offer inter-city transportation services between any locations in the Kingdom.'
    },
    {
      question: 'Do you provide services to remote areas?',
      answer: 'Yes, we can arrange transportation to remote areas and construction sites across Saudi Arabia. Additional charges may apply for remote locations due to distance and accessibility. Our team will assess the location and provide appropriate pricing.'
    },
    {
      question: 'Can you handle cross-border transportation?',
      answer: 'While our primary focus is within Saudi Arabia, we can arrange cross-border transportation to GCC countries through our partner network. This requires special permits and documentation. Contact us well in advance for international transportation needs.'
    },

    // Emergency Support
    {
      question: 'Do you offer emergency transportation services?',
      answer: 'Yes, we provide 24/7 emergency transportation services across Saudi Arabia. Whether you need urgent equipment delivery, emergency construction support, or last-minute logistics, our emergency team is ready to respond quickly to your needs.'
    },
    {
      question: 'What constitutes an emergency service?',
      answer: 'Emergency services include urgent breakdown recovery, time-critical deliveries, disaster response support, and any transportation need requiring immediate attention. We prioritize emergency calls and dispatch the nearest available truck and driver.'
    },
    {
      question: 'How quickly can you respond to emergency requests?',
      answer: 'Our emergency response time varies by location, but we typically dispatch within 1-2 hours in major cities. For remote areas, response times may be longer. We maintain standby trucks and drivers for rapid emergency deployment.'
    },

    // Insurance
    {
      question: 'What insurance coverage do you provide?',
      answer: 'All our rentals include comprehensive insurance coverage for the truck, driver, and cargo up to SAR 1 million. Additional coverage can be purchased for high-value cargo. Our insurance covers accidents, theft, and damage during transportation.'
    },
    {
      question: 'What happens in case of an accident?',
      answer: 'In case of an accident, our drivers are trained to follow proper procedures. We immediately dispatch support vehicles, contact authorities, and file insurance claims. Our 24/7 support team coordinates everything to minimize disruption to your operations.'
    },
    {
      question: 'Can I use my own insurance?',
      answer: 'For commercial clients with adequate insurance coverage, we may accept your insurance policy with proper documentation and verification. However, we recommend using our comprehensive coverage for maximum protection and simplified claims process.'
    },

    // Rental Duration
    {
      question: 'What\'s the minimum rental period?',
      answer: 'Our minimum rental period is one day for most trucks. Some specialized equipment may have minimum rental requirements of 3-7 days. We also offer hourly rates for very short-term needs within the same city.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can extend your rental period subject to truck availability. We recommend notifying us at least 24 hours before your rental ends to ensure availability. Extended rentals are charged at the same agreed rate.'
    },
    {
      question: 'What are your cancellation policies?',
      answer: 'Cancellations made 48 hours before rental start time receive a full refund of any advance payment. Cancellations within 48 hours may incur a cancellation fee. Emergency cancellations are handled case by case.'
    }
  ];

  const categories = [
    {
      name: 'Rental Process',
      icon: faQuestionCircle,
      faqs: faqs.slice(0, 3)
    },
    {
      name: 'Driver Availability',
      icon: faQuestionCircle,
      faqs: faqs.slice(3, 6)
    },
    {
      name: 'Pricing',
      icon: faQuestionCircle,
      faqs: faqs.slice(6, 9)
    },
    {
      name: 'Coverage Areas',
      icon: faQuestionCircle,
      faqs: faqs.slice(9, 12)
    },
    {
      name: 'Emergency Support',
      icon: faQuestionCircle,
      faqs: faqs.slice(12, 15)
    },
    {
      name: 'Insurance',
      icon: faQuestionCircle,
      faqs: faqs.slice(15, 18)
    },
    {
      name: 'Rental Duration',
      icon: faQuestionCircle,
      faqs: faqs.slice(18, 21)
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-5 bg-primary-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Frequently Asked Questions</h1>
              <p className="lead mb-4">
                Find answers to common questions about our truck rental and logistics services in Saudi Arabia.
              </p>
              <p className="mb-4">
                Can't find what you're looking for? Our customer support team is available 24/7 to help you with any questions.
              </p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-light rounded-pill">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Contact Support
                </a>
                <a href="https://wa.me/966500000000" className="btn btn-success rounded-pill" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <img 
                src="/images/faq-hero.jpg" 
                alt="FAQ" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Browse by Category</h2>
            <p className="text-muted">Find answers specific to your needs</p>
          </div>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary-orange bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <FontAwesomeIcon icon={category.icon} className="text-primary-orange fs-4" />
                      </div>
                      <h5 className="text-primary-blue fw-bold mb-0">{category.name}</h5>
                    </div>
                    <p className="text-muted small mb-3">
                      {category.faqs.length} questions in this category
                    </p>
                    <FAQAccordion faqs={category.faqs} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">All Frequently Asked Questions</h2>
            <p className="text-muted">Complete list of questions and answers</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="text-primary-blue fw-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted mb-4">
                Our customer support team is here to help you with any questions about our services, 
                pricing, or rental process. We're available 24/7 to assist you.
              </p>
              <div className="d-flex gap-3">
                <a href="/contact" className="btn btn-primary-orange rounded-pill">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Call Now
                </a>
                <a href="mailto:info@techtruck.sa" className="btn btn-outline-primary-blue rounded-pill">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Email Us
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="text-primary-blue fw-bold mb-3">
                    <FontAwesomeIcon icon={faClock} className="text-primary-orange me-2" />
                    24/7 Support Available
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Phone:</strong> +966 50 000 0000
                    </li>
                    <li className="mb-2">
                      <strong>WhatsApp:</strong> +966 50 000 0000
                    </li>
                    <li className="mb-2">
                      <strong>Email:</strong> info@techtruck.sa
                    </li>
                    <li className="mb-0">
                      <strong>Response Time:</strong> Within 30 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
