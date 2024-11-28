"use client";
import * as React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-slate-100">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1215px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f43ffdfd27e07697827c2dd20a8e13b24bbc36b967389f50e6ca565185d0745?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            className="w-[75px] object-contain"
            alt="Logo icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e032e9a0a1deb74a3719f292846278c263a88d25b0ef14bd72dd44ce917bc5?placeholderIfAbsent=true&apiKey=afe336cc16b84f5e88f05eaaebfef4fd"
            className="w-[120px] object-contain"
            alt="Logo text"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-slate-100 lg:static lg:flex lg:items-center lg:justify-center lg:gap-10`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-5 p-4 lg:p-0">
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                Feature
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-900 hover:text-green-500">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2 text-green-500 bg-transparent border border-green-500 rounded-md hover:bg-green-50">
            Login
          </button>
          <button className="px-5 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
            Signup
          </button>
        </div>
      </div>

      {/* Mobile Buttons */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden px-6 py-4 flex justify-center gap-3.5`}
      >
        <button className="px-5 py-2 text-green-500 bg-slate-100 border border-green-500 rounded-md">
          Login
        </button>
        <button className="px-5 py-2 text-white bg-green-500 rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
}
        