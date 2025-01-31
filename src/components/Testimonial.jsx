import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const testimonialCount = testimonials.length;

  // Move to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
  };

  // Move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount);
  };

  // Set up auto-slide and responsive behavior
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    preventDefaultTouchmoveEvent: true,
  });

  // Custom SVG arrow icons
  const LeftArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M14 7l-5 5 5 5V7z" fill="currentColor" />
    </svg>
  );

  const RightArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M10 7l5 5-5 5V7z" fill="currentColor" />
    </svg>
  );

  return (
    <section className="bg-customPink py-24">
      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-8 mb-24">
        {[
          { img: 'assets/fast.png', title: 'Fast', text: 'Quick and efficient cleaning services.' },
          { img: 'assets/reliable.png', title: 'Reliable', text: 'Consistent, high-quality results.' },
          { img: 'assets/affordable.png', title: 'Affordable', text: 'Exceptional value for your money.' },
        ].map((highlight, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300"
          >
            <img src={highlight.img} alt={highlight.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{highlight.title}</h3>
            <p>{highlight.text}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-6 mt-32">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="relative" {...handlers}>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
            <p className="mt-4 text-gray-700">{testimonials[currentIndex].message}</p>
          </div>
          {!isMobile && (
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-4 rounded-full shadow hover:bg-gray-200 transition duration-300"
              >
                <LeftArrow />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white p-4 rounded-full shadow hover:bg-gray-200 transition duration-300"
              >
                <RightArrow />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
