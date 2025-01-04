import React from "react";

const About = () => {
  return (
    <section className="bg-customPink py-24" id="about">
      <div className="max-w-7xl mx-auto my-20 px-6 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            We are dedicated to providing fast, reliable, and top-quality
            cleaning services at competitive prices. Our team takes pride in
            delivering high-standard results that meet the needs of our clients,
            whether for residential, commercial, or specialized cleaning.
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            We combine expertise, efficiency, and attention to detail to ensure
            every space is spotless and refreshed, making us a trusted choice
            for cleaning services that exceed expectations.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="bg-customPurple text-white px-6 py-3 rounded-full text-xl hover:bg-pink-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-6 mt-12 md:mt-0">
          <img
            src="/assets/clean2.jpg"
            alt="About Us"
            className="w-full max-w-sm md:max-w-full h-auto rounded-full mx-auto image-tilt-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
