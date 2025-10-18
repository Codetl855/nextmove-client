import React, { useState } from "react";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import { useParams, useLocation } from "react-router-dom";



// interface DetailsSidebarProps {
//   property?: any; // or define proper type if you have a Property interface
// }

const BookingRequest = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  // Read state passed from BookNow
  const bookingData = location.state as {
    checkIn?: string;
    checkOut?: string;
    guest?: string;
  };

  const [checkin, setCheckin] = useState(bookingData?.checkIn || "");
  const [checkout, setCheckout] = useState(bookingData?.checkOut || "");
  const [guests, setGuests] = useState(bookingData?.guest || "1");
  const [splitRent, setSplitRent] = useState(false);

  console.log("Booking Request for Property ID:", id);
  console.log("Received booking data:", bookingData);

  return (
    <div className="min-h-screen bg-aztec-light py-10">
      {/* Container for centered, fixed width layout */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow p-5 sm:p-8 space-y-4">
          {/* Title */}
          <h3 className="font-semibold text-gray-800">Booking Request</h3>

          {/* Booking details */}
          <div className="space-y-3">
            {/* Checkin */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <p className="text-sm text-gray-500">Checkin</p>
                <p className="text-gray-800 font-medium">
                  {new Date(checkin).toLocaleDateString("en-GB")}
                </p>
              </div>
              <button
                className="text-[#C1A260] text-xs font-medium bg-gray-50 px-3 py-1 rounded-md hover:bg-gray-100"
                onClick={() => alert("Change Checkin Date")}
              >
                Change
              </button>
            </div>

            {/* Checkout */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <p className="text-sm text-gray-500">Checkout</p>
                <p className="text-gray-800 font-medium">
                  {new Date(checkout).toLocaleDateString("en-GB")}
                </p>
              </div>
              <button
                className="text-[#C1A260] text-xs font-medium bg-gray-50 px-3 py-1 rounded-md hover:bg-gray-100"
                onClick={() => alert("Change Checkout Date")}
              >
                Change
              </button>
            </div>

            {/* Guests */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <p className="text-sm text-gray-500">Guest</p>
                <p className="text-gray-800 font-medium">{guests}</p>
              </div>
              <button
                className="text-[#C1A260] text-xs font-medium bg-gray-50 px-3 py-1 rounded-md hover:bg-gray-100"
                onClick={() => alert("Change Guest Count")}
              >
                Change
              </button>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-700">
              Cost Breakdown
            </h4>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Rental Fee</span>
              <span>00 SAR</span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Service Fee</span>
              <span>00 SAR</span>
            </div>

            <hr className="border-gray-200" />

            <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
              <span>Total</span>
              <span>500 SAR</span>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700">
              Special Requests
            </h4>
            <p className="text-sm text-gray-500">
              Risk management and compliance, when approached strategically,
            </p>
          </div>

          {/* Split Rent Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="splitRent"
              checked={splitRent}
              onChange={(e) => setSplitRent(e.target.checked)}
              className="w-4 h-4 text-[#C1A260] border-gray-300 rounded focus:ring-[#C1A260]"
            />
            <label htmlFor="splitRent" className="text-sm text-gray-700">
              Split Rent with Others
            </label>
          </div>

          {/* Pay Button */}
          <PrimaryButton className="w-full">Pay Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
