import Link from "next/link";
import React from "react";

interface IOrderCardProps {
    children: React.ReactNode;
    name: string;
    description: string;
}

const OrderCard = (props: IOrderCardProps) => {
    const source = props.name.toLowerCase().replace(" ", "-");
    return (
        <Link href={source} className="flex bg-white py-4 px-10 items-center m-2 rounded-md w-3/5 justify-between">
            <div className="flex flex-1 text-center">{props.children}</div>
            <div className="flex flex-col flex-1 text-center">
                <span className="font-bold">{props.name}</span>
                <span className="hidden md:flex">{props.description}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
