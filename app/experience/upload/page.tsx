"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();

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
    <div className="p-4 max-w-5xl mx-auto bg-white font-sans">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full mt-[55px] max-h-[1000px] max-w-[1000px]">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Upload Image
        </h2>
        <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
          {image ? (
            <img
              src={"/imge.png"}
              alt="Uploaded"
              className="mx-auto mb-4 h-48 w-full object-cover rounded-md"
            />
          ) : (
            <div>
              <img
                src={"/imge.png"}
                alt="Uploaded"
                className="mx-auto mb-4 h-42 w-48 object-cover rounded-md"
              />
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
      </div>
      <div className="flex justify-between max-w-[1000px] w-full mt-6">
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold"
          onClick={() => {
            router.push("/experience");
          }}
        >
          Previous
          <svg
            className="inline-block ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold"
          onClick={() => {
            router.push("/experience/summary");
          }}
        >
          Next
          <svg
            className="inline-block ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
