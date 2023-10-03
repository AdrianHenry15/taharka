import React from "react";

interface IOrderCardProps {
    children: React.ReactNode;
    type: string;
}

const OrderCard = (props: IOrderCardProps) => {
    return (
        <div className="flex flex-col items-center flex-1 py-24 bg-white m-2 rounded-lg cursor-pointer">
            {props.children}
            <span className="font-bold ">{props.type}</span>
        </div>
    );
};

export default OrderCard;
