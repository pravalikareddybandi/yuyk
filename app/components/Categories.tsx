"use client";

import { useState } from "react";
import Image from "next/image";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };

  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">All</span>
      </div>

      <div
        onClick={() => _setCategory("beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "beach" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Beachs</span>
      </div>

      <div
        onClick={() => _setCategory("villas")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "villas" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Villas</span>
      </div>
      <div
        onClick={() => _setCategory("Beachfront")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Beachfront" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Beachfront</span>
      </div>
      <div
        onClick={() => _setCategory("LakeFront")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "LakeFront" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">LakeFront</span>
      </div>
      <div
        onClick={() => _setCategory("OMG")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "OMG" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">OMG!</span>
      </div>
      <div
        onClick={() => _setCategory("Windmills")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Windmills" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Windmills</span>
      </div>
      <div
        onClick={() => _setCategory("Lake")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Lake" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Lake</span>
      </div>
      <div
        onClick={() => _setCategory("Water")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Water" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Water</span>
      </div>
      <div
        onClick={() => _setCategory("pools")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "pools" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs"> Pools</span>
      </div>
      <div
        onClick={() => _setCategory("Farms")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Farms" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Farms</span>
      </div>
      <div
        onClick={() => _setCategory("Countryside")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Countryside" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Countryside</span>
      </div>
      <div
        onClick={() => _setCategory("Homes")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "Homes" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs"> Homes</span>
      </div>

      <div
        onClick={() => _setCategory("cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "cabins" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Cabins</span>
      </div>

      <div
        onClick={() => _setCategory("tiny_homes")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "tiny_homes" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
