import React from "react";
import Button from "../Button";

const SecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`border border-aztec text-aztec w-full !h-[48px] hover:bg-aztec hover:text-white ${className}`}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;