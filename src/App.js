// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <BookingForm /> Coming Soon... */}
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;