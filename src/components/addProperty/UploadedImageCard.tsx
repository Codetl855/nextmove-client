import React from "react";
import IconWrapper from "@/components/ui/Icons/IconWrapper";
import Image from "@/components/ui/Images/Image";

interface UploadedImageCardProps {
  img: string;
  index: number;
  onRemove: (index: number) => void;
}

const UploadedImageCard: React.FC<UploadedImageCardProps> = ({
  img,
  index,
  onRemove,
}) => {
  return (
    <div className="relative w-40 h-28 rounded-lg overflow-hidden shadow">
      <Image
        src={img}
        alt={`property-${index}`}
        className="w-full h-full object-cover"
      />
      <IconWrapper
        icon="icon-[ic--outline-delete]"
        className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 !p-2 cursor-pointer text-white !rounded-full"
        iconClassName="text-xl"
        onClick={() => onRemove(index)}
      />
    </div>
  );
};

export default UploadedImageCard;
