import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import the react-swipeable package

const testimonials = [
  {
    name: 'John Dwell',
    role: 'Airbnb Host',
    message: 'This cleaning service is outstanding! It keeps my property spotless and makes hosting a breeze.',
  },
  {
    name: 'Jane Smith',
    role: 'Marks & Spencer',
    message: 'Their cleaning services are top-notch! They ensure everything is pristine and ready for business every time.',
  },
  {
    name: 'Michael Johnson',
    role: 'Notre Dame College',
    message: 'I’ve been using their cleaning service for months, and it has significantly improved the cleanliness and organization of our campus.',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialCount = testimonials.length;

  // Move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
  };

  // Move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount
    );
  };

  // Set up the auto-slide using a timer
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000); // Change every 5 seconds

    // Check if the window width is below 768px to set the isMobile state
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on the current window width

    // Clean up the timer and event listener when the component is unmounted
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set up swipe functionality using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,  // Swipe left to go to the next testimonial
    onSwipedRight: prevTestimonial, // Swipe right to go to the previous testimonial
    preventDefaultTouchmoveEvent: true,  // Prevent default scroll behavior when swiping
  });

  // Custom SVG arrow icons
  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="text-gray-800"
    >
      <path
        fill="none"
        d="M0 0h24v24H0z"
      />
      <path
        d="M14 7l-5 5 5 5V7z"
      />
    </svg>
  );

  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="text-gray-800"
    >
      <path
        fill="none"
        d="M0 0h24v24H0z"
      />
      <path
        d="M10 7l5 5-5 5V7z"
      />
    </svg>
  );

  return (
    <section className="bg-gray-100 py-24">

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-8 mb-24">

          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300">
            <img
              src="assets/fast.png"
              alt="Fast"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Fast</h3>
            <p>Quick and efficient cleaning services.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300">
            <img
              src="assets/reliable.png"
              alt="Reliable"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Reliable</h3>
            <p>Consistent, high-quality results.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300">
            <img
              src="assets/affordable.png"
              alt="Affordable"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Affordable</h3>
            <p>Exceptional value for your money.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-32">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="relative" {...handlers}>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {testimonials[currentIndex].role}
            </p>
            <p className="mt-4 text-gray-700 text-center">
              {testimonials[currentIndex].message}
            </p>
          </div>
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {/* Only render arrows if not mobile */}
            {!isMobile && (
              <>
                {/* Previous button with custom SVG icon */}
                <button
                  onClick={prevTestimonial}
                  className="bg-white text-gray-800 p-4 rounded-full hover:bg-gray-200 transition duration-300"
                >
                  <LeftArrow /> {/* Custom Left Arrow */}
                </button>
                {/* Next button with custom SVG icon */}
                <button
                  onClick={nextTestimonial}
                  className="bg-white text-gray-800 p-4 rounded-full hover:bg-gray-200 transition duration-300"
                >
                  <RightArrow /> {/* Custom Right Arrow */}
                </button>
              </>
            )}
          </div>
        </div>
      </div>



    </section>
  );
};

export default Testimonial;
