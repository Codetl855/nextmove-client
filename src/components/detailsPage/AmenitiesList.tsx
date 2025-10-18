import React from 'react'

interface AmenitiesListProps {
  amenities?: string[] | null; // allow null or undefined
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ amenities }) => {
  // Handle no amenities
  if (!amenities || amenities.length === 0) {
    return (
      <div className="text-gray-500 text-sm pt-4">
        No amenities found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-700 pt-4">
      {amenities.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="icon-[ic--baseline-check] text-aztec"></span>
          {item}
        </span>
      ))}
    </div>
  );
};

export default AmenitiesList;
