import Link from "next/link";
import React from "react";

interface IOrderCardProps {
    children: React.ReactNode;
    text: string;
    path: string;
}

const OrderCard = (props: IOrderCardProps) => {
    return (
        <Link
            className="flex flex-col items-center flex-1 md:py-44 lg:py-44 py-16 bg-white m-2 rounded-lg cursor-pointer mb-10 shadow-sm"
            href={props.path}
        >
            <div className="flex flex-col items-center">
                {props.children}
                <span className="font-bold ">{props.text}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
