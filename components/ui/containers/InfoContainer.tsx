import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface IInfoContainerProps {
    text: string;
    className?: string;
}

const InfoContainer = (props: IInfoContainerProps) => {
    return (
        <div className={`${props.className} flex w-full justify-between items-center p-4`}>
            <span className="font-bold text-xl">{props.text}</span>
            <div className="text-zinc-400">
                <AiOutlineQuestionCircle />
            </div>
        </div>
    );
};

export default InfoContainer;
