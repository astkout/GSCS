// // import React, { useState, useEffect } from 'react';
// // import { useSwipeable } from 'react-swipeable';

// // const testimonials = [
// //   {
// //     name: 'John Dwell',
// //     role: 'Airbnb Host',
// //     message: 'This cleaning service is outstanding! It keeps my property spotless and makes hosting a breeze.',
// //   },
// //   {
// //     name: 'Jane Smith',
// //     role: 'Marks & Spencer',
// //     message: 'Their cleaning services are top-notch! They ensure everything is pristine and ready for business every time.',
// //   },
// //   {
// //     name: 'Michael Johnson',
// //     role: 'Notre Dame College',
// //     message: 'I’ve been using their cleaning service for months, and it has significantly improved the cleanliness and organization of our campus.',
// //   },
// // ];

// // const Testimonial = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
// //   const testimonialCount = testimonials.length;

// //   // Move to the next testimonial
// //   const nextTestimonial = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
// //   };

// //   // Move to the previous testimonial
// //   const prevTestimonial = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialCount) % testimonialCount);
// //   };

// //   // Jump to a specific testimonial
// //   const goToTestimonial = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   // Set up auto-slide and responsive behavior
// //   useEffect(() => {
// //     const timer = setInterval(nextTestimonial, 5000);

// //     const handleResize = () => setIsMobile(window.innerWidth <= 768);
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       clearInterval(timer);
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   // Swipe handlers
// //   const handlers = useSwipeable({
// //     onSwipedLeft: nextTestimonial,
// //     onSwipedRight: prevTestimonial,
// //     preventDefaultTouchmoveEvent: true,
// //   });

// //   return (
// //     <section className="bg-customPink py-20" id="testimonials">
// //       {/* Highlights */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-16 mb-24">
// //         {[
// //           { img: 'assets/fast.png', title: 'Fast', text: 'Quick and efficient cleaning services.' },
// //           { img: 'assets/reliable.png', title: 'Reliable', text: 'Consistent, high-quality results.' },
// //           { img: 'assets/affordable.png', title: 'Affordable', text: 'Exceptional value for your money.' },
// //         ].map((highlight, index) => (
// //           <div
// //             key={index}
// //             className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300"
// //           >
// //             <img src={highlight.img} alt={highlight.title} className="w-16 h-16 mx-auto mb-4" />
// //             <h3 className="text-xl font-bold">{highlight.title}</h3>
// //             <p>{highlight.text}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Testimonials */}
// //       <div className="max-w-7xl mx-auto px-6 mt-32">
// //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
// //           What Our Clients Say
// //         </h2>
// //         <div className="relative" {...handlers}>
// //           {/* Testimonial Card */}
// //           <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center mx-auto max-w-2xl min-h-[300px] flex flex-col justify-center">
// //             <h3 className="text-xl font-semibold text-gray-800">
// //               {testimonials[currentIndex].name}
// //             </h3>
// //             <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
// //             <p className="mt-4 text-lg text-gray-700">{testimonials[currentIndex].message}</p>
// //           </div>
// //           {!isMobile && (
// //             <div className="absolute inset-0 flex justify-between items-center px-4">
// //             </div>
// //           )}
// //         </div>
// //         {/* Navigation Dots */}
// //         <div className="flex justify-center space-x-2 mt-6">
// //           {testimonials.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => goToTestimonial(index)}
// //               className={`w-3 h-3 rounded-full ${
// //                 currentIndex === index ? 'bg-customPurple' : 'bg-white'
// //               } transition-colors duration-300`}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonial;

// import React, { useState, useEffect } from "react";
// import { useSwipeable } from "react-swipeable";

