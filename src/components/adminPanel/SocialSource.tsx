import { Chart } from "react-google-charts";
import PeriodSelect from "../ui/Dropdowns/CustomSelect";
import { useState } from "react";
import ChartLegend from "../ui/Legend/ChartLegend";
import CustomSelect from "../ui/Dropdowns/CustomSelect";

const data = [
    ["Source", "Percentage"],
    ["Buyers", 25],
    ["Visitors", 35],
    ["Leads", 20],
    ["Views", 20],
];

const options = {
    pieHole: 0.7,
    pieSliceText: "none",
    legend: "none", // hide default legend
    colors: ["#988AFC", "#6FD195", "#FFAE4C", "#7086FD"],
    chartArea: { width: "100%", height: "100%" },
};

function SocialSource() {
    const [period, setPeriod] = useState("This Month");

    return (
        <div className="bg-white flex flex-col items-center p-4 h-full rounded-2xl ">
            {/* Header with title + dropdown */}
            <div className="w-full flex justify-between items-center mb-2">
                <h2 className="font-semibold">Social Source</h2>
                <CustomSelect
                    value={period}
                    onChange={setPeriod}
                    options={["This Month", "Last Month", "Last 3 Months"]}
                    className="border-gray-100 !bg-aztec-light"

                />
            </div>

            <ChartLegend
                items={[
                    { label: "Buyers", color: "bg-purple-500" },
                    { label: "Visitors", color: "bg-green-500" },
                    { label: "Leads", color: "bg-yellow-500" },
                    { label: "Views", color: "bg-blue-500" },
                ]}
            />

            {/* Chart with overlay text */}
            <div className="relative flex items-center justify-center mt-4">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="250px"
                    data={data}
                    options={options}
                />
                {/* Overlay Center Text */}
                <div className="absolute text-center max-w-20 flex flex-col items-center justify-center">
                    <div className="text-2xl text-gray-500 text-wrap">Active Campaign</div>
                    <div className="text-4xl font-bold">25</div>
                </div>
            </div>
        </div>
    );
}

export default SocialSource;
