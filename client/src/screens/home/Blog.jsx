import React from "react";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Start Bidding on Online Auctions",
      image: "https://www.bidequip.com/wp-content/uploads/2021/11/01-title-11-tips-for-bidding-at-an-online-auction.png",
      description:
        "Discover tips and strategies to get started with online auctions and win your first bid.",
      date: "January 15, 2025",
      author: "Admin",
    },
    {
      id: 2,
      title: "Top 5 Tips for Winning Rare Items",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ThpC-Wk-x_a4HvZUscInKHrujpXbUcU33A&s",
      description:
        "Learn how to increase your chances of winning rare and valuable items in online auctions.",
      date: "January 10, 2025",
      author: "Admin",
    },
    {
      id: 3,
      title: "Understanding Online Auction Rules",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPrxw0MBBRBUclFSA4lrWDxKnHOTWiu_Pw&sn",
      description:
        "A complete guide to the rules and etiquette of participating in online auctions.",
      date: "January 5, 2025",
      author: "Admin",
    },
  ];

  return (
    <div className="blog-page container py-16">
        <header className="text-green  text-center mb-3">
      <h1 className="text-4xl font-bold text-center mb-8">Auction Blog</h1>
      </header>
      <p className="text-center text-gray-600 mb-12">
        Stay updated with the latest tips, trends, and guides about online auctions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card shadow-md rounded-lg overflow-hidden bg-white">
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <div className="text-sm text-gray-500 mb-3">
                <span>{post.date}</span> | <span>By {post.author}</span>
              </div>
              <a
                href={`/blog/${post.id}`}
                className="text-green-600 font-semibold hover:underline"
              >
            
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
