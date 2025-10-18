import React, { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
  outerClassName?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  leftIcon,
  rightElement,
  error,
  className = "",
  outerClassName = "",
  required = false,
  ...props
}) => {
  return (
    <div className={` sm:w-auto ${outerClassName}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium ">
          {label}  {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
            {leftIcon}
          </span>
        )}
        <input
          {...props}
          className={` rounded-lg border ${error ? "border-red-500" : "border-gray-300"
            } ${leftIcon ? "pl-10" : "pl-3"} ${rightElement ? "pr-10" : "pr-3"}
          h-[48px] focus:outline-none focus:ring-2 focus:ring-aztec ${className}`}
        />
        {rightElement && (
          <span className="absolute  right-3 top-1/2 -translate-y-1/2 flex  items-center cursor-pointer">
            {rightElement}
          </span>
        )}
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
