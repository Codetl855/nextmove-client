import React, { useState } from 'react'
import Input from '../ui/Inputs/Input'
import CustomSelect from '../ui/Dropdowns/CustomSelect'
import RangeSlider from '../ui/Slider/RangeSlider'
import Checkbox from '../ui/Inputs/extensions/Checkbox'
import Amenities from './Amenities'
import Rating from './Rating'
import Button from '../ui/Buttons/Button'
import SecondaryButton from '../ui/Buttons/extensions/SecondaryButton'

const SidebarFilter = () => {
    const [location, setLocation] = useState("USA")
    return (
        <aside className="col-span-1 bg-white p-4 rounded-lg space-y-4 self-start">
            <div className="grid grid-cols-3 gap-2">
                <Button className="px-4 py-2 bg-aztec  text-white rounded-md">Buy</Button>
                <Button className="px-4 py-2 bg-aztec-light rounded-md">Rent</Button>
                <Button className="px-4 py-2 bg-aztec-light rounded-md">Stay</Button>
            </div>

            <div className="space-y-3">
                <Input
                    className='w-full border px-3 py-2 !rounded-full'
                    placeholder='Type Keyword'
                />
                <CustomSelect
                    value={location}
                    onChange={setLocation}
                    options={["Location", "Usa", "Can"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />
                <CustomSelect
                    value={location}
                    onChange={setLocation}
                    options={["Property Type", "Usa", "Can"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />
                <CustomSelect
                    value={location}
                    onChange={setLocation}
                    options={["Duration", "Usa", "Can"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />

            </div>

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

            <Amenities />


            <Rating />

            <div className="flex gap-2 mt-4">
                <SecondaryButton className="flex-1 border border-aztec text-sm">
                    Reset</SecondaryButton>
                <Button className="flex-1 bg-aztec text-white text-sm">
                    Apply Filter
                </Button>
            </div>

        </aside>
    )
}

export default SidebarFilter