import React from "react";
import Button from "../Button";

const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`bg-aztec text-white !h-[48px] w-full ${className}`}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
