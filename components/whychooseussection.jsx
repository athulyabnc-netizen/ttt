import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faClock,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const features = [
    {
      icon: faTruck,
      title: "Wide Truck Network",
      desc: "Provide a versatile fleet of trucks that is capable of catering to all logistics and transportation needs across the country.",
    },
    {
      icon: faClock,
      title: "On-Time Delivery",
      desc: "Timely delivery of goods with an appropriate transport system comes before your needs.",
    },
    {
      icon: faShieldHalved,
      title: "Affordable Rental Plans",
      desc: "Options flexible enough to allow businesses to get more efficiency out of their operations while cutting logistics costs",
    },
    {
      icon: faHeadset,
      title: "Advanced Tracking System",
      desc: "Real-time tracking information enables accurately monitoring shipments, keeping the clients updated along the way.",
    },
  ];

  return (
    <section className="why-section py-5">
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">WHY CHOOSE US</span>

          <h2 className="section-title mt-3">
            Seamless Vehicle Rental for Logistics
          </h2>

          <p className="section-subtitle">
            We bring reliability that is powered by technology for your operations.
          </p>
        </div>

        <div className="row align-items-center g-5">

          {/* Left Image */}
          <div className="col-lg-6">
            <Image
              src="/images/why-choose-us.jpg"
              alt="Why Choose Us"
              width={600}
              height={600}
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Right Features */}
          <div className="col-lg-6">

            {features.map((item, idx) => (
              <div className="feature-card d-flex" key={idx}>

                <div className="icon-box">
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}