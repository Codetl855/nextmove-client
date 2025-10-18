import React from "react";
import Image from "../ui/Images/Image";

type ServiceProps = {
    service?: string;
    description?: string;
    className?: string;
    imgSrc?: any;
};

const Service: React.FC<ServiceProps> = ({ service, description, className = "", imgSrc, ...props }) => {
    return (
        <div
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden text-center p-6"
        >
            <Image
                src={imgSrc}
                alt={service}
                className="h-40 lg:h-70 mx-auto mb-4"
            />
            <h3 className="font-semibold text-2xl mb-2">{service}</h3>
            <p className="text-gray-400 text-base">
                {description}
            </p>
        </div>
    );
};

export default Service;