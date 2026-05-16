'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ClientSection() {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Riyadh Construction Co.',
      text: 'TechTruck Transport has made our deliveries so easy and efficient; their vehicles are always in pristine condition, and they are on time and ready for every logistics need we may have in several locations',
      rating: 5
    },
    {
      name: 'Fatima Al-Saud',
      company: 'Jeddah Logistics',
      text: 'TechTruck Transport has proven to be a reliable and quality option, offering flexible trucks and ensuring there were no delays or issues when handling our urgent transport needs. We have been working with several transport providers, and they have proven to be the best service to have for us',
      rating: 5
    },
    {
      name: 'Mohammed Al-Qahtani',
      company: 'Dammam Heavy Industries',
      text: 'TechTruck Transport caters to our transportation requirements with outstanding service every time, and we are confident that it is done safely, professionally, and timely, thanks to their experienced drivers, modern fleet, and 24/7 support.',
      rating: 5
    },
    {
      name: 'Ali Hassan',
      company: 'Saudi Movers',
      text: 'TechTruck Transport just gave us the best services. We connect with them every time for vehicles. They does rental services professionally and timely. Our company is into logistics and we recommend Tech Truck for everyone looking for rental services..',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={i < rating ? 'text-warning' : 'text-secondary'}
      />
    ));
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-warning fs-2 mb-3"
                  />

                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-muted">
                    "{testimonial.text}"
                  </p>

                  <div className="mt-4">
                    <h6 className="mb-0 fw-bold">
                      {testimonial.name}
                    </h6>

                    <small className="text-muted">
                      {testimonial.company}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}