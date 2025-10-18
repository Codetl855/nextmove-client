
import React from "react";
import Image from "@/components/ui/Images/Image";

type PropertyProps = {
    name?: string;
    size?: string;
    beds?: number;
    baths?: number;
    price?: string;
    user?: string;
    userImg?: string;
    className?: string;
    imgSrc?: any;
};
const Property: React.FC<PropertyProps> = ({ name, size, beds, baths, price, user, userImg, className = "", imgSrc, ...props }) => {
    return (<>
        <div
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden relative"
        >
            <button className="rounded-full bg-white p-3 leading-[0px] absolute top-3 right-3">
                <span className="icon-[solar--heart-bold] text-2xl text-gray-100"></span>
            </button>
            <Image
                src={imgSrc}
                alt={name}
                className="w-full h-66 !rounded-none object-cover"
            />
            <div className="p-4">
                <div className="p-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold mb-2 mx-auto size-fit">
                        {name}
                    </h3>
                </div>

                <div className="p-4 border-b border-gray-100 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex">
                        <span className="icon-[fluent--arrow-move-inward-20-regular] text-2xl text-aztec  inline-block mr-2"></span>
                        <span className="text-black">{size}</span>
                    </div>
                    <div className="flex">
                        <span className="icon-[bx--bed] text-2xl text-aztec  inline-block mr-2"></span>
                        <span className="text-black">{beds} Beds</span>
                    </div>
                    <div className="flex">
                        <span className="icon-[la--bath] text-2xl text-aztec  inline-block mr-2"></span>
                        <span className="text-black">{baths} Baths</span>
                    </div>
                </div>
                <div className="py-4 flex justify-between">
                    <div className="flex items-center">
                        <Image
                            src={userImg}
                            alt={user}
                            className="h-[34px] w-[34px] !rounded-none inline-block mr-2"
                        />
                        <span className="text-black">{user}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-aztec font-semibold">{price}</span>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Property;