import React from "react";

const About = () => {
  return (
    <section className="bg-customPink py-24" id="about">
      <div className="max-w-7xl mx-auto my-20 px-6 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">
            About Us
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            We are dedicated to providing <span className="font-semibold text-customPurple">fast</span>,{" "}
            <span className="font-semibold text-customPurple">reliable</span>, and{" "}
            <span className="font-semibold text-customPurple">top-quality</span> cleaning services at competitive
            prices. Our team takes pride in delivering high-standard results that
            meet the needs of our clients, whether for residential, commercial,
            or specialized cleaning.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We combine <span className="font-semibold text-customPurple">expertise</span>,{" "}
            <span className="font-semibold text-customPurple">efficiency</span>, and{" "}
            <span className="font-semibold text-customPurple">attention to detail</span> to ensure every space is
            spotless and refreshed, making us a trusted choice for cleaning
            services that exceed expectations.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="bg-customPurple text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 p-6 mt-12 md:mt-0">
          <div className="relative group">
            <img
              src="/assets/clean2.jpg"
              alt="About Us"
              className="w-full max-w-sm md:max-w-full h-auto rounded-3xl shadow-2xl "
            />
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;