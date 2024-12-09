// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/Logotran.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Zmena z `fixed` na `sticky`
    <nav className="bg-gray-800 sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo a názov */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-white text-2xl font-bold"
            >
              <img src={LogoImage} alt="Logo" className="h-10 w-10 mr-2" />
              Webové Technológie
            </Link>
          </div>
          {/* Hamburger menu pre mobily */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Odkazy pre desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/zaluby"
              className="text-gray-300 hover:text-white text-lg"
            >
              O nás
            </Link>
            <Link
              to="/zmeny"
              className="text-gray-300 hover:text-white text-lg"
            >
              Zmeny
            </Link>
            <Link
              to="/register"
              className="text-gray-300 hover:text-white text-lg"
            >
              Registrácia
            </Link>
            <Link
              to="/users"
              className="text-gray-300 hover:text-white text-lg"
            >
              Výpis
            </Link>
          </div>
        </div>
      </div>
      {/* Mobilné menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-gray-800 px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/zaluby"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              O nás
            </Link>
            <Link
              to="/zmeny"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Zmeny
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Registrácia
            </Link>
            <Link
              to="/users"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Výpis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
