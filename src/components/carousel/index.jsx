import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import './index.css';

const slides = [
    
    "/Assets/pexels-cottonbro-7609119.jpg",
    "/Assets/pexels-heyho-6758528.jpg",
    "/Assets/pexels-leorossatti-2598638.jpg",
    "/Assets/pexels-pixabay-260922.jpg",
    "/Assets/pexels-quark-studio-1159039-2506990.jpg"
  
]

const Carousel = () => {
  return (
    <div className="carousel-container">
      <CCarousel controls indicators dark>
        {slides.map((slide, index) => (
          <CCarouselItem key={index}>
            <CImage className="d-block w-100" src={slide} alt={`slide ${index + 1}`} />
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  )
}

export default Carousel
