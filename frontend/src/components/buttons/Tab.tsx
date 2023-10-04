import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface ITabProps {
    children: React.ReactNode;
    name: string;
    hasArrow: boolean;
}

const Tab = (props: ITabProps) => {
    return (
        <div className="w-full flex justify-center my-2">
            <button className="flex w-full bg-white border-[1px] border-gray-300 rounded-md p-2 lg:w-1/3">
                <div className="flex items-center">
                    {props.children}
                    <span className="ml-2 text-sm">{props.name}</span>
                </div>
                {props.hasArrow && <FiChevronRight />}
            </button>
        </div>
    );
};

export default Tab;
