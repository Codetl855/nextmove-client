import React from "react";
import Image from "../ui/Images/Image";

type BenefitProps = {
    title?: string;
    description?: string;
    className?: string;
    imgSrc?: any;
};

const Benefit: React.FC<BenefitProps> = ({ title, description, className = "", imgSrc, ...props }) => {
    return (
        <div className="flex bg-white rounded-3xl px-6 py-8 items -start gap-4">
            <div className="flex min-w-16 items-start">
                <Image
                    src={imgSrc}
                    alt={title}
                    className="h-14 w-14"
                />
            </div>
            <div>
                <h3 className="text-2xl mb-1">{title}</h3>
                <p className="text-gray-400 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Benefit;