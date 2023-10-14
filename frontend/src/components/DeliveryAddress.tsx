import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "./inputs/SearchBar";
import { Link } from "react-router-dom";

interface IDeliveryAddressProps {
    returnPath: string;
    onClick?: () => void;
}

const DeliveryAddress = (props: IDeliveryAddressProps) => {
    return (
        <div className="bg-white w-full h-full rounded-lg px-4 flex flex-col items-center slide-in origin-bottom">
            <div className="flex items-center justify-center w-full">
                <Link to={props.returnPath} className="left-2 fixed">
                    <AiOutlineClose />
                </Link>
                <span className="font-bold">Delivery Address</span>
            </div>
            <span className="self-start mt-4 font-bold">Saved Addresses</span>
            <SearchBar containerClass="bg-zinc-300" inputClass="bg-zinc-300" placeHolder="Enter a new address" handleSearch={() => {}} />
            <span className="text-center w-full mt-4 text-sm">You don't have any saved addresses.</span>
        </div>
    );
};

export default DeliveryAddress;
