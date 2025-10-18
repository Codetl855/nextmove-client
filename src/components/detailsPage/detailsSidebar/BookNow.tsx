import React, { useState } from "react";
import Input from "@/components/ui/Inputs/Input";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/appRoutes";
interface BookNowProps {
  property?: any; // or define proper type if you have a Property interface
}

const BookNow: React.FC<BookNowProps> = ({ property }) => {


  const [guest, setGuest] = useState("2");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const navigate = useNavigate();

  const propertyId = property?.id || null;
  console.log("Property ID in BookNow:", propertyId);

  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Booking Now</h3>
        <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Instant
        </span>
      </div>

      {/* Price */}
      <div className="bg-gray-50 py-3 rounded-lg text-center">
        <span className="font-extrabold text-[#C1A260] text-lg">450 SAR</span>
        <span className="text-gray-500 text-sm font-medium">/Month</span>
      </div>

      {/* Form fields */}
      <div className="space-y-3">
        {/* Check-In */}
        <div>
          <Input
            label="Check-In"
            type="date"
            className="w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today} // disable past dates
          />
        </div>

        {/* Check-Out */}
        <div>
          <Input
            label="Check-Out"
            type="date"
            className="w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || today} // can't select before check-in
          />
        </div>

        {/* Guest field */}
        <div>
          <label className="text-sm text-gray-700 font-medium block mb-1">
            Guest <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            value={guest}
            onChange={(value) => setGuest(value)}
            options={["1", "2", "3", "4"]}
            className="!bg-white text-gray-700"
          />
        </div>
      </div>

      {/* Button */}
     <PrimaryButton
        className="w-full"
        onClick={() => {
            if (!propertyId) return;
            navigate(`/property/${propertyId}/booking-request`, {
            state: {
                checkIn,
                checkOut,
                guest,
            },
            });
        }}
        >
    Book Now</PrimaryButton>
    </div>
  );
};

export default BookNow;
