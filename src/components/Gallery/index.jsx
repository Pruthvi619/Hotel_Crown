import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import EffectCoverflow along with Navigation
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Don't forget to import the CSS for the effect!
import './index.css';
import Footer from '../Footer';
import Header from '../Header';

// Assuming you have Header and Footer components, if not, you can remove or create them
// import Header from '../Header';
// import Footer from '../Footer';

const galleryImages = [
  { src: '/Assets/dining 3.jpeg', alt: 'Restaurant' },
  { src: '/Assets/spa.jpeg', alt: 'Spa' },
  { src: '/Assets/pool.jpeg', alt: 'Pool' },
  { src: '/Assets/conference 1.jpeg', alt: 'Conference' },
  { src: '/Assets/gym 1.jpeg', alt: 'Gym' },
  { src: '/Assets/laundry 1.jpeg', alt: 'Laundry' },
  { src: '/Assets/shuttle.jpeg', alt: 'Shuttle' },
];

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="visual-diary-container">
        <div className="visual-diary-header">
          <h2>Explore Our Hotel Facilities</h2>
            <p>Discover the beauty and elegance of The Crown Hotel through our gallery.</p>
            </div>
        <Swiper
          // Add EffectCoverflow to modules
          modules={[Navigation, EffectCoverflow]}
          effect={'coverflow'} // Specify the effect
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'} // 'auto' works well with coverflow to calculate slide widths dynamically
          loop={true}
          coverflowEffect={{
            rotate: 0,        // No rotation for a flatter stack
            stretch: 0,       // No stretch between slides, they should overlap
            depth: 100,       // How much depth to give to the "stacked" slides
            modifier: 2.5,    // Adjust modifier for more pronounced effect, experiment with this
            slideShadows: false, // Control shadows via CSS for more customization
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="visual-diary-carousel"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx} className="carousel-slide">
              <img src={img.src} alt={img.alt} className="carousel-image" />
            </SwiperSlide>
          ))}
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;