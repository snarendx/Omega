import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChess,
  FaChalkboardTeacher,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full py-4 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-24 sm:w-28 md:h-16 md:w-32 lg:h-20 lg:w-40"
              src="./logo.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center flex-1">
          <div className="ml-10 flex items-baseline border rounded-3xl space-x-6 px-4 py-2">
            <a
              href="#"
              className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 rounded-2xl text-sm md:text-md font-medium bg-green-200"
            >
              <FaChess className="mr-2" />
              Our Philosophy
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm md:text-md font-medium"
            >
              <FaChalkboardTeacher className="mr-2" />
              Our Process
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm md:text-md font-medium"
            >
              <FaHandshake className="mr-2" />
              Our Offer
            </a>
            <a
              href="#"
              className="flex items-center text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm md:text-md font-medium"
            >
              <FaUsers className="mr-2" />
              Team
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <img src="./omega.png" alt="Logo" />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            {isOpen ? (
              <FaTimes className="block h-6 w-6" />
            ) : (
              <FaBars className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Philosophy
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Process
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Offer
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
