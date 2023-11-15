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
            className="flex bg-white py-4 px-10 justify-start items-center m-2 rounded-md w-full md:max-h-[100px] md:flex-row md:w-[300px]"
        >
            <div className="flex text-center md:text-center md:flex-1 md:pr-4">{props.children}</div>
            <div className="flex flex-col ml-4 text-left md:flex-2 md:ml-0">
                <span className="font-bold text-lg md:text-xl">{props.name}</span>
                <span className="font-light text-xs md:flex">{props.description}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
