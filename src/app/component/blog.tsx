import React from 'react';

const Blog = () => {
  return (
    <div className="bg-black h-auto py-10 ">
      {/* Header */}
      <h1 className="text-center text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-8 px-4">
        Latest News Our Blogs
      </h1>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Blog Card 1 */}
        <div className="w-full sm:w-80 border rounded-lg overflow-hidden shadow-lg bg-black">
          <img
            src="/burger01.jpeg"
            alt="Blog 1"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-500">
              10 February 2022
            </h2>
            <p className="text-white font-extrabold text-sm sm:text-base">
              Discover the world of food one recipe at a time of food photography and styling food
            </p>
            <h1 className="text-white pt-4 hover:text-red-500 text-sm sm:text-base">
              Learn More
            </h1>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="w-full sm:w-80 border rounded-lg overflow-hidden shadow-lg bg-black">
          <img
            src="/pizza.jpeg"
            alt="Blog 2"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-500">
              02 February 2022
            </h2>
            <p className="text-white font-extrabold text-sm sm:text-base">
              Healthy delicious and easy to follow recipes Taste the world one dish at a time
            </p>
            <h1 className="text-white pt-4 hover:text-red-500 text-sm sm:text-base">
              Learn More
            </h1>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="w-full sm:w-80 border rounded-lg overflow-hidden shadow-lg bg-black">
          <img
            src="/lemon.jpeg"
            alt="Blog 3"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-500">
              18 February 2022
            </h2>
            <p className="text-white font-extrabold text-sm sm:text-base">
              Explore the worlds culinary delights through our travel experiences Learn the art
            </p>
            <h1 className="text-white pt-4 hover:text-red-500 text-sm sm:text-base">
              Learn More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
