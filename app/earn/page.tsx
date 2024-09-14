"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MyComponent: React.FC = () => {
  const [nights, setNights] = useState<number>(1); // Controls nights and count
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pricePerNight, setPricePerNight] = useState<number>(3000); // Ensures correct number type
  const router = useRouter();

  const data = [
    { id: 1, name: "Mount Hope", description: "Entire place · 2 bedrooms" },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNightsChange = (newNights: number) => {
    if (newNights > 0) {
      setNights(newNights);
    }
  };

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="flex gap-10">
        {/* Stay and Experience Cards */}
        <div
          onClick={() => {
            router.push("/property");
          }}
          className="w-[300px] h-[280px] mt-[-50px] text-[32px] font-medium bg-white border border-[#BAB4B4] shadow-lg rounded-[24px] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Stay
        </div>

        <div
          onClick={() => {
            router.push("/experience/experiencelist");
          }}
          className="w-[300px] h-[280px] mt-[-50px] text-[32px] font-medium bg-white border border-[#BAB4B4] shadow-lg rounded-[24px] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Experience
        </div>

        {/* Earnings Box */}
        <div className="w-[557px] h-[550px] mb-12 bg-white border border-[#BAB4B4] mt-[-144px] shadow-lg rounded-[24px] p-8 flex flex-col items-center">
          <div className="text-[40px] font-semibold text-[#3C3636] mb-2">
            YUYK it.
          </div>
          <div className="text-[32px] font-medium text-[#3C3636] mb-8">
            You could earn
          </div>
          <div className="text-[96px] font-medium text-[#3C3636] mb-4">
            ₹ {pricePerNight * nights}
          </div>
          <div className="flex items-center mb-8">
            <button
              className="px-4 py-2 bg-[#3C3636] text-white rounded mr-4"
              onClick={() => handleNightsChange(nights + 1)}
            >
              Increment Nights
            </button>
            <div className="text-[24px] text-[#222222]">
              {nights} night{nights > 1 ? "s" : ""}
            </div>
          </div>
          <div className="text-[24px] text-[#222222] mb-8">
            at an estimated ₹{pricePerNight} a night
          </div>

          {/* Slider */}
          <input
            type="range"
            min="1000"
            max="5000"
            step="100"
            value={pricePerNight}
            onChange={(e) => setPricePerNight(Number(e.target.value))} // Ensure conversion to number
            className="w-full mb-4"
          />
          <div className="text-[#6A6A6A] underline text-[14px] mb-8 cursor-pointer">
            Learn how we estimate your earnings
          </div>

          {/* Search Box */}
          <div className="relative w-full ml-[-1400px] mt-[-120px]">
            <input
              type="text"
              className="w-full p-4 pl-12 rounded-full border border-[#DDDDDD] text-[18px]"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 mt-[-40px] top-1/2  text-[#222222]">
              🔍
            </div>
            {filteredData.map((item) => (
              <div key={item.id} className="mt-4">
                <div className="text-[#222222] text-[18px] font-semibold">
                  {item.name}
                </div>
                <div className="text-[#6A6A6A] text-[14px]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
