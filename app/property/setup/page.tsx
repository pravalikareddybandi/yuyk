"use client";
import React, { useState } from "react";
import { MapPin, ChevronDown, AlertCircle } from "lucide-react";

const AddressInput = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [showSpecificLocation, setShowSpecificLocation] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    country: "India - IN",
    flat: "",
    street: "",
    landmark: "",
    district: "Thiruvanmiyur",
    city: "Chennai",
    state: "Tamil Nadu",
    zipCode: "",
  });

  const handleAddressChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAddress(e.target.value);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleAddressDetailsChange = (field: string, value: string) => {
    setAddressDetails({ ...addressDetails, [field]: value });
  };

  const handleToggleSpecificLocation = () => {
    setShowSpecificLocation(!showSpecificLocation);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <header className="flex justify-between items-center mb-8">
        <div className="text-rose-500">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "currentcolor",
              height: "32px",
              width: "32px",
            }}
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206c0 2.086 1.074 3.486 2.62 3.486 1.167 0 2.727-.62 4.543-2.385l.461-.473c.417-.354.672-.358 1.132.017l.289.3c2.12 2.087 3.72 2.66 5.279 2.524 1.987-.17 3.459-1.848 3.459-3.69 0-.394-.078-1.065-.429-2.126l-.421-1.06c-.953-2.222-5.127-10.892-7.122-14.798l-.543-1.046C18.053 3.539 17.24 3 16 3zm.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
          </svg>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full">
            Questions?
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-full">
            Save & exit
          </button>
        </div>
      </header>

      {step === 1 && (
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Where's your place located?
          </h1>
          <p className="text-gray-500 mb-4">
            Your address is only shared with guests after they've made a
            reservation.
          </p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <img
              src="/map.png"
              alt="Map placeholder"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-rose-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="text-3xl font-semibold mb-2">Confirm your address</h1>
          <p className="text-gray-500 mb-4">
            Your address is only shared with guests after they've made a
            reservation.
          </p>
          <div className="space-y-4 mb-4">
            <div className="relative">
              <select
                value={addressDetails.country}
                onChange={(e) =>
                  handleAddressDetailsChange("country", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option>India - IN</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Flat, house, etc. (if applicable)"
              value={addressDetails.flat}
              onChange={(e) =>
                handleAddressDetailsChange("flat", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Street address"
              value={addressDetails.street}
              onChange={(e) =>
                handleAddressDetailsChange("street", e.target.value)
              }
              className="w-full p-4 border border-red-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Nearby landmark (if applicable)"
              value={addressDetails.landmark}
              onChange={(e) =>
                handleAddressDetailsChange("landmark", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="District/locality (if applicable)"
              value={addressDetails.district}
              onChange={(e) =>
                handleAddressDetailsChange("district", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="City/town"
              value={addressDetails.city}
              onChange={(e) =>
                handleAddressDetailsChange("city", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="State/union territory"
              value={addressDetails.state}
              onChange={(e) =>
                handleAddressDetailsChange("state", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="ZIP code"
              value={addressDetails.zipCode}
              onChange={(e) =>
                handleAddressDetailsChange("zipCode", e.target.value)
              }
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-yellow-800">
              We couldn't find your exact location. Please enter your address
              instead.
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-rose-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1 className="text-3xl font-semibold mb-2">Confirm your address</h1>
          <p className="text-gray-500 mb-4">
            Your address is only shared with guests after they've made a
            reservation.
          </p>
          <input
            type="text"
            value="6000 ft"
            onChange={(e) => {}}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent mb-4"
          />
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold">Show your specific location</h2>
              <p className="text-gray-500 text-sm">
                Make it clear to guests where your place is located. We'll only
                share your address after they've made a reservation.
              </p>
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={showSpecificLocation}
                  onChange={handleToggleSpecificLocation}
                />
                <div
                  className={`block w-14 h-8 rounded-full transition-colors ${
                    showSpecificLocation ? "bg-rose-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform ${
                    showSpecificLocation ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div className="bg-green-100 p-4 rounded-lg mb-4 relative">
            <img
              src="/map.png"
              alt="Map placeholder"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-4 py-2 rounded-full shadow">
                We'll share your approximate location.
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-yellow-800">
              We couldn't find your exact location. Please enter your address
              instead.
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-rose-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressInput;
