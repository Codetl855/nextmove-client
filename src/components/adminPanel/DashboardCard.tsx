import MiniBarChart from "../../components/adminPanel/MiniBarChart";
import IconWrapper from "../ui/Icons/IconWrapper";

type DashboardCardProps = {
    icon: string;
    title: string;
    value: string;
    percentage: string;
    chartData: any[];
    up: boolean
};

function DashboardCard({up, icon, title, value, percentage, chartData }: DashboardCardProps) {
    return (
        <div className="grid grid-cols-2 bg-white rounded-2xl  p-4 flex min-h-[178px]">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-between">
                <IconWrapper icon={icon} className="w-14 h-14" iconClassName="text-3xl text-aztec" />

                <div>
                    <span className="text-gray-500 text-sm block">{title}</span>
                    <div className="flex items-center ">
                        <span className="text-2xl font-bold block">{value}</span>
                     {
                        up ?
                           <div className="text-green-600 bg-green-100 rounded-md flex items-center ml-2 p-1">
                    
                            <span className="icon-[bi--arrow-up] text-[15px]"></span>
                            <span className=" text-xs   ">
                                {percentage}
                            </span>
                        </div>
                        : 
                           <div className="text-[#DA0B0B] bg-[#FBE2E2] rounded-md flex items-center ml-2 p-1">
                    
                            <span className="icon-[teenyicons--arrow-down-outline]"></span>
                            <span className=" text-xs   ">
                                {percentage}
                            </span>
                        </div>
                     }

                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="max-w-full h-[120px]">
                <MiniBarChart chartData={chartData} />
            </div>
        </div>
    );
}

export default DashboardCard;
