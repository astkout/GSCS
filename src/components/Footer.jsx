import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-customPurple text-white py-8 flex justify-between items-center px-8">
      <p className="text-center w-full">&copy; {currentYear} GS Cleaning Services. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
