import React, { useState, useEffect } from "react";

const images = [
  "./assets/image8.jpg",
  "./assets/image9.jpg",
  "./assets/image13.jpg",
  "./assets/image14.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Image Carousel Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 animate-float">
        <h2 className="text-7xl font-extrabold text-shadow-lg">
          GO G Cleaning Services
        </h2>
        <p className="mt-4 text-4xl text-shadow-lg">Fast. Reliable. Affordable.</p>
      </div>
    </section>
  );
};

export default Hero;