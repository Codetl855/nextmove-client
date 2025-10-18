import React from "react";
import Button from "@/components/ui/Buttons/Button";

interface DropdownItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ icon, label, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex gap-2 items-center w-full !px-4 !py-2 text-gray-700 hover:bg-gray-100 rounded-none"
    >
      <span className={`${icon} text-aztec text-xl`} />
      {label}
    </Button>
  );
};

export default DropdownItem;
