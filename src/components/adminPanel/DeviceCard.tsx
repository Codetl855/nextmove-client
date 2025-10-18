
import IconWrapper from "../ui/Icons/IconWrapper";
interface DeviceCardProps {
  icon: string;
  title: string;
  total: string;
  leftLabel: string;
  leftValue: number | string;
  rightLabel: string;
  rightValue: number | string;
  leftPercentage: number;
  percentage: number;
}

function DeviceCard({
  icon,
  title,
  total,
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  leftPercentage,
  percentage,
}: DeviceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 w-full mt-2">
      <div className="flex gap-2">
        <IconWrapper icon={icon} className="w-[44px] h-[44px]" iconClassName="text-3xl text-aztec" />
        <div>
          <h2 className="text-gray-600 text-sm ">{title}</h2>
          <div className="flex gap-2">
            <p className="text-gray-900 font-semibold text-base mb-4">{total}</p>
            <p className="text-aztec font-semibold text-base mb-4">({percentage})%</p>
          </div>

        </div>
      </div>

      {/* Left + Right values below */}
      <div className="flex justify-between text-xs text-[#949494] mt-2">
        <div>
          <p className="font-medium">{leftLabel}</p>
          <p className="text-aztec font-semibold">{leftValue}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{rightLabel}</p>
          <p className="text-aztec font-semibold">{rightValue}</p>
        </div>
      </div>

      {/* Shared progress bar */}
      <div className="flex w-full h-3 rounded-xl overflow-hidden mt-2 gap-[2px]">
        <div
          className="bg-[#5CC184] rounded-xl"
          style={{ width: `${leftPercentage}%` }}
        ></div>
        <div className="bg-black flex-1 rounded-xl"></div>
      </div>
    </div>
  );
}

export default DeviceCard;