// const testimonials = [
//     {
//       name: "Noah Patel",
//       role: "Patel’s Hardware Store",
//       message: "Running a shop means dust and dirt build up fast, but these guys always have it spotless before we open. Makes a huge difference for my customers and me!",
//     },
//     {
//       name: "Ava Mitchell",
//       role: "Airbnb Host",
//       message: "Keeping my Airbnb perfect for guests used to be stressful, but their team is a game-changer. Every check-in feels like a fresh start. Couldn’t do it without them!",
//     },
//     {
//       name: "Mason Reid",
//       role: "The Grind Café",
//       message: "Our fridge was in desperate need of a deep clean, and they sorted it in no time. The kitchen feels fresher, and even my coworkers noticed the difference!",
//     },
//     {
//       name: "Ethan Brooks",
//       role: "Airbnb Host",
//       message: "After a bad guest left my place in a mess, I was dreading the cleanup. Their team had it looking brand new in no time—absolute lifesavers!",
//     },
//     {
//       name: "Isabella Nguyen",
//       role: "The Golden Lotus",
//       message: "I’ve tried scrubbing my oven for ages, but nothing worked. One visit from them, and it’s gleaming! Feels like I’ve got a brand-new kitchen.",
//     },
//     {
//       name: "Lucas Foster",
//       role: "TechSolutions",
//       message: "A clean office makes a huge difference, and they always get the job done fast. Walking into a fresh, tidy workspace every morning is a great feeling.",
//     },
//     {
//       name: "Emma Sullivan",
//       role: "King’s Academy",
//       message: "With kids at home, the fridge and oven get messy fast. Their team made them look brand new again—so relieved I don’t have to do it myself!",
//     },
//   ];

// const Testimonials = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const testimonialsPerView = isMobile ? 1 : 3; // 1 on mobile, 3 on desktop
//   const totalTestimonials = testimonials.length;
//   const totalPages = Math.ceil(totalTestimonials / testimonialsPerView);

//   // Move to the next page (rotates right)
//   const nextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   // Move to the previous page (rotates left)
//   const prevPage = () => {
//     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
//   };

//   // Jump to a specific page
//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   // Set up auto-slide and responsive behavior
//   useEffect(() => {
//     const timer = setInterval(nextPage, 5000);

//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearInterval(timer);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Swipe handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: nextPage, // Swipe left moves right
//     onSwipedRight: prevPage, // Swipe right moves left
//     preventDefaultTouchmoveEvent: true,
//   });

//   // Calculate displayed testimonials based on current page
//   const getDisplayedTestimonials = () => {
//     const startIndex = currentPage * testimonialsPerView;
//     const displayed = [];
//     for (let i = 0; i < testimonialsPerView; i++) {
//       const index = (startIndex + i) % totalTestimonials;
//       displayed.push(testimonials[index]);
//     }
//     return displayed;
//   };

//   const displayedTestimonials = getDisplayedTestimonials();

