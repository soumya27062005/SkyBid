import { useState, useEffect } from "react";
// import { Title } from "../../router";
export const MyFavorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h2 className= " text-green text-4xl font-bold text-center mb-8">My Favorites</h2>
      {favorites.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <p className="text-green-600 font-bold mt-1">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No favorites yet.</p>
      )}
    </div>
  );
};
