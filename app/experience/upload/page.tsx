"use client";
import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full mt-[55px] max-h-[1000px] max-w-[1000px]">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Upload Image
        </h2>
        <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="mx-auto mb-4 h-48 w-full object-cover rounded-md"
            />
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-300 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="text-gray-500 mb-4">
                Upload your image that related to your service
              </p>
            </div>
          )}
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-block px-4 py-2 bg-black text-white rounded-md"
          >
            Upload From Your Device
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
