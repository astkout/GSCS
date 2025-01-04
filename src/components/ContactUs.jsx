import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateIDReceive = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_RECEIVE;
    const templateIDReply = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_REPLY;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Prepare the template parameters for both the admin and auto-reply email
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the message to the admin (received message)
    emailjs.send(serviceID, templateIDReceive, templateParams, publicKey).then(
      (response) => {
        console.log("Message sent to admin:", response.status, response.text);

        // Send an auto-reply to the user
        emailjs.send(serviceID, templateIDReply, templateParams, publicKey).then(
          (replyResponse) => {
            console.log("Auto-reply sent to user:", replyResponse.status, replyResponse.text);
            alert("Thank you for contacting us!");
          },
          (replyError) => {
            console.error("Auto-reply failed:", replyError);
            alert("Failed to send auto-reply.");
          }
        );
      },
      (error) => {
        console.error("Message sending failed:", error);
        alert("Something went wrong. Please try again later.");
      }
    );

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-customPink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          {/* Left side: Contact details */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Contact Details</h2>
            <div>
              <p className="text-lg font-medium text-gray-700">Email:</p>
              <p className="text-gray-600 font-semibold">info@gogcleaning.co.uk</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">Phone:</p>
              <p className="text-gray-600 font-semibold">+44 758 475 8669</p>
              <p className="text-gray-600 font-semibold">+44 754 734 9061</p>
            </div>
            <div>
            <p className="text-lg font-medium text-gray-700">Follow Us:</p>
               <a
        href="https://www.tiktok.com/@geecleaning?lang=en"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mt-4"
      >
        <img
          src="./assets/tik-tok.png"
          alt="TikTok"
          className="w-6 h-6 mt-2 inline-block"
        />
      </a>
            </div>
            {/* Map */}
            <div className="mt-8">
              <h3 className="text-xl mb-4 font-semibold text-gray-700">
                Our Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9425.875905378267!2d-1.5583079700380305!3d53.79893823217183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1e046c24a9%3A0x716fc89a6553a7e4!2sLeeds%20City%20Centre%2C%20Leeds!5e0!3m2!1sen!2suk!4v1734991002342!5m2!1sen!2suk"
                className="w-4/5 h-64 border border-gray-300 rounded-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leeds City Centre Location"
              />
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              aria-label="Contact Us Form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Enter your message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={5}
                  aria-multiline="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-customPurple text-white py-3 rounded-md hover:bg-pink-500 transition-colors"
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
