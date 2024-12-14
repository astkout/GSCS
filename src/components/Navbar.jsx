import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-900 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo and Heading */}
          <div className="flex items-center p-2">
            <a href="#home" className="flex items-center">
              <img
                src="../assets/logo.png"
                alt="Cleaning Services Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-xl font-bold p-3">GS Cleaning Services</h1>
            </a>
          </div>
          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex space-x-6">
            <a href="#home" className="text-white font-bold p-3 hover:text-gray-300">
              Home
            </a>
            <a
            href="#about"
            className="text-white font-bold p-3 hover:text-gray-300"
            onClick={closeMenu} // Close menu on click
          >
            About
          </a>
            <a href="#ourwork" className="text-white font-bold p-3 hover:text-gray-300">
              Our Work
            </a>
            {/* Contact Us button */}
            <a
              href="#contact"
              className="bg-white text-blue-900 font-bold p-3 hover:bg-gray-200 rounded-full transition-colors"
            >
              Contact
            </a>
          </div>
          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-screen bg-blue-900 text-white p-6 transition-transform ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="text-white text-2xl absolute top-6 right-6"
        >
          &times;
        </button>

        <div className="flex flex-col space-y-4 mt-12">
          <a
            href="#home"
            className="text-white font-bold p-3 hover:text-gray-300"
            onClick={closeMenu} // Close menu on click
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-bold p-3 hover:text-gray-300"
            onClick={closeMenu} // Close menu on click
          >
            About
          </a>
          <a
            href="#ourwork"
            className="text-white font-bold p-3 hover:text-gray-300"
            onClick={closeMenu} // Close menu on click
          >
            Our Work
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-900 font-bold p-3 hover:bg-gray-200 rounded-full transition-colors"
            onClick={closeMenu} // Close menu on click
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
