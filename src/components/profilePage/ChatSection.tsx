import React from "react";
import Input from "@/components/ui/Inputs/Input";
import Image from "@/components/ui/Images/Image";
import IconWrapper from "@/components/ui/Icons/IconWrapper";
import chatOne from "@/assets/img/chat-one.png";
import message1 from "@/assets/img/message-1.png";
import ChatBody from "@/components/profilePage/ChatBody";
type ChatSectionProps = {
    onMenuClick?: () => void;
};
const ChatSection:  React.FC<ChatSectionProps>  = ({ onMenuClick }) => {

    return (
       <>

            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex gap-2">
                    <div
                        className="md:hidden mr-2 flex items-center"
                        onClick={onMenuClick}
                    >
                        <span className="icon-[mdi--menu] text-2xl text-aztec"></span>
                    </div>
                    <Image
                        src={chatOne}
                        
                    >
                    </Image>
                    <div>
                        <p className="font-small md:font-medium">Theresa T. Brose</p>
                        <div className="flex items-center gap-2">
                            <span className="
                                    w-3 h-3 rounded-full bg-[#0AC247] 
                                    ring-2 ring-white">
                            </span>
                            <p className="text-xs md:text-sm text-green-500 "> Online</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="icon-[ic--outline-phone-in-talk] text-aztec text-lg"></span>
                    <span className="text-aztec text-xs md:text-lg">Call</span>
                </div>
            </div>

            {/* Chat Body */}
            <ChatBody />

            {/* Input */}
            <div className="p-4 flex items-center w-full">
                <div className="bg-aztec p-3 py-3.5 !rounded-bl-lg rounded-tl-lg flex items-center">
                    <span className="icon-[radix-icons--face] text-xl text-white "></span>
                </div>
                <Input
                    type="text"
                    placeholder="Enter your message"
                    className="w-full !rounded-tl-none bg-white !rounded-bl-none text-sm !focus:outline-none"
                    outerClassName="md:w-full"
                />
                <IconWrapper
                    icon="icon-[ic--twotone-add-link]"
                    iconClassName="text-xl text-gray-500"
                    className="bg-white mx-2"
                />
                <IconWrapper
                    icon="icon-[cil--send]"
                    iconClassName="text-lg text-white"
                    className="!bg-[#BE9A4E]"
                />
            </div>
       
    </>
    );
};

export default ChatSection;
