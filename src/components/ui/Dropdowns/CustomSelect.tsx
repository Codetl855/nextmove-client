import React, { useState } from "react";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
  error?: string;
  rightIcon?: string;
  dashboard?: boolean;
  outerClassName?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  rightIcon,
  options,
  error,
  className = "",
  dashboard,
  outerClassName = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${outerClassName}`}>
      {/* Select Field */}
      <div
        onClick={() => setOpen(!open)}
        className={`md:px-4 py-2 text-left gap-2 rounded-lg border flex items-center justify-between bg-white text-gray-700 cursor-pointer
          ${error ? "border-red-500 focus:border-red-500" : "border-gray-300"}
          ${className}`}
      >
        {rightIcon && <span className={rightIcon}></span>}
        <span className={`${dashboard ? "hidden md:block" : ""}`}>
          {value || "Select"}
        </span>
        <div
          className={`icon-[ic--baseline-keyboard-arrow-down] ml-3 items-center ${
            dashboard ? "hidden md:block" : ""
          }`}
        ></div>
      </div>

      {/* Dropdown Options */}
      {open && (
        <div className="absolute border-t-0 min-w-full border border-gray-300 bg-white rounded-md p-2 z-50 flex flex-col gap-2 shadow-lg">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer rounded-md bg-aztec-light text-start whitespace-nowrap hover:bg-gray-100"
            >
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};

export default CustomSelect;
