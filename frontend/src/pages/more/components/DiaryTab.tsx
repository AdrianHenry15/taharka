import React from "react";
import { Link } from "react-router-dom";

interface IDiaryTabProps {
    children: React.ReactNode;
    text: string;
    containerClassName?: string;
}

const DiaryTab = (props: IDiaryTabProps) => {
    const link = props.text.toLowerCase().replace(" ", "-");
    return (
        <Link to={link}>
            <div
                className={`${props.containerClassName} flex flex-col items-center border-solid border-b-4 border-black p-2 mx-2 min-w-[80px]`}
            >
                <div className="flex flex-col items-center">
                    {props.children}
                    <span className="text-xs">{props.text}</span>
                </div>
            </div>
        </Link>
    );
};

export default DiaryTab;
