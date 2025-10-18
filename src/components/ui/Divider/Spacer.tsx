import React from "react";

type SpacerProps = {
    children?: React.ReactNode;
    size?: string;
    className?: string;
};

export const Spacer: React.FC<SpacerProps> = ({
    children,
    size = "",
    className = "",
}) => {
    return (
        <div className={`flex items-center gap-4 ${size} ${className}`}>
            {children}
        </div>
    );
};
