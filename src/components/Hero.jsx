import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <video
        src="./assets/video.mp4" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      ></video>

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