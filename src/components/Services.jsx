import React from "react";

const Services = () => {
  const backgroundImage = "assets/image10.jpg";

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
      title: "Specialised",
      icon: "assets/appliance.png",
      features: ["Fridges", "Ovens"],
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-4 md:px-20 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold font-serif">Services</h2>
          <p className="mt-6 text-lg md:text-2xl font-semibold max-w-4xl mx-auto">
            With over 20 years of expertise in the cleaning industry, we deliver
            unparalleled service and immaculate results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto py-20 px-2">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {serviceCards.map(({ title, icon, features }, index) => (
              <div
                key={index}
                className="relative bg-white p-12 rounded-lg shadow-lg text-center overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={icon}
                    alt={`${title} Icon`}
                    className="w-15 h-15"
                  />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                {/* Features */}
                <ul className="text-gray-600 space-y-2 font-semibold">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;