import React from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-700">Create Your Account</h2>
        <p className="mt-1 text-sm text-center text-gray-500">
          Join us and Enjoy you Food
        </p>

        {/* Form */}
        <form className="mt-4 space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600" aria-placeholder="name">
              Full Name
            </label>
            <div className="relative">
              <AiOutlineUser className="absolute top-3 left-3 text-gray-400 text-lg" />
              <input
                type="text"
                id="name"
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600" aria-placeholder="email">
              Email Address
            </label>
            <div className="relative">
              <AiOutlineMail className="absolute top-3 left-3 text-gray-400 text-lg" />
              <input
                type="email"
                id="email"
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600" aria-placeholder="password">
              Password
            </label>
            <div className="relative">
              <AiOutlineLock className="absolute top-3 left-3 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Create a password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center mt-4">
          <div className="w-full h-px bg-gray-300"></div>
          <p className="px-4 text-sm text-gray-500">OR</p>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="mt-3 space-y-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 border rounded-lg hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500 mr-2 text-lg" />
            Continue with Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 border rounded-lg hover:bg-gray-100"
          >
            <FaApple className="text-black mr-2 text-lg" />
            Continue with Apple
          </button>
        </div>

        {/* Footer */}
        <p className="mt-3 text-sm text-center text-gray-500">
          Already have an account{' '}
          <a href="#" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
