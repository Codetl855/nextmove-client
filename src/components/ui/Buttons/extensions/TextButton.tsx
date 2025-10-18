import React from "react";
import Button from "../Button";

const TextButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`bg-white text-aztec hover:bg-yellow-50 ${className}`}
    >
      {children}
    </Button>
  );
};

export default TextButton;