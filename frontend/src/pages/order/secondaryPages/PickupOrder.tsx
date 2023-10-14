import React from "react";
import BackBtn from "../../../components/buttons/BackBtn";
import OrderCard from "../components/OrderCard";

interface IPickupOrderProps {
    city: string;
}

const PickupOrder = (props: IPickupOrderProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <BackBtn path="/store-pickup" />
            {/* TODO: THIS VALUE NEEDS TO COME FROM STATE STORE  */}
            <span className="font-bold text-xl">{props.city}</span>
            <div className="w-full flex flex-col items-center justify-center">
                <span className="font-bold text-center">
                    How would you like to <br /> pick up your order?
                </span>
                <OrderCard />
            </div>
        </div>
    );
};

export default PickupOrder;
