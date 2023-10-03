import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface ITabProps {
    children: React.ReactNode;
    name: string;
    hasArrow: boolean;
}

const Tab = (props: ITabProps) => {
    return (
        <div>
            <div>
                {props.children}
                {props.name}
            </div>
            {props.hasArrow && <FiChevronRight />}
        </div>
    );
};

export default Tab;
