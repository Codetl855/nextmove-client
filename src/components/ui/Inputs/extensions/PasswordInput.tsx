import React, { useState } from "react";
import Input from "../Input";

type PasswordInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
  error?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ label,error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    
    <Input
      label={label}
      {...props}
      type={showPassword ? "text" : "password"}
      leftIcon={<span className="icon-[ic--outline-lock] w-4 h-4" />}
      rightElement={
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="icon-[ic--outline-remove-red-eye] text-gray-500 w-4 h-4 cursor-pointer"
        />
      }
      error={error}
    />
   
  );
};

export default PasswordInput;