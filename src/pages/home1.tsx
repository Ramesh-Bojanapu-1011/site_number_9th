import Footer from "@/components/Footer";
import Headder from "@/components/Headder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Home1 = (props: Props) => {
  return (
    <>
      <main className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-500 caret-transparent">
        <Headder />
        {/* Hero Section - Full width, gradient, text centered */}
        <section className="flex flex-col items-center justify-center     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white  min-h-[100vh]">
          <h1 className="text-5xl text-center font-extrabold mb-4 drop-shadow-lg">
            Welcome to MyShop
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
            Your one-stop shop for electronics, fashion, and more. Enjoy
            exclusive deals and fast, secure delivery!
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-700 dark:text-yellow-200 dark:hover:bg-gray-800">
            Shop Now
          </button>
        </section>

        {/* About Section - e-commerce info and CTA, left image right content */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-fade-left">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <Image src="/globe.svg" alt="About MyShop" width={240} height={240} className="w-48 h-48 md:w-60 md:h-60 object-contain" />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-pink-200">About MyShop</h2>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">MyShop is your trusted online destination for the latest electronics, fashion, home essentials, and more. We are committed to delivering quality products, unbeatable prices, and a seamless shopping experience. Our mission is to make online shopping easy, secure, and enjoyable for everyone.</p>
              <p className="mb-8 text-base text-gray-600 dark:text-gray-300">With fast shipping, dedicated customer support, and a wide range of products, MyShop is here to help you find exactly what you need. Discover why thousands of customers choose us for their everyday shopping!</p>
              <Link href="/about" className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 dark:bg-pink-500 dark:text-white dark:hover:bg-pink-600 ">Learn More About Us</Link>
            </div>
          </div>
        </section>

        {/* Categories - grid, colored backgrounds, no card shadow */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-600 dark:text-yellow-200">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Electronics", img: "/file.svg" },
              { name: "Fashion", img: "/window.svg" },
              { name: "Home", img: "/vercel.svg" },
              { name: "Beauty", img: "/next.svg" },
              { name: "Toys", img: "/globe.svg" },
              { name: "Sports", img: "/favicon.ico" },
            ].map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col items-center justify-center px-6 py-8 rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-blue-700 dark:text-yellow-100 font-semibold hover:scale-105 transition-transform "
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={96}
                  height={96}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-2xl mb-2">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deals & Offers - split background, left text, right deals */}
        <section className="py-16 px-4 bg-gradient-to-l from-blue-100 via-pink-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-fade-left">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-purple-700 dark:text-yellow-200 not-md:text-center">
                Hot Deals & Offers
              </h2>
              <p className="text-lg not-md:text-center text-gray-700 dark:text-gray-200">
                Save big on electronics, fashion, and more. Limited time only!
              </p>
            </div>
            <div className="flex-1 flex flex-wrap justify-center gap-8">
              {[
                {
                  label: "30% OFF",
                  img: "/file.svg",
                  desc: "On all electronics",
                },
                {
                  label: "40% OFF",
                  img: "/window.svg",
                  desc: "Trendy fashion sale",
                },
                {
                  label: "50% OFF",
                  img: "/vercel.svg",
                  desc: "Home essentials discount",
                },
              ].map((deal, i) => (
                <div
                  key={i}
                  className="rounded-2xl border-2 border-pink-300 dark:border-yellow-300 bg-white/90 dark:bg-gray-900/90 shadow p-6 w-64 flex flex-col items-center "
                >
                  <Image
                    src={deal.img}
                    alt={deal.label}
                    width={96}
                    height={96}
                    className="w-16 h-16 mb-2"
                  />
                  <span className="text-2xl font-bold text-pink-500 dark:text-yellow-200 mb-2">
                    {deal.label}
                  </span>
                  <p className="text-gray-700 dark:text-gray-200 mb-2 text-center">
                    {deal.desc}
                  </p>
                  <button className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-pink-500 dark:text-white hover:bg-blue-600 dark:hover:bg-pink-600 transition">
                    Grab Deal
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - carousel style, colored bg, no card */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 dark:text-yellow-200">
            What Our Customers Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Priya S.",
                img: "/file.svg",
                review:
                  "Amazing service and fast delivery! Highly recommend MyShop.",
              },
              {
                name: "Rahul K.",
                img: "/window.svg",
                review:
                  "Great deals on electronics. The headphones I bought are fantastic!",
              },
              {
                name: "Ayesha M.",
                img: "/vercel.svg",
                review: "Loved the fashion collection. Will shop again!",
              },
            ].map((cust, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 w-80 "
              >
                <p className="italic text-gray-700 dark:text-gray-200 mb-4">
                  “{cust.review}”
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={cust.img}
                    alt={cust.name}
                    width={96}
                    height={96}
                    className="w-10 h-10 rounded-full bg-white"
                  />
                  <span className="font-bold text-blue-700 dark:text-yellow-100">
                    {cust.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - modern, bold, center */}
        <section className="py-20 m-0 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-fade-left">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">
              Ready to Experience the Best Shopping?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join thousands of happy customers and get exclusive access to the
              latest products, deals, and more. Shop with confidence at MyShop!
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-full bg-white text-blue-700 font-bold text-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition-all duration-300 dark:bg-gray-900 dark:text-yellow-200 dark:hover:bg-gray-800 "
            >
              Get Started
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home1;
