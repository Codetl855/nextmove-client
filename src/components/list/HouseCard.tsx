import React from 'react'
import Hr from '../ui/Divider/Hr';
import RealEstateImage from "../../assets/img/realestate.png"
import IconWrapper from '../ui/Icons/IconWrapper';
import { useNavigate } from 'react-router-dom';
import CardPerson from "../../assets/img/card-person.png"
import Image from '../ui/Images/Image';

type HouseCardProps = {
    image: string;
    title: string;
    address: string;
    sqft: string;
    iconClass: string;
    beds: number;
    baths: number;
    agent: string;
    price: string;
    photosCount?: number;
    layout: string;
    className: string;
};

const HouseCard: React.FC<HouseCardProps> = ({
    image,
    title,
    address,
    sqft,
    beds,
    baths,
    agent,
    iconClass,
    price,
    className,
    photosCount = 0,
    layout
}) => {

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate("/detailspage")} className={`bg-white rounded-lg shadow-sm  grid grid-cols-1  gap-2 w-full 
        ${layout === 'list' ? "md:grid-cols-3" : "grid-cols-1"}
        `}>
            {/* Image */}
            <div className="relative flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    className={`object-cover 
                    ${layout === "list" ? "w-full h-54 md:h-full  md:rounded-tl-xl md:rounded-bl-xl" : "rounded-t-xl w-full h-54"}`}
                />
                {photosCount > 0 && (

                    <span className="absolute bottom-2 flex items-center gap-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                        <span className='icon-[ic--outline-camera-alt]'></span> {photosCount} Photos
                    </span>
                )}
                <div className=' absolute top-2 right-2 '>
                    <IconWrapper icon={iconClass}
                        className={`z-50  h-12 w-12 bg-white !rounded-full`}
                        iconClassName={`h-6 w-6  ${className}  `} />
                </div>

            </div>

            {/* Details */}
            <div className={`relative flex flex-col p-4 justify-between flex-1
                ${layout === 'list' ? "col-span-2" : ""}
                `}>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h3 className="text-lg font-bold">{title}</h3>
                            <p className="flex items-center gap-2 text-sm text-gray-500"><span className='icon-[fluent--location-16-regular] text-aztec text-xl'></span> {address}</p>
                        </div>

                    </div>
                    <Hr />
                    <div className={`${layout === 'grid' ? "justify-between" : "gap-2 lg:gap-18"}  flex `}>
                        <span className='flex items-center gap-1'><span className='icon-[fluent--arrow-move-inward-20-regular] text-aztec text-xl'></span> {sqft}</span>
                        <span className='flex items-center gap-1'><span className='icon-[bx--bed] text-aztec text-xl'></span>  {beds} Beds</span>
                        <span className='flex items-center gap-1'><span className='icon-[la--bath] text-aztec text-xl'></span>  {baths} Baths</span>
                    </div>
                </div>
                <Hr />
                <div className="flex justify-between items-center ">
                    <div className='flex items-center gap-4'>
                        <Image src={CardPerson} className='h-10 w-10 rounded-full' />
                        <p className="">{agent}</p>
                    </div>
                    <p className="text-lg font-bold text-aztec">{price}</p>
                </div>
                <Hr />
                <p className='text-gray-500'>Added: 22 hours ago</p>
                <Image src={RealEstateImage} className={`absolute right-4 text-6xl text-gray-400
                    ${layout === "list" ? "lg:top-4 " : "bottom-4"}
                    `}></Image>
            </div>
        </div>
    )
}

export default HouseCard