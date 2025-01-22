import React from 'react';
import { IoShareSocial } from 'react-icons/io5';

const Blog = () => {
  return (
    <div className="bg-white h-auto py-10 "> {/* White container with flexible height and padding */}
      <h1 className="text-center text-black text-4xl font-extrabold mb-8">Latest News Our Blogs</h1> {/* Heading above the blogs */}
      <div className="flex flex-wrap justify-center gap-6"> {/* Adjusted gap between cards */}
        {/* Blog Card 1 */}
        <div className="relative w-80 border rounded-lg overflow-hidden shadow-lg bg-white group">
          <div className="relative">
            <img src="/cake.jpeg" alt="Blog 1" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <IoShareSocial className="text-white text-3xl cursor-pointer"/>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-green-600">10 February 2022</h2>
            <p className="text-black font-extrabold">Discover the world of food one recipe at a time of food photography and styling food</p>
            <h1 className="text-black pt-6 hover:text-red-500 cursor-pointer">Learn More</h1>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="relative w-80 border rounded-lg overflow-hidden shadow-lg bg-white group">
          <div className="relative">
            <img src="/cake.jpeg" alt="Blog 2" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <IoShareSocial className="text-white text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-green-600">02 February 2022</h2>
            <p className="text-black font-extrabold">Healthy delicious and easy to follow recipes Taste the world one dish at a time</p>
            <h1 className="text-black pt-6 hover:text-red-500 cursor-pointer">Learn More</h1>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="relative w-80 border rounded-lg overflow-hidden shadow-lg bg-white group">
          <div className="relative">
            <img src="/cake.jpeg" alt="Blog 3" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <IoShareSocial className="text-white text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-green-700">18 February 2022</h2>
            <p className="text-black font-extrabold">Explore the worlds culinary delights through our travel experiences Learn the art</p>
            <h1 className="text-black pt-6 hover:text-red-500 cursor-pointer">Learn More</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
