import React from "react";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: React.ReactNode;
    className: string;
};

export const Radio: React.FC<RadioProps> = ({className, label, ...props }) => {
    return (
    
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="radio"
                className={`appearance-none  border rounded-full
                     transition duration-200 ${className}`}
                {...props}
            />
            <span className="text-sm font-medium text-gray-800">{label}</span>
        </label>
    );
};
