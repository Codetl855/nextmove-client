import React from "react";

type LegendItem = {
  label: string;
  color: string; // Tailwind color classes like bg-purple-500
};

type ChartLegendProps = {
  items: LegendItem[];
  className?: string;
};

const ChartLegend: React.FC<ChartLegendProps> = ({ items, className = "" }) => {
  return (
    <div className={`flex gap-4 text-sm justify-center mb-2 ${className}`}>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <span className={`h-3 w-3 rounded-full inline-block ${item.color}`}></span>
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default ChartLegend;
