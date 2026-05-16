'use client';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  Navigation
} from 'swiper/modules';

import Lightbox from 'yet-another-react-lightbox';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'yet-another-react-lightbox/styles.css';

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // HERO + FLEET
  const fleetImages = [
    '/images/fleet1.jpg',
    '/images/fleet2.jpg',
    '/images/fleet3.jpg',
    '/images/fleet4.jpg',
    '/images/fleet5.jpg'
  ];

  // PROJECT GALLERY
 const galleryImages = [
  { src: '/images/project1.jpg', name: 'Name1' },
  { src: '/images/project2.jpg', name: 'Name2' },
  { src: '/images/project3.jpg', name: 'Name3' },
  { src: '/images/project4.jpg', name: 'Name4' },
  { src: '/images/project5.jpg', name: 'Name5' },
  { src: '/images/project6.jpg', name: 'Name6' }
];

  // TIMELINE
  const process = [
    {
      title: 'Pickup',
      image: '/images/process1.jpg',
      description: 'Safe cargo pickup from client location.'
    },
    {
      title: 'Loading',
      image: '/images/process2.jpg',
      description: 'Professional loading using advanced equipment.'
    },
    {
      title: 'Transportation',
      image: '/images/process3.jpg',
      description: 'Secure transport across Saudi Arabia.'
    },
    {
      title: 'Delivery',
      image: '/images/process4.jpg',
      description: 'On-time cargo delivery with complete safety.'
    }
  ];

  return (
    <>
      {/* HERO SLIDER */}
      {/* <section className="hero-gallery">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          loop
        >
          {fleetImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${image})`
                }}
              >
                <div className="hero-overlay">
                  <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold">
                      Heavy Transport Solutions
                    </h1>

                    <p className="lead">
                      Reliable logistics services across Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}

      {/* FLEET SLIDER */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Fleet</h2>

            <p className="text-muted">
              Modern vehicles for every logistics need
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            loop
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 4
              }
            }}
          >
            {fleetImages.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt=""
                  className="img-fluid rounded shadow-sm fleet-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* PROJECT GALLERY */}
     <section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Fleet gallery </h2>
      <p className="text-muted">
        Explore our range of vehicles and our scope of functioning
      </p>
    </div>

   <div className="row g-4">
  {galleryImages.map((item, idx) => (
    <div className="col-lg-4 col-md-6" key={idx}>
      <div
        className="gallery-card"
        onClick={() => {
          setIndex(idx);
          setOpen(true);
        }}
      >
        <img src={item.src} alt={item.name} />

        <div className="overlay">
          <div className="overlay-content">
            {/* <h6 >{item.name}</h6> */}
            {/* <span className="view-btn">View Project</span> */}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

      {/* PROCESS TIMELINE */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Our Logistics Process
            </h2>

            <p className="text-muted">
              Professional workflow from pickup to delivery
            </p>
          </div>

          <div className="row">
            {process.map((step, idx) => (
              <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                <div className="text-center">
                  <img
                    src={step.image}
                    alt=""
                    className="rounded-circle shadow process-image mb-3"
                  />

                  <h5 className="fw-bold">
                    {step.title}
                  </h5>

                  <p className="text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* LIGHTBOX */}
      <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={galleryImages.map((item) => ({
    src: item.src
  }))}
/>
    </>
  );
}