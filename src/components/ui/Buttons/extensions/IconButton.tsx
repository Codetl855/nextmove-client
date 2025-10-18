import React from "react";
import Button from "@/components/ui/Buttons/Button";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  label: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  className = "",
  ...props
}) => {
  return (
    <Button
      {...props}
      type="button"
      aria-label={label}
      title={label}
      className={`bg-white/50 h-10 w-10 !p-0 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center ${className}`}
    >
      {icon}
    </Button>
  );
};

export default IconButton;