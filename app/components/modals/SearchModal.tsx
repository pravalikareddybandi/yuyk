"use client";

import Modal from "./Modal";
import { useState } from "react";
import { Range } from "react-date-range";
import DatePicker from "../forms/Calendar";
import CustomButton from "../forms/CustomButton";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { enUS } from "date-fns/locale";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

// const initialDateRange = {
//   startDate: new Date(),
//   endDate: new Date(),
//   key: "selection",
// };
const initialDateRange = {
  startDate: new Date("2024-08-26T17:57:35.364Z"),
  endDate: new Date("2027-08-26T17:57:35.364Z"),
  key: "selection",
};
console.log("nsjnsj", initialDateRange);
const RegionCard = ({ name, img }: { name: string; img: string }) => (
  <div className="cursor-pointer">
    <img
      src={img}
      alt={name}
      className="w-full h-24 object-cover rounded-lg mb-2"
    />
    <div className="text-sm">{name}</div>
  </div>
);

const SearchModal = () => {
  let content = <></>;
  const searchModal = useSearchModal();
  const [numGuests, setNumGuests] = useState<string>("1");
  const [numBedrooms, setNumBedrooms] = useState<string>("0");
  const [country, setCountry] = useState<SelectCountryValue>();
  const [numBathrooms, setNumBathrooms] = useState<string>("0");
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [activeTab, setActiveTab] = useState("where");
  const [searchInput, setSearchInput] = useState("");
  const [guestCount, setGuestCount] = useState("Add guests");
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  //
  //

  const closeAndSearch = () => {
    const newSearchQuery: SearchQuery = {
      country: country?.label,
      checkIn: dateRange?.startDate,
      checkOut: dateRange?.endDate,
      guests: parseInt(numGuests),
      bedrooms: parseInt(numBedrooms),
      bathrooms: parseInt(numBathrooms),
      category: "",
    };

    searchModal.setQuery(newSearchQuery);
    searchModal.close();
  };

  //
  // Set date range

  const _setDateRange = (selection: Range) => {
    if (searchModal.step === "checkin") {
      searchModal.open("checkout");
    } else if (searchModal.step === "checkout") {
      searchModal.open("details");
    }

    setDateRange(selection);
  };

  //
  // Contents

  const contentLocation = (
    <>
      <div className="p-6">
        <input
          type="text"
          placeholder="Search destinations"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="mt-4 grid grid-cols-3 gap-4">
          <RegionCard name="I'm flexible" img="/api/placeholder/100/100" />
          <RegionCard name="Europe" img="/api/placeholder/100/100" />
          <RegionCard name="Italy" img="/api/placeholder/100/100" />
          <RegionCard name="Southeast Asia" img="/api/placeholder/100/100" />
          <RegionCard
            name="United Arab Emirates"
            img="/api/placeholder/100/100"
          />
          <RegionCard name="Middle East" img="/api/placeholder/100/100" />
        </div>
        <div className="mt-6 flex flex-row gap-4">
          <CustomButton
            label="Check in date ->"
            onClick={() => searchModal.open("checkin")}
          />
        </div>
      </div>
    </>
  );

  const contentCheckin = (
    <>
      <div className="p-6">
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">
            Dates
          </button>
          <button className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500">
            Months
          </button>
          <button className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-500">
            Flexible
          </button>
        </div>
        <DatePicker
          value={dateRange}
          onChange={(value) => _setDateRange(value.selection)}
        />
      </div>
      <h2 className="mb-6 text-2xl">When do you want to check in?</h2>

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="<- Location"
          onClick={() => searchModal.open("location")}
        />

        <CustomButton
          label="Check out date ->"
          onClick={() => searchModal.open("checkout")}
        />
      </div>
    </>
  );

  const contentCheckout = (
    <>
      <h2 className="mb-6 text-2xl">When do you want to check out?</h2>

      <DatePicker
        value={dateRange}
        onChange={(value) => _setDateRange(value.selection)}
      />

      <div className="mt-6 flex flex-row gap-4">
        <CustomButton
          label="<- Check in date"
          onClick={() => searchModal.open("checkin")}
        />

        <CustomButton
          label="Details ->"
          onClick={() => searchModal.open("details")}
        />
      </div>
    </>
  );

  const contentDetails = (
    <>
      <h2 className="mb-6 flex max-w-md mx-auto justify-between text-2xl">
        Details
      </h2>
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-between items-left mb-4">
          <div className="space-y-2">
            <div className="space-y-2">
              <label>Number of guests:</label>
              <input
                type="number"
                min="1"
                value={numGuests}
                placeholder="Number of guests..."
                onChange={(e) => setNumGuests(e.target.value)}
                className="w-full h-10 px-4 border border-gray-300 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label>Number of bedrooms:</label>
              <input
                type="number"
                min="1"
                value={numBedrooms}
                placeholder="Number of bedrooms..."
                onChange={(e) => setNumBedrooms(e.target.value)}
                className="w-full h-10 px-4 border border-gray-300 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label>Number of bathrooms:</label>
              <input
                type="number"
                min="1"
                value={numBathrooms}
                placeholder="Number of bathrooms..."
                onChange={(e) => setNumBathrooms(e.target.value)}
                className="w-full h-10 px-4 border border-gray-300 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 max-w-md mx-auto flex flex-row gap-2">
        <CustomButton
          label="<- Check out date"
          onClick={() => searchModal.open("checkout")}
        />

        <CustomButton label="Search" onClick={closeAndSearch} />
      </div>
    </>
  );

  if (searchModal.step == "location") {
    content = contentLocation;
  } else if (searchModal.step == "checkin") {
    content = contentCheckin;
  } else if (searchModal.step == "checkout") {
    content = contentCheckout;
  } else if (searchModal.step == "details") {
    content = contentDetails;
  }

  return (
    <Modal
      label="Search"
      content={content}
      close={searchModal.close}
      isOpen={searchModal.isOpen}
    />
  );
};

export default SearchModal;
