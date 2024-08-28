import React from "react";

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const BookingConfirmation = () => {
  const dummyData = {
    title: "Little and cute 2nd floor for 1 or 2persons",
    rating: 4.91,
    reviews: 104,
    isSuperhost: true,
    dates: "16-30 Sep",
    guests: 1,
    pricePerNight: 1100,
    nights: 14,
    weeklyDiscount: 3080,
    serviceFee: 1739.3,
    total: 14059.3,
  };

  return (
    <div className="max-w-5xl mx-auto p-4 font-sans">
      <header className="flex items-center mb-6">
        <ChevronLeftIcon />
        <h1 className="text-2xl font-bold ml-2">Confirm and pay</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg p-4 mb-6 shadow">
            <div className="flex items-center">
              <TagIcon />
              <p className="font-semibold ml-2">Good price.</p>
            </div>
            <p className="text-sm text-gray-600">
              Your dates are ₹210 less than the avg. nightly rate over the last
              3 months.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Your trip</h2>
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-semibold">Dates</h3>
                <p>{dummyData.dates}</p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">Guests</h3>
                <p>{dummyData.guests} guest</p>
              </div>
              <button className="text-sm underline">Edit</button>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Pay with</h2>
            <select className="w-full p-2 border rounded mb-2">
              <option>UPI</option>
            </select>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" className="mr-2" defaultChecked />
                <span>Pay using UPI QR code</span>
              </label>
              <label className="flex items-center">
                <input type="radio" className="mr-2" />
                <span>UPI ID</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Cancellation policy</h2>
            <p className="mb-1">
              Free cancellation before 11 Sep. Cancel before check-in on 16 Sep
              for a partial refund.
            </p>
            <a href="#" className="text-sm underline">
              Learn more
            </a>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Ground rules</h2>
            <p className="mb-2">
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Follow the house rules</li>
              <li>Treat your Host's home like your own</li>
            </ul>
          </div>

          <p className="text-sm mb-4">
            By selecting the button below, I agree to the{" "}
            <a href="#" className="underline">
              booking terms
            </a>
            .
          </p>

          <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-200">
            Confirm and pay
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-start mb-4">
            <img
              src="/beach_1.jpg"
              alt="Property"
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div>
              <h2 className="font-semibold">{dummyData.title}</h2>
              <p className="text-sm">Entire rental unit</p>
              <div className="flex items-center mt-1">
                <span className="text-sm">★ {dummyData.rating}</span>
                <span className="text-sm text-gray-500 ml-1">
                  ({dummyData.reviews} reviews)
                </span>
                {dummyData.isSuperhost && (
                  <span className="text-sm ml-2">• Superhost</span>
                )}
              </div>
            </div>
          </div>

          <h3 className="font-bold mb-2">Price details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                ₹{dummyData.pricePerNight} x {dummyData.nights} nights
              </span>
              <span>₹{dummyData.pricePerNight * dummyData.nights}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Weekly stay discount</span>
              <span>-₹{dummyData.weeklyDiscount}</span>
            </div>
            <div className="flex justify-between">
              <span className="underline">Airbnb service fee</span>
              <span>₹{dummyData.serviceFee}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total (INR)</span>
              <span>₹{dummyData.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
