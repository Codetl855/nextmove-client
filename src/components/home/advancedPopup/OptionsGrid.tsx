import React from 'react'
interface OptionsGridProps {
    options: string[];
    onSelect?: (value: string) => void;
}
const OptionsGrid = ({options, onSelect}: OptionsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6 bg-aztec-light p-6 h-full  ">
      {options.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSelect?.(item)}
          className="rounded-md md:px-3 md:py-2 text-xs md:text-sm text-gray-700 bg-white border-none hover:bg-aztec hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default OptionsGrid