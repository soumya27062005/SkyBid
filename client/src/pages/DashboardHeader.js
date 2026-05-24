import React from "react";

export const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Seller Dashboard</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Add New Item
      </button>
    </header>
  );
};
