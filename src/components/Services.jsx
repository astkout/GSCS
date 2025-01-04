import React, { useState, useEffect, useCallback } from "react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    "assets/image8.jpg",
    "assets/image9.jpg",
    "assets/image10.jpg",
    "assets/image11.jpg",
    "assets/image12.jpg",
    "assets/image13.jpg",
    "assets/image14.jpg",
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, isMobile ? 3000 : 4000);
    return () => clearInterval(interval);
  }, [isMobile, nextImage]);

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-4 md:px-20 bg-gray-100 overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold">Services</h2>
          <p className="mt-6 text-lg md:text-2xl font-semibold max-w-4xl mx-auto">
            With over 20 years of expertise in the cleaning industry, we deliver
            unparalleled service and immaculate results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Residential Cleaning */}
            <div className="relative bg-gray-100 p-16 rounded-lg shadow-lg text-center overflow-hidden hover:scale-105 transition transform duration-300">
              <img
                src="assets/house.png" 
                alt="Residential Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Residential</h3>
              <ul className="text-gray-600 space-y-2 font-semibold">
                <li>Regular House Cleaning</li>
                <li>Deep Cleaning</li>
              </ul>
              <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Commercial Cleaning */}
            <div className="relative bg-gray-100 p-16 rounded-lg shadow-lg text-center overflow-hidden hover:scale-105 transition transform duration-300">
              <img
                src="assets/office.png" 
                alt="Commercial Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Commercial</h3>
              <ul className="text-gray-600 space-y-2 font-semibold">
                <li>Office Spaces</li>
                <li>Retail Stores</li>
              </ul>
              <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Airbnb Cleaning */}
            <div className="relative bg-gray-100 p-16 rounded-lg shadow-lg text-center overflow-hidden hover:scale-105 transition transform duration-300">
              <img
                src="assets/airbnb.png"
                alt="Airbnb Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Airbnb</h3>
              <ul className="text-gray-600 space-y-2 font-semibold">
                <li>Regular Cleaning</li>
                <li>Deep Cleaning</li>
              </ul>
              <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Specialized Cleaning */}
            <div className="relative bg-gray-100 p-16 rounded-lg shadow-lg text-center overflow-hidden hover:scale-105 transition transform duration-300">
              <img
                src="assets/appliance.png"
                alt="Specialized Icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized</h3>
              <ul className="text-gray-600 space-y-2 font-semibold">
                <li>Fridges</li>
                <li>Ovens</li>
              </ul>
              <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
