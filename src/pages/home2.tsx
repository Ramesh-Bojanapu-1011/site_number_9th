import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import React from "react";

type Props = {};

const Home2 = (props: Props) => {
  return (
    <>
      <Headder />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 overflow-x-hidden ">
        {/* Hero Banner */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white min-h-[100vh] w-full px-6 py-20 caret-transparent">
          <div className="flex-1 mb-8 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to ShopNext
            </h1>
            <p className="text-xl max-w-lg opacity-90 mb-6">
              Your next-level shopping experience. Discover exclusive deals,
              trending products, and seamless delivery.
            </p>
            <a
              href="#deals"
              className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800"
            >
              Shop Now
            </a>
          </div>
          <img
            src="/file.svg"
            alt="Shop Banner"
            className="w-64 h-64 md:w-80 md:h-80 object-contain animate-zoom-in"
            data-aos="fade-left"
          />
        </section>

        {/* Featured Categories */}
        <section
          className="py-16 px-4 bg-white dark:bg-gray-900"
          id="categories"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Featured Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Electronics", img: "/globe.svg" },
                { name: "Fashion", img: "/vercel.svg" },
                { name: "Home & Living", img: "/window.svg" },
                { name: "Sports", img: "/next.svg" },
              ].map((cat) => (
                <div
                  key={cat.name}
                  className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow p-6 hover:scale-105 transition-transform animate-zoom-in"
                  data-aos="zoom-in"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-16 h-16 mb-4"
                  />
                  <span className="font-bold text-lg text-blue-700 dark:text-pink-200">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Deals */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" id="deals">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-600 dark:text-pink-200">
              Today's Hot Deals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smartphone X",
                  price: "$499",
                  img: "/globe.svg",
                  desc: "Latest model, unbeatable price!",
                },
                {
                  title: "Designer Dress",
                  price: "$89",
                  img: "/vercel.svg",
                  desc: "Trendy and comfortable.",
                },
                {
                  title: "Blender Pro",
                  price: "$59",
                  img: "/window.svg",
                  desc: "Make healthy smoothies at home.",
                },
              ].map((deal, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow p-8 flex flex-col items-center animate-zoom-in"
                  data-aos="fade-up"
                >
                  <img
                    src={deal.img}
                    alt={deal.title}
                    className="w-24 h-24 mb-4"
                  />
                  <span className="font-bold text-xl mb-2 text-green-700 dark:text-pink-200">
                    {deal.title}
                  </span>
                  <span className="text-lg mb-2 text-gray-700 dark:text-gray-200">
                    {deal.desc}
                  </span>
                  <span className="text-2xl font-extrabold text-blue-700 dark:text-yellow-200 mb-4">
                    {deal.price}
                  </span>
                  <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">
                Why Shop With Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-lg space-y-2">
                <li>Free shipping on orders over $50</li>
                <li>Easy returns & 24/7 support</li>
                <li>Exclusive member discounts</li>
                <li>Secure payments</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <img
                src="/file.svg"
                alt="Why Shop"
                className="w-40 h-40 md:w-56 md:h-56"
              />
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="caret-transparent py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-pink-200">
              Customer Reviews
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Sonia P.",
                  review: "Fast delivery and great prices!",
                  img: "/globe.svg",
                },
                {
                  name: "Amit R.",
                  review: "Love the variety and quality.",
                  img: "/vercel.svg",
                },
                {
                  name: "Leena M.",
                  review: "Customer support is top-notch!",
                  img: "/window.svg",
                },
              ].map((cust, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 animate-zoom-in"
                  data-aos="zoom-in"
                >
                  <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                    “{cust.review}”
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={cust.img}
                      alt={cust.name}
                      className="w-10 h-10 rounded-full bg-white"
                    />
                    <span className="font-bold text-blue-700 dark:text-yellow-100">
                      {cust.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="  py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg caret-transparent ">
              Stay Updated!
            </h2>
            <p className="mb-8 text-lg text-white/90 caret-transparent">
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

export default Home2;
