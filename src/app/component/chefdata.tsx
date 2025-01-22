

import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

const ChefPage = async () => {
  const chefs = await client.fetch(`
    *[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      "image": image.asset->url,
      description,
      available
    }
  `);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Meet Our Chefs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef:any, index:any) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="w-full h-[300px] relative bg-gray-200">
              <Image
                src={chef.image || '/placeholder.png'}
                alt={chef.name || 'Chef'}
                layout="fill"
                objectFit="cover"
                objectPosition="center" // Ensures the face is always centered
                className="w-full h-full border-b-4 border-gray-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{chef.name}</h2>
              <p className="text-center text-gray-500 text-sm mb-4">{chef.position}</p>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
                {chef.description}
              </p>
              <div className="text-sm text-gray-600 mb-4 space-y-1">
                <p><strong>Specialty:</strong> {chef.specialty}</p>
                <p><strong>Experience:</strong> {chef.experience} years</p>
              </div>
              <button
                disabled={!chef.available}
                className={`block w-full py-2 text-center text-white rounded-xl font-semibold ${
                  chef.available
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-400 cursor-not-allowed'
                } transition`}
              >
                {chef.available ? 'Available' : 'Not Available'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefPage;
