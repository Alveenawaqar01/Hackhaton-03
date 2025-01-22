import React from 'react';

const HomeItems = () => {
  const menuItems = [
    { id: 1, name: 'Alder Grilled Chinook Salmon', description: 'Delicious cheesy pizza with your choice of toppings', price: '$12.99' },
    { id: 2, name: 'Garlic Butter chicken salmon', description: 'Juicy beef burger with fresh veggies', price: '$8.99' },
    { id: 3, name: 'Spegetti chicken butter food ', description: 'Creamy pasta with garlic and herbs', price: '$10.49' },
    { id: 4, name: 'Sushi Grilled Chinook Salmon', description: 'Fresh sushi rolls with wasabi and soy sauce', price: '$15.99' },
    { id: 5, name: 'Salad Grilled Chinook Salmon', description: 'Crisp mixed salad with vinaigrette dressing', price: '$6.49' },
    { id: 6, name: 'Tacos Grilled Chinook Salmon', description: 'Soft tortillas with spicy fillings', price: '$9.99' },
    { id: 7, name: 'Steak Grilled Chinook Salmon', description: 'Grilled steak with mashed potatoes', price: '$18.99' },
    { id: 8, name: 'Ice Cream Grilled Chinook Salmon', description: 'Cool and creamy ice cream with sprinkles', price: '$5.99' }
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-800 mb-4">Our Food Menu</h2>
      
      {/* Paragraph with spacing */}
      <p className="mx-4 mb-8 text-lg text-gray-600 text-center">
        Innovative Recipes We constantly experiment with new flavors and techniques to create unique dishes
      </p>
      
      {/* Flexbox layout for items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 my-2">{item.description}</p>
            <p className="font-semibold text-red-500">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Button at the bottom */}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-green-600 text-white font-semibold hover:bg-yellow-400 transition-colors">
          See More Items
        </button>
      </div>
    </div>
  );
};

export default HomeItems;
