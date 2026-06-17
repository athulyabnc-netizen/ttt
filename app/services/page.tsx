import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'Truck Rental',
      description: 'Comprehensive truck rental services with modern fleet including flatbeds, pickups, and heavy-duty trucks for all your transportation needs across Saudi Arabia.',
      link: '#truck-rental',
      image: '/images/truck-rental.jpg'
    },
    {
      title: 'Crane Rental',
      description: 'Professional crane rental services with certified operators for construction, industrial lifting, and heavy equipment movement projects.',
      link: '#crane-rental',
      image: '/images/crane-rental.jpg'
    },
    {
      title: 'Logistics Transport',
      description: 'End-to-end logistics solutions including supply chain management, warehousing, and distribution services tailored to your business requirements.',
      link: '#logistics',
      image: '/images/logistic-transport.jpg'
    },
    {
      title: 'Heavy Equipment Moving',
      description: 'Specialized transportation services for heavy machinery, construction equipment, and industrial assets with proper safety protocols.',
      link: '#heavy-equipment',
      image: '/images/heavyequipment-moving.jpg'
    },
    {
      title: 'Container Transport',
      description: 'Professional container transport services for shipping containers, storage containers, and cargo containers across KSA.',
      link: '#container-transport',
      image: '/images/container-transport.jpg'
    },
    {
      title: 'Machinery Lifting',
      description: 'Expert machinery lifting services using advanced equipment and trained operators for industrial and commercial applications.',
      link: '#machinery-lifting',
      image: '/images/machienery-lifting.jpg'
    },
    {
      title: 'Cargo Transport',
      description: 'Reliable cargo transport services for goods, materials, and products with proper handling and timely delivery across Saudi Arabia.',
      link: '#cargo-transport',
      image: '/images/cargo-transport.jpg'
    },
    {
      title: 'Emergency Transport',
      description: '24/7 emergency transport services for urgent transportation needs with rapid response and dedicated support team.',
      link: '#emergency-transport',
      image: '/images/emergency-transport.jpg'
    },
    {
      title: 'Restaurant',
      description: "Explore TT Global's restaurant and cafe, where delicious meals are cooked and served hygienically. We have a wide variety of food for all tastes and preferences, from quick bites to wholesome food.",
      link: '#restaurant',
      image: '/images/restaurant.jpg'
    },
    {
      title: 'Catering Services',
      description: 'TT Global offers hygienic, nutritious and delicious food for labour camp catering depending on workforce requirements. The timely food supply provides good food quality, a balanced diet and customer satisfaction.',
      link: '#catering',
      image: '/images/catering-services.jpg'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section
        className="pb-5 text-white position-relative"
        style={{
          marginTop: '90px',
          paddingTop: '4rem',
          minHeight: '480px',
          backgroundImage: 'url("/images/services.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        />
        <div className="container position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
          <h1 className="display-4 fw-bold text-center mb-0">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary-blue fw-bold mb-3">Complete Transportation Solutions</h2>
            <p className="text-muted">Professional services for all your transportation needs</p>
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
