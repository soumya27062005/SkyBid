import React, { useState } from "react";

const SellerPage = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    startingPrice: "",
    auctionDuration: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    alert("Auction created successfully!\n" + JSON.stringify(formData, null, 2));
    setFormData({ itemName: "", startingPrice: "", auctionDuration: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Seller Dashboard</h1>
        <p className="text-gray-700 text-center mb-6">
          Create and manage your auctions effortlessly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="startingPrice" className="block text-sm font-medium text-gray-700">
              Starting Price ($)
            </label>
            <input
              type="number"
              id="startingPrice"
              name="startingPrice"
              value={formData.startingPrice}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="auctionDuration" className="block text-sm font-medium text-gray-700">
              Auction Duration (hours)
            </label>
            <input
              type="number"
              id="auctionDuration"
              name="auctionDuration"
              value={formData.auctionDuration}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Create Auction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
