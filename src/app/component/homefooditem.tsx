import React from 'react';

const FoodItem = () => {
  return (
    <div className="p-8 bg-white">
      {/* Main heading for the food items */}
      <h1 className="text-black text-center text-4xl sm:text-6xl mb-4 font-extrabold hover:text-red-600">Food Category</h1>
      <h2 className="text-red-700 text-center text-xl sm:text-2xl mb-8 font-semibold">
        We have tasty and amazing cupcake categories Enjoy eat and share with your friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Food Item 1 */}
        <div className="relative text-center group">
          <img 
            src="/cupcake.jpeg" 
            alt="Red velvet cupcake" 
            className="w-full h-64 sm:h-80 lg:h-96 rounded-lg object-cover shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <div className="mt-4 text-black font-semibold text-xl">Red velvet</div>
          <h1 className='text-2xl'>30</h1>
        </div>

        {/* Food Item 2 */}
        <div className="relative text-center group">
          <img 
            src="/cupcake.jpeg" 
            alt="Vanilla cupcake" 
            className="w-full h-64 sm:h-80 lg:h-96 rounded-lg object-cover shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <div className="mt-4 text-black font-semibold text-xl">Vanilla</div>
          <h1 className='text-2xl'>10</h1>
        </div>

        {/* Food Item 3 */}
        <div className="relative text-center group">
          <img 
            src="/cupcake.jpeg" 
            alt="Chocolate cupcake" 
            className="w-full h-64 sm:h-80 lg:h-96 rounded-lg object-cover shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <div className="mt-4 text-black font-semibold text-xl">Chocolate</div>
          <h1 className='text-2xl'>25</h1>
        </div>

        {/* Food Item 4 */}
        <div className="relative text-center group">
          <img 
            src="/cupcake.jpeg" 
            alt="Blueberry cupcake" 
            className="w-full h-64 sm:h-80 lg:h-96 rounded-lg object-cover shadow-lg transform transition duration-300 group-hover:scale-105"
          />
          <div className="mt-4 text-black font-semibold text-xl">Blue berry</div>
          <h1 className='text-2xl'>15</h1>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
