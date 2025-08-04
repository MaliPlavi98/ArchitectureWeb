'use client'

import { useKeenSlider } from 'keen-slider/react'

export function Carousel({ images }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    // you can add autoplay, dragSpeed, etc.
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  )
}
