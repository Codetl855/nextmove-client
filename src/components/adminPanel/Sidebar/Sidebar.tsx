
import SidebarNav from "./SidebarNav";
import logo from "../../../assets/img/logo.png";
import Image from "../../ui/Images/Image";

export default function Sidebar() {
  return (
    <>
       <div className="flex h-[80px] items-center justify-start pl-4 mb-6 border-1 border-gray-100">
            <Image src={logo} alt="Logo" className="h-12 !rounded-none"  />
            </div>
     
      <SidebarNav />
    </>
  );
}
