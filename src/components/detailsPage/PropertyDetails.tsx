import React from 'react'
type Detail = [string, React.ReactNode]
interface PropertyDetailsProps {
  details: Detail[];
}
const PropertyDetails = ({details}: PropertyDetailsProps) => {
  return (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm text-gray-700">
  {details.map(([key, value], i) => (
    <React.Fragment key={i}>
      <div
        className={`col-span-2 grid grid-cols-2 ${
           Math.floor(i / 2) % 2 === 0   ? "bg-aztec-light" : "bg-white"
        }`}
      >
        <div className="p-1">{key}</div>
        <div className="p-1 ">{value}</div>
      </div>
    </React.Fragment>
  ))}
</div>

  )
}

export default PropertyDetails