import React from 'react'
type Place = [string, React.ReactNode]
interface PropertyDetailsProps {
  places: Place[];
}
const NearbyList = ({places}: PropertyDetailsProps) => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
    {places.map(([place, distance], i) => (
      <React.Fragment key={i}>
        <span>{place}:</span>
        <span>{distance}</span>
      </React.Fragment>
    ))}
  </div>
  )
}

export default NearbyList