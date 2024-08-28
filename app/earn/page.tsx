"use client";
import React, { useState } from "react";
import { MapPin, Search, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

const dummyMapData = [
  { id: 1, location: "Avadi", rate: 3898, x: 20, y: 30 },
  { id: 2, location: "Chennai", rate: 3577, x: 50, y: 50 },
  { id: 3, location: "Guindy", rate: 3572, x: 70, y: 60 },
  { id: 4, location: "Velachery", rate: 6638, x: 60, y: 70 },
  { id: 5, location: "Sholinganallur", rate: 7037, x: 80, y: 80 },
];

const AirbnbEarningsCalculator = () => {
  const [nights, setNights] = useState(7);
  const [earnings, setEarnings] = useState(25837);
  const [nightly, setNightly] = useState(3691);
  const router = useRouter();

  const updateEarnings = (newNights) => {
    setNights(newNights);
    setEarnings(newNights * nightly);
  };

  return (
    <div className="font-sans max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <svg
          className="w-8 h-8 text-red-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* <path d="M22.5 2h-21C.7 2 0 2.7 0 3.5v17c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zm-8.3 15.2c0 .3-.2.5-.5.5h-3.4c-.3 0-.5-.2-.5-.5v-3.4c0-.3.2-.5.5-.5h3.4c.3 0 .5.2.5.5v3.4zm0-6.8c0 .3-.2.5-.5.5h-3.4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h3.4c.3 0 .5.2.5.5v3.4z" /> */}
        </svg>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold"
          onClick={() => {
            router.push("/property");
          }}
        >
          Airbnb Setup
        </button>
      </header>

      <main className="flex gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-pink-500">Airbnb it</span>
            <br />
            You could earn
          </h1>
          <p className="text-5xl font-bold mb-2">
            ₹{earnings.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4">
            {nights} nights at an estimated ₹{nightly.toLocaleString()} a night
          </p>

          <input
            type="range"
            min="1"
            max="30"
            value={nights}
            onChange={(e) => updateEarnings(parseInt(e.target.value))}
            className="w-full mb-4"
          />

          <a href="#" className="text-gray-600 underline">
            Learn how we estimate your earnings
          </a>

          <div className="mt-4 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Chennai"
              className="w-full pl-10 pr-4 py-2 border rounded-full"
              value="Chennai"
              readOnly
            />
            <p className="text-gray-500 mt-1 ml-2">Entire place • 2 bedrooms</p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow z-10">
            Explore rates near you
          </div>
          <div
            className="h-96 rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: "url('/api/placeholder/800/600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {dummyMapData.map((item) => (
              <div
                key={item.id}
                className="absolute"
                style={{ top: `${item.y}%`, left: `${item.x}%` }}
              >
                <div className="bg-white rounded-full px-2 py-1 shadow text-sm">
                  ₹{item.rate.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
            <button className="bg-white p-2 rounded-full shadow">
              <Plus size={16} />
            </button>
            <button className="bg-white p-2 rounded-full shadow">
              <Minus size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AirbnbEarningsCalculator;