//   return (
//     <section className="bg-customPink py-20" id="testimonials">
//       {/* Highlights */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-16 mb-24">
//         {[
//           { img: "assets/fast.png", title: "Fast", text: "Quick and efficient cleaning services." },
//           {
//             img: "assets/reliable.png",
//             title: "Reliable",
//             text: "Consistent, high-quality results.",
//           },
//           {
//             img: "assets/affordable.png",
//             title: "Affordable",
//             text: "Exceptional value for your money.",
//           },
//         ].map((highlight, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md text-center text-black hover:scale-105 transition duration-300"
//           >
//             <img src={highlight.img} alt={highlight.title} className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-bold">{highlight.title}</h3>
//             <p>{highlight.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Testimonials */}
//       <div className="max-w-7xl mx-auto px-6 mt-32">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8 sm:mb-12 font-serif">
//           What Our Clients Say
//         </h2>
//         <div className="relative" {...handlers}>
//           {/* Testimonial Grid */}
//           <div
//             className={`grid ${
//               isMobile ? "grid-cols-1" : "grid-cols-3"
//             } gap-6 sm:gap-8 transition-all duration-300`}
//           >
//             {displayedTestimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[300px] flex flex-col justify-center hover:shadow-purple-500/50 transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-black">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 <p className="mt-4 text-lg text-customPurple">
//                   "{testimonial.message}"
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Navigation Dots (1 per page of 3 testimonials) */}
//         {totalPages > 1 && (
//           <div className="flex justify-center space-x-2 mt-6">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToPage(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   currentPage === index ? "bg-customPurple" : "bg-white"
//                 } transition-colors duration-300`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Noah Patel",
    role: "Patel’s Hardware Store",
    message:
      "Running a shop means dust and dirt build up fast, but these guys always have it spotless before we open. Makes a huge difference for my customers and me!",
  },
  {
    name: "Ava Mitchell",
    role: "Airbnb Host",
    message:
      "Keeping my Airbnb perfect for guests used to be stressful, but their team is a game-changer. Every check-in feels like a fresh start. Couldn’t do it without them!",
  },
  {
    name: "Mason Reid",
    role: "The Grind Café",
    message:
      "Our fridge was in desperate need of a deep clean, and they sorted it in no time. The kitchen feels fresher, and even my coworkers noticed the difference!",
  },
  {
    name: "Ethan Brooks",
    role: "Airbnb Host",
    message:
      "After a bad guest left my place in a mess, I was dreading the cleanup. Their team had it looking brand new in no time—absolute lifesavers!",
  },
  {
    name: "Isabella Nguyen",
    role: "The Golden Lotus",
    message:
      "I’ve tried scrubbing my oven for ages, but nothing worked. One visit from them, and it’s gleaming! Feels like I’ve got a brand-new kitchen.",
  },
  {
    name: "Lucas Foster",
    role: "TechSolutions",
    message:
      "A clean office makes a huge difference, and they always get the job done fast. Walking into a fresh, tidy workspace every morning is a great feeling.",
  },
  {
    name: "Emma Sullivan",
    role: "King’s Academy",
    message:
      "With kids at home, the fridge and oven get messy fast. Their team made them look brand new again—so relieved I don’t have to do it myself!",
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const testimonialsPerView = isMobile ? 1 : 3; // 1 on mobile, 3 on desktop
  const totalTestimonials = testimonials.length;
  const totalPages = Math.ceil(totalTestimonials / testimonialsPerView);

  // Move to the next page (rotates right)
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  // Move to the previous page (rotates left)
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Jump to a specific page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Set up auto-slide and responsive behavior
  useEffect(() => {
    const timer = setInterval(nextPage, 7000);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextPage, 
    onSwipedRight: prevPage, 
    preventDefaultTouchmoveEvent: true,
  });

  // Calculate displayed testimonials based on current page
  const getDisplayedTestimonials = () => {
    const startIndex = currentPage * testimonialsPerView;
    const displayed = [];
    for (let i = 0; i < testimonialsPerView; i++) {
      const index = (startIndex + i) % totalTestimonials;
      displayed.push(testimonials[index]);
    }
    return displayed;
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <section className="bg-customPink py-20" id="testimonials">
      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mx-16 mb-24">
        {[
          { img: "assets/fast.png", title: "Fast", text: "Quick and efficient cleaning services." },
          {
            img: "assets/reliable.png",
            title: "Reliable",
            text: "Consistent, high-quality results.",
          },
          {
            img: "assets/affordable.png",
            title: "Affordable",
            text: "Exceptional value for your money.",
          },
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
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8 sm:mb-12 font-serif">
          What Our Clients Say
        </h2>
        <div className="relative" {...handlers}>
          {/* Testimonial Grid */}
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-3"
            } gap-6 sm:gap-8 transition-all duration-300`}
          >
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[300px] flex flex-col justify-center hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-customPink rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-lg text-customPurple">
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Dots (1 per page of 3 testimonials) */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentPage === index ? "bg-customPurple" : "bg-white"
                } transition-colors duration-300`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;