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
        <Link
            href={source}
            className="flex flex-col bg-white py-4 px-10 items-center m-2 rounded-md w-[200px] md:max-h-[100px] md:flex-row md:w-[300px]"
        >
            <div className="flex flex-1 text-center md:pr-4">{props.children}</div>
            <div className="flex flex-col flex-2 text-left">
                <span className="font-bold text-xl">{props.name}</span>
                <span className="hidden font-light text-sm md:flex">{props.description}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
