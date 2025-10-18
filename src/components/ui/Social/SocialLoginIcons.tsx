import React from "react";
import Button from "../Buttons/Button";

type SocialIcon = {
    src: string; // will now hold the className for the icon instead of an image URL
    alt: string;
    onClick?: () => void;
};

type SocialLoginIconsProps = {
    icons: SocialIcon[];
};

const SocialLoginIcons: React.FC<SocialLoginIconsProps> = ({ icons }) => {
    return (
        <div className="flex justify-between ">
            {icons.map((icon, idx) => (
                <div
                    key={idx}
                    
                    
                    className="w-[48px] h-[48px] cursor-pointer flex items-center justify-center bg-gray-100 !rounded-full transition-colors"
                    aria-label={`Login with ${icon.alt}`}
                >
                    <span className={`${icon.src} text-2xl`} aria-hidden="true"></span>
                </div>
            ))}
        </div>
    );
};

export default SocialLoginIcons;
