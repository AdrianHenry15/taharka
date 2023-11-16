import { useAuthSession } from "@/hooks/useAuthSession";
import Link from "next/link";
import React from "react";

interface IOrderCardProps {
    children: React.ReactNode;
    name: string;
    description: string;
}

const OrderCard = (props: IOrderCardProps) => {
    const source = props.name.toLowerCase().replace(" ", "-");
    const session = useAuthSession(source);
    return (
        <Link
            onClick={() => session}
            href={source}
            className="flex bg-white my-2 mx-10 p-4 rounded-md self-center max-w-[300px] md:w-[300px]"
        >
            <div className="mr-10">{props.children}</div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">{props.name}</span>
                <span className="font-light text-xs">{props.description}</span>
            </div>
        </Link>
    );
};

export default OrderCard;
