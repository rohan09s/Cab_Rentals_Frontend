import { useState, useEffect } from "react";
import { cars } from "../data/car";

const CarGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide to the right every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = () => (currentIndex - 1 + cars.length) % cars.length;
  const getNextIndex = () => (currentIndex + 1) % cars.length;

  const handlePrev = () => {
    setCurrentIndex(getPrevIndex());
  };

  const handleNext = () => {
    setCurrentIndex(getNextIndex());
  };

  const prevCar = cars[getPrevIndex()];
  const currentCar = cars[currentIndex];
  const nextCar = cars[getNextIndex()];

  return (
    <div className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Our Fleet
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose from our diverse range of vehicles
        </p>

        {/* Gallery Container */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition text-gray-800"
            aria-label="Previous car"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Gallery Cards */}
          <div className="w-full flex items-center justify-center gap-4 md:gap-6 px-16 md:px-20">
            {/* Previous Car - Blurred */}
            <div className="hidden sm:flex flex-col items-center opacity-50">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md">
                <img
                  src={prevCar.image}
                  alt={prevCar.category}
                  className="w-full h-full object-cover filter blur-sm"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600 text-center font-medium">
                {prevCar.category}
              </p>
            </div>

            {/* Current Car - Clear and Larger */}
            <div className="flex flex-col items-center z-5">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-600">
                <img
                  src={currentCar.image}
                  alt={currentCar.category}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {currentCar.category}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
                  {currentCar.models.join(", ")}
                </p>
                {/* <div className="flex justify-center gap-4 mt-3">
                  <span className="text-sm font-semibold text-blue-600">
                    {currentCar.seats}
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    ₹{currentCar.rate}/km
                  </span>
                </div> */}
              </div>
            </div>

            {/* Next Car - Blurred */}
            <div className="hidden sm:flex flex-col items-center opacity-50">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md">
                <img
                  src={nextCar.image}
                  alt={nextCar.category}
                  className="w-full h-full object-cover filter blur-sm"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600 text-center font-medium">
                {nextCar.category}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition text-gray-800"
            aria-label="Next car"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to car ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
