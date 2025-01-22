import React from "react";

const FoodImage = () => {
  return (
    <div className="p-8">
      {/* Flex container that adjusts layout based on screen size */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
        
        {/* Wrapper for left image with overlay text */}
        <div className="relative w-full sm:w-1/2 h-96 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <img 
            src="/plate1.png" 
            alt="Food 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Wrapper for right image with overlay text */}
        <div className="relative w-full sm:w-1/2 h-96 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <img 
            src="/food5.jpeg" 
            alt="Food 2" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default FoodImage;
