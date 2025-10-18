import React from "react";
import { Spacer } from "./Spacer";

type DividerProps = {
    text?: string;
    className?: string;
};

export const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
    if (!text) {
        return <Spacer className={className} />;
    }

    return (
        <Spacer className={className}>
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">{text}</span>
            <hr className="flex-1 border-gray-300" />
        </Spacer>
    );
};
