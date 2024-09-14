"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ExperienceForm = () => {
  const router = useRouter();
  return (
    <div className="p-4 max-w-5xl mx-auto bg-white font-sans">
      {" "}
      <div className="flex items-center mb-4">
        <ChevronLeft className="w-6 h-6 mr-2" />
        <span className="text-xl font-semibold"></span>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <select className="w-full p-2 mb-4 border rounded-md">
            <option value="">Experience Type</option>
          </select>

          <select className="w-full p-2 mb-4 border rounded-md">
            <option value="">Experience Category</option>
          </select>

          <input
            type="text"
            placeholder="Experience Name"
            className="w-full p-2 mb-4 border rounded-md"
          />

          <textarea
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded-md h-32"
          ></textarea>
        </div>

        <div className="w-1/2">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-full flex items-center justify-center">
            <img
              src="/mapnav.png"
              alt="Experience illustration"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span>I have company</span>
        </label>

        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={() => {
            router.push("/experience");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
