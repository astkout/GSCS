import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // List of images for the slider
  const images = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    "assets/image4.jpg",
    "assets/image5.jpg",
    "assets/image6.jpg",
    "assets/image7.jpg",
  ];

  // Function to change the current image
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart - touchEnd > 150) {
      nextImage(); // Swipe left
    }
    if (touchStart - touchEnd < -150) {
      prevImage(); // Swipe right
    }
  };

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Assuming mobile is 768px or below
    };

    checkIsMobile(); // Check on initial load

    // Listen for window resizing
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Auto slideshow every 3 seconds on mobile
  useEffect(() => {
    let intervalId;
    if (isMobile) {
      intervalId = setInterval(nextImage, 3000); // Change every 3 seconds on mobile
    }
    return () => {
      if (intervalId) clearInterval(intervalId); // Cleanup interval on unmount or when isMobile changes
    };
  }, [isMobile, nextImage]);

  // Auto slideshow every 4 seconds on desktop
  useEffect(() => {
    let intervalId;
    if (!isMobile) {
      intervalId = setInterval(nextImage, 4000); // Change every 4 seconds on desktop
    }
    return () => {
      if (intervalId) clearInterval(intervalId); // Cleanup interval on unmount or when isMobile changes
    };
  }, [isMobile, nextImage]);

  return (
    <section id="ourwork" className="py-20 sm:py-40 px-10 md:px-20 bg-gray-100">
      <div className="text-center mb-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold">Our Work</h2>
        <p className="mt-7 px-10 text-xl md:text-2xl font-semibold">
          With over 20 years of expertise in the cleaning industry, we deliver
          unparalleled service and immaculate results. Our commitment to
          excellence ensures your space is meticulously cleaned, creating an
          environment that radiates freshness and professionalism.
        </p>
      </div>

      {/* Slider */}
      <div
        className="relative py-10 md:py-20 mx-auto max-w-4xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Wrapper */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Images */}
            {images.map((image, index) => (
              <div key={index} className="flex-none w-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        {!isMobile && (
          <div className="absolute inset-y-0 left-0 flex items-center justify-center px-4">
            {/* Previous button */}
            <button
              onClick={prevImage}
              className="bg-transparent text-blue-500 p-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
              style={{
                position: "absolute",
                left: "-70px", // Position outside to the left of the carousel
              }}
            >
              <FaChevronLeft size={30} />
            </button>
          </div>
        )}
        {!isMobile && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center px-4">
            {/* Next button */}
            <button
              onClick={nextImage}
              className="bg-transparent text-blue-500 p-4 rounded-full hover:bg-blue-400 hover:text-white transition duration-300"
              style={{
                position: "absolute",
                right: "-70px", // Position outside to the right of the carousel
              }}
            >
              <FaChevronRight size={30} />
            </button>
          </div>
        )}
      </div>

     {/* Info Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
    <img
      src="assets/fast.png"
      alt="Fast"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-lg sm:text-xl font-bold">Fast</h3>
    <p className="mt-2 text-sm sm:text-base">
      We deliver prompt, efficient cleaning services, ensuring your space
      is spotless in no time.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
    <img
      src="assets/reliable.png"
      alt="Reliable"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-lg sm:text-xl font-bold">Reliable</h3>
    <p className="mt-2 text-sm sm:text-base">
      We provide reliable and consistent services, ensuring your needs are
      met with the highest level of professionalism and dependability.
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
    <img
      src="assets/affordable.png"
      alt="Affordable"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-lg sm:text-xl font-bold">Affordable</h3>
    <p className="mt-2 text-sm sm:text-base">
      We deliver cost-effective solutions, offering exceptional value
      through highly competitive pricing designed to meet your needs
      without compromising on quality.
    </p>
  </div>
</div>

    </section>
  );
};

export default OurWork;


