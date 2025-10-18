import React from 'react'

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
}

const Tabs = ({ tabs, active, onChange }: TabsProps) => {
  return (
     <div className="flex gap-6 border-b border-aztec-light mb-4 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`pb-2 transition ${
            active === tab.value
              ? "text-aztec border-b-2 border-aztec"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tabs