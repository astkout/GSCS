// src/components/Testimonial.js

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

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Set up swipe functionality using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,  // Swipe left to go to the next testimonial
    onSwipedRight: prevTestimonial, // Swipe right to go to the previous testimonial
    preventDefaultTouchmoveEvent: true,  // Prevent default scroll behavior when swiping
  });

  return (
    <section className="bg-blue-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="relative" {...handlers}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 text-white p-2 rounded-full hidden md:block"
            >
              &lt;
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 text-white p-2 rounded-full hidden md:block"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
