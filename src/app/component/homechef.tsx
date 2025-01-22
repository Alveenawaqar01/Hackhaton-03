import React from 'react';

const MeetOurChefs = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          Meet Our Chefs
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Chef Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img
              src="/chef2.png" // Replace with the correct image path
              alt="Chef 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Chef John Doe</h3>
              <p className="text-gray-600 mt-2">Expert in French cuisine</p>
            </div>
          </div>

          {/* Chef Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img
              src="/chef2.png" // Replace with the correct image path
              alt="Chef 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Chef Maria Smith</h3>
              <p className="text-gray-600 mt-2">Master of Italian dishes</p>
            </div>
          </div>

          {/* Chef Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img
              src="/chef2.png" // Replace with the correct image path
              alt="Chef 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Chef Alex Brown</h3>
              <p className="text-gray-600 mt-2">Specializes in Asian fusion</p>
            </div>
          </div>

          {/* Chef Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img
              src="/chef2.png" // Replace with the correct image path
              alt="Chef 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Chef Emily Davis</h3>
              <p className="text-gray-600 mt-2">Expert in desserts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurChefs;
