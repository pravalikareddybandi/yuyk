"use client"
import { useState } from "react";
import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";
import FilterComponent from "./components/property-filter/FilterPanel";

export default function Home() {
  const [isLeftActive, setIsLeftActive] = useState(true);
  return (
    <main className="max-w-[1500px] mx-auto px-6">
    <div className="inline-flex items-center bg-gray-200 rounded-full p-1 ml-[550px]  mb-4">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          isLeftActive
            ? 'bg-white text-gray-800 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => setIsLeftActive(true)}
      >
        Stay
      </button>
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          !isLeftActive
            ? 'bg-white text-gray-800 shadow'
            : 'text-gray-600 hover:bg-gray-300'
        }`}
        onClick={() => setIsLeftActive(false)}
      >
        Experience
      </button>
    </div>
      <div>
        <Categories />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <FilterComponent />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-5/5">
          <PropertyList />
        </div>
      </div>
    </main>
  );
}
//om sai ram.
