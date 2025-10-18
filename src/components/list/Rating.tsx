import React from "react";
import { Radio } from "../ui/Inputs/extensions/Radio";

const Rating = () => {
  return (
    <div className="mt-4 bg-aztec-light p-6 rounded-xl pt-4">
      <p className="font-medium text-sm mb-2">Rating</p>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((stars, idx) => (
          <Radio
            key={idx}
            name="rating"
            value={stars}
            className="w-3 h-3 bg-white ring-aztec   focus:ring-aztec ring-2 checked:bg-aztec border-white"
            defaultChecked={stars === 5}
            label={
              <div className="flex">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="icon-[ic--baseline-star] text-[#FFC300] text-2xl"></span>
                ))}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
