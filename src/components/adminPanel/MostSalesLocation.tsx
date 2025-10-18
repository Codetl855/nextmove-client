import Chart from "react-google-charts";
import PeriodSelect from "../ui/Dropdowns/CustomSelect";
import { useState } from "react";
import CustomSelect from "../ui/Dropdowns/CustomSelect";

const data = [
  ["Lat", "Long", "Sales", { role: "tooltip", type: "string" }],
  [24.7136, 46.6753, 5000, "Riyadh: 5000"],
  [21.4858, 39.1925, 4000, "Jeddah: 4000"],
  [25.276987, 55.296249, 3500, "Dubai: 3500"],
  [25.286106, 51.534817, 3000, "Doha: 3000"],
  [29.3759, 47.9774, 2500, "Kuwait City: 2500"],
  [26.2285, 50.5860, 2000, "Bahrain: 2000"],
  [23.5880, 58.3829, 1800, "Muscat: 1800"],
];

const options = {
  displayMode: "markers",
  region: "145", // Western Asia (Middle East)
  colorAxis: { colors: ["#f59e0b"] },
  backgroundColor: "transparent",
  datalessRegionColor: "#f3f4f6",
  legend: "none",
};


function MostSalesLocation() {
    const [period, setPeriod] = useState("Saudi Arabia");
  return (
    <div className="bg-white rounded-2xl h-full  p-4 w-full"> {/* full width */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold text-sm">Most Sales Location</h2>
      <CustomSelect
                    value={period}
                    onChange={setPeriod}
                    options={["Saudi Arabia", "UAE", "Qata"]}
                    className="border-gray-100 !bg-aztec-light"
                />
        </div>        

      <div className="w-full h-[400px]"> {/* make chart fill parent */}
        <Chart
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
   
  );
}

export default MostSalesLocation;
