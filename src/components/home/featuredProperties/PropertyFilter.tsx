import React from 'react'
interface PropertyFilterProps {
    filters: string[]
    active: string;
    onChange: (filter: string) => void;

}
const PropertyFilter = ({filters, active, onChange}: PropertyFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 my-9">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`py-2 px-6 font-[18px] rounded-lg ${
            active === filter ? "bg-aztec text-white" : "bg-aztec-light text-black"
          }`}
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default PropertyFilter