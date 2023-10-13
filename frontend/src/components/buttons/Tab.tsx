import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface ITabProps {
    children: React.ReactNode;
    name: string;
    hasArrow?: boolean;
    hasPoints?: boolean;
    textClass?: string;
}

const Tab = (props: ITabProps) => {
    return (
        <div className="w-full flex justify-center my-2">
            <button className="flex items-center justify-between w-full bg-white border-[1px] border-gray-300 rounded-md p-2 md:w-1/2 lg:w-1/3">
                <div className="flex items-center">
                    {props.children}
                    <span className={`${props.textClass} ml-2 text-sm`}>{props.name}</span>
                </div>
                {props.hasArrow && <FiChevronRight />}
                {props.hasPoints && <span className="bg-black text-white rounded-full px-2 font-bold text-sm">+5</span>}
            </button>
        </div>
    );
};

export default Tab;
