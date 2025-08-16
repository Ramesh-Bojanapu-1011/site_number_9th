import React, { useState } from "react";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const allProducts = [
  {
    id: 1,
    name: "Smartphone X",
    category: "Electronics",
    price: "$499",
    img: "/globe.svg",
    desc: "Latest model, unbeatable price!",
  },
  {
    id: 2,
    name: "LED TV",
    category: "Electronics",
    price: "$799",
    img: "/vercel.svg",
    desc: "Crystal clear display.",
  },
  {
    id: 3,
    name: "Blender Pro",
    category: "Home Appliances",
    price: "$59",
    img: "/window.svg",
    desc: "Make healthy smoothies at home.",
  },

  {
    id: 4,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    price: "$120",
    img: "/globe.svg",
    desc: "Powerful and silent.",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: "$99",
    img: "/vercel.svg",
    desc: "Crystal clear sound.",
  },
  {
    id: 6,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: "$75",
    img: "/window.svg",
    desc: "Fresh coffee every morning.",
  },
];

const categories = ["All", "Electronics", "Home Appliances"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Headder />

      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[60vh] w-full py-16">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center">
            Our Products
          </h1>
          <p className="text-xl max-w-2xl text-center opacity-90">
            Browse our wide range of electronics, home appliances, and
            accessories. Find the best deals and top brands in one place!
          </p>
        </section>

        {/* 3. Product Listing Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              All Products
            </h2>
            <div className="max-w-4xl pb-5 mx-auto flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 dark:bg-pink-400 dark:text-gray-900 dark:border-pink-400"
                      : "bg-gray-100 text-blue-700 border-blue-200 dark:bg-gray-800 dark:text-pink-200 dark:border-pink-900 hover:bg-blue-100 dark:hover:bg-pink-900"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-lg text-gray-500 dark:text-gray-300">
                  No products found in this category.
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col items-center animate-zoom-in"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-24 h-24 mb-4"
                    />
                    <span className="font-bold text-xl mb-2 text-blue-700 dark:text-pink-200">
                      {product.name}
                    </span>
                    <span className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                      {product.desc}
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700 dark:text-yellow-200 mb-4">
                      {product.price}
                    </span>
                    <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* 4. Featured Brands Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-pink-200">
              Featured Brands
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {["Sony", "Samsung", "LG", "Philips", "Whirlpool", "Bose"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-blue-700 dark:text-pink-200 font-semibold text-lg shadow animate-zoom-in"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* 5. Why Shop With Us Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                Why Shop With Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Wide range of top-quality products</li>
                <li>Secure and easy checkout</li>
                <li>24/7 customer support</li>
                <li>Fast, reliable shipping</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <img
                src="/globe.svg"
                alt="Why Shop"
                className="w-40 h-40 md:w-56 md:h-56"
              />
            </div>
          </div>
        </section>

        {/* 6. Newsletter Signup Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Sign up for our newsletter and never miss a deal or new arrival.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border outline-none text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-pink-500 transition"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
