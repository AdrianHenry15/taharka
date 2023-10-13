import React from "react";
import { Link } from "react-router-dom";

interface IOrderCardProps {
    children: React.ReactNode;
    text: string;
}

const OrderCard = (props: IOrderCardProps) => {
    const path = props.text.toLowerCase().replace(" ", "-");
    return (
        <Link
            className="flex flex-col items-center flex-1 md:py-44 lg:py-44 py-16 bg-white m-2 rounded-lg cursor-pointer mb-10 shadow-sm"
            to={path}
        >
            <div className="flex flex-col items-center">
                {props.children}
                <span className="font-bold ">{props.text}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
