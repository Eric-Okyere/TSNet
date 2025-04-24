import React, { useState, useEffect } from 'react';
import Image1 from "../assets/Image1.jpeg"; 
import Image2 from "../assets/Image2.jpeg"; 
import Image3 from "../assets/Image3.jpeg"; 
import Image4 from "../assets/Image4.jpeg"; 

const slides = [
  {
    id: 1,
    url: Image1
  },
  {
    id: 2,
    url: Image2,
  },
  {
    id: 3,
    url: Image3,
  },
  {
    id: 4,
    url: Image4,
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full l overflow-hidden rounded-2xl shadow-lg mx-20 md:mt-8 self-center">
      <div className="relative h-64 sm:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
