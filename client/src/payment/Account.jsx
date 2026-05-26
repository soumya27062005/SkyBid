import React, { useState } from "react";

export const Account = () => {
  const [balance, setBalance] = useState(0);
  const [image, setImage] = useState(null);

  const handleAddMoney = () => {
    setBalance((prevBalance) => prevBalance + 1000); // Simulating adding money
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="p-4 min-h-screen bg-white text-black">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <button className="text-2xl">←</button>
        <span className="text-lg">All transactions</span>
      </div>

      {/* Balance Card */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-gray-500 text-sm">Stocks, F&O balance</h2>
        <h1 className="text-4xl mt-2 mb-4">₹{balance.toFixed(2)}</h1>

        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Cash</span>
            <span className="text-black">₹{balance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600">Pledge</span>
            <span className="text-blue-600 font-semibold cursor-pointer">Add</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">
            Add balance for stocks intraday and F&O by pledging your holdings on Groww
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          className={`bg-blue-800 px-6 py-3 rounded-full text-white hover:bg-blue-900 transition duration-300 ${
            balance <= 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={balance <= 0}
        >
          Withdraw
        </button>
        <button
          onClick={handleAddMoney}
          className="bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition duration-300"
        >
          Add Fund
        </button>
      </div>

      {/* Image Upload Section */}
      <div className="mt-6 text-center">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="upload" />
        <label
          htmlFor="upload"
          className="cursor-pointer flex items-center justify-center bg-gray-200 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
        >
          Upload Image
        </label>
        {image && <img src={image} alt="Uploaded" className="mt-4 w-full h-auto rounded-lg shadow-md" />}
      </div>
    </section>
  );
};
