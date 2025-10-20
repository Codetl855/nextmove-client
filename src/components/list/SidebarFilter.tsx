import React, { useState } from 'react'
import Input from '../ui/Inputs/Input'
import CustomSelect from '../ui/Dropdowns/CustomSelect'
import RangeSlider from '../ui/Slider/RangeSlider'
import Checkbox from '../ui/Inputs/extensions/Checkbox'
import Amenities from './Amenities'
import Rating from './Rating'
import Button from '../ui/Buttons/Button'
import SecondaryButton from '../ui/Buttons/extensions/SecondaryButton'
import useSearch from '@/hooks/search/useSearch'

const SidebarFilter = () => {
    const { searchFilters, setSearchFilters, reset } = useSearch();

    // Generic change handler for filters
    const handleFilterChange = (key: string, value: any) => {
        setSearchFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleReset = () => {
        reset();
    };

    return (
        <aside className="col-span-1 bg-white p-4 rounded-lg space-y-4 self-start">
            <div className="grid grid-cols-3 gap-2">
                <Button 
                    className={`px-4 py-2 rounded-md ${searchFilters.type === 'Buy' ? 'bg-aztec text-white' : 'bg-aztec-light'}`}
                    onClick={() => handleFilterChange('type', 'Buy')}
                >
                    Buy
                </Button>
                <Button 
                    className={`px-4 py-2 rounded-md ${searchFilters.type === 'Rent' ? 'bg-aztec text-white' : 'bg-aztec-light'}`}
                    onClick={() => handleFilterChange('type', 'Rent')}
                >
                    Rent
                </Button>
                <Button 
                    className={`px-4 py-2 rounded-md ${searchFilters.type === 'Stay' ? 'bg-aztec text-white' : 'bg-aztec-light'}`}
                    onClick={() => handleFilterChange('type', 'Stay')}
                >
                    Stay
                </Button>
            </div>

            <div className="space-y-3">
                <Input
                    className='w-full border px-3 py-2 !rounded-full'
                    placeholder='Type Keyword'
                    value={searchFilters.keyword}
                    onChange={(e) => handleFilterChange('keyword', e.target.value)}
                />
                <CustomSelect
                    value={searchFilters.location || "Location"}
                    onChange={(value) => handleFilterChange('location', value)}
                    options={["Location", "Islamabad", "Karachi", "Lahore", "Rawalpindi"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />
                <CustomSelect
                    value={searchFilters.propertyType || "Property Type"}
                    onChange={(value) => handleFilterChange('propertyType', value)}
                    options={["Property Type", "House", "Apartment", "Villa", "Land", "Office"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />
                <CustomSelect
                    value={searchFilters.duration || "Duration"}
                    onChange={(value) => handleFilterChange('duration', value)}
                    options={["Duration", "1 Month", "3 Months", "6 Months", "1 Year", "2+ Years"]}
                    className='w-full !rounded-full bg-white !px-3 !py-2.5 border h-[48px]'
                />
            </div>

            <RangeSlider
                label="Price Range"
                min={5000}
                max={650000}
                unit="$"
                unitPosition="prefix"
                value={searchFilters.priceRange}
                onChange={(vals) => handleFilterChange('priceRange', vals)}
            />

            <RangeSlider
                label="Size"
                min={100}
                max={650000}
                unit="sqft"
                unitPosition="suffix"
                value={searchFilters.sizeRange}
                onChange={(vals) => handleFilterChange('sizeRange', vals)}
            />

            <Amenities 
                selectedAmenities={searchFilters.amenities}
                onAmenityChange={(amenities) => handleFilterChange('amenities', amenities)}
            />

            <Rating 
                rating={searchFilters.rating}
                onRatingChange={(rating) => handleFilterChange('rating', rating)}
            />

            <div className="flex gap-2 mt-4">
                <SecondaryButton 
                    className="flex-1 border border-aztec text-sm"
                    onClick={handleReset}
                >
                    Reset
                </SecondaryButton>
                <Button className="flex-1 bg-aztec text-white text-sm">
                    Apply Filter
                </Button>
            </div>

        </aside>
    )
}

export default SidebarFilter