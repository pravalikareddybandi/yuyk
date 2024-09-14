"use client";
import React, { useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const ExperienceForm = () => {
  const [experience, setExperience] = useState({
    experienceType: "Entertainment",
    activityType: "Swimming",
    category: "Sports",
    experienceName: "Beach Swimming",
    description: "Experience the thrill of swimming in the open sea!",
    location: "Chennai",
    price: 300,
    dateFrom: "2023-08-12",
    dateTo: "2023-08-24",
    addOnService: "Dress",
    images: ["/beach_1.jpg", "/beach_1.jpg", "/beach_1.jpg", "/beach_1.jpg"],
    rules: ["Pet not allowed", "Alcohol not allowed"],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <h2 className="text-xl font-bold mb-4">Header Section</h2>
            <div className="ml-[140px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-file-pen-line"
              >
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                <path d="M8 18h1" />
              </svg>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              <label className="block mb-2">Experience type</label>
              <input
                type="text"
                name="experienceType"
                value={experience.experienceType}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              <label className="block mb-2">Activity type</label>
              <input
                type="text"
                name="activityType"
                value={experience.activityType}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              <label className="block mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={experience.category}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
              <label className="block mb-2">Experience name</label>
              <input
                type="text"
                name="experienceName"
                value={experience.experienceName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Detail Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <h2 className="text-xl font-bold mb-4">Detail Section</h2>
            <div className="ml-[140px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-file-pen-line"
              >
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                <path d="M8 18h1" />
              </svg>{" "}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" />
              <input
                type="number"
                name="price"
                value={experience.price}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
              <span className="ml-2">/hr</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" />
              <input
                type="date"
                name="dateFrom"
                value={experience.dateFrom}
                onChange={handleChange}
                className="w-full border rounded p-2 mr-2"
              />
              <input
                type="date"
                name="dateTo"
                value={experience.dateTo}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-2">Add on service</label>
              <input
                type="text"
                name="addOnService"
                value={experience.addOnService}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Image Section</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {experience.images.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Rules Section */}
      <div className="mb-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Rules Section</h2>
        <div className="space-y-2">
          {experience.rules.map((rule, index) => (
            <p key={index}>⛔ {rule}</p>
          ))}
        </div>
      </div>

      {/* Publish Button */}
      <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
        Publish
      </button>
    </div>
  );
};

export default ExperienceForm;
