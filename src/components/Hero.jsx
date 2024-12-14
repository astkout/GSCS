import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video for Desktop */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
      >
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>

      {/* GIF for Mobile */}
      <div className="absolute top-0 left-0 w-full h-full object-cover md:hidden">
        <img
          src="./assets/clean.jpg"
          alt="Hero GIF"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h2 className="text-7xl font-extrabold">GS Cleaning Services</h2>
        <p className="mt-4 text-4xl">
          Fast. Reliable. Affordable.
        </p>
      </div>
    </section>
  );
};

export default Hero;

