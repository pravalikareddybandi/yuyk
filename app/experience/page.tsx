"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

const DetailSection: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [availability, setAvailability] = useState<Date | null>(null);
  const [addOn, setAddOn] = useState<string>("");
  const [customRule, setCustomRule] = useState<string>("");
  const [rules, setRules] = useState({
    adults: false,
    pets: false,
    alcohol: false,
  });

  const handleRuleChange = (rule: keyof typeof rules) => {
    setRules((prevRules) => ({ ...prevRules, [rule]: !prevRules[rule] }));
  };

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      location,
      price,
      availability: availability ? availability.toISOString() : null,
      addOn,
      rules: {
        ...rules,
        custom: customRule,
      },
    };
    console.log("Form submitted:", formData);
    router.push("/experience/upload"); // Navigate after form submission
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white font-sans">
      <div className="flex items-center mb-6">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <h1 className="text-2xl font-bold">Detail Section</h1>
      </div>

      <div className="flex flex-row space-x-8">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
          {/* Location Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Sync Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-full shadow-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* Price Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border rounded-full shadow-sm"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Availability Date Picker */}
          <div className="relative">
            <DatePicker
              selected={availability}
              onChange={(date: Date | null) => setAvailability(date)}
              placeholderText="Create Your Availability"
              className="w-full pl-4 pr-10 py-3 border rounded-full shadow-sm"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Add-on Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Any add on for the experience"
              value={addOn}
              onChange={(e) => setAddOn(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border rounded-full shadow-sm"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          {/* Rules Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Add your rules</h2>
            <div className="space-y-2">
              {[
                {
                  key: "adults",
                  label: "Only Adults and 18 Above",
                  icon: "🔞",
                },
                { key: "pets", label: "Pets not allowed", icon: "🐾" },
                { key: "alcohol", label: "Alcohol not allowed", icon: "🍷" },
              ].map(({ key, label, icon }) => (
                <div key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rule-${key}`}
                    checked={rules[key as keyof typeof rules]}
                    onChange={() => handleRuleChange(key as keyof typeof rules)}
                    className="mr-2 h-5 w-5"
                  />
                  <label
                    htmlFor={`rule-${key}`}
                    className="text-sm flex items-center"
                  >
                    <span className="mr-2">{icon}</span>
                    {label}
                  </label>
                </div>
              ))}
              {/* Custom Rule Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type Your Own Rule"
                  value={customRule}
                  onChange={(e) => setCustomRule(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-full shadow-sm"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold"
              onClick={() => {
                router.push("/experience/upload");
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
        </form>

        {/* Image on the right */}
        <div className="w-1/2">
          <img
            src="/mapnav.png"
            alt="Travel illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
