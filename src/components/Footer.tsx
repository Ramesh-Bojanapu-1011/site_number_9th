import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg px-4 py-10 caret-transparent  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Logo/Brand */}
        <div className="flex flex-col items-start">
          <Image
            src={"/logo.png"}
            alt="E-commerce Hero"
            width={150}
            height={150}
          />
          <span className="text-sm opacity-80 mb-4">
            Your one-stop shop for everything!
          </span>
          <span className="text-xs opacity-60">
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-yellow-200">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-yellow-200">Products</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Shop1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Shop2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Shop3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                Shop4
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-yellow-200">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@myshop.com"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                support@myshop.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-yellow-300 dark:hover:text-pink-400 transition"
              >
                +1 234 567 890
              </a>
            </li>
            <li>
              Address:{" "}
              <span className="opacity-80">123 Main St, City, Country</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
