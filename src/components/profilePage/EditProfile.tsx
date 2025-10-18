import React, { useState } from "react";
import Hr from "@/components/ui/Divider/Hr";
import Input from "@/components/ui/Inputs/Input";
import Button from "@/components/ui/Buttons/Button";
import Tabs from "@/components/adminPanel/Tabs/Tabs";
import PropertyListing from "@/components/profilePage/PropertyListing";
import EditProfileForm, { EditProfileFormData } from "@/components/forms/EditProfileForm";
import Image from "@/components/ui/Images/Image";
import Messages from "@/components/profilePage/Messages";


interface ProfilePageProps {
    name: string;
    address: string;
    phone: string;
    email: string;
    image: string;
}


const EditProfile: React.FC<ProfilePageProps> = ({
    name,
    address,
    phone,
    email,
    image,
}) => {
    const [activeTab, setActiveTab] = useState("listing");
 
    const tabs = [
        { label: "Property Listing", value: "listing" },
        { label: "History", value: "history" },
        { label: "Transactions", value: "transactions" },
        { label: "Messages", value: "messages" },
        { label: "Reviews", value: "reviews" },
    ];
    return (
        <div className="bg-gray-100 min-h-screen pt-2 md:p-6 z-20 relative">
            <h2 className="text-2xl max-w-5xl mx-auto font-semibold mb-6">Profile</h2>

            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
                <div className="flex md:items-start items-center flex-col md:flex-row gap-6 pb-4">
                    <div className="relative md:!min-w-48 h-54">
                        <Image
                            src={image}
                            alt="profile"
                            className="w-48 h-54 rounded-lg object-cover"
                        />

                        <Button
                            className="absolute top-2 right-2 bg-white/50 h-10 w-10 cursor-pointer !rounded-full flex items-center justify-center !p-2 shadow-md hover:bg-gray-100"
                        >
                            <span className="icon-[mdi--pencil] text-gray-600 text-lg"></span>
                        </Button>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className=" text-aztec flex items-center gap-1">
                            <span className="icon-[fluent--location-16-regular] text-lg text-aztec"></span>

                            {address}
                        </p>
                        <Hr />
                    </div>
                </div>


                <div className="mt-4 overflow-x-auto">
                    <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "listing" && (
                        <div>
                            <PropertyListing />
                        </div>
                    )}
                    {activeTab === "messages" && (
                        <div>
                            <Messages />
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default EditProfile;
