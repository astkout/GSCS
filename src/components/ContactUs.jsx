import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isMessageSent) {
      toast.info("Message already sent. Please wait for a response.");
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateIDReceive = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_RECEIVE;
    const templateIDReply = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_REPLY;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateIDReceive || !templateIDReply || !publicKey) {
      toast.error("Configuration error. Please contact support.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: `${firstName} ${surname}`,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs.send(serviceID, templateIDReceive, templateParams, publicKey).then(
      (response) => {
        console.log("Message sent to admin:", response.status, response.text);

        emailjs
          .send(serviceID, templateIDReply, templateParams, publicKey)
          .then(
            (replyResponse) => {
              console.log(
                "Auto-reply sent to user:",
                replyResponse.status,
                replyResponse.text
              );
              toast.success(
                "Thanks for reaching out! If you don't see our reply in your inbox, please check your junk or spam folder."
              );
              setIsMessageSent(true);
            },
            (replyError) => {
              console.error("Auto-reply failed:", replyError);
              toast.error("Failed to send auto-reply.");
            }
          );
      },
      (error) => {
        console.error("Message sending failed:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    );

    setFirstName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-customPink">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8 font-serif">
          Contact Details
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left side: Contact details */}
          <div className="lg:w-1/2 space-y-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2">
                <img src="./assets/email.png" alt="Email" className="w-6 h-6" />
                <p className="text-lg font-medium text-gray-700">Email:</p>
              </div>
              <a
                href="mailto:info@gogcleaning.co.uk"
                className="text-gray-600 font-semibold hover:text-blue-600 transition-colors"
              >
                info@gogcleaning.co.uk
              </a>
            </div>
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2">
                <img src="./assets/phone.png" alt="Phone" className="w-6 h-6" />
                <p className="text-lg font-medium text-gray-700">Call Us:</p>
              </div>
              <a
                href="tel:+447584758669"
                className="text-gray-600 font-semibold block mt-1"
              >
                +44 758 475 8669
              </a>
              <a
                href="tel:+447547349061"
                className="text-gray-600 font-semibold block mt-1"
              >
                +44 754 734 9061
              </a>
            </div>
            {/* Follow Us */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2">
                <img
                  src="./assets/add.png"
                  alt="Follow Us"
                  className="w-6 h-6"
                />
                <p className="text-lg font-medium text-gray-700">Follow Us:</p>
                <a
                  href="https://www.tiktok.com/@gogcleaning17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on TikTok"
                >
                  <img
                    src="./assets/tik-tok.png"
                    alt="TikTok"
                    className="w-7 h-7 hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>
            {/* Map */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold text-gray-700">
                  Our Location
                </h3>
                <img
                  src="./assets/location.png"
                  alt="Location"
                  className="w-6 h-6"
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9425.875905378267!2d-1.5583079700380305!3d53.79893823217183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1e046c24a9%3A0x716fc89a6553a7e4!2sLeeds%20City%20Centre%2C%20Leeds!5e0!3m2!1sen!2suk!4v1734991002342!5m2!1sen!2suk"
                className="w-full h-64 border border-gray-300 rounded-md mt-4"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leeds City Centre Location"
              />
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                <img
                  src="./assets/conversation.png"
                  alt="Conversation"
                  className="w-8 h-8"
                />
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact Us Form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="Enter your first name"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  {/* Surname */}
                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-gray-700 font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      required
                      placeholder="Enter your last name"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Enter your phone number"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                {/* Email */}
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
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                {/* Message */}
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
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    rows={6}
                    aria-multiline="true"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-customPurple text-white py-3 rounded-md hover:bg-customPink transition-colors duration-300 flex items-center justify-center space-x-2"
                  disabled={isSubmitting || isMessageSent}
                >
                  
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default ContactUs;
