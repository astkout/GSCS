import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

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

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-blue-100">
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
            {/* Map */}
            <div className="mt-8">
              <h3 className="text-xl mb-4 font-semibold text-gray-700">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75394.17251193854!2d-1.6181321319226847!3d53.8060756352739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1734202272108!5m2!1sen!2suk"
                width="80%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen="false"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              Contact Us
            </h2>
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
                  style={{ resize: "none" }}
                  rows={5}
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
