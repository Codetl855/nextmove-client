import React from "react";
import Image from "@/components/ui/Images/Image";

type BlogItemProps = {
    category?: string;
    title?: string;
    date?: string;
    minutes?: number;
    className?: string;
    imgSrc?: any;
};

const BlogItem: React.FC<BlogItemProps> = ({ category, title, date, minutes, className = "", imgSrc, ...props }) => {
    return (
        <div
            className="bg-white rounded-3xl relative border border-gray-100 overflow-hidden"
        >
            <div
                className="rounded-3xl font-semibold overflow-hidden bg-white/75 px-8 py-3 absolute left-3 top-3"
            >
                {category}
            </div>
            <Image
                src={imgSrc}
                alt="Blog 1"
                className="w-full h-65 object-cover !rounded-none"
            />
            <div className="p-4">
                <div className="px-4 py-2">
                    <div className="flex gap-4">
                        <div
                            className="flex items-center mb-4 pr-4 border-gray-100 border-r"
                        >
                            <span className="icon-[cuida--calendar-outline] inline-block mr-2 text-aztec text-lg"></span>
                            <span className="text-gray-400 text-sm">{date}</span>
                        </div>

                        <div className="flex items-center mb-4">
                            <span className="icon-[ic--outline-timer] inline-block mr-2 text-aztec text-lg"></span>
                            <span className="text-gray-400 text-sm">{minutes} Min Read</span>
                        </div>
                    </div>

                    <p className="text-black text-lg mb-4">
                        {title}
                    </p>
                    <a
                        className="text-aztec text-base font-semibold flex items-center"
                        href="#"
                    >
                        Learn More
                        <span className="icon-[mingcute--arrow-right-line] ml-1 text-lg"></span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default BlogItem;