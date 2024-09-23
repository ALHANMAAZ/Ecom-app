import React, { useState } from "react";

const Carousel = () => {
  const slides = [
    "/Images/s1.jpg",
    "/Images/s2.jpg",
    "/Images/s3.jpg",
    "/Images/s4.jpg",
    "/Images/s5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full mt-5 mx-auto overflow-hidden ">
      <div
        className=" flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-83 object-cover flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className=" ml-5 absolute top-1/2 -translate-y-1/2 left-0 text-2xl text-black p-2 rounded-full hover:bg-gray-500 transition transform -translate-x-1/2 "
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="mr-5 absolute top-1/2 -translate-y-1/2 right-0 text-2xl text-black p-2 rounded-full hover:bg-gray-500 transition transform translate-x-1/2"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
