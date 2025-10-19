import React, { useState, useEffect } from "react";
import { Range } from "react-range";

interface RangeSliderProps {
    label: string;
    min: number;
    max: number;
    unit?: string;
    unitPosition?: "prefix" | "suffix";
    value?: number[]; // ✅ add this line
    onChange?: (values: number[]) => void;
}

const RangeSlider = ({
    label,
    min,
    max,
    unit,
    unitPosition = "prefix",
    value,
    onChange,
}: RangeSliderProps) => {
    // If `value` is passed from parent, use it; otherwise default to [min, max]
    const [values, setValues] = useState<number[]>(value ?? [min, max]);

    // When parent value changes, sync it locally
    useEffect(() => {
        if (value) setValues(value);
    }, [value]);

    const handleChange = (vals: number[]) => {
        setValues(vals);
        onChange?.(vals);
    };

    const formatValue = (val: number) => {
        if (!unit) return val.toLocaleString();
        return unitPosition === "prefix"
            ? `${unit}${val.toLocaleString()}`
            : `${val.toLocaleString()} ${unit}`;
    };

    return (
        <div className="bg-aztec-light flex flex-col gap-4 p-6 h-38 rounded-xl">
            {/* Label and dynamic value */}
            <div className="flex justify-between mb-2">
                <span className="font-bold">{label}</span>
                <span className="font-bold">
                    {`${formatValue(values[0])} - ${formatValue(values[1])}`}
                </span>
            </div>

            {/* Range track */}
            <Range
                step={1000}
                min={min}
                max={max}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                    <div {...props} className="h-2 w-full bg-white rounded relative">
                        <div
                            className="h-2 bg-aztec rounded absolute"
                            style={{
                                left: `${((values[0] - min) / (max - min)) * 100}%`,
                                width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="w-4 h-4 bg-aztec border-2 border-aztec rounded-full shadow cursor-pointer focus:outline-none focus:ring-3 focus:ring-white"
                    />
                )}
            />

            {/* Min & Max labels */}
            <div className="flex justify-between text-sm">
                <span className="bg-white px-2 py-1 rounded">
                    {values[0].toLocaleString()}
                </span>
                <span className="bg-white px-2 py-1 rounded">
                    {values[1].toLocaleString()}
                </span>
            </div>
        </div>
    );
};

export default RangeSlider;
