import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function NewsManiaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    "Home",
    "Categories",
    "Trending",
    "AI Summary",
    "Discussions",
    "About Us",
  ];

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-4xl font-bold text-blue-600">
                News<span className="text-red-600">Mania</span>
              </span>
            </a>
          </div>

          {/* /* Navigation - Centered */}
          <nav className="hidden md:flex absolute left-[48%] px-1 transform -translate-x-1/2 space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => handleNavClick(item)}
                className={`${
                  activeItem === item ? "text-blue-600" : "text-black"
                } hover:text-blue-600 transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-full text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            {/* Login and Signup Buttons */}
            <div className="flex space-x-3">
              <button className="px-4 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition">
                Login
              </button>
              <button className="px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => handleNavClick(item)}
                className={`block py-2 text-base font-medium ${
                  activeItem === item ? "text-blue-600" : "text-black"
                } hover:text-blue-600`}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Login
              </button>
              <button className="w-full text-sm font-medium border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
