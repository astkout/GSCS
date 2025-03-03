import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-white text-customPurple fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex items-center p-1 sm:p-2">
            <a href="#home" className="flex items-center">
              <img
                src="../assets/logo.png"
                alt="Cleaning Services Logo"
                style={{ height: "120px", width: "auto" }}
                className="sm:h-28"
              />
            </a>
          </div>
          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex space-x-4 sm:space-x-5">
            <a
              href="#home"
              className={`relative text-customPurple font-bold p-2 sm:p-3 hover:text-customPink group ${
                activeSection === "home" ? "text-customPink" : ""
              }`}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-customPink transform origin-center transition-transform duration-300 ${
                  activeSection === "home" && activeSection !== "contact"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#about"
              className={`relative text-customPurple font-bold p-2 sm:p-3 hover:text-customPink group ${
                activeSection === "about" ? "text-customPink" : ""
              }`}
              onClick={closeMenu}
            >
              About
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-customPink transform origin-center transition-transform duration-300 ${
                  activeSection === "about" && activeSection !== "contact"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#services"
              className={`relative text-customPurple font-bold p-2 sm:p-3 hover:text-customPink group ${
                activeSection === "services" ? "text-customPink" : ""
              }`}
            >
              Services
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-customPink transform origin-center transition-transform duration-300 ${
                  activeSection === "services" && activeSection !== "contact"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#testimonials"
              className={`relative text-customPurple font-bold p-2 sm:p-3 hover:text-customPink group ${
                activeSection === "testimonials" ? "text-customPink" : ""
              }`}
            >
              Testimonials
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-customPink transform origin-center transition-transform duration-300 ${
                  activeSection === "testimonials" && activeSection !== "contact"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
            <a
              href="#contact"
              className="bg-customPink text-customPurple font-bold p-2 sm:p-3 hover:bg-pink-200 hover:shadow-purple-500/50 rounded-full transition-colors"
            >
              Contact
            </a>
          </div>
          {/* Mobile Navbar */}
          <div className="lg:hidden flex items-center justify-end w-full">
            <a
              href="#contact"
              className="bg-customPink text-customPurple font-bold p-2 sm:p-3 hover:bg-pink-200 hover:shadow-purple-500/50 rounded-full transition-colors"
            >
              Contact
            </a>
            <button onClick={toggleMenu} className="text-customPink p-2 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-screen bg-white text-white p-4 transition-transform ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="text-customPurple text-2xl absolute top-6 right-6"
        >
          ×
        </button>
        <div className="flex flex-col space-y-3 mt-12">
          <a
            href="#home"
            className={`relative inline-block text-customPurple font-bold p-2 hover:text-customPink group ${
              activeSection === "home" ? "text-customPink" : ""
            }`}
            onClick={closeMenu}
          >
            Home
            <span
              className={`absolute left-0 bottom-0 w-[calc(100%-1rem)] h-0.5 bg-customPink transform origin-center transition-transform duration-300 lg:w-full ${
                activeSection === "home" && activeSection !== "contact"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </a>
          <a
            href="#about"
            className={`relative inline-block text-customPurple font-bold p-2 hover:text-customPink group ${
              activeSection === "about" ? "text-customPink" : ""
            }`}
            onClick={closeMenu}
          >
            About
            <span
              className={`absolute left-0 bottom-0 w-[calc(100%-1rem)] h-0.5 bg-customPink transform origin-center transition-transform duration-300 lg:w-full ${
                activeSection === "about" && activeSection !== "contact"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </a>
          <a
            href="#services"
            className={`relative inline-block text-customPurple font-bold p-2 hover:text-customPink group ${
              activeSection === "services" ? "text-customPink" : ""
            }`}
            onClick={closeMenu}
          >
            Services
            <span
              className={`absolute left-0 bottom-0 w-[calc(100%-1rem)] h-0.5 bg-customPink transform origin-center transition-transform duration-300 lg:w-full ${
                activeSection === "services" && activeSection !== "contact"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </a>
          <a
            href="#testimonials"
            className={`relative inline-block text-customPurple font-bold p-2 hover:text-customPink group ${
              activeSection === "testimonials" ? "text-customPink" : ""
            }`}
            onClick={closeMenu}
          >
            Testimonials
            <span
              className={`absolute left-0 bottom-0 w-[calc(100%-1rem)] h-0.5 bg-customPink transform origin-center transition-transform duration-300 lg:w-full ${
                activeSection === "testimonials" && activeSection !== "contact"
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </a>
          <a
            href="#contact"
            className="bg-customPink text-customPurple font-bold p-2 hover:bg-pink-200 hover:shadow-purple-500/50 rounded-full transition-colors"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;