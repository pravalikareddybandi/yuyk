import React from 'react';
import { ChevronDown, X } from 'lucide-react';

const AirbnbLoginUI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Log in or sign up</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">Welcome to Airbnb</h1>
        
        <div className="mb-4">
          <div className="flex items-center justify-between border rounded-t-lg p-3 bg-gray-50">
            <span>Country/Region</span>
            <ChevronDown size={20} className="text-gray-500" />
          </div>
          <div className="border-x border-b rounded-b-lg p-3">
            <span className="text-gray-700">India (+91)</span>
          </div>
        </div>
        
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <p className="text-xs text-gray-500 mb-4">
          We'll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="underline">Privacy Policy</a>
        </p>
        
        <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-pink-700">
          Continue
        </button>
        
        <div className="relative mb-4">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
            or
          </span>
        </div>
        
        {['Facebook', 'Google', 'Apple', 'email'].map((provider) => (
          <button
            key={provider}
            className="w-full border border-gray-300 py-3 rounded-lg font-semibold mb-3 flex items-center justify-center"
          >
            <img src={`/api/placeholder/20/20`} alt={`${provider} logo`} className="mr-2" />
            Continue with {provider}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AirbnbLoginUI;