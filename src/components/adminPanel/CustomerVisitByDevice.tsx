import { useState } from "react";
import IconWrapper from "../ui/Icons/IconWrapper";
import DeviceCard from "./DeviceCard";
import PeriodSelect from "../ui/Dropdowns/CustomSelect";
import CustomSelect from "../ui/Dropdowns/CustomSelect";

function CustomerVisitByDevice() {
    const [period, setPeriod] = useState("This Month");

    return (
        <div className="bg-white rounded-2xl  p-4 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-700 font-semibold text-sm">
                    Customer Visit by Device
                </h2>
                <CustomSelect
                    value={period}
                    onChange={setPeriod}
                    options={["This Month", "Last Month", "Last 3 Months"]}
                    className="border-gray-100 !bg-aztec-light"
                />
            </div>

            {/* Total Devices */}
            <p className="text-gray-400 mb-1 text-sm">Total Devices</p>
            <div className="flex mb-3 ">
                <p className="text-2xl font-bold">67,893</p>
                <span className="flex justify-center items-center ml-1 text-green-600 text-sm bg-green-100 rounded px-2 ">
                    ↑ 5.4%
                </span>
            </div>

            <DeviceCard
                icon="icon-[heroicons--device-phone-mobile]"
                title="Mobile"
                total="29,963"
                leftLabel="Android"
                leftValue={2543}
                rightLabel="iOS"
                rightValue={487}
                leftPercentage={70}
                percentage={70}
            />

            <DeviceCard
                icon="icon-[gg--screen] "
                title="Web"
                total="58,893"
                leftLabel="Windows"
                leftValue={3210}
                rightLabel="Mac"
                rightValue={2683}
                leftPercentage={55}
                percentage={30}
            />

        </div>
    );
}

export default CustomerVisitByDevice;
