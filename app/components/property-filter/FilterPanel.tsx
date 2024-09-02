"use client";

import React, { useState } from "react";

const FilterComponent = () => {
  const [placeType, setPlaceType] = useState("any type");
  const [priceRange, setPriceRange] = useState([20, 37]);
  const [rooms, setRooms] = useState({
    bedrooms: "any",
    beds: "any",
    bathrooms: "any",
  });
  const [propertyTypes, setPropertyTypes] = useState({
    house: false,
    hotel: false,
    guesthouse: false,
    apartment: false,
  });
  const [amenities, setAmenities] = useState({
    wifi: false,
    kitchen: false,
    washer: false,
    dryer: false,
    parking: false,
    pool: false,
    gym: false,
    playground: false,
  });
  const [instantBook, setInstantBook] = useState(true);
  const [selfCheckIn, setSelfCheckIn] = useState(false);

  const handleRoomSelection = (type: string, value: string) => {
    setRooms((prev) => ({ ...prev, [type]: value }));
  };

  const handlePropertyTypeToggle = (type: string) => {
    setPropertyTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setAmenities((prev) => ({ ...prev, [amenity]: !prev[amenity] }));
  };

  return (
    <div className="w-[300px] bg-white p-4 rounded-lg shadow-2xl">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button className="text-red-500 text-sm">Clear All Filters</button>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Type of place</h3>
        <div className="flex flex-row space-x-1 items-center">
          {[
            { value: "any type", label: "Any Type" },
            { value: "room", label: "Room" },
            { value: "entire home", label: "Entire Home" },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center">
              <input
                type="radio"
                className="form-radio text-red-500 focus:ring-red-500 h-4 w-4"
                name="placeType"
                value={value}
                checked={placeType === value}
                onChange={() => setPlaceType(value)}
              />
              <span className="ml-2 text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex justify-between mt-2">
          <input
            type="number"
            className="w-20 p-1 border rounded"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value), priceRange[1]])
            }
          />
          <input
            type="number"
            className="w-20 p-1 border rounded"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Rooms and Beds</h3>
        {["Bedrooms", "Bed", "Bathrooms"].map((item) => (
          <div key={item} className="mb-2">
            <p className="text-sm mb-1">{item}</p>
            <div className="flex space-x-2">
              {["Any", "1", "2", "3", "4", "5", "6+"].map((num) => (
                <button
                  key={num}
                  className={`px-2 py-1 text-sm rounded-full ${
                    rooms[item.toLowerCase()] === num.toLowerCase()
                      ? "bg-black text-white"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                  onClick={() =>
                    handleRoomSelection(item.toLowerCase(), num.toLowerCase())
                  }
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Property Type</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: "House", icon: "🏠" },
            { name: "Hotel", icon: "🏨" },
            { name: "Guesthouse", icon: "🏡" },
            { name: "Apartment", icon: "🏢" },
          ].map(({ name, icon }) => (
            <button
              key={name}
              className={`flex items-center space-x-2 p-2 border rounded ${
                propertyTypes[name.toLowerCase()]
                  ? "border-black"
                  : "border-gray-300"
              }`}
              onClick={() => handlePropertyTypeToggle(name.toLowerCase())}
            >
              <span className="text-xl">{icon}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            "Wifi",
            "Kitchen",
            "Washer",
            "Dryer",
            "Parking",
            "Swimming Pool",
            "Gym",
            "Playground",
          ].map((amenity) => (
            <label key={amenity} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-black rounded border-gray-300"
                checked={amenities[amenity.toLowerCase().replace(" ", "")]}
                onChange={() =>
                  handleAmenityToggle(amenity.toLowerCase().replace(" ", ""))
                }
              />
              <span className="text-sm">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Booking Options</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Instant Book</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                instantBook ? "bg-black" : "bg-gray-200"
              }`}
              onClick={() => setInstantBook(!instantBook)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  instantBook ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Self Check-in</span>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                selfCheckIn ? "bg-black" : "bg-gray-200"
              }`}
              onClick={() => setSelfCheckIn(!selfCheckIn)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  selfCheckIn ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
