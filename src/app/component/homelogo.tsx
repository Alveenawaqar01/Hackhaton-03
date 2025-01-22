import React from 'react';

const CompanyLogos = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-green-950 mb-8">
          WORK WITH BEST PLACE
        </h2>

        {/* Logos Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {/* Logo 1 */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <img
              src="/logo1.png" // Replace with your logo image path
              alt="Logo 1"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <img
              src="/logo2.png" // Replace with your logo image path
              alt="Logo 2"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <img
              src="/logo3.png" // Replace with your logo image path
              alt="Logo 3"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <img
              src="/logo4.png" // Replace with your logo image path
              alt="Logo 4"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
            <img
              src="/logo5.png" // Replace with your logo image path
              alt="Logo 5"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
