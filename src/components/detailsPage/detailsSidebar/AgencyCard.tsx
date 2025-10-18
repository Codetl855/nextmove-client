import React from 'react'
import realEstateImage from "@/assets/img/realestate.png"
import IconWrapper from '@/components/ui/Icons/IconWrapper'
import Hr from '@/components/ui/Divider/Hr'
import Image from '@/components/ui/Images/Image'


const AgencyCard = () => {
    return (
        <div className="bg-white rounded-xl shadow p-5 text-center space-y-3">
            <div className="flex justify-center">
                <Image
                    src={realEstateImage}
                    alt="Agency Logo"
                    className="w-12 h-12 !object-fill !rounded-none"
                />
            </div>
            <h2 className="text-lg font-semibold">Real Estate</h2>
            <p className="text-gray-500 text-sm">Agency</p>

            <div className="flex justify-center gap-3">
                <IconWrapper icon="icon-[ic--baseline-mail-outline]" iconClassName="!text-black" label="Email" />
                <IconWrapper icon="icon-[ic--outline-wifi-calling-3]" iconClassName="!text-black" label="Call" />
                <IconWrapper icon="icon-[ic--baseline-whatsapp]" iconClassName="!text-black" label="" />
            </div>
            <Hr />
            <a
                href="#"
                className="text-sm text-aztec hover:underline font-medium block"
            >
                View All Properties
            </a>
        </div>

    )
}

export default AgencyCard