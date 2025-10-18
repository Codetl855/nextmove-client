import React from "react";
import Image from "@/components/ui/Images/Image";

type CategoryProps = {
  category?: string;
  totalProperties?: number;
  className?: string;
  imgSrc?: any;
};

const Category: React.FC<CategoryProps> = ({ category, totalProperties, className = "", imgSrc, ...props }) => {
  return (
<div
  {...props}
  className={`bg-white rounded-3xl text-center overflow-hidden flex-shrink-0 w-48 ${className}`}
>
  <Image
    src={imgSrc}
    alt={category}
    className="h-35 !rounded-none object-cover w-full mx-auto"
  />
  <div className="pt-4 pb-8">
    <h3 className="font-semibold text-lg">{category}</h3>
    <p className="text-gray-400 text-base">{totalProperties} Properties</p>
  </div>
</div>

  );
};

export default Category;