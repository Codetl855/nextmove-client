import React from 'react'
import Checkbox from '../ui/Inputs/extensions/Checkbox'

const amenitiesList = [
  "Air Condition",
  "Ceiling Height",
  "Heating",
  "Renovation",
  "Elevator",
];

interface AmenitiesProps {
  selectedAmenities: string[];
  onAmenityChange: (amenities: string[]) => void;
}

const Amenities = ({ selectedAmenities, onAmenityChange }: AmenitiesProps) => {
  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      onAmenityChange([...selectedAmenities, amenity]);
    } else {
      onAmenityChange(selectedAmenities.filter(a => a !== amenity));
    }
  };

  return (
      <div className="mt-4  pt-4 bg-aztec-light p-4 rounded-xl">
                <p className="font-medium text-sm mb-2">Amenities</p>
                <div className="space-y-2">
                    {amenitiesList.map((item, idx) => (
                     <Checkbox 
                     key={idx}
                     label={item}
                     checked={selectedAmenities.includes(item)}
                     onChange={(checked) => handleAmenityChange(item, checked)}
                     className='!rounded-md'
                     />
                    ))}
                </div>
            </div>
  )
}

export default Amenities