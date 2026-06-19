import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Our Services | Truck Rental, Crane & Logistics in Saudi Arabia | TT Global',
  description: 'TT Global offers truck rental, crane rental, logistics transport, heavy equipment moving, container transport & emergency services across Saudi Arabia. Get a free quote today.',
  openGraph: {
    title: 'Our Services | Truck Rental, Crane & Logistics in Saudi Arabia | TT Global',
    description: 'TT Global offers truck rental, crane rental, logistics transport, heavy equipment moving, container transport & emergency services across Saudi Arabia. Get a free quote today.',
    images: [{ url: '/images/ttglobal-og.jpg', width: 1200, height: 630, alt: 'TT Global Services Saudi Arabia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Truck Rental, Crane & Logistics in Saudi Arabia | TT Global',
    description: 'TT Global offers truck rental, crane rental, logistics transport, heavy equipment moving, container transport & emergency services across Saudi Arabia.',
    images: ['/images/ttglobal-og.jpg'],
  },
};

export default function Services() {
  const services = [
    {
      title: 'Truck Rental',
      description: 'Modern fleets for construction, industrial, and commercial transportation and delivery with trusted solutions for truck rental in accordance with the time are secure, efficient, and safe.',
      link: '/services/truck-rental',
      image: '/images/truck-rental.png'
    },
    {
      title: 'Crane Rental',
      description: 'Perfect for heavy lifting, construction, equipment installation, and industrial operations by professionals operating cranes.',
      link: '/services/crane-rental',
      image: '/images/crane-rental.png'
    },
    {
      title: 'Logistics Transport',
      description: 'End-to-end logistics solutions that can be integrated into business operations to reduce the time it requires for transporting, storing, distributing, and order processing.',
      link: '/services/logistics-transport',
      image: '/images/logistic-transport.png'
    },
    {
      title: 'Heavy Equipment Moving',
      description: 'Heavy equipment moving services for safe transportation of large machinery with expertise and specialized equipment.',
      link: '/services/heavy-equipment-moving',
      image: '/images/heavyequipment-moving.png'
    },
    {
      title: 'Container Transport',
      description: 'Port and warehouse, industrial facility, safe and reliable container transport, timely delivery, and professional handling.',
      link: '/services/container-transport',
      image: '/images/container-transport.png'
    },
    {
      title: 'Machinery Lifting',
      description: 'Heavy machinery rigging with precision machinery lifts by advanced equipment and certified operators for safe and efficient heavy-asset relocation.',
      link: '/services/machinery-lifting',
        // link: '#!',
      image: '/images/machinery-detail.png'
    },
    {
      title: 'Cargo Transport',
      description: 'Safe and reliable commercial goods, industrial material, and bulk transport offering safe and reliable handling and delivery.',
      link: '/services/cargo-transport',
      // link: '#!',
      image: '/images/cargo-transport.png'
    },
    {
      title: 'Emergency Transport',
      description: 'Round-the-clock emergency transport options for reliable and efficient logistics in urgent situations.',
      link: '/services/emergency-transport',
        // link: '#!',
      image: '/images/emergency-transport.png'
    },
    {
      title: 'Restaurant',
      description: "Select freshly prepared meals, beverages, and quality meals with a variety of menu items selected in inviting and comfortable surroundings.",
      link: '/services/restaurant',
      //  link: '#!',
      image: '/images/restaurant.png'
    },
    {
      title: 'Catering Services',
      description: 'Professional catering solutions providing healthy food that is hygienic and appealing for labor camps, corporate functions, industrial camps, and special gatherings.',
      link: '/services/catering-services',
        //  link: '#!',
      image: '/images/catering-detail.png'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
        className="pb-5 text-white position-relative page-hero-lg"
        style={{
          marginTop: '90px',
          paddingTop: '4rem',
          backgroundImage: 'url("/images/our-services.png")',
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        />
        <div className="container position-relative d-flex align-items-center justify-content-center page-hero-inner">
          <h1 className="display-4 fw-bold text-center mb-0">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Complete Transportation and Food Solutions</h2>
            <p className="text-muted">Serving equipment and services that streamline your operations.</p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {services.map((service, index) => (
              <div className="col" key={index}>
                <ServiceCard {...service} />
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
