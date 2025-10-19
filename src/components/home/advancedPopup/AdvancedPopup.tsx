import Tabs from "../../adminPanel/Tabs/Tabs";
import OptionsGrid from "./OptionsGrid";
import RangeSlider from "../../ui/Slider/RangeSlider";
import Actions from "./Actions";
import Hr from "../../ui/Divider/Hr";

interface AdvancedPopupProps {
  onClose: () => void;
  state: any;
  onChange: (key: string, val: any) => void;
  onReset: () => void;
  onApply: () => void;
}

export default function AdvancedPopup({
  onClose,
  state,
  onChange,
  onReset,
  onApply,
}: AdvancedPopupProps) {
  const { tab, selectedOptions, priceRange, sizeRange } = state;

  return (
    <div className="p-6">
      {/* Tabs */}
      <Tabs
        tabs={[
          { label: "Resedentials", value: "resedentials" },
          { label: "Commercial", value: "commercial" },
        ]}
        active={tab}
        onChange={(val) => onChange("tab", val)}
      />

      <div className="flex flex-wrap justify-between h-full gap-4">
        <div className="w-full md:flex-[1.2]">
          <OptionsGrid
            options={[
              "Apartment",
              "Villa",
              "Townhouse",
              "Villa Compound",
              "Hotel Apartment",
              "Land",
              "Pent House",
              "Floor",
              "Building",
            ]}
            selected={selectedOptions}
            onSelect={(val) =>
              onChange("selectedOptions", [...selectedOptions, val])
            }
          />
        </div>

        <div className="w-full md:flex-[0.8] grid grid-cols-1 gap-4">
          <RangeSlider
            label="Price Range"
            min={5000}
            max={650000}
            unit="$"
            unitPosition="prefix"
            value={state.priceRange}
            onChange={(vals) => onChange("priceRange", vals)}
          />

          <RangeSlider
            label="Size"
            min={100}
            max={650000}
            unit="sqft"
            unitPosition="suffix"
            value={sizeRange}
            onChange={(vals) => onChange("sizeRange", vals)}
          />
        </div>
      </div>

      <Hr />
      <Actions onReset={onReset} onApply={onApply} />
    </div>
  );
}
