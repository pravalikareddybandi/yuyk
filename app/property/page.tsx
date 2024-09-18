"use client";
import React, { useState } from "react";
import { Home, DoorOpen, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const AccommodationTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  const accommodationTypes = [
    {
      id: "entire",
      title: "An entire place",
      description: "Guests have the whole place to themselves.",
      icon: Home,
    },
    {
      id: "room",
      title: "A room",
      description:
        "Guests have their own room in a home, plus access to shared spaces.",
      icon: DoorOpen,
    },
    {
      id: "shared",
      title: "A shared room",
      description:
        "Guests sleep in a room or common area that may be shared with you or others.",
      icon: Users,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        What type of place will guests have?
      </h2>
      <div className="space-y-4">
        {accommodationTypes.map((type) => (
          <div
            key={type.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedType === type.id
                ? "border-black shadow-md"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{type.title}</h3>
                <p className="text-sm text-gray-500">{type.description}</p>
              </div>
              <type.icon className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Back
        </button>
        <button
          className={`px-4 py-2 rounded text-white ${
            selectedType
              ? "bg-black hover:bg-gray-800"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={() => {
            router.push("/property/setup");
          }}
          disabled={!selectedType}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AccommodationTypeSelector;
