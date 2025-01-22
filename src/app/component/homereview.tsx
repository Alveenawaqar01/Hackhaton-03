import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const Review = () => {
  return (
    <div className="flex justify-center items-center bg-green-100 py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
        <div className="text-center">
          <h2 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl pt-2">Client Review</h2>
          <h2 className="text-black font-extralight text-2xl sm:text-2xl pt-2">Highly recommend</h2>
          
          <p className="text-black mt-2 text-sm sm:text-base md:text-lg">
            This product was amazing The quality and performance exceeded my expectations
            I have used many services like this but this one is the best reliable responsive and affordable
            They provided excellent service and delivered on their promises Im satisfied with the results

          </p>
          
          
        </div>

        <div className="flex justify-center mb-4 mt-4 pt-2">
          {/* 5-star Rating */}
          <span className="text-yellow-400 text-2xl sm:text-3xl"><IoIosStar /></span>
          <span className="text-yellow-400 text-2xl sm:text-3xl"><IoIosStar /></span>
          <span className="text-yellow-400 text-2xl sm:text-3xl"><IoIosStar /></span>
          <span className="text-yellow-400 text-2xl sm:text-3xl"><IoIosStar /></span>
          <span className="text-yellow-400 text-2xl sm:text-3xl"><IoIosStarHalf /></span>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-center">Alamin Hassan</h2>
        <h2 className="font-semibold text-center text-red-600 text-sm sm:text-lg">Food Specialist</h2>
      </div>
    </div>
  );
};

export default Review;
