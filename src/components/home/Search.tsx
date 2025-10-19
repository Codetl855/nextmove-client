import { useState } from "react";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import TextButton from "@/components/ui/Buttons/extensions/TextButton";
import AdvancedPopup from "@/components/home/advancedPopup/AdvancedPopup";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  // 🧠 Unified search filter state
  const [searchFilters, setSearchFilters] = useState({
    type: "All",
    location: "",
    keyword: "",
    tab: "resedentials",
    selectedOptions: [] as string[],
    priceRange: [5000, 650000] as [number, number],
    sizeRange: [100, 650000] as [number, number],
  });

  // Generic change handler (works for any key)
  const handleFilterChange = (key: string, value: any) => {
    setSearchFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    console.log("✅ Applied filters:", searchFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    setSearchFilters({
      type: "All",
      location: "",
      keyword: "",
      tab: "resedentials",
      selectedOptions: [],
      priceRange: [5000, 650000],
      sizeRange: [100, 650000],
    });
  };

  return (
    <>
      {/* Top Tabs */}
      <div className="rounded-t-xl bg-white border-b w-full md:size-fit border-aztec">
        <div className="flex p-4">
          <PrimaryButton className="w-full md:w-25 uppercase">Buy</PrimaryButton>
          <TextButton className="mx-4 w-full md:w-25 uppercase">Rent</TextButton>
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="h-[80px] relative">
        <div className="rounded-b-xl md:rounded-se-xl bg-white border-aztec z-40 w-full md:w-fit">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 w-full md:w-150 lg:w-240 gap-4">
            
            {/* Type */}
            <div className="form-group md:border-gray-100 md:border-r pr-4 w-full">
              <label className="text-sm text-left text-gray-light mb-1 block">
                Type
              </label>
              <CustomSelect
                value={searchFilters.type}
                onChange={(action) => handleFilterChange("type", action)}
                options={["All", "House", "Apartment", "Land"]}
                className="border-none !bg-white h-6 xl:w-full"
              />
            </div>

            {/* Location */}
            <div className="form-group md:border-gray-100 md:border-r pr-4">
              <label className="text-sm text-left text-gray-light mb-1 block">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchFilters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  className="border-none text-left p-0 outline-none w-full"
                  placeholder="Search Location"
                />
                <span className="text-lg icon-[material-symbols--my-location-outline-rounded] absolute right-0 top-1"></span>
              </div>
            </div>

            {/* Keyword */}
            <div className="form-group md:border-gray-100 md:border-r pr-4">
              <label className="text-sm text-left text-gray-light mb-1 block">
                Keyword
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchFilters.keyword}
                  onChange={(e) =>
                    handleFilterChange("keyword", e.target.value)
                  }
                  className="border-none text-left p-0 outline-none w-full"
                  placeholder="Search Keyword"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden md:block lg:hidden"></div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white w-full md:w-[164px] justify-center items-center border border-aztec h-[48px] flex text-aztec px-4 text-[18px] rounded-lg"
            >
              Advanced
              <span className="icon-[ph--sliders-horizontal] ml-1 text-lg text-aztec"></span>
            </button>

            <button
              className="bg-aztec w-full md:w-[164px] justify-center items-center h-[48px] flex text-white px-6 font-[18px] rounded-lg"
              onClick={() => console.log("🔍 Searching with:", searchFilters)}
            >
              <span className="icon-[iconamoon--search-thin] mr-1 text-lg text-white"></span>
              Search
            </button>
          </div>

          {/* Advanced Popup */}
          {isOpen && (
            <div className="absolute left-0 mt-2 bg-white w-full rounded-lg shadow-lg z-50">
              <AdvancedPopup
                onClose={() => setIsOpen(false)}
                state={searchFilters}
                onChange={handleFilterChange}
                onApply={handleApply}
                onReset={handleReset}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
