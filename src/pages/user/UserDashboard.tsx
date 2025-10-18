import React, { useState } from "react";
import Tabs from "@/components/adminPanel/Tabs/Tabs";
import PropertyListing from "@/components/profilePage/PropertyListing";
import Messages from "@/components/profilePage/Messages";
import UserProfile from '@/components/profilePage/UserProfile';

const UserDashboard: React.FC = () => {

    const [activeTab, setActiveTab] = useState("listing");

    const tabs = [
        { label: "Property Listing", value: "listing" },
        { label: "History", value: "history" },
        { label: "Transactions", value: "transactions" },
        { label: "Messages", value: "messages" },
        { label: "Reviews", value: "reviews" },
    ];
    return (
        <>
        <div className="bg-gray-100 min-h-screen pt-2 md:p-6 z-20 relative">
            <h2 className="text-2xl max-w-7xl mx-auto font-semibold mb-6">Profile</h2>
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6">
            
                <UserProfile />

                <div className="mt-4 overflow-x-auto">
                    <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
                </div>
                <div className="mt-4">
                    {activeTab === "listing" && (
                        <PropertyListing active={activeTab === "listing"} />
                    )}
                    {activeTab === "messages" && (
                        <div>
                            <Messages />
                        </div>
                    )}
                </div>

            </div>
        </div>
        </>
    );
};

export default UserDashboard;
