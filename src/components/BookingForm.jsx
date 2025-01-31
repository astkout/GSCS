// import React, { useState } from "react";

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
//         alert(result.message);
//         setFormData({ name: "", email: "", date: "", time: "", service: "" });
//       } else {
//         alert(result.message || "Failed to create booking!");
//       }
//     } catch (error) {
//       alert("Something went wrong! Please try again later.");
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
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", { name, email, date, time });
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book a Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
