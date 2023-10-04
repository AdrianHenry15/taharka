import React from "react";

interface IOrderCardProps {
    children: React.ReactNode;
    type: string;
}

const OrderCard = (props: IOrderCardProps) => {
    return (
        <div className="flex flex-col items-center flex-1 md:py-44 lg:py-44 py-16 bg-white m-2 rounded-lg cursor-pointer mb-10 shadow-sm">
            {props.children}
            <span className="font-bold ">{props.type}</span>
        </div>
    );
};

export default OrderCard;
