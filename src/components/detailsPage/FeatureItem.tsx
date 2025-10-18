import React from 'react'
interface FeatureItemProps {
    icon : string;
    label : string;
}
const FeatureItem = ({icon, label}: FeatureItemProps) => {
  return (
      <div className="flex items-center gap-2">
    <span className="flex items-center gap-1">
      <span className={icon + " text-aztec text-xl"}></span>
      {label}
    </span>
  </div>
  )
}

export default FeatureItem