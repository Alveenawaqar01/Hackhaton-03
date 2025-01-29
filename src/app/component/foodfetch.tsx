"use client"
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const ProductPage = async () => {
  const query = await client.fetch(`
    *[_type == "food"]{
      _id,
      name,
      price,
      discountPercentage,
      tags,
      category,
      description,
      available,
      "imageUrl": image.asset->url,
      slug
    }
  `);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {query.map((food: any) => (
          <div
            key={food._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={food.slug?.current ? `/food/${food.slug.current}` : '#'}>
              <div className="w-full h-[300px] flex justify-center items-center bg-gray-100">
                <Image
                  src={food.imageUrl || '/placeholder.png'}
                  alt={food.name || 'Food item'}
                  width={500}
                  height={500}
                  className="object-contain"
                  onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {food.name || 'Unnamed Item'}
              </h2>
              <p className="text-sm text-gray-600">
                {food.category || 'Category unavailable'}
              </p>
              <p className="mt-2 text-gray-700">
                {food.description || 'No description available'}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-green-600">
                  {food.price && !isNaN(food.price) ? `$${food.price.toFixed(2)}` : 'Price unavailable'}
                </p>
                {food.discountPercentage > 0 && (
                  <p className="text-sm text-red-500">
                    {food.discountPercentage}% Off
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {food.tags?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                disabled={!food.available}
                className={`mt-4 w-full px-4 py-2 text-white rounded ${
                  food.available
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-400 cursor-not-allowed'
                } transition`}
              >
                {food.available ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
