import React from 'react'
import Checkbox from '../ui/Inputs/extensions/Checkbox'
const amenitiesList = [
  "Air Condition",
  "Ceiling Height",
  "Heating",
  "Renovation",
  "Elevator",
];
const Amenities = () => {
  return (
      <div className="mt-4  pt-4 bg-aztec-light p-4 rounded-xl">
                <p className="font-medium text-sm mb-2">Amenities</p>
                <div className="space-y-2">
                    {amenitiesList.map((item, idx) => (
                     <Checkbox 
                     key={idx}
                     label={item}
                      className='!rounded-md'
                     />
                    ))}
                </div>
            </div>
  )
}

export default Amenities