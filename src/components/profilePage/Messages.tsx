import React, { useState } from "react";

import Sidebar from "@/components/profilePage/Sidebar";
import ChatSection from "@/components/profilePage/ChatSection";


const Messages: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-[93vh] w-full gap-4 overflow-hidden">
            {/* Sidebar as overlay on mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
                    <div className="absolute left-0 top-0 h-full w-3/4 bg-aztec-light p-4">

                        <Sidebar onChatClick={() => setSidebarOpen(false)} />
                    </div>
                </div>
            )}

            <div className="hidden w-1/3 border-r border-none p-4 rounded-xl bg-aztec-light md:flex flex-col">
                <Sidebar />
            </div>



            <div className="flex-1  flex flex-col bg-aztec-light rounded-xl w-full">
                <ChatSection onMenuClick={() => setSidebarOpen(true)} />
            </div>

        </div>
    );

};

export default Messages;
