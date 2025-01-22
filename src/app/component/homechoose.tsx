import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { FaSignal } from 'react-icons/fa';
import { PiHamburger, PiVan } from 'react-icons/pi';

const Menu = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Section - Image */}
        <div className="flex flex-col space-y-6">
          {/* Smaller images below the main image */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/salad.jpeg" // Replace with the correct image path
              alt="Small Food 1"
              className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
            />
            <img
              src="/mushroom.jpeg" // Replace with the correct image path
              alt="Small Food 2"
              className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Section - Text content */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-2xl font-extrabold text-green-900 leading-tight">
            <span className="text-black">Why </span>Choose Us
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-500">
            <span className="text-yellow-500">Why </span>We are the best
          </h2>

          <p className="text-sm sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Expertly Prepared Our skilled chefs prepare each dish with care and precision
             Unique and Flavorful We constantly experiment with new flavors
            Our chefs are passionate about bringing you authentic flavors from around the world
            Exceptional Service
          </p>

          {/* List of buttons arranged in two rows */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {/* Top row buttons */}
            <button className="flex items-center justify-start space-x-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-xl shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-xs sm:text-base">
              <span className="text-xl sm:text-2xl">
                <PiHamburger />
              </span>
              <span>Fast Food</span>
            </button>
            <button className="flex items-center justify-start space-x-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-xl shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-xs sm:text-base">
              <span className="text-xl sm:text-2xl">
                <PiVan />
              </span>
              <span>Lunch</span>
            </button>

            {/* Bottom row buttons */}
            <button className="flex items-center justify-start space-x-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-xl shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-xs sm:text-base">
              <span className="text-xl sm:text-2xl">
                <CiTimer />
              </span>
              <span>Dinner</span>
            </button>
            <button className="flex items-center justify-start space-x-4 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-xl shadow-md hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-xs sm:text-base">
              <span className="text-xl sm:text-2xl">
                <FaSignal />
              </span>
              <span>Drinks</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
