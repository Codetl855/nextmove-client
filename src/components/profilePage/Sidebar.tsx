import React from "react";
import Input from "@/components/ui/Inputs/Input";
import Image from "@/components/ui/Images/Image";
import chatOne from "@/assets/img/chat-one.png";
type ChatSectionProps = {
    onChatClick?: () => void;
};
const Sidebar: React.FC<ChatSectionProps> = ({onChatClick}) => {
  return (
    <>
      {/* Search */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Search"
          className="w-full bg-white border-none"
          rightElement={<span className="icon-[iconamoon--search-thin] text-xl"></span>}
        />
      </div>

      {/* Active Avatars */}
      <div className="py-3 flex flex-col gap-2">
        <h1>Active</h1>
        <div className=" flex space-x-3  overflow-x-auto">
          {["A", "B", "C", "D", "E"].map((item, idx) => (
            <div key={idx} className="relative w-12 h-12 rounded-full">
              <Image src={chatOne} />
              <span className="absolute top-0 right-0 
                w-3 h-3 rounded-full bg-[#0AC247] 
                ring-2 ring-white">
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto mt-2">
        <div className="h-10 p-2 rounded-lg bg-white w-full flex justify-between">
          <span>Messages</span>
          <span className="text-white h-6 w-6 flex items-center justify-center bg-[#DA0B0B] rounded-full text-xs p-2">20</span>
        </div>
        {[...Array(7)].map((_, idx) => (
          <div
           onClick={onChatClick}
            key={idx}
            className="flex items-center  py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
          >
            <Image src={chatOne} className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">Michael A. Miner</p>
              <p className="text-xs text-gray-500">How are you today?</p>
            </div>
            <span className="text-xs text-gray-400">16 min ago</span>
          </div>
        ))}
      </div>
   
  </>
  );
};

export default Sidebar;
