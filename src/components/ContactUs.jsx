import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the service, template, and user ID from your EmailJS dashboard
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID"; // You can find this in your EmailJS dashboard

    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for contacting us!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again later.");
        }
      );

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Left side: Contact details */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Contact Details</h2>
            <div>
              <p className="text-lg font-medium text-gray-700">Email:</p>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Phone:</p>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-center lg:text-left">Contact Us</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Enter your message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  style={{ resize: "none" }} rows={5} 
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
