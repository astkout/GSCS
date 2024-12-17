// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OurWork />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;