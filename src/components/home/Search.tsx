import { useState } from "react";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import SecondaryButton from "@/components/ui/Buttons/extensions/SecondaryButton";
import TextButton from "@/components/ui/Buttons/extensions/TextButton";
import AdvancedPopup from "@/components/home/advancedPopup/AdvancedPopup";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";


function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("All")
    return (<>
        <div
            className="rounded-t-xl bg-white border-b w-full md:size-fit border-aztec"
        >
            <div className="flex p-4">
                <PrimaryButton className="w-full md:w-25 uppercase">
                    Buy
                </PrimaryButton>
                <TextButton className="mx-4 w-full  md:w-25 uppercase">
                    Rent
                </TextButton>
            </div>
        </div>
        <div className="h-[80px] relative ">
            <div
                className="rounded-b-xl md:rounded-se-xl bg-white border-aztec z-40 w-full md:w-fit"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 w-full md:w-150 lg:w-240 gap-4">
                    <div
                        className="form-group md:border-gray-100 md:border-r pr-4 w-full"
                    >
                        <label
                            className="text-sm text-left text-gray-light mb-1 block"
                        >Type</label>
                        {/* <select
                            className="border-none text-left p-0 w-full outline-none"
                        >
                            <option>All</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Condo</option>
                            <option>Land</option>
                        </select> */}
                            <CustomSelect   
                                    value={value} // start with empty
                                    onChange={(action) => {
                                        if (action === "House") {
                                            setValue("House")
                                        } else if (action === "Appartment") {
                                            console.log("Delete clicked");
                                        }
                                    }}
                                    options={["House", "Apartment"]}
                                    className=" border-none !bg-aztec-light h-6  xl:w-full !bg-white"
                                />
                    </div>

                    <div className="form-group md:border-gray-100 md:border-r pr-4">
                        <label
                            className="text-sm text-left text-gray-light mb-1 block"
                        >Location</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="border-none text-left p-0 outline-none"
                                placeholder="Search Location"
                            />
                            <span className="text-lg icon-[material-symbols--my-location-outline-rounded] absolute right-0 top-1"></span>
                        </div>
                    </div>

                    <div className="form-group md:border-gray-100 md:border-r pr-4">
                        <label
                            className="text-sm text-left text-gray-light mb-1 block"
                        >Keyword</label>
                        <div className="relative">
                            <input
                                type="text"
                                className="border-none text-left p-0 outline-none"
                                placeholder="Search Keyword"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block lg:hidden">
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-white w-full md:w-[164px] justify-center items-center border border-aztec h-[48px] flex text-aztec px-4 text-[18px] rounded-lg"
                    >
                        Advanced
                        <span className="icon-[ph--sliders-horizontal] ml-1 text-lg text-aztec"></span>
                    </button>

                  
                    <button
                        className="bg-aztec w-full md:w-[164px] justify-center items-center h-[48px] flex text-white px-6 font-[18px] rounded-lg"
                    >
                        <span className="icon-[iconamoon--search-thin] mr-1 text-lg text-white"></span>
                        Search
                    </button>
                </div>
                  {isOpen && (
                        <div className="absolute left-0 mt-2  bg-white w-full  rounded-lg shadow-lg z-50">
                            <AdvancedPopup onClose={() => setIsOpen(false)} />
                        </div>
                    )}
            </div>
        </div></>);
}
export default Search;