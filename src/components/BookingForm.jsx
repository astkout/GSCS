// // import React, { useState } from "react";

// // const BookingForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     date: "",
// //     time: "",
// //     service: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:5000/api/bookings", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert(result.message);
// //         setFormData({ name: "", email: "", date: "", time: "", service: "" });
// //       } else {
// //         alert(result.message || "Failed to create booking!");
// //       }
// //     } catch (error) {
// //       alert("Something went wrong! Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-customPink p-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
// //       >
// //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
// //           Book an Appointment
// //         </h2>

// //         <div className="mb-4">
// //           <label
// //             htmlFor="name"
// //             className="block text-gray-600 font-medium mb-1"
// //           >
// //             Name
// //           </label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             placeholder="Your Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
// //             required
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label
// //             htmlFor="email"
// //             className="block text-gray-600 font-medium mb-1"
// //           >
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             placeholder="Your Email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
// //             required
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label
// //             htmlFor="date"
// //             className="block text-gray-600 font-medium mb-1"
// //           >
// //             Date
// //           </label>
// //           <input
// //             type="date"
// //             id="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
// //             required
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label
// //             htmlFor="time"
// //             className="block text-gray-600 font-medium mb-1"
// //           >
// //             Time
// //           </label>
// //           <input
// //             type="time"
// //             id="time"
// //             name="time"
// //             value={formData.time}
// //             onChange={handleChange}
// //             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
// //             required
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label
// //             htmlFor="service"
// //             className="block text-gray-600 font-medium mb-1"
// //           >
// //             Service
// //           </label>
// //           <select
// //             id="service"
// //             name="service"
// //             value={formData.service}
// //             onChange={handleChange}
// //             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
// //             required
// //           >
// //             <option value="" disabled>
// //               Select a Service
// //             </option>
// //             <option value="service1">Service 1</option>
// //             <option value="service2">Service 2</option>
// //             <option value="service3">Service 3</option>
// //             <option value="service3">Service 3</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
// //         >
// //           Book Now
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BookingForm;

// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//     service: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         toast.success(result.message || "Booking successfully created!");
//         setFormData({ name: "", email: "", date: "", time: "", service: "" });
//       } else {
//         toast.error(result.message || "Failed to create booking!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong! Please try again later.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-customPink p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
//           Book an Appointment
//         </h2>

//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-gray-600 font-medium mb-1"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-600 font-medium mb-1"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="date"
//             className="block text-gray-600 font-medium mb-1"
//           >
//             Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="time"
//             className="block text-gray-600 font-medium mb-1"
//           >
//             Time
//           </label>
//           <input
//             type="time"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="service"
//             className="block text-gray-600 font-medium mb-1"
//           >
//             Service
//           </label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
//             required
//           >
//             <option value="" disabled>
//               Select a Service
//             </option>
//             <option value="service1">Service 1</option>
//             <option value="service2">Service 2</option>
//             <option value="service3">Service 3</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Book Now
//         </button>
//       </form>

//       {/* Toast Container for Notifications */}
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize EmailJS with the Booking Request Public Key
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY_BOOKING);

    // Prepare the email parameters for the admin (received message)
    const adminEmailParams = {
      to_email: "your-email@example.com", // Replace with your email
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      service: formData.service,
    };

    // Prepare the email parameters for the user (auto-reply)
    const userEmailParams = {
      to_email: formData.email, // Send to the user's email
      firstName: formData.firstName,
      lastName: formData.lastName,
      date: formData.date,
      time: formData.time,
      service: formData.service,
    };

    // Send the email to the admin
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID_BOOKING, // Booking Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN, // Template for admin
        adminEmailParams
      )
      .then(
        (adminResponse) => {
          console.log("Email sent to admin:", adminResponse);

          // Send the auto-reply email to the user
          emailjs
            .send(
              process.env.REACT_APP_EMAILJS_SERVICE_ID_BOOKING, // Booking Service ID
              process.env.REACT_APP_EMAILJS_TEMPLATE_ID_USER, // Template for user
              userEmailParams
            )
            .then(
              (userResponse) => {
                console.log("Auto-reply sent to user:", userResponse);
                toast.success(
                  "Booking created successfully! You will receive a confirmation email."
                );
                // Reset the form
                setFormData({
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  email: "",
                  date: "",
                  time: "",
                  service: "",
                });
              },
              (userError) => {
                console.error("Failed to send auto-reply:", userError);
                toast.error("Booking created, but failed to send confirmation email.");
              }
            );
        },
        (adminError) => {
          console.error("Failed to send email to admin:", adminError);
          toast.error("Failed to create booking. Please try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-customPink p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Book an Appointment
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-600 font-medium mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-600 font-medium mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-600 font-medium mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Your Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 font-medium mb-1"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-600 font-medium mb-1"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          />
        </div>

        {/* Service */}
        <div className="mb-6">
          <label
            htmlFor="service"
            className="block text-gray-600 font-medium mb-1"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Airbnb">Airbnb</option>
            <option value="Specialized">Specialized</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Book Now
        </button>
      </form>

      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BookingForm;