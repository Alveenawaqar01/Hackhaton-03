import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";

// Define the structure of the food data
interface Food {
  _id: string;
  name: string;
  _type: string;
  image?: string; // Resolved image URL
  price: number;
  description?: string; // Added description field
  tags?: string[]; // Added tags field
}

// Define the params structure for the dynamic route
interface FoodPageProps {
  params: { slug: string };
}

// Fetch a specific food item based on the slug
async function getFood(slug: string): Promise<Food | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      "image": image.asset->url, // Resolved URL
      price,
      description,
      tags // Fetch tags
    }`,
    { slug }
  );
}

export default async function FoodPage({ params }: FoodPageProps) {
  const { slug } = params; // Extract slug from params
  const food = await getFood(slug); // Fetch food data

  if (!food) {
    console.error("Food item not found:", { slug });
    return (
      <div className="max-w-5xl mx-auto px-2 py-6 text-center">
        <h1 className="text-xl font-bold text-red-500">Food item not found.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-2 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <div className="aspect-square rounded-lg overflow-hidden shadow-md">
          {food.image ? (
            <Image
              src={food.image}
              alt={food.name || "Food Item"}
              width={350} // Reduced width
              height={350} // Reduced height
              className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center shadow-md rounded-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{food.name}</h1>
          {food.description && (
            <p className="text-base text-gray-600">{food.description}</p>
          )}
          {food.tags && food.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {food.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full shadow-sm hover:bg-blue-700 transition-all duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-2xl text-green-600 font-semibold">${food.price.toFixed(2)}</p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

