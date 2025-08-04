'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { SquareArrowLeft, SquareArrowRight, ArrowRight, ArrowLeft } from 'lucide-react'

export default function CarouselWithNav({ images }) {
  const [sliderRef, instance] = useKeenSlider({
    loop: true,
    duration: 1000,
    easing: 'ease-out',
    slides: {
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  })

  return (
    <div className="relative w-full lg:h-150 sm:h-100 md:h-80">
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((image, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            <img 
              src={typeof image === 'string' ? image : image.src} 
              alt={typeof image === 'string' ? '' : image.title || ''} 
              className="w-full h-full object-cover" 
            />
            
            {/* Description overlay */}
            {typeof image === 'object' && (
              <div className="absolute bottom-4 left-4 bg-gradient-to-t from-black/70 to-transparent bg-black/50 p-2 w-max">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm ">
                  {image.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => instance.current?.prev()}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-none shadow-lg transition-all duration-200 hover:scale-110 z-10"
      >
        <ArrowLeft size={20} className="text-black" />
      </button>
      <button
        onClick={() => instance.current?.next()}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-none shadow-lg transition-all duration-200 hover:scale-110 z-10"
      >
        <ArrowRight size={20} className="text-black" />
      </button>
    </div>
  )
}