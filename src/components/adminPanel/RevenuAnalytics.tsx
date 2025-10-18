import { Chart } from "react-google-charts";
import PeriodSelect from "../ui/Dropdowns/CustomSelect";
import { useState } from "react";
import CustomSelect from "../ui/Dropdowns/CustomSelect";

const revenueAnalyticsData = [
    ["Month", "Revenue", "No. of Sales"],
    ["Jan", 20000, 15000],
    ["Feb", 25000, 18000],
    ["Mar", 30000, 20000],
    ["Apr", 28000, 21000],
    ["May", 32000, 23000],
    ["Jun", 27000, 19000],
    ["Jul", 34000, 25000],
    ["Aug", 31000, 24000],
    ["Sep", 36000, 26000],
    ["Oct", 40000, 28000],
    ["Nov", 37000, 27000],
    ["Dec", 42000, 30000],
];

const options = {
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#0DC489", "#FCCD0E"],
    chartArea: { width: "85%", height: "70%" },
};
function RevenueAnalytics() {
    const [period, setPeriod] = useState("This Month");
    return (
        <div className="bg-white p-4 rounded-2xl ">
            {/* Header with title + dropdown */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Revenue Analytics</h2>
                <CustomSelect
                    value={period}
                    onChange={setPeriod}
                    options={["This Month", "Last Month", "Last 3 Months"]}
                    className="border-gray-100 !bg-aztec-light"
                />
            </div>

            <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={revenueAnalyticsData}
                options={options}
            />
        </div>
    );
}

export default RevenueAnalytics;
