import React from "react";

const Services = () => {
  const backgroundImage = "assets/image10.jpg"; // Set your desired background image

  const serviceCards = [
    {
      title: "Residential",
      icon: "assets/house.png",
      features: ["Regular House Cleaning", "Deep Cleaning"],
    },
    {
      title: "Commercial",
      icon: "assets/office.png",
      features: ["Office Spaces", "Retail Stores"],
    },
    {
      title: "Airbnb",
      icon: "assets/airbnb.png",
      features: ["Regular Cleaning", "Deep Cleaning"],
    },
    {
      title: "Specialized",
      icon: "assets/appliance.png",
      features: ["Fridges", "Ovens"],
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-4 md:px-20 bg-gray-100 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold">Services</h2>
          <p className="mt-6 text-lg md:text-2xl font-semibold max-w-4xl mx-auto">
            With over 20 years of expertise in the cleaning industry, we deliver
            unparalleled service and immaculate results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {serviceCards.map(({ title, icon, features }, index) => (
              <div
                key={index}
                className="relative bg-gray-100 p-16 rounded-lg shadow-lg text-center overflow-hidden hover:scale-105 transition transform duration-300"
              >
                <img
                  src={icon}
                  alt={`${title} Icon`}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                <ul className="text-gray-600 space-y-2 font-semibold">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
