import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
      <span className="relative inline-flex items-center justify-center w-6 h-6">
        <input
          {...props}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`peer appearance-none w-6 h-6 border-2 border-gray-400 rounded-full cursor-pointer transition-all
            checked:border-aztec checked:bg-aztec focus:ring-2 focus:ring-aztec/30 ${className}`}
        />
        {/* ✅ CSS-based tick mark */}
        <svg
          className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
