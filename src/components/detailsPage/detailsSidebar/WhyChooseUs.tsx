import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className="bg-white rounded-xl shadow p-5 space-y-3">
            <h3 className="font-semibold ">Why Choose Us?</h3>
            <ul className="space-y-2 text-sm ">
                <li className="flex items-center gap-2">
                    <div className="icon-[ic--baseline-check] text-aztec"></div> Secure Booking
                </li>
                <li className="flex items-center gap-2">
                    <div className="icon-[ic--baseline-check] text-aztec"></div> Best Price
                    Guarantee
                </li>
                <li className="flex items-center gap-2">
                    <div className="icon-[ic--baseline-check] text-aztec"></div> Easy Booking
                    Process
                </li>
                <li className="flex items-center gap-2">
                    <div className="icon-[ic--baseline-check] text-aztec"></div> Available
                    Support 24/7
                </li>
            </ul>
        </div>
    )
}

export default WhyChooseUs