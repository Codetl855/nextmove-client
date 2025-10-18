import React from "react";

import bgImage from "../assets/img/signin-bg.png";
import logo from "../assets/img/logo.png";
import Image from "../components/ui/Images/Image";

type AuthLayoutProps = {
    children: React.ReactNode;
    backgroundImage?: string;
    logoUrl?: string;
    logoAlt?: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    backgroundImage = bgImage,
    logoUrl = logo,
    logoAlt = "Company Logo"
}) => {
    return (
        <div className="h-auto min-h-full flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center kenburns"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="fixed  inset-0 bg-black/50"></div>
            <div className="relative z-10 bg-white rounded-2xl  p-6 w-full max-w-sm overflow-y-auto">
                <div className="flex justify-center mb-6">
                    <Image src={logoUrl} alt={logoAlt} className="h-[68px]" />
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;