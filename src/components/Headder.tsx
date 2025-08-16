import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";

type Props = {};

const Headder = (props: Props) => {
  const [userInitials, setUserInitials] = React.useState(""); // Default initials
  React.useEffect(() => {
    // Runs only in the browser
    const userData = localStorage.getItem("users");
    // console.log("User Data:", userData); // Debugging line

    if (userData) {
      try {
        const user = JSON.parse(userData);
        console.log("Parsed User Data:", user); // Debugging line
        const firstInitial = user[0].firstName?.[0]?.toUpperCase() || "R";
        const lastInitial = user[0].lastName?.[0]?.toUpperCase() || "B";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);
  const [desktopHomeOpen, setDesktopHomeOpen] = React.useState(false);
  const [desktopShopOpen, setDesktopShopOpen] = React.useState(false);
  const desktopHomeRef = React.useRef<HTMLDivElement>(null);
  const desktopShopRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopHomeOpen &&
        desktopHomeRef.current &&
        !desktopHomeRef.current.contains(event.target as Node)
      ) {
        setDesktopHomeOpen(false);
      }
      if (
        desktopShopOpen &&
        desktopShopRef.current &&
        !desktopShopRef.current.contains(event.target as Node)
      ) {
        setDesktopShopOpen(false);
      }
    }
    if (desktopHomeOpen || desktopShopOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopHomeOpen, desktopShopOpen]);
  // Mobile dropdown state and refs
  const [mobileHomeOpen, setMobileHomeOpen] = React.useState(false);
  const [mobileShopOpen, setMobileShopOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const mobileHomeRef = React.useRef<HTMLDivElement>(null);
  const mobileShopRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuBtnRef = React.useRef<HTMLButtonElement>(null);

  // Click outside to close for mobile menu and dropdowns
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Dropdowns
      if (
        mobileHomeOpen &&
        mobileHomeRef.current &&
        !mobileHomeRef.current.contains(event.target as Node)
      ) {
        setMobileHomeOpen(false);
      }
      if (
        mobileShopOpen &&
        mobileShopRef.current &&
        !mobileShopRef.current.contains(event.target as Node)
      ) {
        setMobileShopOpen(false);
      }
      // Mobile menu
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuBtnRef.current &&
        !mobileMenuBtnRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.classList.contains("hidden"))
          menu.classList.add("hidden");
      }
    }
    if (mobileHomeOpen || mobileShopOpen || mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileHomeOpen, mobileShopOpen, mobileMenuOpen]);
  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg px-4 py-3 flex items-center justify-between sticky caret-transparent top-0 z-50">
      <div className="flex items-center gap-2">
        <Link href="/home1">
          <Image
            src={"/logo.png"}
            alt="E-commerce Hero"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 items-center">
        <div className="relative" ref={desktopHomeRef}>
          <button
            className="flex items-center gap-1 text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition focus:outline-none"
            onClick={() => setDesktopHomeOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopHomeOpen}
          >
            Home
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {desktopHomeOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              <Link
                href="home1"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Home1
              </Link>
              <Link
                href="home2"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Home2
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/about-us"
          className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
        >
          About Us
        </Link>
        <div className="relative" ref={desktopShopRef}>
          <button
            className="flex items-center gap-1 text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition focus:outline-none"
            onClick={() => setDesktopShopOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={desktopShopOpen}
          >
            Products
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {desktopShopOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl z-50 border border-blue-200 dark:border-pink-900">
              <Link
                href="/products"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                All Products
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop2
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop3
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop4
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contact-us"
          className="text-white hover:text-yellow-300 dark:text-yellow-200 dark:hover:text-pink-400 transition font-semibold"
        >
          Contact Us
        </Link>
      </nav>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          ref={mobileMenuBtnRef}
          type="button"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          aria-label="Open menu"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            if (menu) menu.classList.toggle("hidden");
            setMobileMenuOpen((open) => !open);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className="hidden absolute top-16 left-0 w-full bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl   gap-4 px-4 py-3 md:hidden z-50 border-t-4 border-pink-400 dark:border-pink-900"
      >
        <div className="relative" ref={mobileHomeRef}>
          <button
            className="w-full flex items-center justify-between text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition focus:outline-none font-semibold"
            onClick={() => setMobileHomeOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={mobileHomeOpen}
          >
            Home
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileHomeOpen && (
            <div className="ml-4 mt-1 flex flex-col bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl border border-blue-200 dark:border-pink-900">
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Home1
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Home2
              </Link>
            </div>
          )}
        </div>
        <Link
          href="/about-us"
          className="block text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition font-semibold"
        >
          About Us
        </Link>
        <div className="relative" ref={mobileShopRef}>
          <button
            className="w-full flex items-center justify-between text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition focus:outline-none font-semibold"
            onClick={() => setMobileShopOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={mobileShopOpen}
          >
            Products
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileShopOpen && (
            <div className="ml-4 mt-1 flex flex-col bg-gradient-to-br from-white via-blue-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl border border-blue-200 dark:border-pink-900">
              <Link
                href="/products"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                All Products
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop2
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop3
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-blue-700 dark:text-pink-200 hover:bg-blue-200 dark:hover:bg-pink-900 rounded transition"
              >
                Shop4
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contact-us"
          className="block text-blue-700 dark:text-pink-200 py-2 hover:text-yellow-600 dark:hover:text-pink-400 transition font-semibold"
        >
          Contact Us
        </Link>
        <div className="flex gap-2.5 items-center mt-4 border-t pt-4">
          <ModeToggle />
          <Avatar className="w-10 h-10">
            <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:flex hidden gap-2.5 items-center">
        <ModeToggle />
        <Avatar className="w-10 h-10">
          <AvatarFallback>{userInitials || "RB"}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Headder;
