import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "./inputs/SearchBar";
import { Link } from "react-router-dom";

interface IDeliveryAddressProps {
    returnPath: string;
}

const DeliveryAddress = (props: IDeliveryAddressProps) => {
    return (
        <div className="absolute z-50 bg-white w-full h-full rounded-lg px-4">
            <div className="flex items-center justify-center">
                <Link to={props.returnPath} className="left-2 fixed">
                    <AiOutlineClose />
                </Link>
                <span>Delivery Address</span>
            </div>
            <SearchBar placeHolder="Enter a new address" handleSearch={() => {}} />
        </div>
    );
};

export default DeliveryAddress;
