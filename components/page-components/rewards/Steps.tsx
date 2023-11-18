import React from "react";

interface IStepsProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

const Steps = (props: IStepsProps) => {
    return (
        <div className="flex flex-col flex-1 justify-center items-center md:px-10">
            <div className="text-center rounded-full bg-pink-200 p-4 my-10">{props.children}</div>
            <div className="flex flex-col justify-center items-center">
                <span className="font-semibold text-xl">{props.title}</span>
                <span className="text-center font-light p-4 text-sm">{props.description}</span>
            </div>
        </div>
    );
};

export default Steps;
