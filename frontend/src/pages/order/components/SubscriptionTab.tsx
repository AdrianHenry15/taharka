import React from "react";
import { Link } from "react-router-dom";

interface ISubscriptionTabProps {
    children: React.ReactNode;
    title: string;
    description: string;
    path: string;
}

const SubscriptionTab = (props: ISubscriptionTabProps) => {
    return (
        <Link to={props.path} className="flex items-center bg-white rounded-lg p-2 my-4">
            <div>{props.children}</div>
            <div className="flex flex-col px-4">
                <span className="font-bold text-lg">{props.title}</span>
                <span className="text-sm">{props.description}</span>
            </div>
        </Link>
    );
};

export default SubscriptionTab;
