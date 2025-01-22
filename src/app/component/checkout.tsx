// pages/checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping Address */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="text"
                placeholder="Company (optional)"
                className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <select
                className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>Choose country</option>
              </select>
              <select
                className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>Choose city</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Address 1"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="text"
                placeholder="Address 2 (optional)"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              {/* Product List */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center border-b pb-3 mb-3"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src="/burger.png"
                      alt="Chicken Tikka Kabab"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium">Chicken Tikka Kabab</h4>
                      <p className="text-sm text-gray-500">150 gm net</p>
                    </div>
                  </div>
                  <p className="font-semibold">5</p>
                </div>
              ))}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>130</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>25</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>547</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>4327</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <button
                className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
              >
                Place an order
              </button>
              <button
                className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300"
              >
                Back to cart
              </button>
            </div>
          </div>
        </div>

        {/* Billing Address Checkbox */}
        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-700">Same as shipping address</span>
          </label>
          <button
            className="block mt-4 w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
          >
            Proceed to shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;