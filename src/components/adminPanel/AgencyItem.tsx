import Image from "../ui/Images/Image";

interface AgencyItemProps {
  logo: string;
  name: string;
  email: string;
  date: string;
}

function AgencyItem({ logo, name, email, date }: AgencyItemProps) {
  return (
    <div className="flex flex-wrap items-center justify-between bg-aztec-light h-[64px] px-3 rounded-xl">
      <div className="flex items-center gap-3">
        <Image src={logo} alt={name} className="w-8 h-8 rounded-full " />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-gray-400 text-sm">{email}</div>
        </div>
      </div>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  );
}

export default AgencyItem;
