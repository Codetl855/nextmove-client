import { useState } from "react";
import Tabs from "../../adminPanel/Tabs/Tabs";
import OptionsGrid from "./OptionsGrid";
import RangeSlider from "../../ui/Slider/RangeSlider";
import Actions from "./Actions";
import Hr from "../../ui/Divider/Hr";

interface AdvancedPopupProps {
  onClose: () => void;
}

export default function AdvancedPopup({ onClose }: AdvancedPopupProps) {

  const [activeTab, setActiveTab] = useState("resedentials")
  return (
    <div className="p-6 ">
      {/* Tabs */}
      <Tabs
        tabs={[
          { label: "Resedentials", value: "resedentials" },
          { label: "Commercial", value: "commercial" }
        ]}
        active={activeTab}
        onChange={setActiveTab}
      />


      <div className="flex flex-wrap justify-between h-full gap-4">

        <div className="w-full md:flex-[1.2]">

          <OptionsGrid
            options={[
              "Apartment", "Villa", "Townhouse",
              "Villa Compound", "Hotel Apartment", "Land",
              "Pent House", "Villa Compound", "Land",
              "Floor", "Building",
            ]}
            onSelect={(val) => console.log("Selected:", val)}
          />
        </div>

        {/* Price & Size */}
        <div className="w-full md:flex-[0.8] grid grid-cols-1 gap-4 ">

         <RangeSlider
                label="Price Range"
                min={5000}
                max={650000}
                unit="$"
                unitPosition="prefix"
                onChange={(vals) => console.log("Selected:", vals)}
                />

            <RangeSlider
                label="Size"
                min={100}
                max={650000}
                unit="sqft"
                unitPosition="suffix"
               onChange={(vals) => console.log("Selected:", vals)}
            />

        </div>
      </div>
      <Hr />      
      <Actions onReset={() => console.log("Reset")} onApply={() => console.log("Applied")} />
    </div>
  );
}
