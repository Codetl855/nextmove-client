import React from "react";
import Image from "@/components/ui/Images/Image";
import chatOne from "@/assets/img/chat-one.png";
import message1 from "@/assets/img/message-1.png";
import message2 from "@/assets/img/message-2.png";
import message3 from "@/assets/img/message-3.png";

const ChatBody: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4.5">
                {/* Message from user */}
                <div className="text-center">
                    <span className="text-aztec text-xs md:text-sm">Yesterday</span>
                </div>
                <div className="flex gap-2 items-end">
                    <div className="relative w-12 h-12 rounded-full  ">
                        <Image
                            src={chatOne}
                        >
                        </Image>
                    </div>
                    <div className="text-sm bg-white h-16 w-full md:max-w-[464px] rounded-t-lg rounded-br-lg">

                        <div>
                            <p className="w-full px-4 py-2  inline-block">
                                Hey Gaston, how’s all going?
                                <span className="text-xs text-end text-gray-400 block mt-1">08:30</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="flex gap-2 items-end">

                    <div className="relative w-12 h-12 rounded-full  ">
                        <Image
                            src={chatOne}
                            >
                        </Image>
                    </div>

                    <div>

                        <div className="flex flex-wrap space-y-1 md:space-y-0 space-x-2">
                            <Image src={message1} className="w-32 h-24 bg-gray-200 rounded-lg" />
                            <Image src={message2} className="w-32 h-24 bg-gray-200 rounded-lg" />
                            <Image src={message3} className="w-32 h-24 bg-gray-200 rounded-lg" />
                        </div>
                        <span className="text-xs text-end text-gray-400 block mt-1">08:30</span>
                    </div>
                </div>

                {/* File */}
                <div className="flex gap-2 items-end">
                    <div className="relative w-12 h-12 rounded-full  ">
                        <Image
                            src={chatOne}
                        >
                        </Image>
                    </div>
                    <div className="bg-white p-3 pl-4 rounded-t-lg rounded-br-lg  w-full md:max-w-1/2">
                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3  justify-between ">
                                <span className="icon-[ic--baseline-upload-file] text-2xl text-aztec"></span>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium">Property Document.pdf</p>
                                    <span className="text-xs text-gray-500">2.3 MB</span>
                                </div>
                            </div>
                            <span className="icon-[ic--outline-file-download] text-aztec text-2xl cursor-pointer"></span>

                        </div>
                        <span className="text-xs text-end text-gray-400 block mt-1">08:30</span>
                    </div>
                </div>

                {/* Text message */}
                <div className="flex gap-2 items-end">
                    <div className="relative w-12 h-12 rounded-full  ">
                        <Image
                            src={chatOne}
                        >
                        </Image>
                    </div>
                    <div className="text-sm bg-white min-h-16 w-full md:max-w-[454px] rounded-t-lg rounded-br-lg">

                        <div>
                            <p className="w-full px-4 py-2  inline-block">
                                Thanks, Gaston. I appreciate your support. Overall, I'm optimistic about our team's performance.
                                <span className="text-xs text-end text-gray-400 block mt-1">08:30</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reply */}
                <div className="text-sm text-right  text-white overflow-hidden" >
                    <div className="bg-aztec px-4 py-2 max-w-[454px] rounded-lg inline-block">

                        <p className="">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </p>
                        <div className="flex justify-end items-center gap-1 mt-1">

                            <span className="text-xs block ">08:30  </span>
                            <span className="icon-[sidekickicons--check-double-20-solid] text-lg"></span>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default ChatBody;
