// src/components/addProperty/SelectAmeneties.tsx
import React from 'react'
import Checkbox from '@/components/ui/Inputs/extensions/Checkbox'

interface SelectAmenitiesProps {
  selectedAmenities: string[]
  onChange: (newAmenities: string[]) => void
}

const AMENITIES_LIST = [
  'Step-free access',
  'Disabled parking spot',
  'Guest entrance wider than 32 inches',
  'Step-free bedroom access',
  'Elevator access',
  'Security cameras',
  '24/7 Security',
  'Swimming Pool',
  'Gym',
  'Pet Friendly'
]

const SelectAmenities: React.FC<SelectAmenitiesProps> = ({ selectedAmenities, onChange }) => {
  console.log('Selected Amenties:', selectedAmenities);

  const handleToggle = (amenity: string) => {
    const updated = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity]

    onChange(updated)
  }


  return (
    <div className='grid gap-2 bg-white p-4 rounded-xl'>
      <h1 className='text-xl font-bold'>Select Amenities</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {AMENITIES_LIST.map((amenity) => (
          <Checkbox
            key={amenity}
            label={amenity}
            checked={selectedAmenities.includes(amenity)}
            onChange={() => handleToggle(amenity)}
            className='!rounded-sm'
          />
        ))}
      </div>
    </div>
  )
}

export default SelectAmenities
