import React from "react";

export const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Easy Bidding",
      image: "../images/Services/Easy.png", // Add image URL here
      description: "Participate in live auctions with our seamless and user-friendly bidding platform."
    },
    {
      id: 2,
      title: "Secure Transactions",
      image: "../images/Services/Secure.png", // Add image URL here
      description: "Experience safe and transparent transactions with advanced encryption technology."
    },
    {
      id: 3,
      title: "Diverse Categories",
      image: "../images/Services/Diverse.png", // Add image URL here
      description: "Explore a wide range of categories including electronics, real estate, collectibles, and more."
    },
    {
      id: 4,
      title: "Seller Tools",
      image: "../images/Services/Tools.png", // Add image URL here
      description: "Manage your listings, track bids, and connect with buyers using our powerful seller dashboard."
    },
    {
      id: 5,
      title: "Customer Support",
      image: "../images/Services/Support.png", // Add image URL here
      description: "Get 24/7 assistance from our dedicated support team for any inquiries or issues."
    },
    {
      id: 6,
      title: "Delivery Services",
      image: "../images/Services/Delivery.png", // Add image URL here
      description: "Enjoy fast and reliable delivery options for your auction wins, ensuring safe and secure shipment to your doorstep."
    }    
  ];

  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Your one-stop solution for online auctions.</p>
      </header>
      
      <section className="services-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service) => (
          <div key={service.id} className="service-card shadow-md rounded-lg overflow-hidden bg-white">
            <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
