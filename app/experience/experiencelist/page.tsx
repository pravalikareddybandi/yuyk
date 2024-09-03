import React from "react";

const ExperienceForm = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 mx-auto flex w-full max-w-6xl">
        <div className="flex-grow">
          <button className="text-gray-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m0 0H4.5m4.5 0h6m4.5 0H15m-3 7.5V21m0-3.5v-2.25M7.5 15v-2.25M16.5 15v-2.25M7.5 9V6.75m9 2.25V6.75M12 2.25v1.5m0 15.75v1.5M4.5 12v-3m15 3v-3m-15 0v3m15-3v3"
              />
            </svg>
          </button>

          <div className="space-y-4">
            <select className="block w-full px-4 py-2 border border-gray-300 rounded-md">
              <option>Type 1</option>
              <option>Type 2</option>
            </select>

            <select className="block w-full px-4 py-2 border border-gray-300 rounded-md">
              <option>Category 1</option>
              <option>Category 2</option>
            </select>

            <input
              type="text"
              placeholder="Experience Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />

            <textarea
              placeholder="Description"
              rows="4"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>

            <label className="inline-flex items-center mt-4">
              <input type="checkbox" className="form-checkbox text-gray-500" />
              <span className="ml-2 text-gray-700">I have company</span>
            </label>
          </div>
        </div>

        <div className="flex-none ml-8">
          <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
            300 x 300
          </div>
        </div>
      </div>
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-md mx-auto">
        Next
      </button>
    </div>
  );
};

export default ExperienceForm;
