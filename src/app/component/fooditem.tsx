import React from "react";

const FoodItem = () => {
  return (
    <div className="p-8 bg-black min-h-screen">
      {/* Main heading for the food items */}
      <h1 className="text-white text-center text-3xl mb-4 font-serif">Food Category</h1>
      <h2 className="text-yellow-600 text-center text-4xl sm:text-6xl mb-8 font-extrabold">Choose Food Items</h2>

      {/* Grid for the food items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Food Item 1 */}
        <div className="relative text-center">
          <img
            src="/plate2.png"
            alt="Food 1"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Food Item 2 */}
        <div className="relative text-center">
          <img
            src="/burger.jpeg"
            alt="Food 2"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Food Item 3 */}
        <div className="relative text-center">
          <img
            src="/plate1.png"
            alt="Food 3"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Food Item 4 */}
        <div className="relative text-center">
          <img
            src="/donut.png"
            alt="Food 4"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
