import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <div>
      <header className="text-green text-center py-3">
          <h1 className="text-3xl font-bold">About Us</h1>
        </header>
        <p className="text-center text-gray-700">Discover the future of online auctions</p>
        <main className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              We aim to create a seamless and secure platform for buyers and sellers to connect, ensuring transparency, efficiency, and a great user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Real-time bidding for an interactive experience</li>
              <li>Secure user authentication and payment integration</li>
              <li>Comprehensive auction management tools</li>
              <li>Notifications to keep you updated on your bids</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <p className="text-gray-700">
              Our platform stands out for its user-friendly design, reliable infrastructure, and commitment to customer satisfaction. Whether you’re buying or selling, we ensure a smooth and enjoyable experience.
            </p>
          </section>

          <div className="text-center mt-8">
            <button
              className="bg-green  py-3 px-6 rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
              onClick={() => alert("Thank you for your interest!")}
            >
              Join the Auction Today
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
