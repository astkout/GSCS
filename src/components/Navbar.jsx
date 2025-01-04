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
    <nav className="bg-white text-customPurple fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo and Heading */}
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
              className="text-customPurple font-bold p-2 sm:p-3 hover:text-customPink"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-customPurple font-bold p-2 sm:p-3 hover:text-customPink"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="text-customPurple font-bold p-2 sm:p-3 hover:text-customPink"
            >
              Services
            </a>
            <a
              href="#contact"
              className="bg-customPink text-custimPurple font-bold p-2 sm:p-3 hover:bg-pink-200 rounded-full transition-colors"
            >
              Contact
            </a>
          </div>
          {/* Mobile Navbar */}
          <div className="lg:hidden flex items-center justify-end w-full">
            <a
              href="#contact"
              className="bg-customPink text-customPurple font-bold p-2 sm:p-3 hover:bg-gray-200 rounded-full transition-colors"
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

      {/* Mobile Menu (hidden by default) */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-screen bg-customPink text-white p-4 transition-transform ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="text-custom text-2xl absolute top-6 right-6"
        >
          &times;
        </button>

        <div className="flex flex-col space-y-3 mt-12">
          <a
            href="#home"
            className="text-white font-bold p-2 hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-bold p-2 hover:text-gray-300"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="text-white font-bold p-2 hover:text-gray-300"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="bg-white text-customPurple font-bold p-2 hover:bg-gray-200 rounded-full transition-colors"
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
